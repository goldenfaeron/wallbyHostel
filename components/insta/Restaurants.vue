<template>
    <div>
        		<v-row>
			<br />
			<v-img
				height="500"
				src="https://scontent-lax3-2.cdninstagram.com/v/t51.2885-15/e35/34726024_479116625858790_6962504533595389952_n.jpg?_nc_ht=scontent-lax3-2.cdninstagram.com&_nc_cat=106&_nc_ohc=OeCb-yoFq_kAX88VbTr&oh=ceb2303a23cf563a4f002d831cf3abea&oe=5EBABCE8"
			>
				<v-container fill-height>
					<v-row align="center" class="white--text mx-auto" justify="center">
						<v-col class="white--text text-center" cols="12" tag="h1">
							<v-layout justify-center>
								<v-card color="primary lighten-2" flat style="opacity: 0.5;">
									<v-card-title primary-title style="word-break: normal;">
										<span
											class="font-weight-light font-weight-medium"
											:class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2']"
										>Borsh Restaurants</span>
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
				<v-flex lg6>
					<div align="center" class="display-1 font-weight-bold">
						<p>Show and Promote your menu and products</p>
						<br />
						<v-img src="/img/menu-min.png"></v-img>
					</div>
				</v-flex>
				<v-flex lg6>
					<div align="center" class="display-1 font-weight-bold">
						<p>Get more web presence to get more customers</p>
						<br />
						<v-img src="/img/onlinePresence-min.png"></v-img>
					</div>
				</v-flex>
			</v-layout>
			<br />
			<p
				align="center"
				class="display-1 font-weight-bold"
			>Show people on the web what your business has to offer</p>
			<br />
			<p
				align="center"
				class="headline"
			>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
			<br />
			<v-layout row wrap>
				<v-flex lg4>
					<v-img src="/img/mapsLogo-min.png"></v-img>
				</v-flex>
				<v-flex lg4>
					<v-img src="/img/phoneMaps1-min.png"></v-img>
				</v-flex>
				<v-flex lg4>
					<v-img src="/img/phoneMaps2-min.png"></v-img>
				</v-flex>
			</v-layout>
			<br />
			<p
				align="center"
				class="display-1 font-weight-bold"
			>Your Google Maps listing will automatically appear on Goborshi</p>
			<div align="center">
				<v-btn color="primary">See more</v-btn>
			</div>
		</v-container>

    </div>
</template>