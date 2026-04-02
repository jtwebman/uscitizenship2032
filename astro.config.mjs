// @ts-check

import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
	site: "https://uscitizenship2032.com",
	integrations: [sitemap()],
	adapter: cloudflare({
		imageService: "passthrough",
	}),
	vite: {
		plugins: [tailwindcss()],
	},
});
