<template>
	<div>
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
									<v-card-title primary-title style="word-break: normal;">
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
						<v-img width="300" height="300" src="/img/hashtag-min.png"></v-img>
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
					<br />
					<v-layout row wrap>
						<v-flex lg4>
							<div align="center" class="headline">
								<v-img src="/img/phoneHearth-min.png"></v-img>
								<br />
								<p>#ex ea commodo</p>
								<p>#consequad</p>
								<p>#Duis aute</p>
								<p>#irure</p>
							</div>
						</v-flex>
						<v-flex lg4>
							<v-img height="80%" src="/img/phoneGraph-min.png"></v-img>
						</v-flex>
						<v-flex lg4>
							<div align="center" class="headline">
								<v-img src="/img/phoneHearth-min.png"></v-img>
								<br />
								<p>#ex ea commodo</p>
								<p>#consequad</p>
								<p>#Duis aute</p>
								<p>#irure</p>
							</div>
						</v-flex>
					</v-layout>
				</v-flex>
			</v-layout>
		</v-container>
	</div>
</template>