<template lang="">
    <div>
        		<v-container fluid fill-height class="ma-0 pa-0">
			<v-layout row wrap>
				<v-flex lg6>
					<v-img height="100%" :src="asset + props.image8.path"></v-img>
				</v-flex>
				<v-flex lg6>
					<div style="background-color: #636f61; height: 100%;">
						<v-container>
							<v-container fill-height>
								<v-layout align-center justify-center row fill-height>
									<v-layout column cols="12" tag="h1" pl-2>
										<div class="text">
											<p
												:class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-3']  + ' font-weight-bold'"
											>{{props.block7_title}}</p>
											<div
												v-html="props.block7_text"
												:class="[$vuetify.breakpoint.smAndDown ? 'headline' : 'display-1']  + ' font-weight-bold'"
											></div>
										</div>
									</v-layout>
								</v-layout>
							</v-container>
						</v-container>
					</div>
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