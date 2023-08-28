// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path"
export default defineNuxtConfig({
  devtools: { enabled: true },
  
  alias:{
    "@":resolve(__dirname,"/")
  },
  css:[
    "~/assets/css/normalize.css",
    "~/assets/css/main.css",
    "~/assets/css/bootstrap.min.css",
    "~/assets/css/fontawesome-all.min.css",
    "~/assets/css/animate.min.css",
    "~/assets/css/magnific-popup.css",
    "~/assets/css/select2.min.css",
    "~/assets/css/meanmenu.min.css",
    "~/assets/css/additional.css",
    "~/assets/css/style.css",
    
   
  ],
  ssr: false


})
