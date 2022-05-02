import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: 'https://snazzy-conkies-d2e682.netlify.app',
  integrations: [tailwind(), svelte(), sitemap()]
});