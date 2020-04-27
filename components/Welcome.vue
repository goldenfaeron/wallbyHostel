<template>
  <section
    id="welcome"
    class="hide-overflow"
  >
    <v-layout>
      <v-flex
        hidden-sm-and-down
        md6
      >
        <v-img
          :src="require('@/assets/welcome.png')"
          height="100vh"
        />
      </v-flex>

      <v-flex
        xs12
        md6
        align-content-space-between
        layout
        :pa-5="$vuetify.breakpoint.smAndDown"
        wrap
      >
        <basebubble1
          style="transform: rotate(180deg) translateY(25%)"
        />

        <v-layout
          align-center
          justify-center
        >
          <v-flex
            xs10
            md6
          >
            <baseheading>Welcome!</baseheading>
            <basetext>
              Lorem ipsum dolor sit amet, consectetur ad
              ipiscin elit. Etiam vulputate augue vel felis gra
              vida porta. Lorem ipsum dolor sit amet, cons
              ectetur adipiscing elit.<br>
              Lorem ipsum dolor sit amet, consectetur ad
              ipiscin elit. Etiam vulputate augue vel felis gra
              vida porta. Lorem ipsum dolor sit amet, cons
              ectetur adipiscing elit.
            </basetext>
            <basebtn class="mt-4">
              Learn More!
            </basebtn>
          </v-flex>
        </v-layout>

        <basebubble2
          style="transform: rotate(180deg) translate(-200px, -15%)"
        />
      </v-flex>
    </v-layout>
  </section>
</template>
<script>
export default {
  components: {
    basebubble1: () => import('@/components/base/Bubble1'),
    basebubble2: () => import('@/components/base/Bubble2'),
    baseheading: () => import('@/components/base/Heading'),
    basetext: () => import('@/components/base/Text'),
    basebtn: () => import('@/components/base/Btn'),
  },
}
</script>
