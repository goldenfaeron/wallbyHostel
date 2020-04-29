<template>
	<div>
		<!--<v-parallax :src="data.image"></v-parallax>
		<v-container grid-list-xs>
			<v-layout row wrap>
				<v-flex xs12>
					 <v-img :src="data.image"></v-img> 
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
					Address: {{data.address.full}}
				</v-flex>
				<v-flex xs12>
					<h2>Rooms</h2>
					<v-layout row wrap>
						<v-flex xs4 v-for="(item, index) in data.rooms" :key="index">
							<v-card>
								<v-card-title primary-title>{{item.roomType}}</v-card-title>
								<v-card-title primary-title>EURO {{item.price}}</v-card-title>
								<v-card-text>
									{{item.bedType}}
									<br />
									Persons {{item.persons}}
								</v-card-text>
							</v-card>
						</v-flex>
					</v-layout>
				</v-flex>
			</v-layout>
		</v-container>-->
	</div>
</template>

<script>
export default {
	data() {
		return {
			data: this.$store.state.borshHotels[0][this.$route.params.id]
		};
	}
};
</script>