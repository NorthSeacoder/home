<template>
  <header id="navbar" class="w-full hidden lg:flex flex-col">
    <nav class="w-full flex justify-between h-11 text-13px border-b border-ocean">

      <div class="flex">
        <NuxtLink id="nav-logo" to="/"
                  class="text-menu-text font-fira_retina px-6 h-full flex items-center border-r border-ocean">
          {{ config.logo_name }}
        </NuxtLink>

        <NuxtLink id="nav-link" to="/" :class="navLinkClass('/')">
          _hello
        </NuxtLink>

        <NuxtLink id="nav-link" to="/about-me" :class="navLinkClass('/about-me')">
          _about-me
        </NuxtLink>

        <NuxtLink id="nav-link" to="/projects" :class="navLinkClass('/projects')">
          _projects
        </NuxtLink>
      </div>

      <NuxtLink id="nav-link-contact" to="/contact-me" :class="navLinkClass('/contact-me')">
        _contact-me
      </NuxtLink>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue';
// const config = useRuntimeConfig();
const  runtimeConfig  = useRuntimeConfig();
const config = runtimeConfig.public.config;
const isActive = (route: any) => route === config.logo_name;
const navLinkClass = computed(() => (route: string) => ({
  'text-menu-text font-fira_retina px-6 h-full flex items-center border-ocean': true,
  'border-r': route !== '/contact-me',
  'border-l': route === '/contact-me',
  'hover:bg-bg hover:text-white': true,
  'router-link-active': isActive(route),
}));

</script>

<style>
#nav-link.router-link-active,
#nav-link-contact.router-link-active {
  border-bottom: 2px solid #FEA55F;
  color: white;
}

#nav-logo.router-link-active {
  border-right: 1px solid #1E2D3D;
  border-bottom: none;
  @apply text-menu-text;
}
</style>
