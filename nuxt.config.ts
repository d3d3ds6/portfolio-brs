export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/apollo",
    "@nuxtjs/turnstile",
  ],
  // plugins: [
  //   { src: '~/plugins/primevue.ts', mode: 'client' }
  // ],
  nitro: {
    prerender: {
      autoSubfolderIndex: false,
    },
  },
  turnstile: {
    siteKey: "0x4AAAAAAAUBxBNAPgRBo5hj",
  },
  apollo: {
    clients: {
      default: {
        httpEndpoint: "https://cms.mihai.ltd/graphql",
      },
    },
  },
  app: {
    head: {
      title: "Brinis Abderahmen - Portfolio Website",
      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          hid: "description",
          name: "description",
          content: "Brinis Abderahmen portfolio website",
        },
        {
          name: "keywords",
          content: "portfolio, website, dev, developer, programmer",
        },
      ],
    },
  }, vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "primeicons/primeicons.css";
          `,
        },
        resolve: {
          alias: {
            'primevue': 'node_modules/primevue',
          },
        },
      },
    },
  },
  css: [
    "@/assets/index.css",
    "primeicons/primeicons.css",
  ],
});
