<template>
    <div>
  
        		<v-container fluid fill-height class="ma-0 pa-0">
			<v-layout row wrap fill-height>
				<v-img
					:height="[$vuetify.breakpoint.smAndDown ? (this.windowSize.y)*2/3 : (this.windowSize.y)]"
					:src="asset + props.image1.path"
				>
					<v-container fill-height>
						<v-layout align-center justify-center row fill-height>
							<v-layout column class="white--text text-center">
								<div class="text">
									<v-img
										style="margin: auto;"
										:width="[$vuetify.breakpoint.smAndDown ? '70%' : '60%']"
										:src="asset + props.image1_logo.path"
									></v-img>
									<p
										:class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-3']  + ' font-weight-bold'"
										:style="[$vuetify.breakpoint.smAndDown ? 'line-height: 40px;' : 'line-height: 80px;']  +'text-align:center;' "
									>{{props.image1_text}}</p>
								</div>
							</v-layout>
						</v-layout>
					</v-container>
				</v-img>
			</v-layout>
		</v-container>
    </div>
</template>

<script>

import { Mixin } from "~/mixins/windowSize.js";

export default {
	mixins: [Mixin],
	props: ['props'],
		data() {
		return {
			
			asset: this.$store.state.assetRoot2
		};
	},
}
</script>