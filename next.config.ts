import type { NextConfig } from 'next'

/**
 * Two lines of bundler config, both saying the same thing: this is the WEB build.
 *
 * @hanzo/ui draws through @hanzo/gui, which is one component surface over web and
 * native, so parts of it reach for React Native by name. On web that name has to
 * mean `react-native-web`, or the bundler reads the native package's Flow source
 * and stops at the first `import typeof`.
 *
 * The extension list is the other half. Packages in this family ship their web
 * implementation as `Foo.web.js` beside the native `Foo.js` and expect the
 * bundler to prefer it — Metro does by default, webpack and turbopack have to be
 * told. Without it `react-native-svg` resolves to its Fabric bindings and asks
 * for `codegenNativeComponent`, which exists only inside the native runtime.
 *
 * Both bundlers are configured because `dev` runs turbopack and `build` runs
 * webpack. An alias only one of them knows is a difference between what you
 * develop against and what you ship.
 */
const alias = {
  'react-native': 'react-native-web',
  // react-native-svg's web build asks React Native for the asset registry. On
  // web that registry IS react-native-web's, same two functions, so it is
  // pointed there rather than pulling the native package's copy in beside it.
  '@react-native/assets-registry/registry': 'react-native-web/dist/modules/AssetRegistry',
}
const web = ['.web.tsx', '.web.ts', '.web.jsx', '.web.js']
const extensions = [...web, '.tsx', '.ts', '.jsx', '.js', '.mjs', '.json']

const nextConfig: NextConfig = {
  output: 'export',
  reactStrictMode: true,
  turbopack: { resolveAlias: alias, resolveExtensions: extensions },
  webpack: (config) => {
    config.resolve.alias = { ...config.resolve.alias, ...alias }
    config.resolve.extensions = [...web, ...config.resolve.extensions]
    return config
  },
}

export default nextConfig
