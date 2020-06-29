<template>
	<div>
		<v-container fluid fill-height class="ma-0 pa-0">
			<v-layout row wrap fill-height>
				<v-layout align-center justify-center row fill-height>
					<v-layout column class="white--text text-center">
						<br />
						<p
							:class="this.resize.headline+ ' font-weight-bold'"
							style="text-align:center; "
						>{{props.section2_title}}</p>
						<p
							:class="this.resize.subtitle  + ' font-weight-bold '"
							style="text-align:center; "
						>{{props.section2_subtitle}}</p>
						<br />
						<div class="text">
							<div v-html="props.section2_text"
								:class="this.resize.text+ ' font-weight-bold ma-5 pa-5'"
								style="text-align:center; "
							></div>
							<v-btn class="black--text" color="secondary lighten-1">{{props.section2_buttonText}}</v-btn>
						</div>
						<br />
					</v-layout>
				</v-layout>
			</v-layout>
		</v-container>
	</div>
</template>


<script>
import { Mixin } from "~/mixins/windowSize.js";

export default {
	mixins: [Mixin],
	props: ["props"],
	data() {
		return {
			
			asset: this.$store.state.assetRoot2
		};
	},
};
</script>