import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      light: {
        primary: '#1E90FF',
        secondary: '#018786',
        tertiary: colors.lime.lighten1,
        accent: colors.grey.darken4,
        error: colors.red.accent3,
      },
      dark: {
        primary: '#1E90FF',
        secondary:'#018786',
        tertiary: colors.lime.lighten1,
        accent: colors.grey.darken4,
        yellow: colors.amber.accent4,
      },
    },
  }
  })