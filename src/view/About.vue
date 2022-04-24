<template>
    <v-layout  id="about" row justify-center align-center wrap class="mt-1 full__screen" >
        <v-flex xs12>
            <h2 class="text-center subtitle ease" data-title="WHO AM I">About Me</h2>
        </v-flex>
        <v-flex md6>
            <v-img content-class="img__style" contain max-width="400" width="400" src="../assets/Bineesh.png"></v-img>
        </v-flex >
        <v-flex md6 class="pa-6">
            <v-layout class="pb-8" row>
                <v-flex xs4>
                    <v-card  elevation="4" height=130>
                        <v-card-text class="d-flex flex-column justify-space-between align-center">
                            <v-icon large>fas fa-award</v-icon>
                            <strong class="primary--text">Experience</strong>
                            3 years
                        </v-card-text>
                    </v-card>
                </v-flex>
                <v-flex xs4>
                    <v-card  elevation="4" height=130>
                        <v-card-text class="d-flex flex-column justify-space-between align-center">
                            <v-icon large>fas fa-tasks</v-icon>
                            <strong  class="primary--text">Completed</strong>
                            10+ Projects
                        </v-card-text>
                    </v-card>
                </v-flex>
                <v-flex xs4>
                    <v-card elevation="4" height=130>
                        <v-card-text class="d-flex flex-column justify-space-between align-center">
                            <v-icon large>fas fa-headset</v-icon>
                            <strong  class="primary--text">Support</strong>
                            Online 24*7
                        </v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
                A Passionate Web Developer who specializes in various Javascript Technologies such as Vue, React. Experienced in developing and designing functional/beautiful interfaces. Currently working to establish myself as a full stack developer.
                <div id="flipContainer">
                    Make 
                    <div id="flip">
                        <div><div>wOrK</div></div>
                        <div><div>lifeStyle</div></div>
                        <div><div>Everything</div></div>
                    </div>
                    AweSoMe!
                </div>
                
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
    #flipContainer {
        color:#999;
        text-transform: uppercase;
        text-align:center;
        font-size:36px;
        font-weight:bold;
        width:100%;
        display:block;
        #flip {
            height:50px;
            overflow:hidden;
            div{
                &:first-child {
                    animation: show 5s linear infinite;
                    div {
                        background:#4ec7f3;
                    }
                }
                &:last-child{ 
                    div {
                        background:#DC143C;
                    }
                }
                div {
                    background:#42c58a;
                    color:#fff;
                    padding:4px 12px;
                    height:45px;
                    margin-bottom:45px;
                    display:inline-block;
                }
            }
        }
    }
    @keyframes show {
        0% {margin-top:-270px;}
        5% {margin-top:-180px;}
        33% {margin-top:-180px;}
        38% {margin-top:-90px;}
        66% {margin-top:-90px;}
        71% {margin-top:0px;}
        99.99% {margin-top:0px;}
        100% {margin-top:-270px;}
    }

</style>