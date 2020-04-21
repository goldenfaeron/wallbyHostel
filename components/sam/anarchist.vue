<template>
    <div class="grey darken-3">
        <v-container grid-list-lg>
			<v-layout row wrap>
				<v-flex xs12 sm12 md6 lg3 v-for="(item, index) in 21" :key="index">
        <v-card>
            
            <v-img
				
				:src="'/img/anarchist/'+index+'.png'"
			></v-img>
        </v-card>
				</v-flex>
			</v-layout>
        </v-container>
    </div>
</template>

<script>

export default {
	methods: {
	size(index) {
			return index % 2;
		},
},
	
};
</script>