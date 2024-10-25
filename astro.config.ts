// @ts-check
import { defineConfig, type AstroUserConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

import icon from 'astro-icon';

import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind({
    applyBaseStyles: false
  }), icon(), starlight({
    title: "HyperionUI Kit Docs",
  })],
  output: "server"
}) satisfies AstroUserConfig;