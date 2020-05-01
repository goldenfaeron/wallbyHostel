<template>
	<div>
		<v-parallax :src="data.image"></v-parallax>
		<v-container grid-list-xs>
			<v-layout row wrap>
				<v-flex xs12>
					<h1>{{data.name}}</h1>
					<h3>{{data.type}}</h3>
					<p>{{data.description}}</p>
					<v-divider></v-divider>
					Reviews {{data.reviews}}
					<v-divider></v-divider>
					Breakfast: {{data.breakfast}}
					<v-divider></v-divider>
					Check in from: {{data.checkInFrom}} until {{data.checkInTo}}
					<v-divider></v-divider>
					br
					Address: {{data.address.full}}
					<br />
					<br />Conditions
					<ul>
						<li v-for="(item, index) in data.rooms[0].conditions" :key="index">{{item}}</li>
					</ul>
				</v-flex>
				<v-flex xs12 mt-5>
					<h2>Rooms</h2>
					<v-container grid-list-lg fluid>
						<v-layout row wrap>
							<v-flex xs12 sm6 md3 v-for="(item, index) in data.rooms" :key="index">
								<v-card>
									<v-btn absolute small dark fab top right color="primary ">€{{item.price}}</v-btn>
									<v-sheet height="100" color="primary lighten-2">
										<v-layout column justify-center align-center>
											<v-flex mt-5>
												<v-icon x-large color="white">mdi-bed-double</v-icon>
											</v-flex>
										</v-layout>
									</v-sheet>
									<v-card-title primary-title>{{item.roomType}}</v-card-title>
									<v-card-text>
										<v-icon>mdi-bed-double</v-icon>
										{{item.bedType.replace("Choose your bed (if available)", "")}}
										<br />
										<v-icon>mdi-account-multiple</v-icon>
										Persons {{item.persons}}
									</v-card-text>
									<v-card-actions>
										<Dialog :props="{title: data.name + ' Amenities', buttonText: 'View Amenities'}">
											<ul>
												<li v-for="(item, index) in item.features" :key="index">{{item}}</li>
											</ul>
										</Dialog>
									</v-card-actions>
								</v-card>
							</v-flex>
						</v-layout>
					</v-container>
				</v-flex>
			</v-layout>
			<googleMapCoordinate :props="{Lat: data.location.lat, Lng: data.location.lng}"></googleMapCoordinate>
		</v-container>
		<CallToAction
			:props="{booking: data.url.replace('httpse', 'https'), website: 'hello', airbnb: 'hello'}"
		></CallToAction>
	</div>
</template>

<script>
export default {
	components: {
		Dialog: () => import("@/components/Dialog"),
		googleMapCoordinate: () => import("@/components/googleMapCoordinate"),
		CallToAction: () => import("@/components/CallToAction")
	},
	data() {
		return {
			data: this.$store.state.borshHotels[0][this.$route.params.id]
		};
	}
};
</script>