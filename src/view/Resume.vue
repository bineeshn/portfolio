
<template>
	<v-layout id="resume" row justify-center  wrap class="mt-16 pt-2 full__screen">
		<v-flex xs12>
			<h2 class="text-center subtitle" data-title="SUMMARY">Resume</h2>
			<ul class="mx-auto pa-5 text-center">
				<li>- Around 3 years of Web Development experience -</li>
				<li>- Well versed in JavaScript frameworks like Vue Js and React Js -</li>
				<li>- Good knowledge in designing and developing responsive UI -</li>
				<li>- Experienced in Agile methodology and iterative development -</li>
				<li>- Hands on experience with Unit Testing and Code refactoring -</li>
			</ul>

		</v-flex>
		<v-flex xs12 class="pa-6 d-flex flex-column">
			<v-carousel
				cycle
				height="400"
				hide-delimiter-background
				show-arrows-on-hover
				
			>
				<v-carousel-item key=1>
					<h2 class=" mb-3 primary--text">Skills</h2>
					<v-layout>
						<v-flex xs6 pa-2 >
							<p>Vue JS</p>
							<p>React JS</p>
							<p>HTML</p>
							<p>JavaScript</p>
							<p>JQuery</p>
						</v-flex>
						<v-flex xs6 pa-2>
							<p>CSS</p>
							<p>SASS</p>
							<p>Bootstrap</p>
							<p>Photoshop</p>
							<p>Figma</p>
						</v-flex>
					</v-layout>
				</v-carousel-item>
				<v-carousel-item key=2>
					<h2 class=" mb-3 primary--text">Experience</h2>
					<v-timeline align-top dense>
						<v-timeline-item color="primary" small>
							<v-layout pt-3>
								<v-flex xs4>
									<div class="caption font-weight-bold primary--text">APR 2022 -</div>
									<div class="caption font-weight-bold primary--text">PRESENT</div>
								</v-flex>
								<v-flex class="pl-2">
									<strong>QBurst</strong>
									<div class="caption mb-2">Frontend Developer</div>
								</v-flex>
							</v-layout>
						</v-timeline-item>
						<v-timeline-item color="primary" small>
							<v-layout pt-3>
								<v-flex xs4>
									<div class="caption font-weight-bold primary--text">JUL 2019 -</div>
									<div class="caption font-weight-bold primary--text">APR-2022</div>
								</v-flex>
								<v-flex class="pl-2">
									<strong>Tata Consultancy Services</strong>
									<div class="caption mb-2">Frontend Developer</div>
								</v-flex>
							</v-layout>
						</v-timeline-item>
					</v-timeline>
				</v-carousel-item>
				<v-carousel-item key=3>
					<h2 class=" mb-3 primary--text">Education</h2>
					<v-timeline align-top dense>
						<v-timeline-item color="primary" small>
							<v-layout pt-3>
								<v-flex xs4>
									<div class="caption font-weight-bold primary--text">2015 -</div>
									<div class="caption font-weight-bold primary--text">2019</div>
								</v-flex>
								<v-flex class="pl-2">
									<strong>Btech- Computer Science and Engineering</strong>
									<div class="caption mb-2">Govt. Engineering College Idukki</div>
								</v-flex>
							</v-layout>
						</v-timeline-item>
						<v-timeline-item color="primary" small>
							<v-layout pt-3>
								<v-flex xs4>
									<div class="caption font-weight-bold primary--text">2013 -</div>
									<div class="caption font-weight-bold primary--text">2015</div>
								</v-flex>
								<v-flex class="pl-2">
									<strong>Plus Two</strong>
									<div class="caption mb-2">GHSS Neeleswaram</div>
								</v-flex>
							</v-layout>
						</v-timeline-item>
						<v-timeline-item color="primary" small>
							<v-layout pt-3>
								<v-flex xs4>
									<div class="caption font-weight-bold primary--text">2012 -</div>
									<div class="caption font-weight-bold primary--text">2013</div>
								</v-flex>
								<v-flex class="pl-2">
									<strong>SSLC</strong>
									<div class="caption mb-2">PTMHSS Kodiyathur</div>
								</v-flex>
							</v-layout>
						</v-timeline-item>
					</v-timeline>
				</v-carousel-item>
			</v-carousel>
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
	
};
</script>
<style lang="scss">
	@use '../scss/common' as *;
	#resume{
		ul{
			list-style:none;
			li{
				padding-bottom:5px;
			}
		}
		.v-tabs{
			.v-tabs-slider{
				background-color:$white;
			}
			.v-tab{
				&.v-tab--active{
					background-color:$primary-color;
					color:$white;
				}
			}
		}
		.theme--light{
			.v-tab{
				color:$black;
			}
			
		}
	}
</style>
