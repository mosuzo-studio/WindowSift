import { getRelativeLocaleUrl } from 'astro:i18n';
export const languages = { en: 'English', 'zh-cn': '简体中文' };
export type Lang = keyof typeof languages;
export const defaultLang = 'en';
export function localizedPagePath(lang: Lang, path = '/') {
  if (/^(https?:|mailto:|#)/.test(path)) return path;
  const [pathname, hash] = path.split('#');
  const url = getRelativeLocaleUrl(lang, pathname).replace(/\/$/, '') || '/';
  return hash ? url + '#' + hash : url;
}
export function switchLocalePath(url: URL, lang: Lang) {
  return localizedPagePath(lang, url.pathname.replace(/^\/zh-cn(?=\/|$)/, '') || '/');
}
