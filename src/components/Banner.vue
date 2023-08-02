<template>
    <v-container fluid >
        <v-layout  id="banner" row justify-center align-center wrap class="mt-1pt-2 full__screen" >
            <v-flex sm6 class="d-flex flex-column justify-space-between align-center pa-3">
                <h1 class="pb-1 hero-title">Hey<span class="hand__wave">&#128075;&#127995;</span>, <br>I'm Bineesh</h1>
                <vue-typed-js :strings="msgs" :typeSpeed="150" :backSpeed="60"  :loop="true">
                    <h2>
                        <span class="fixed">I'm a </span> <span class="typing secondary--text"></span>
                    </h2>
                </vue-typed-js>
                <div class="mt-4 sub-text" >
                    <p>Developer under development...!</p>
                </div>
                <div class="mt-4 d-flex justify-space-around" >
                    <a class="text-decoration-none " href="https://www.linkedin.com/in/bineeshn" target="_blank">
                        <v-img  v-bind="attrs" v-on="on" contain  class="large-icon" src="../assets/linkedin.png" alt="linkedin"/>
                    </a>
                    <a class="text-decoration-none" href="https://github.com/bineeshn" target="_blank">
                        <v-img  v-bind="attrs" v-on="on" contain  class="large-icon" src="../assets/github.png" alt="github"/>
                    </a>
                </div>
                <div class="d-flex w-100" >
                    <v-row
                        align="center"
                        justify="center"
                        class="my-5"
                    >
                        <v-btn
                            large
                            color="primary"
                            raised
                            rounded
                            min-width="140px"
                            href="#contact"
                            class="mr-4 button__primary"
                        >
                            Contact Me
                        </v-btn>
                        <v-btn
                            large
                            color="primary"
                            raised
                            rounded
                            min-width="140px"
                            href="https://drive.google.com/uc?export=download&id=1ERGFprsRBIYAggr9FvkdDTJ_z7jglVX7"
                            target="_blank"
                             class="ml-4 button__primary"
                        >
                            Resume
                        </v-btn>
                    </v-row>
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
.hero-title{
    font-size: 75px;
}
// .padd-adjust{
//     padding-left: 10%;
// }
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
.sub-text{
    color: #949494;
    font-weight: 600;
}
@media screen and (max-width: 865px){
    .hero-title{
        font-size: 48px;
    }
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