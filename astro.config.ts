// @ts-check
import { defineConfig, type AstroUserConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

import icon from 'astro-icon';

import starlight from '@astrojs/starlight';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind({
    applyBaseStyles: false
  }), icon(), starlight({
    title: "HyperionUI Kit Docs",
    sidebar: [
      {
        label: "Getting Started",
        autogenerate: {directory: "getting-started"},
      },
    ],
  }), mdx()],
  output: "server"
}) satisfies AstroUserConfig;