<template>
    <div class="nav__menu">
        <ul class="nav__list">
            <li v-for="item in items" class="nav__item">
                <v-btn depressed small icon :href="item.href"><v-icon>{{item.icon}}</v-icon></v-btn>
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
                    { title: 'Home', icon: 'fas fa-home',href:"#inspire" },
                    { title: 'About', icon: 'far fa-user-circle',href:"#about" },
                    { title: 'Resume', icon: 'far fa-file-alt',href:"#resume"},
                    { title: 'Portfolio', icon: 'mdi-view-dashboard',href:"#services" },
                    { title: 'Contact', icon: 'far fa-comments',href:"#contact" },
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