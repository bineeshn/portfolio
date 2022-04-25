<template>
    <v-layout id="services" row justify-center wrap class="mt-16 pt-2">
        <v-flex xs12>
            <h2 class="text-center subtitle" data-aos="fade-down" data-aos-duration="1500" data-title="WHAT I DO">Services</h2>
        </v-flex>
        <v-flex xs12 class="pa-6">
			<v-layout row>
				<v-flex data-aos="flip-up" data-aos-duration="1500" md4 class="pa-5">
					<v-card class="mx-auto pa-5 text-center" outlined>
						<v-card-text>
							<div class="mb-3">
								<v-icon x-large>fab fa-figma</v-icon>
							</div>
							<h3 class="secondary--text">Web Design</h3>
							<div>
								<p>I design and build stylish, clean and creative webistes that are highly usable using Figma and Adobe Photoshop.</p>
							</div>
							<!--v-dialog transition="dialog-bottom-transition" max-width="600">
								<template v-slot:activator="{ on, attrs }">
									<v-btn color="primary" v-bind="attrs" v-on="on">
										Read More
									</v-btn>
								</template>
								<template v-slot:default="dialog">
									<v-card  class="pa-5">
										<v-card-text>
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Erat velit scelerisque in dictum non consectetur a erat nam. Enim diam vulputate ut pharetra sit amet aliquam.</p>
										</v-card-text>
										<v-card-actions class="justify-end">
											<v-btn text @click="dialog.value = false">
												Close
											</v-btn>
										</v-card-actions>
									</v-card>
								</template>
							</v-dialog-->
						</v-card-text>
					</v-card>
				</v-flex>
				<v-flex data-aos="flip-up" data-aos-duration="1500" md4 class="pa-5">
					<v-card class="mx-auto pa-5 text-center" outlined>
						<v-card-text>
							<div class="mb-3">
								<v-icon x-large>fas fa-laptop-code</v-icon>
							</div>
							<h3 class="secondary--text">Web Development</h3>
							<div>
								<p>I design and build stylish, clean and creative webistes that are highly usable using html,css and javaScript. I build single page applications using Vue JS and React JS.</p>
							</div>
							<!--v-dialog transition="dialog-bottom-transition" max-width="600">
								<template v-slot:activator="{ on, attrs }">
									<v-btn color="primary" v-bind="attrs" v-on="on">
										Read More
									</v-btn>
								</template>
								<template v-slot:default="dialog">
									<v-card  class="pa-5">
										<v-card-text>
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Erat velit scelerisque in dictum non consectetur a erat nam. Enim diam vulputate ut pharetra sit amet aliquam.</p>
										</v-card-text>
										<v-card-actions class="justify-end">
											<v-btn text @click="dialog.value = false">
												Close
											</v-btn>
										</v-card-actions>
									</v-card>
								</template>
							</v-dialog-->
						</v-card-text>
					</v-card>
				</v-flex>
				<!--v-flex data-aos="flip-up" data-aos-duration="1500" md4 class="pa-5">
					<v-card class="mx-auto pa-5 text-center" outlined>
						<v-card-text>
							<div class="mb-3">
								<v-icon x-large>fab fa-android</v-icon>
							</div>
							<h3 class="secondary--text">App Development</h3>
							<div>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Erat velit scelerisque in dictum non consectetur a erat nam. Enim diam vulputate ut pharetra sit amet aliquam.</p>
							</div>
							<v-dialog transition="dialog-bottom-transition" max-width="600">
								<template v-slot:activator="{ on, attrs }">
									<v-btn color="primary" v-bind="attrs" v-on="on">
										Read More
									</v-btn>
								</template>
								<template v-slot:default="dialog">
									<v-card  class="pa-5">
										<v-card-text>
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Erat velit scelerisque in dictum non consectetur a erat nam. Enim diam vulputate ut pharetra sit amet aliquam.</p>
										</v-card-text>
										<v-card-actions class="justify-end">
											<v-btn text @click="dialog.value = false">
												Close
											</v-btn>
										</v-card-actions>
									</v-card>
								</template>
							</v-dialog>
						</v-card-text>
					</v-card>
				</v-flex-->
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
<style >
</style>

