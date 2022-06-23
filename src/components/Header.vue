<template>
  <div>
    <v-toolbar flat dense color="transparent" class="mx-auto px-7">
        <v-toolbar-title class="headline">
            <span class="font-weight-bold primary--text">Bineesh</span>
            <span>N</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn @click="changeTheme" depressed small icon>
                <v-icon v-if="goDark == true" class="yellow--text">fas fa-sun</v-icon>
                <v-icon v-else class="blue-grey--text text--darken-4">fas fa-moon</v-icon>
            </v-btn>
        </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
import Nav from "./Nav";
export default {
  props: {
    goDark: {
      type: Boolean,
    },
  },
  components: {
    Nav,
  },
  data() {
    return {
      drawer: null,
      items: [
        { title: "About", icon: "mdi-view-dashboard", href: "#about" },
        { title: "Resume", icon: "mdi-account-box", href: "#resume" },
        { title: "Services", icon: "mdi-gavel", href: "#services" },
        { title: "Portfolio", icon: "mdi-view-dashboard", href: "#about" },
        { title: "Blog", icon: "mdi-account-box", href: "#about" },
        { title: "Contact", icon: "mdi-gavel", href: "#Contact" },
      ],
    };
  },
  methods: {
    changeTheme() {
      this.$emit("changeTheme", this.goDark);
    },
  },
};
</script>

<style></style>
