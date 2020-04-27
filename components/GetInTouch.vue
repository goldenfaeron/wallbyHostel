<template>
  <section
    id="get-in-touch"
    class="hide-overflow"
  >
    <v-layout
      info
      white--text
    >
      <v-flex
        hidden-sm-and-down
        md6
      >
        <v-img
          :src="require('@/assets/contact.png')"
          height="100%"
        />
      </v-flex>
      <v-flex
        xs12
        md6
        pa-5
      >
        <basebubble1 />
        <baseheading class="mb-5">
          Get In Touch
        </baseheading>

        <v-sheet
          max-width="600"
          color="transparent"
        >
          <v-text-field
            color="info"
            label="Name"
            solo
            flat
          />
          <v-text-field
            color="info"
            label="Email"
            solo
            flat
          />
          <v-text-field
            color="info"
            label="Subject"
            solo
            flat
          />
          <v-textarea
            color="info"
            label="Message"
            solo
            flat
          />
          <basebtn>Send</basebtn>
        </v-sheet>
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
