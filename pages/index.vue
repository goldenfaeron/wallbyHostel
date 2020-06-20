<template>
	<div>
		<v-container fluid>
			<v-layout row wrap fill-height>
				<v-flex lg6>
					<br />
					<br />
					<div style="text-align:center;">
						<img src="https://www.kexhostel.is/media/svg-icon/kex-big.svg" width="50%" />
					</div>
					<br />
					<br />

					<div class="welcome box vcenter eq matched pinged loaded">
						<v-img
							height="100%"
							src="https://www.kexhostel.is/media/box-covers/halfcol-wide/3yiffh3h.jpg"
						></v-img>
					</div>
				</v-flex>
				<v-flex lg6>
					<div style="background-color:white;" class="black--text">
						<v-container grid-list-lg>
							<v-layout row wrap justify-center my-5 py-5 mx-5 px-5>
								<v-flex xs12>
									<p
										:style="[$vuetify.breakpoint.smAndDown ? 'line-height: 50px;' : 'line-height: 150px;']  +'text-align:center;' "
										:class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-4']  + ' font-weight-bold'"
									>
										Book your stay
										<br />with us now!
									</p>
								</v-flex>

								<br />
								<v-flex lg6 xs12>
									<div align="center">
										<v-btn outlined color="black" width="100%">Arrival date</v-btn>
									</div>
								</v-flex>
								<v-flex lg6 xs12>
									<div align="center">
										<v-btn outlined color="black" width="100%">hallo2</v-btn>
									</div>
								</v-flex>
								<v-flex xs12></v-flex>
								<v-flex xs12>
									<div align="center">
										<v-btn color="#dfd269" width="100%">
											<span class="black--text font-weight-bold">Book</span>
										</v-btn>
									</div>
								</v-flex>
							</v-layout>
						</v-container>
					</div>

					<v-img src="https://www.kexhostel.is/media/box-covers/hq-halfcol-wide/xtv3nwv8.jpg">
						<v-container fill-height>
							<v-row align="center" class="white--text mx-auto" justify="center">
								<v-col class="white--text text-center" cols="12" tag="h1">
									<div class="text">
										<v-img
											style="margin: auto;"
											width="40%"
											src="https://www.kexhostel.is/media/svg-icon/roomsrates.svg"
										></v-img>
									</div>
								</v-col>
							</v-row>
						</v-container>
					</v-img>

					<v-img>
						<a href="/rooms-and-rates" class="item" style="min-height: 385.037px;"></a>
					</v-img>
				</v-flex>
			</v-layout>
		</v-container>
		<v-container fluid>
			<v-layout row wrap fill-height>
				
			<v-img src="https://www.kexhostel.is/media/box-covers/hq-halfcol-wide/xtv3nwv8.jpg">
				<v-container fill-height>
					<v-row align="center" class="white--text mx-auto" justify="center">
						<v-col class="white--text text-center" cols="12" tag="h1">
							<div class="text">
								<v-img
									style="margin: auto;"
									width="40%"
									src="https://www.kexhostel.is/media/svg-icon/roomsrates.svg"
								></v-img>
							</div>
						</v-col>
					</v-row>
				</v-container>
			</v-img>
			</v-layout>
		</v-container>
	</div>
</template>