<template>
    <footer class='flex md:justify-between border-top text-menu-text font-fira_retina'>

        <!-- social icons -->
        <div class="w-full flex justify-between md:justify-start">
            <span id="social-title" class="h-full flex justify-center items-center border-right px-5">
                find me in:
            </span>
            <div id="social-icons" class="flex">
                <NuxtLink :to="social.juejin.url" target="_blank" class="flex justify-center items-center">
                    <img :src="social.juejin.icon" />
                </NuxtLink>
                <NuxtLink :to="social.github.url + social.github.user" target="_blank"
                          class="flex md:hidden justify-center items-center">
                    <img src="/icons/social/github.svg" />
                </NuxtLink>
            </div>
        </div>

        <!-- github user -->
        <NuxtLink :to="social.github.url + social.github.user" target="_blank"
                  class="hidden md:flex items-center px-5 border-left">
            @{{ social.github.user }}
            <img src="/icons/social/github.svg" />
        </NuxtLink>

    </footer>
    <div class="absolute bottom-2 text-menu-text w-full text-xs leading-3 flex items-center justify-center">
        <img src="/images/gongan.png" alt="" class=" inline-block w-3 h-3">
        <a class="  ml-1" href="https://beian.mps.gov.cn/#/query/webSearch?code=11010502054628" rel="noreferrer"
           target="_blank">京公网安备11010502054628</a>
        <a class=" ml-2" href="https://beian.miit.gov.cn/" target="_blank">京ICP备2024042617号-1</a>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted } from 'vue';

export default defineComponent({
    name: 'AppFooter',
    setup() {
        const runtimeConfig = useRuntimeConfig();
        const config = runtimeConfig.public.config;
        const social = reactive(config.contacts.social); // Replace with your social links data

        onMounted(() => {
            // Any onMounted logic here
        });

        return {
            social
        }
    },
});
</script>
<style>
footer {
    height: 40px;
    min-height: 40px;
    font-size: 13px;
}

footer a:hover {
    background-color: #1e2d3d74;
}

#social-icons>a {
    border-right: 1px solid #1E2D3D;
    height: 100%;
    width: 50px;
}

#social-icons>a>img {
    width: 1.25rem;
    /* 20px */
    height: 1.25rem;
    /* 20px */
    margin: auto;
    opacity: 0.4;
}

footer>a>img {
    width: 1.25rem;
    /* 20px */
    height: 1.25rem;
    /* 20px */
    margin-left: 0.5rem;
    /* 8px */
}

#social-icons>a:hover img {
    opacity: 1;
}

@media (max-width: 768px) {

    #social-title {
        border-right: none;
    }

    #social-icons>a {
        border-right: none;
        border-left: 1px solid #1E2D3D;
    }

    #social-icons>a>img {
        width: 1.5rem;
        /* 20px */
        height: 1.5rem;
        /* 20px */
    }
}
</style>