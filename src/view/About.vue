<template>
    <v-layout  id="about" row justify-center align-center wrap class="mt-1" >
        <v-flex xs12>
            <h2 class="text-center subtitle" data-aos="fade-up" data-aos-duration="1500" data-title="WHO AM I">About Me</h2>
        </v-flex>
        <v-flex data-aos="fade-right" data-aos-duration="1500" md6>
            <v-img content-class="img__style" contain max-width="400" width="400" src="../assets/Bineesh.png"></v-img>
        </v-flex >
        <v-flex data-aos="fade-left" data-aos-duration="1500" md6 class="pa-6">
            <v-layout class="pb-8" row>
                <v-flex xs4>
                    <v-card  elevation="4" height=130>
                        <v-card-text class="d-flex flex-column justify-space-between align-center">
                            <v-icon large>fas fa-award</v-icon>
                            <strong class="secondary--text">Experience</strong>
                            3 years
                        </v-card-text>
                    </v-card>
                </v-flex>
                <v-flex xs4>
                    <v-card  elevation="4" height=130>
                        <v-card-text class="d-flex flex-column justify-space-between align-center">
                            <v-icon large>fas fa-tasks</v-icon>
                            <strong  class="secondary--text">Completed</strong>
                            10+ Projects
                        </v-card-text>
                    </v-card>
                </v-flex>
                <v-flex xs4>
                    <v-card elevation="4" height=130>
                        <v-card-text class="d-flex flex-column justify-space-between align-center">
                            <v-icon large>fas fa-headset</v-icon>
                            <strong  class="secondary--text">Support</strong>
                            Online 24*7
                        </v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
                A Passionate Web Developer who specializes in various Javascript Technologies such as Vue, React. Experienced in developing and designing functional/beautiful interfaces. Currently working to establish myself as a full stack developer.
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