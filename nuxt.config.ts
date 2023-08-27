// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path"
export default defineNuxtConfig({
  devtools: { enabled: true },
  
  alias:{
    "@":resolve(__dirname,"/")
  },
  css:[
    "~/assets/css/bootstrap.min.css",
    "~/assets/css/main.css",
   
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  ssr: false


})
