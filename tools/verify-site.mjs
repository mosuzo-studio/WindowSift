import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
const domain = fs.readFileSync('public/CNAME', 'utf8').trim();
const routes = [
  '',
  'download',
  'faq',
  'guide',
  'guide/shortcuts',
  'guide/troubleshooting',
  'about',
  'contact',
  'changelog',
  'privacy',
  'terms',
];
let pages = 0,
  links = 0,
  images = 0;
for (const prefix of ['', 'zh-cn'])
  for (const route of routes) {
    const current = [prefix, route].filter(Boolean).join('/');
    const html = fs.readFileSync(path.join('dist', current, 'index.html'), 'utf8');
    assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, current + ': single heading');
    assert(html.includes(`<html lang="${prefix ? 'zh-cn' : 'en'}"`), current + ': language');
    assert(html.includes('https://' + domain), current + ': canonical domain');
    assert(html.includes('hreflang="en"') && html.includes('hreflang="zh-cn"'), current + ': alternates');
    assert(html.includes('v3-header') && html.includes('v3-footer'), current + ': shared shell');
    assert(!/TBD_|Lorem ipsum|undefined|snipx\.mosuzo/i.test(html), current + ': no placeholders');
    const head = html.match(/<header[\s\S]*?<\/header>/)?.[0] || '';
    assert.equal((head.match(/class="v3-navlink"/g) || []).length, 3, current + ': shared navigation');
    assert.equal((head.match(/hreflang=/g) || []).length, 0);
    for (const match of html.matchAll(/href="([^"?#]*)(?:\?[^"#]*)?(?:#([^"]+))?"/g)) {
      const [, url, hash] = match;
      if ((url && !url.startsWith('/')) || url.startsWith('//')) continue;
      const target = url ? path.join('dist', decodeURIComponent(url)) : path.join('dist', current, 'index.html');
      const file = path.extname(target) ? target : path.join(target, 'index.html');
      assert(fs.existsSync(file), `${current}: broken link ${match[0]}`);
      if (hash && file.endsWith('.html'))
        assert(
          new RegExp(`id=["']${hash}["']`).test(fs.readFileSync(file, 'utf8')),
          `${current}: missing anchor ${hash}`
        );
      links++;
    }
    for (const match of html.matchAll(/<img[^>]+src="([^"]+)"[^>]*>/g)) {
      assert(/\balt="[^"]*"/.test(match[0]), current + ': image alternative');
      if (match[1].startsWith('/'))
        assert(fs.existsSync(path.join('dist', match[1])), current + ': missing image ' + match[1]);
      images++;
    }
    pages++;
  }
assert.equal(fs.readFileSync('dist/CNAME', 'utf8').trim(), domain);
assert(fs.existsSync('dist/sitemap-index.xml'));
console.log(JSON.stringify({ pages, links, images, domain, result: 'PASS' }));
