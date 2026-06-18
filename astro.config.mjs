import { defineConfig } from "astro/config";
import { storyblok } from "@storyblok/astro";
import { loadEnv } from "vite";

const env = loadEnv(import.meta.env.MODE, process.cwd(), "STORYBLOK");
const accessToken = env.STORYBLOK_TOKEN || process.env.STORYBLOK_TOKEN;

export default defineConfig({
  integrations: [
    storyblok({
      accessToken,
      components: {
        page: "storyblok/Page",
        hero: "storyblok/Hero",
        news_post: "storyblok/NewsPost",
      },
      apiOptions: { region: "eu" },
    }),
  ],
});
