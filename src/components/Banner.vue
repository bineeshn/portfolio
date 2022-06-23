<template>
    <v-container fluid >
        <v-layout  id="banner" row justify-center align-center wrap class="mt-1pt-2 full__screen" >
            <v-flex sm6 class="padd-adjust py-10 pr-10">
                <h1 class="pb-1">Hey<span class="hand__wave">&#128075;&#127995;</span>, <br>I'm Bineesh</h1>
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
            <v-flex data-aos="zoom-in-up" data-aos-duration="2000" sm6 class="d-flex flex-column justify-space-between align-center">
                <v-img  class="pt-16" contain  src="../assets/banner-right.png"></v-img>
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
      msgs: ["Web Developer", "UX/UI Designer","UX/UI Developer", "Front end Developer"],
    };
  }
};
</script>

<style  lang="scss">
@use '../scss/common' as *;
h1{
    font-size: 62px;
}
.padd-adjust{
    padding-left: 10%;
}
.hand__wave {
  animation-name: wave-animation; 
  animation-duration: 2.5s;       
  animation-iteration-count: infinite;  
  transform-origin: 70% 70%;      
  display: inline-block;
}
.v-image{
    width: 560px;
    height: 560px;

}
@media screen and (max-width: 865px){
    .v-image{
        width: 360px;
        height: 360px;
    }
}

@keyframes wave-animation {
    0% { transform: rotate( 0.0deg) }
   10% { transform: rotate(14.0deg) } 
   20% { transform: rotate(-8.0deg) }
   30% { transform: rotate(14.0deg) }
   40% { transform: rotate(-4.0deg) }
   50% { transform: rotate(10.0deg) }
   60% { transform: rotate( 0.0deg) }  
  100% { transform: rotate( 0.0deg) }
}
</style>