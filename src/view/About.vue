<template>
    <v-layout  id="about" row justify-center align-center wrap class="mt-1" >
        <v-flex xs12>
            <h2 class="text-center subtitle" data-aos="fade-up" data-aos-duration="1500" data-title="WHO AM I">About Me</h2>
        </v-flex>
        <v-flex data-aos="fade-right" data-aos-duration="1500" sm6>
            <v-img content-class="img__style" contain width="400" src="../assets/Bineesh.png"></v-img>
        </v-flex >
        <v-flex data-aos="fade-left" data-aos-duration="1500" sm6 class="pa-6 text-center">
            <v-layout class="pb-8" row>
                <v-flex xs6>
                    <v-card  elevation="4" height=130>
                        <v-card-text class="d-flex flex-column justify-space-between align-center text-center">
                            <v-img  v-bind="attrs"  contain  class="medium-icon" src="../assets/prize.png"/>
                            <strong class="secondary--text">Experience</strong>
                            4+ years
                        </v-card-text>
                    </v-card>
                </v-flex>
                <v-flex xs6>
                    <v-card  elevation="4" height=130>
                        <v-card-text class="d-flex flex-column justify-space-between align-center text-center">
                            <v-img  v-bind="attrs"  contain  class="medium-icon" src="../assets/passed.png"/>
                            <strong  class="secondary--text">Completed</strong>
                            10+ Projects
                        </v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
                A Passionate Web Developer who specializes in various Javascript Technologies such as Vue.js, ReactJS and Next.js. Experienced in developing and designing functional/beautiful interfaces. Currently working to establish myself as a full stack developer.
        </v-flex>
    </v-layout>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
    @use '../scss/common' as *;
</style>