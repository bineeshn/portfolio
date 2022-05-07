<template>
  <v-app id="inspire" :dark="goDark">
    <v-main >
        <Header :goDark="goDark" @changeTheme="updateTheme($event)"/>
        <Banner/>
        <v-container align-center>
            <About/>
            <Resume/>
            <Services/>
            <Contact/>
            <Nav />
        </v-container>
        <Footer/>
    </v-main>
    <v-overlay
      :opacity="1"
      :value="overlay"
    >
      <v-progress-circular :size="70"
      :width="7"
      color="primary"
      indeterminate>
      </v-progress-circular>
      
    </v-overlay>
  </v-app>
</template>

<script>
import Header from './components/Header';
import Nav from './components/Nav';
import Banner from './components/Banner';
import About from './view/About';
import Services from './view/Services';
import Resume from './view/Resume';
import Contact from './view/Contact';
import Footer from './components/Footer';

export default {
    name: 'App',

    components: {
        Header,
        Nav,
        Banner,
        About,
        Services,
        Resume,
        Contact,
        Footer
    },
    data() {
        return { 
            goDark: true,
            overlay:true 
        };
    },
    methods: {
        updateTheme(updatedTheme) {
        this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
        this.goDark = !updatedTheme;
        }
    },
    mounted() {
        setTimeout(() => {
            this.overlay = false;
        }, 500);
    }, 
};
</script>
<style>
</style>
