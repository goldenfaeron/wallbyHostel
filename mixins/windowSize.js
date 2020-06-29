export const Mixin = {
  data() {
    return {
      asset: this.$store.state.assetRoot2,
      windowSize: {
        x: 0,
        y: 0
      }
    };
  },
  mounted() {
    this.onResize();
  },
  methods: {
    onResize() {
      this.windowSize = {
        x: window.innerWidth,
        y: window.innerHeight
      };
    }
  },
  computed: {
    resize() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return {text: 'body-2', bigText: 'headline', subtitle: 'title', headline: 'display-1', lgtext: 'display-2', svgSize: '70%'};
        case "sm":
          return {text: 'body-2', bigText: 'headline', subtitle: 'title', headline: 'display-1', lgtext: 'display-2', svgSize: '70%'};
        case "md":
          return {text: 'body-2', bigText: 'headline', subtitle: 'title', headline: 'display-1', lgtext: 'display-2', svgSize: '40%'};
        case "lg":
          return {text: ' headline', bigText: 'display-1', subtitle: ' display-2', headline: ' display-3', lgtext: ' display-4', svgSize: '30%'};
        case "xl":u 
          return {text: 'display-1', bigText: 'display-2', subtitle: 'display-2', headline: 'display-3', lgtext: 'display-4', svgSize: '30%'};
      }
    }
  }
};
