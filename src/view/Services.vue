<template>
    <v-layout id="services" row justify-center wrap class="mt-16 pt-2">
        <v-flex xs12>
            <h2 class="text-center subtitle" data-aos="fade-down" data-aos-duration="1500" data-title="WHAT I DO">Services</h2>
        </v-flex>
        <v-flex xs12 class="pa-6">
			<v-layout row>
				<v-flex data-aos="flip-up" data-aos-duration="1500" sm4 class="pa-5">
					<v-card class="mx-auto pa-5 text-center" outlined>
						<v-card-text>
							<div class="mb-3">
								<v-icon x-large>fab fa-figma</v-icon>
							</div>
							<h3 class="secondary--text">Web Design</h3>
							<div>
								<p>Design and build stylish, clean and creative websites that are highly usable using Figma and Adobe Photoshop.</p>
							</div>
						</v-card-text>
					</v-card>
				</v-flex>
				<v-flex data-aos="flip-up" data-aos-duration="1500" sm4 class="pa-5">
					<v-card class="mx-auto pa-5 text-center" outlined>
						<v-card-text>
							<div class="mb-3">
								<v-icon x-large>fas fa-laptop-code</v-icon>
							</div>
							<h3 class="secondary--text">Web Development</h3>
							<div>
								<p>Design and build stylish, clean and creative websites that are highly usable using html,css and javaScript. I build single page applications using Vue JS and React JS.</p>
							</div>
						</v-card-text>
					</v-card>
				</v-flex>
				<v-flex data-aos="flip-up" data-aos-duration="1500" sm4 class="pa-5">
					<v-card class="mx-auto pa-5 text-center" outlined>
						<v-card-text>
							<div class="mb-3">
								<v-icon x-large>fas fa-check-double</v-icon>
							</div>
							<h3 class="secondary--text">UI Testing</h3>
							<div>
								<p>Is the process of manuall UI testing is for finding UI defects. It requires a tester to play the role of an end user where by they use most of the application's features to ensure correct behaviour.</p>
							</div>
						</v-card-text>
					</v-card>
				</v-flex>
			</v-layout>
        </v-flex>
    </v-layout>
</template>

<script>
export default {
  data() {
    return {
    };
  }
};
</script>
<style lang="scss" scoped>
	@media screen and (min-width: 865px){
		.v-card{
			min-height: 275px;
		}
	}
</style>

