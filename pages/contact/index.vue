<template>
 	<div>


          	<v-container fluid fill-height class="ma-0 pa-0">
			<v-layout row wrap>
				<v-flex lg6>
					<div style="background-color: #000000;">
						<v-container
							
						>
                           <ContactForm></ContactForm>
						</v-container>
					</div>
				</v-flex>
              
				<v-flex lg6>
					<v-img height="100%" :src="asset + about.image1.path">
					</v-img>
				</v-flex>
			</v-layout>
		</v-container>

	

	</div>
</template>

<script>
import { Mixin } from "~/mixins/windowSize.js";

export default {
    middleware:'location',
    mixins: [Mixin],

    components:{
        ContactForm: () => import("@/components/wallaby/ContactForm"),

    },

    data() {
        return {
            		about: this.$store.state.pageData[0],
			// map: this.$store.state.pageData[1],
        }
    },
			
	
}
</script>