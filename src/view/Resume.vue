
<template>
	<v-layout id="resume" row justify-center  wrap class="mt-16 pt-2">
		<v-flex xs12>
			<h2 class="text-center subtitle" data-aos="fade-down" data-aos-duration="1500" data-title="SUMMARY">Resume</h2>
			<ul data-aos="fade-zoom-in" data-aos-duration="1500" class="mx-auto pa-5 text-center">
				<li>- Around 3 years of Web Development experience -</li>
				<li>- Well versed in JavaScript frameworks like Vue Js and React Js -</li>
				<li>- Good knowledge in designing and developing responsive UI -</li>
				<li>- Experienced in Agile methodology and iterative development -</li>
				<li>- Hands on experience with Unit Testing and Code refactoring -</li>
			</ul>

		</v-flex>
		<v-flex data-aos="fade-zoom-in" data-aos-duration="1500" xs12 class="pa-6 d-flex flex-column">
			<v-row>
				<v-flex>
					<v-card>
						<v-tabs>
							<v-tab>Skills</v-tab>
							<v-tab-item>
								<v-card flat class="align-center">
									<v-card-text>
										<v-row>
											<v-col class="d-flex" md4 v-for="(data,index) in datas" :key=index>
												<v-tooltip bottom >
          											<template v-slot:activator="{ on, attrs }">
														<v-img   v-bind="attrs" v-on="on" contain  width="15px" height="55px" :src="data.path" :alt="data.name"></v-img>
												 	</template>
          											<span>{{data.name}}</span>
        										</v-tooltip>
												<!-- <v-progress-circular
													:rotate="360"
													:size="50"
													:width="5"
													:value="data.value"
													color="primary"
													>
													{{ data.value }}
												</v-progress-circular> -->
											</v-col>
										</v-row>
									</v-card-text>
								</v-card>
							</v-tab-item>
						</v-tabs>
					</v-card>
				</v-flex>
			</v-row>			
			<v-row>
				<v-flex md6 data-aos="fade-right" data-aos-duration="1500">
					<v-card>
						<v-tabs>
							<v-tab>Experience</v-tab>
							<v-tab-item>
								<v-card flat class="min-height">
									<v-card-text>
										<v-timeline align-top dense>
											<v-timeline-item color="secondary" small>
												<v-layout pt-3>
													<v-flex xs4>
														<div class="caption font-weight-bold ">APR 2022 -</div>
														<div class="caption font-weight-bold ">PRESENT</div>
													</v-flex>
													<v-flex class="pl-2">
														<strong>QBurst</strong>
														<div class="caption mb-2">Frontend Developer</div>
													</v-flex>
												</v-layout>
											</v-timeline-item>
											<v-timeline-item color="secondary" small>
												<v-layout pt-3>
													<v-flex xs4>
														<div class="caption font-weight-bold ">JUL 2019 -</div>
														<div class="caption font-weight-bold ">APR-2022</div>
													</v-flex>
													<v-flex class="pl-2">
														<strong>Tata Consultancy Services</strong>
														<div class="caption mb-2">Frontend Developer</div>
													</v-flex>
												</v-layout>
											</v-timeline-item>
										</v-timeline>
									</v-card-text>
								</v-card>
							</v-tab-item>
						</v-tabs>
					</v-card>
				</v-flex>
				<v-flex md6 data-aos="fade-left" data-aos-duration="1500">
					<v-card>
						<v-tabs>
							<v-tab>Education</v-tab>
							<v-tab-item>
								<v-card flat>
									<v-card-text>
										<v-timeline align-top dense>
											<v-timeline-item color="secondary" small>
												<v-layout pt-3>
													<v-flex xs4>
														<div class="caption font-weight-bold ">2015 -</div>
														<div class="caption font-weight-bold ">2019</div>
													</v-flex>
													<v-flex class="pl-2">
														<strong>Btech- Computer Science and Engineering</strong>
														<div class="caption mb-2">Govt. Engineering College Idukki</div>
													</v-flex>
												</v-layout>
											</v-timeline-item>
											<v-timeline-item color="secondary" small>
												<v-layout pt-3>
													<v-flex xs4>
														<div class="caption font-weight-bold">2013 -</div>
														<div class="caption font-weight-bold">2015</div>
													</v-flex>
													<v-flex class="pl-2">
														<strong>Plus Two</strong>
														<div class="caption mb-2">GHSS Neeleswaram</div>
													</v-flex>
												</v-layout>
											</v-timeline-item>
											<v-timeline-item color="secondary" small>
												<v-layout pt-3>
													<v-flex xs4>
														<div class="caption font-weight-bold ">2012 -</div>
														<div class="caption font-weight-bold ">2013</div>
													</v-flex>
													<v-flex class="pl-2">
														<strong>SSLC</strong>
														<div class="caption mb-2">PTMHSS Kodiyathur</div>
													</v-flex>
												</v-layout>
											</v-timeline-item>
										</v-timeline>
									</v-card-text>
								</v-card>
							</v-tab-item>
						</v-tabs>
					</v-card>
				</v-flex>
			</v-row>
  		</v-flex>
		<div class="mt-4" >
			<a href="https://drive.google.com/uc?export=download&id=1ERGFprsRBIYAggr9FvkdDTJ_z7jglVX7" class="ml-5 btn button__primary" target="_blank">
				Download Resume
			</a>
		</div>
  	</v-layout>
</template>
<script>
export default {
	data() {
      return {
      	datas: [{name: "Vue.js", value :80, path:require('@/assets/vue.webp')},
		  {name: "ReactJS", value :75, path:require('@/assets/react.png')},
		  {name: "JavaScript", value :80, path:require('@/assets/js1.png')},
		  {name: "TypeScript", value :60, path:require('@/assets/ts.png')},
		  {name: "HTML5", value :90, path:require('@/assets/html1.webp')},
		  {name: "CSS3", value :85, path:require('@/assets/css.webp')},
		  {name: "SASS", value :80, path:require('@/assets/sass.png')},
		],
    };
  }
	
};
</script>
<style lang="scss" scoped>
	@use '../scss/common' as *;
	#resume{
		ul{
			list-style:none;
			li{
				padding-bottom:5px;
			}
		}
		.theme--light{
			.v-tab{
				color:$black;
			}
			
		}
		.theme--dark{
			.v-tab{
				color:$white;
			}
			
		}
		.skill__name{
			padding: 15px;
			font-size: 18px;
		}
		.v-progress-circular{
			margin-bottom: 15px;
		}
	}
	@media screen and (min-width: 1264px){
		.min-height{
			min-height: 315px;
		}
	}
	@media screen and (min-width: 865px) and (max-width: 1263px){
		.min-height{
			min-height: 336px;
		}
	}
	
</style>
