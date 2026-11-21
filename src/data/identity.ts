interface Identity {
  name: string;
  slug: string;
  domain: string;
  repo: string;
  released: boolean;
  version: string;
  download: string | null;
  /** Portable archive for the released version; null before a release. */
  portable: string | null;
  /** SHA256SUMS.txt published alongside the packages. */
  checksums: string | null;
  /** Release page for the published tag. */
  releaseNotes: string | null;
  /** Installer file name, as attached to the release. */
  setupFile: string | null;
  /** Portable archive file name, as attached to the release. */
  portableFile: string | null;
}
const VERSION = '8.0.0';
const TAG = `v${VERSION}`;
const REPO = 'https://github.com/mosuzo-studio/WindowSift';
const SETUP_FILE = `WindowSift-${VERSION}-windows-x64-setup.exe`;
const PORTABLE_FILE = `WindowSift-${VERSION}-windows-x64-portable.7z`;
const ASSET = (file: string) => `${REPO}/releases/download/${TAG}/${file}`;

export const identity: Identity = {
  name: 'WindowSift',
  slug: 'windowsift',
  domain: 'https://windowsift.mosuzo.com',
  repo: REPO,
  released: true,
  version: VERSION,
  download: ASSET(SETUP_FILE),
  portable: ASSET(PORTABLE_FILE),
  checksums: ASSET('SHA256SUMS.txt'),
  releaseNotes: `${REPO}/releases/tag/${TAG}`,
  setupFile: SETUP_FILE,
  portableFile: PORTABLE_FILE,
};
