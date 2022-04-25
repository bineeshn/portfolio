<template>
  <div class="text-center">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      	<path fill="#1976d2" fill-opacity="1" d="M0,224L60,234.7C120,245,240,267,360,261.3C480,256,600,224,720,224C840,224,960,256,1080,256C1200,256,1320,224,1380,208L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
    </svg>
    <v-footer xs12 height="180px" padless  justify-center align-center class="primary text-center pb-16">
		<v-card flat tile  width="100%" class=" primary text-center">
			<v-card-text class="white--text">
				<!---v-btn
          v-for="icon in icons"
          :key="icon.icon"
          class="mx-4 white--text"
          icon
          :href="icon.link"
        >
          <v-icon size="24px">
            {{ icon.icon }}
          </v-icon>
        </v-btn-->
        {{ new Date().getFullYear() }} — <strong>Bineesh N</strong>
			</v-card-text>
			<v-divider></v-divider>
		</v-card>
    </v-footer>
 </div>
   
</template>

<script>
  export default {
	  data: () => ({
      // icons: [
      //   // 'mdi-twitter',
      //   {icon:'mdi-linkedin',
      //     link:'https://www.linkedin.com/in/bineeshn'
      //   },
      //   // 'mdi-instagram',
      // ],
    }),
  }
</script>

<style lang="scss" scoped>
@use '../scss/common' as *;
.v-application{
	footer{
		margin-top:-8px;
		.v-icon{
			&.theme--light{
					color: $white ;
				}
		}
	}
}
</style>