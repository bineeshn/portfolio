<template>
    <v-layout id="services" row justify-center wrap class="mt-16 pt-2">
        <v-flex xs12>
            <h2 class="text-center subtitle" data-aos="fade-down" data-aos-duration="1500" data-title="WHAT I DO">Services</h2>
        </v-flex>
        <v-flex xs12 class="pa-6">
			<v-layout row>
				<v-flex data-aos="flip-up" data-aos-duration="1500" sm6 class="pa-2">
					<v-card
						class="mx-auto"
						outlined
					>
						<v-list-item three-line>
							<v-list-item-avatar
								tile
								size="60"
								color="secondary"
							>
								<v-icon x-large>fas fa-laptop-code</v-icon>
							</v-list-item-avatar>
							<v-list-item-content>
								<v-list-item-title class="text-h5 mb-1">
									Frontend Development
								</v-list-item-title>
								<v-list-item-subtitle>Develop beautiful websites</v-list-item-subtitle>
							</v-list-item-content>
						</v-list-item>
					</v-card>
				</v-flex>
				<v-flex data-aos="flip-up" data-aos-duration="1500" sm6 class="pa-2">
					<v-card
						class="mx-auto"
						outlined
					>
						<v-list-item three-line>
							<v-list-item-avatar
								tile
								size="60"
								color="secondary"
							>
								<v-icon x-large>fab fa-figma</v-icon>
							</v-list-item-avatar>
							<v-list-item-content>
								<v-list-item-title class="text-h5 mb-1">
									UI/UX Design		
								</v-list-item-title>
								<v-list-item-subtitle>Plan & design web/app interfaces</v-list-item-subtitle>
							</v-list-item-content>
						</v-list-item>
					</v-card>
				</v-flex>
				<v-flex data-aos="flip-up" data-aos-duration="1500" sm6 class="pa-2">
					<v-card
						class="mx-auto"
						outlined
					>
						<v-list-item three-line>
							<v-list-item-avatar
								tile
								size="60"
								color="secondary"
							>
								<v-icon x-large>fas fa-check-double</v-icon>
							</v-list-item-avatar>
							<v-list-item-content>
								<v-list-item-title class="text-h5 mb-1">
									Unit Testing
								</v-list-item-title>
								<v-list-item-subtitle>Manuall UI testing is for finding UI defects</v-list-item-subtitle>
							</v-list-item-content>
						</v-list-item>
					</v-card>
				</v-flex>
			</v-layout>
        </v-flex>
    </v-layout>
</template>

<style lang="scss" scoped>
	@use '../scss/common' as *;
	.v-card{
		.v-icon.theme--light{
			color: $white;
		}
	}
</style>

