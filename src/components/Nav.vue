<template>
    <div class="nav__menu">
        <ul class="nav__list">
            <li v-for="item in items" class="nav__item" :key ="item.title">
                <v-btn depressed small icon :href="item.href">
                    <v-img  v-bind="attrs"  contain  class="large-icon" :src="item.path"/>
                </v-btn>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: {
            goDark: {
                type: Boolean
            }
        },
        data() {
            return {
                items: [
                    { title: 'Home', path:require('../assets/home.png'), href:"#inspire" },
                    { title: 'About', path:require('../assets/hero.png'), href:"#about" },
                    { title: 'Resume', path:require('../assets/resume.png'), href:"#resume"},
                    { title: 'Portfolio', path:require('../assets/workstation.png'), href:"#services" },
                    { title: 'Contact', path:require('../assets/chat.png'), href:"#contact" },
                ],
            };
        }
    };
</script>

<style  lang="scss">
@use '../scss/common' as *;
.nav__menu{
    position:fixed;
    bottom:1rem;
    width:90%;
    left: 5%;
    border-radius:4rem;
    padding: 1rem 2.25rem;
    backdrop-filter:blur(100px);
    z-index:5;
}
.v-application ul.nav__list{
    list-style: none;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding-left:0;
}
</style>