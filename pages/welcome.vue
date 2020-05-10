<template>
	<div>
		<v-container grid-list-xs>
			<v-layout row wrap>
				<v-flex xs12>
					<v-card>
						<v-img height="300" src="/img/sam.png"></v-img>
						<v-card-title primary-title>Hey {{this.$route.query.name}}</v-card-title>
						<v-card-text>
							<b>Welcome to the {{$store.state.name}} web app</b>
							<br />
							This is a message from your friend {{$store.state.developer.name}} in {{$store.state.developer.location}}
							<br />
							<br />We list all businesses and places in Borsh and have created a special listing for your business
							<br />
							<br />We use Cockpit CMS to host our backend content until we are able to build an extensive user login to the frontend application.
							<br />You can log in to the backend to edit your content and profile here.
							Please remember this whole setup is still in development so some things on the front end and the back end may look ugly or unfinished
						</v-card-text>
						<v-card-title>Edit your business on Cockpit</v-card-title>
						<v-card-text>
							Username:
							<b>{{this.$route.query.username}}</b>
							<br />Password:
							<b>{{this.$route.query.password}}</b>
						</v-card-text>
						<v-card-actions>
							<v-btn :href="cpLink" exact target="_blank" color="primary lighten-2">Back End</v-btn>
						</v-card-actions>
						<v-card-title>
							See your business live on
							<br />
							{{$store.state.name}}
						</v-card-title>
						<v-card-actions>
							<v-btn
								color="accent darken-2"
								target="_blank"
								:to="'/featured_business/'+ this.$route.query.nuxtlink"
							>Front End</v-btn>
						</v-card-actions>
					</v-card>
				</v-flex>
				<v-flex x12>
					<about></about>
					<v-layout align-center justify-center>
						<v-btn target="_blank" x-large to="/" color="primary">
							<v-icon>mdi-home</v-icon>Home
						</v-btn>
					</v-layout>
				</v-flex>
			</v-layout>
		</v-container>
	</div>
</template>

<script>
//name
//username
//password
//cpID
//nuxtlink

export default {
	data() {
		return {
			cpLink:
				"https://cockpit.goborshi.hackmylanguage.com/collections/entry/shops_featured/" +
				this.$route.query.cpID
		};
	},
	components: {
		about: () => import("@/components/fromTemplate/about")
	}
};
</script>

<style>
</style>