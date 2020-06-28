<template>
    <div>
  
    	<v-container fluid fill-height class="ma-0 pa-0">
			<v-layout row wrap>
				<v-flex lg6>
					<div style="background-color: #ffffff; height: 100%;">
						<v-container
							
						>
							<v-container fill-height>
								<v-layout align-center justify-center row fill-height>
									<v-layout column cols="12" tag="h1" pl-2>
										<div class="text black--text">
										<p
												:class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-3']  + ' font-weight-bold'"
											>{{props.block4_title}}</p>
											<div
												v-html="props.block4_text"
												:class="[$vuetify.breakpoint.smAndDown ? 'headline' : 'display-1']  + ' font-weight-bold'"
											></div>
										</div>
									</v-layout>
								</v-layout>
							</v-container>
						</v-container>
					</div>
				</v-flex>
				<v-flex lg6>
					<v-img height="100%" :src="asset + props.image5.path">
					</v-img>
				</v-flex>
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
