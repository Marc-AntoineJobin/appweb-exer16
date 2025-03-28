import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Exercice 16",
  description: "Par Marc-Antoine Jobin et Samuel Croteau",
  base: '/appweb-exer16/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Marc-Antoine Jobin', link: '/Marc-Antoine-Jobin1' },
          { text: 'Samuel Croteau', link: '/Samuel-Croteau1' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Marc-Antoine Jobin', link: '/Marc-Antoine-Jobin1' },
          { text: 'Samuel Croteau', link: '/Samuel-Croteau1' }
        ]
      }
    ]
  }
})
