// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  output: "static", 
  site: 'https://awhub.es',
  integrations: [sitemap()],
  adapter: cloudflare({
    // Desactivamos la detección automática de bindings de bases de datos e imágenes
    imageService: 'passthrough', 
  }), 
});