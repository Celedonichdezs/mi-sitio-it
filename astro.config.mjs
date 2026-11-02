import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://mi-sitio-it.pages.dev',
  vite: {
    plugins: [tailwindcss()],
  },
});
