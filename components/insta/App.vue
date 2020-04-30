<template>
	<div>
		<v-row>
			<br />
			<v-img src="/img/girl.jpg">
				<v-container fill-height>
					<v-row align="center" class="white--text mx-auto" justify="center">
						<v-col class="white--text text-center" cols="12" tag="h1">
							<v-layout justify-center>
								<v-card color="grey" flat>
									<v-card-title primary-title style="word-break: normal;">
										<span
											class="font-weight-light font-weight-medium"
											:class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2']"
										>GoBorshi App</span>
									</v-card-title>
								</v-card>
							</v-layout>
						</v-col>
					</v-row>
				</v-container>
			</v-img>
		</v-row>
		<br />
		<v-container grid-list-lg>
			<v-layout row wrap>
				<v-flex lg4>
					<div justify-center>
						<v-img src="/img/phoneStar-min.png"></v-img>
					</div>
				</v-flex>
				<v-flex lg4>
					<div justify-center>
						<v-img src="/img/phoneImg-min.png"></v-img>
					</div>
				</v-flex>
				<v-flex lg4>
					<div justify-center>
						<v-img src="/img/phoneWww-min.png"></v-img>
					</div>
				</v-flex>
			</v-layout>
			<br />
			<div align="center" class="display-1 font-weight-bold">
				<p>Share videos, locations and hangouts on Goborshi</p>
			</div>
			<div align="center" class="headline">
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
			</div>
			<br />
			<v-layout justify-center>
				<v-btn color="primary">see more</v-btn>
			</v-layout>
		</v-container>
	</div>
</template>