<template>
	<v-footer xs12 height="140px" padless  justify-center align-center class="accent text-center pb-16 footer-fix">
		<v-card flat tile  width="100%" class="accent text-center">
			<v-card-text class="white--text">
		{{ new Date().getFullYear() }} — <strong>Bineesh N</strong>
			</v-card-text>
		</v-card>
	</v-footer>
</template>

<style lang="scss" scoped>
@use '../scss/common' as *;
.v-application{
	footer{
		margin: 0 -50%;
		.v-icon{
			&.theme--light{
					color: $white ;
				}
		}
	}
}
</style>