import { OpenAPIRouter } from "@cloudflare/itty-router-openapi";
import { GetSearch } from "./search";

export const router = OpenAPIRouter({
  schema: {
    info: {
      title: "Juejin Article API",
      description: "A plugin that allows the user to search for articles on Juejin.cn using ChatGPT",
      version: "v0.0.1"
    }
  },
  docs_url: "/",
  aiPlugin: {
    name_for_human: "Juejin Article Search Unofficial Plugin",
    name_for_model: "juejin_article_search",
    description_for_human: "Juejin Article Search plugin for ChatGPT.",
    description_for_model: "Juejin Article Search plugin for ChatGPT. You can search for articles on Juejin.cn using this plugin.",
    contact_email: "support@example.com",
    legal_info_url: "http://www.example.com/legal",
    logo_url: "https://workers.cloudflare.com/resources/logo/logo.svg"
  }
})

router.get('/search', GetSearch)

// 404 for everything else
router.all('*', () => new Response('Not Found.', { status: 404 }))

export default {
  fetch: router.handle
}
