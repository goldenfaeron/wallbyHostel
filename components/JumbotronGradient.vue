<template>
	<div>
		<v-responsive :aspect-ratio="16/9" class="secondary lighten-2" max-height="300">
			<v-container fill-height>
				<v-layout align-center>
					<v-flex text-xs-center>
						<v-layout align-center>
							<v-flex>
								<v-icon centered x-large>mdi-phone-check</v-icon>
							</v-flex>
						</v-layout>
						<h3 class="display-3 white--text">Contact</h3>
					</v-flex>
					<v-flex text-xs-center>
						<v-icon x-large>mdi-bookmark-check</v-icon>
						<h3 class="display-3">Book</h3>
					</v-flex>
					<v-flex text-xs-center>
						<v-icon x-large>mdi-earth</v-icon>
						<h3 class="display-3">Website</h3>
					</v-flex>
				</v-layout>
			</v-container>
		</v-responsive>
	</div>
</template>