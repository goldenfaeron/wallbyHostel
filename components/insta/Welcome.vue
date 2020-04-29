<template>
	<div>
		<v-layout justify-center>
			<v-icon size="150" color="black">mdi-instagram</v-icon>
		</v-layout>

		<div align="center">
			<p class="display-3 font-weight-medium">Post on Goborshi with your instagram</p>
			<v-flex lg10>
				<p
					class="subheading font-weight-medium"
				>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
			</v-flex>
			<div class="display-1 font-weight-medium fade-in">
				<p>#barilliri</p>
				<p>#sumukelele</p>
				<p>#consequad</p>
				<p>#Duis aute</p>
				<p>#irure</p>
			</div>
		</div>
		<v-container grid-list-lg>
			<v-layout row wrap>
				<v-flex
					xs12
					sm12
					md6
					lg3
					v-for="(item, index) in $store.state.borshInstagram[0].slice(0,4)"
					:key="index"
				>
					<v-card height="100%">
						<!-- <v-img :src="$store.state.assetRoot + item.image.path" max-height="10cm"></v-img> -->

						<v-img height="200px" :src="item.imageUrl"></v-img>

						<v-card-text>
							{{item.firstComment}}
							<br />
							<v-icon color="red">mdi-cards-heart</v-icon>
							{{item.likesCount}}
						</v-card-text>

						<!-- v-if="!item.inCart" -->
						<v-card-actions></v-card-actions>
					</v-card>
				</v-flex>
			</v-layout>
		</v-container>
		<br />
		<p align="center" class="display-3 font-weight-medium">Promote your Instagram content</p>
		<v-container grid-list-lg>
			<v-layout row wrap>
				<v-flex xs12 sm12 md6 lg4 mt-5 pt-5>
					<div align="center">
						<p class="display-1 font-weight-bold">#seaside</p>
						<p class="display-1 font-weight-bold">#alivewithpeople</p>
						<p class="display-1 font-weight-bold">#wonderful</p>
					</div>
				</v-flex>
				<v-flex xs12 sm12 md6 lg4>
					<div align="center">
						<v-card>
							<v-img
								height="200px"
								src="https://scontent-lax3-1.cdninstagram.com/v/t51.2885-15/e35/69268815_124272158584240_2334135827849424740_n.jpg?_nc_ht=scontent-lax3-1.cdninstagram.com&_nc_cat=104&_nc_ohc=_inL_IMOi10AX-un_4U&oh=de0c6ac03be6aeec64a195c564e2c685&oe=5EBAD514"
							></v-img>

							<v-card-text>
								<v-icon color="red">mdi-cards-heart</v-icon>29
							</v-card-text>
						</v-card>
					</div>
				</v-flex>
				<v-flex xs12 sm12 md6 lg4 mt-5 pt-5>
					<div align="center">
						<p class="display-1 font-weight-bold">#borsh</p>
						<p class="display-1 font-weight-bold">#lovethebeach</p>
						<p class="display-1 font-weight-bold">#smokeweed</p>
					</div>
				</v-flex>
			</v-layout>
		</v-container>
		<br />
		<v-row>
			<v-img
				height="760"
				src="https://scontent-ort2-1.cdninstagram.com/v/t51.2885-15/e35/20065536_446859509028671_7944372338504499200_n.jpg?_nc_ht=scontent-ort2-1.cdninstagram.com&_nc_cat=111&_nc_ohc=wBrdX0G9BRUAX8arB8d&oh=d791b90d7955f075dc045205bbfe2dcf&oe=5EBB8315"
			>
				<v-container fill-height>
					<v-row align="center" class="white--text mx-auto" justify="center">
						<v-col class="white--text text-center" cols="12" tag="h1">
							<v-layout justify-center>
								<v-card color="grey" flat>
									<v-card-title primary-title>
										<span
											class="font-weight-light font-weight-medium"
											:class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2']"
										>Borsh Instagram</span>
									</v-card-title>
								</v-card>
							</v-layout>
						</v-col>
					</v-row>
				</v-container>
			</v-img>
		</v-row>
		<v-container grid-list-lg>
			<v-layout row wrap>
				<v-flex lg5>
					<div align="center" class="display-1 font-weight-bold">
						<v-img width="300" height="300" src="/img/hashtag.png"></v-img>
						<br />
						<p>So easy</p>
						<p>Just use Hashtag</p>
						<p>#Borsh</p>
					</div>
				</v-flex>
				<v-flex lg7>
					<div align="center" class="display-1 font-weight-bold">
						<p>Get morefollowers and post your content instantly</p>
					</div>
				</v-flex>
			</v-layout>
		</v-container>
		<v-row>
			<br />
			<v-img
				height="50%"
				src="https://scontent-lax3-2.cdninstagram.com/v/t51.2885-15/e35/71120259_407137883324167_5249827130328437835_n.jpg?_nc_ht=scontent-lax3-2.cdninstagram.com&_nc_cat=107&_nc_ohc=WsAK0vmB5TAAX-6LZB5&oh=bc6de3b34edc506b3d9a0c396f397076&oe=5EBA3982"
			>
				<v-container fill-height>
					<v-row align="center" class="white--text mx-auto" justify="center">
						<v-col class="white--text text-center" cols="12" tag="h1">
							<v-layout justify-center>
								<v-card color="grey" flat>
									<v-card-title primary-title>
										<span
											class="font-weight-light font-weight-medium"
											:class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2']"
										>Borsh Instagram</span>
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
					<v-layout justify-center>
						<v-icon size="400">mdi-cellphone</v-icon>
					</v-layout>
				</v-flex>
				<v-flex lg4>
					<v-layout justify-center>
						<v-icon size="550">mdi-cellphone</v-icon>
					</v-layout>
				</v-flex>
				<v-flex lg4>
					<v-layout justify-center>
						<v-icon size="400">mdi-cellphone</v-icon>
					</v-layout>
				</v-flex>
			</v-layout>
			<br />
			<v-layout justify-center>
				<v-btn color="success">see more</v-btn>
			</v-layout>
		</v-container>
	</div>
</template>
<script>
export default {
	components: {}
};
</script>
<style lang="css">
.fade-in {
	animation: fadeIn ease 2s;
	-webkit-animation: fadeIn ease 2s;
	-moz-animation: fadeIn ease 2s;
	-o-animation: fadeIn ease 2s;
	-ms-animation: fadeIn ease 2s;
}
@keyframes fadeIn {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}

@-moz-keyframes fadeIn {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}

@-webkit-keyframes fadeIn {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}

@-o-keyframes fadeIn {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}

@-ms-keyframes fadeIn {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
</style>