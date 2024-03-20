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
      id:"b0dc77f2-948d-40d6-a30d-8dc5716a644a",
      ignoreLocalhost:true,
      useDirective:true
    }
  })