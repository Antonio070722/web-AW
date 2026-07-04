// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import cloudflare from '@astrojs/cloudflare'; // 1. Importamos el nuevo adaptador

// https://astro.build/config
export default defineConfig({
  output: "static", // Mantenemos tu salida estática actual
  site: 'https://awhub.es',
  integrations: [sitemap()],
  adapter: cloudflare(), // 2. Añadimos el adaptador de Cloudflare aquí
});