/*
* Nuxt 3 Config File
* https://nuxt.com/docs/getting-started/configuration#app-configuration
*/
export default defineAppConfig({
    title: 'Hello Nuxt',
    blog:{
      enabled: true,
    },
    theme: {
      dark: true,
      colors: {
        primary: '#ff0000'
      }
    },
    umami:{
      host:"https://umami.mengpeng.tech",
      id:"308d6ec4-a81e-4e87-bfc3-a90e85189cb7",
      ignoreLocalhost:true,
      version: 2,
      useDirective:true
    }
  })