
<template>
	<v-layout id="resume" row justify-center  wrap class="mt-16 pt-2 full__screen">
		<v-flex xs12>
			<h2 class="text-center subtitle" data-title="SUMMARY">Resume</h2>
			<p class="pa-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fames ac turpis egestas sed tempus urna et. Eu augue ut lectus arcu bibendum. Posuere morbi leo urna molestie at elementum eu facilisis. Quis viverra nibh cras pulvinar mattis nunc sed.</p>
		</v-flex>
		<v-flex xs12 class="pa-6 d-flex flex-column">
			<v-card min-height="350px">
				<v-tabs 
      background-color="transparent"
      color="basil"
      grow>
					<v-tab>
						Skills
					</v-tab>
					<v-tab>
						Education
					</v-tab>
					<v-tab>
						Experience
					</v-tab>
					<v-tab-item>
						<v-card flat>
							<v-card-text>
							<v-layout row>
								<v-flex xs12 md6 pa-2>
									<h3 class="primary--text mb-3">Coding</h3>
									<strong>Vue JS</strong>
									<v-progress-linear class="mb-2" v-model="buffer2" :buffer-value="bufferValue" color="primary" height="15"rounded></v-progress-linear>
									<strong>React JS</strong>
									<v-progress-linear class="mb-2" v-model="buffer5" :buffer-value="bufferValue" color="primary" height="15"rounded></v-progress-linear>
									<strong>HTML</strong>
									<v-progress-linear class="mb-2" v-model="buffer1" :buffer-value="bufferValue" color="primary" height="15"rounded></v-progress-linear>
									<strong>JavaScript</strong>
									<v-progress-linear class="mb-2" v-model="buffer2" :buffer-value="bufferValue" color="primary" height="15"rounded></v-progress-linear>
									</v-flex>
								<v-flex xs12 md6 pa-2>
									<strong>CSS</strong>
									<v-progress-linear class="mb-2" v-model="buffer1" :buffer-value="bufferValue" color="primary" height="15"rounded></v-progress-linear>
									<strong>SASS</strong>
									<v-progress-linear class="mb-2" v-model="buffer2" :buffer-value="bufferValue" color="primary" height="15"rounded></v-progress-linear>
									<strong>Bootstrap</strong>
									<v-progress-linear class="mb-2" v-model="buffer2" :buffer-value="bufferValue" color="primary" height="15"rounded></v-progress-linear>
									<h3 class="primary--text mb-3">Design</h3>
									<strong>Photoshop</strong>
									<v-progress-linear class="mb-2" v-model="buffer5" :buffer-value="bufferValue" color="primary" height="15"rounded></v-progress-linear>
								</v-flex>
								</v-layout>
							</v-card-text>
						</v-card>
					</v-tab-item>
					<v-tab-item>
						<v-card flat>
							<v-card-text>
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
							</v-card-text>
						</v-card>
					</v-tab-item>
					<v-tab-item>
						<v-card flat>
							<v-card-text>
								<v-timeline align-top dense>
									<v-timeline-item color="primary" small>
										<v-layout pt-3>
											<v-flex xs4>
												<div class="caption font-weight-bold primary--text">JUL 2019 -</div>
												<div class="caption font-weight-bold primary--text">PRESENT</div>
											</v-flex>
											<v-flex class="pl-2">
												<strong>Frontend Developer</strong>
												<div class="caption mb-2">Tata Consultancy Services</div>
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
		  <div class="mt-4 pt-2">
            <v-btn href="#"
                target="_blank" color="primary" large>
                Download Resume
                <v-icon right>fas fa-file-download</v-icon>
            </v-btn>
        </div>
  	</v-layout>
</template>
<script>
export default {
	 data() {
    return {
      value: 0,
      buffer1: 0,
      buffer2: 0,
      buffer3: 0,
      buffer4: 0,
      buffer5: 0,
      buffer6:0,
      bufferValue: 100,
      interval: 0
    };
  },
  mounted() {
    this.startBuffer();
  },

  beforeDestroy() {
    clearInterval(this.interval);
  },
  methods: {
    startBuffer() {
      this.interval = setInterval(() => {
        this.buffer1 = 90;
        this.buffer2 = 85;
        this.buffer3 = 80;
        this.buffer4 = 75;
        this.buffer5 = 70;
        this.buffer6 = 65;
      }, 800);
    }
  }
};
</script>
<style lang="scss">
	@use '../scss/common' as *;
	#resume{
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
