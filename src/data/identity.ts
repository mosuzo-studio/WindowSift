interface Identity {
  name: string;
  slug: string;
  domain: string;
  repo: string;
  released: boolean;
  version: string;
  download: string | null;
}
export const identity: Identity = {
  name: 'WindowSift',
  slug: 'windowsift',
  domain: 'https://windowsift.mosuzo.com',
  repo: 'https://github.com/mosuzo-studio/WindowSift',
  released: false,
  version: '7.20.9',
  download: null,
};
