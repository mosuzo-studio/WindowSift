# WindowSift

Official English and Simplified Chinese website for WindowSift, a Mosuzo Studio tool that traces a window to its process and shows the window tree, properties and transient pop-ups.

- English: https://windowsift.mosuzo.com/
- 简体中文: https://windowsift.mosuzo.com/zh-cn/
- Studio: https://mosuzo.com/ · All products: https://mosuzo.com/products/
- GitHub: https://github.com/mosuzo-studio/WindowSift

**English** · [简体中文](README.zh-CN.md)

Standalone release pending. No public standalone download is linked until a release is verified.

## Development

Node.js >=22.12.0. Run `npm ci`, then `npm run dev`. Before publishing: `npm run check`, `npm run build`, `npm run verify`.

The site keeps the shared v3 header/footer, Astro static output, locale-aware navigation and GitHub Pages workflow from SnipArc-site. See `docs/terminology.md` for product evidence, screenshot boundaries and public release status. See `docs/DEPLOYMENT.md` for Pages and custom-domain setup.

## Related tools

- [Shotera](https://github.com/mosuzo-studio/Shotera/releases) — screenshot, scrolling capture and screen recording.
- [SnipArc](https://sniparc.mosuzo.com/) — screenshot and annotation for everyday communication.
- [ImagePerch](https://imageperch.mosuzo.com/) — browse, trim and edit long images.
- [KeySplera](https://keysplera.mosuzo.com/) — show keys and clicks on screen.
