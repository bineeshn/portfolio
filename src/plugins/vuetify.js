import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      light: {
        primary: colors.blue.darken2,
        secondary: '#d84a4a',
        tertiary: colors.lime.lighten1,
        accent: colors.shades.black,
        error: colors.red.accent3,
      },
      dark: {
        primary: colors.blue.darken2,
        secondary:'#d84a4a',
        tertiary: colors.lime.lighten1,
        yellow: colors.amber.accent4,
      },
    },
  }
  })