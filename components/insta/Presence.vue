<template>
    <div>
        		<v-row>
			<br />
			<v-img height="760" src="/img/Beach-Party.jpg">
				<v-container fill-height>
					<v-row align="center" class="white--text mx-auto" justify="center">
						<v-col class="white--text text-center" cols="12" tag="h1">
							<v-layout justify-center>
								<v-flex lg6 xs10>
									<v-card color="grey" flat>
										<v-card-title primary-title style="word-break: normal;">
											<span
												class="font-weight-light font-weight-medium"
												:class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2']"
											>
												<p>
													Give your business
													a proper web presence with
													Go App
												</p>
											</span>
										</v-card-title>
									</v-card>
								</v-flex>
							</v-layout>
						</v-col>
					</v-row>
				</v-container>
			</v-img>
		</v-row>
		<v-container grid-list-lg>
			<v-layout row wrap>
				<v-flex lg4>
					<div align="center" class="headline">
						<v-img src="/img/phoneGuestHouse1-min.png"></v-img>
						<br />
						<p>Get your own Beautiful Website</p>
					</div>
				</v-flex>
				<v-flex lg4>
					<div align="center" class="headline">
						<v-img src="/img/phoneGuestHouse2-min.png"></v-img>
						<br />
						<p>Manage your content on Goborshi for free</p>
					</div>
				</v-flex>
				<v-flex lg4>
					<div align="center" class="headline">
						<v-img src="/img/phoneGuestHouse3-min.png"></v-img>
						<br />
						<p>Find professional photographers and marketing professionals</p>
					</div>
				</v-flex>
			</v-layout>
		</v-container>
    </div>
</template>