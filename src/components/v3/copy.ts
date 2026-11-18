export function getV3Copy(lang: 'en' | 'zh-cn') {
  const zh = lang === 'zh-cn';
  return {
    nav: {
      features: zh ? '功能' : 'Features',
      cta: zh ? '下载' : 'Download',
      language: zh ? '选择语言' : 'Choose language',
      menu: zh ? '打开菜单' : 'Open menu',
      versions: zh ? '版本' : 'Versions',
      changelog: zh ? '更新日志' : 'Changelog',
      faq: zh ? '帮助' : 'Help',
      about: zh ? '关于' : 'About',
    },
    footer: {
      blurb: '',
      cols: [],
      rights: '© 2026 Mosuzo Studio',
      system: 'Windows · Mosuzo Studio',
      legal: [
        { path: '/privacy', text: zh ? '隐私说明' : 'Privacy' },
        { path: '/terms', text: zh ? '使用条款' : 'Terms' },
      ],
    },
  };
}
