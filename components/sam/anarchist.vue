<!--<template>
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
</script>-->
<template>
	<v-content class="grey darken-3">
		<v-container fluid grid-list-md>
			<v-flex d-flex lg12 ma-2>
				<v-img :src="'/img/anarchist/0.png'"></v-img>
			</v-flex>

			<v-layout row wrap>
				<v-flex d-flex lg7 my-2>
					<v-img :src="'/img/anarchist/1.png'"></v-img>
				</v-flex>
				<v-flex d-flex lg5 my-2>
					<v-img :src="'/img/anarchist/2.png'"></v-img>
				</v-flex>
			</v-layout>

			<v-layout row wrap>
				<v-flex d-flex lg7>
					<v-layout row wrap>
						<v-flex lg12>
							<v-img :src="'/img/anarchist/3.png'"></v-img>
						</v-flex>
						<v-flex d-flex>
							<v-layout row>
								<v-flex lg4>
									<v-img :src="'/img/anarchist/5.png'"></v-img>
								</v-flex>
								<v-flex lg8>
									<v-img :src="'/img/anarchist/6.png'"></v-img>
								</v-flex>
							</v-layout>
						</v-flex>
					</v-layout>
				</v-flex>
				<v-flex d-flex lg5>
					<v-img :src="'/img/anarchist/4.png'"></v-img>
				</v-flex>
			</v-layout>

			<v-flex d-flex lg12 ma-2>
				<v-img :src="'/img/anarchist/8.png'"></v-img>
			</v-flex>

			<v-layout row wrap>
				<v-flex d-flex lg5 my-2>
					<v-img :src="'/img/anarchist/9.png'"></v-img>
				</v-flex>
				<v-flex d-flex lg7 my-2>
					<v-img :src="'/img/anarchist/10.png'"></v-img>
				</v-flex>
			</v-layout>
			<v-layout row wrap>
				<v-flex d-flex lg8 my-2>
					<v-img :src="'/img/anarchist/11.png'"></v-img>
				</v-flex>
				<v-flex d-flex lg4 my-2>
					<v-img :src="'/img/anarchist/12.png'"></v-img>
				</v-flex>
			</v-layout>
			<v-layout row wrap>
				<v-flex d-flex lg5 my-2>
					<v-img :src="'/img/anarchist/13.png'"></v-img>
				</v-flex>
				<v-flex d-flex lg7 my-2>
					<v-img :src="'/img/anarchist/14.png'"></v-img>
				</v-flex>
			</v-layout>
			<v-layout row wrap>
				<v-flex d-flex lg7 my-2>
					<v-img :src="'/img/anarchist/15.png'"></v-img>
				</v-flex>
				<v-flex d-flex lg5 my-2>
					<v-img :src="'/img/anarchist/16.png'"></v-img>
				</v-flex>
			</v-layout>
			<v-flex d-flex lg12 ma-2>
				<v-img :src="'/img/anarchist/17.png'"></v-img>
			</v-flex>
			<v-layout row wrap>
				<v-flex d-flex lg6 my-2>
					<v-img :src="'/img/anarchist/18.png'"></v-img>
				</v-flex>
				<v-flex d-flex lg5 my-2>
					<v-img :src="'/img/anarchist/19.png'"></v-img>
				</v-flex>
			</v-layout>
			<v-flex d-flex lg12 ma-2>
				<v-img :src="'/img/anarchist/20.png'"></v-img>
			</v-flex>
			<v-layout row wrap>
				<v-flex d-flex lg6 my-2>
					
				</v-flex>
				<v-flex d-flex lg6 my-2>
					<v-img :src="'/img/anarchist/21.png'"></v-img>
				</v-flex>
			</v-layout>
			
			
		</v-container>
	</v-content>
</template>

<script>
export default {
	data: () => ({
		lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`
	})
};
</script>