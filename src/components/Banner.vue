<template>
    <v-container fluid class="full__screen">
        <v-layout  id="banner" row justify-center align-center wrap class="mt-1pt-2" >
            <v-flex md6 class="padd-adjust py-10 pr-10">
                <h1 class="display-1 pb-1">Hey<span class="hand__shake">&#128075;&#127995;</span>, I'm Bineesh</h1>
                <vue-typed-js :strings="msgs" :typeSpeed="150" :backSpeed="60"  :loop="true">
                    <h2>
                        <span class="fixed">I'm a </span> <span class="typing primary--text"></span>
                    </h2>
                </vue-typed-js>
                <div class="mt-4" >
                    <p>Developer under development...!</p>
                </div>
                <div class="mt-4" >
                    <a class="text-decoration-none" href="https://www.linkedin.com/in/bineeshn" target="_blank"><v-icon large>fab fa-linkedin</v-icon></a>
                    <a class="pl-4 text-decoration-none" href="https://github.com/bineeshn" target="_blank"><v-icon large>fab fa-github-square</v-icon></a>
                </div>
                <div class="mt-4" >
                    <a href="#contact" class="btn button__primary">
                        Contact Me
                    </a>
                    <a href="https://drive.google.com/uc?export=download&id=1ERGFprsRBIYAggr9FvkdDTJ_z7jglVX7" class="ml-5 btn button__primary" target="_blank">
                        Resume
                    </a>
                </div>
            </v-flex >
            <v-flex md6 class="d-flex flex-column justify-space-between align-center">
                <v-img  class="pt-16" contain max-width="350" width="350" src="../assets/banner-right.png"></v-img>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
  props: {
  },
  data() {
      return {
      msgs: ["Web Developer", "UX/UI Developer", "Frontend Developer"],
    };
  }
};
</script>

<style  lang="scss">
@use '../scss/common' as *;
.padd-adjust{
    padding-left: 10%;
}
.hand__shake:hover{
    display: inline-block;
    animation: wave 2.25s ease-in-out infinite;
    transform-origin: 70% 70%;
}
</style>