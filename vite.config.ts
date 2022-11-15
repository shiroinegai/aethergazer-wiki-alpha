import { defineConfig } from 'vite';
import { qwikVite } from '@builder.io/qwik/optimizer';
import { qwikCity } from '@builder.io/qwik-city/vite';
import tsconfigPaths from 'vite-tsconfig-paths';
// temporarily using wmertens plugin while waiting for native Qwik support
import { vanillaExtractPlugin } from './vanilla-qwik-vite-plugin'
// import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
// process.env.VITE_RSC_BUILD = "true";

export default defineConfig(() => {
  return {
    plugins: [qwikCity(), qwikVite(), tsconfigPaths(), vanillaExtractPlugin()],
    preview: {
      headers: {
        'Cache-Control': 'public, max-age=600',
      },
    },
  };
});
