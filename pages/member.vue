<template>
<div id="app">
  <v-app>
    <!--<core-toolbar />-->

    <core-view />

    <core-footer />
  </v-app>
  </div>
</template>

<script>
export default {
  components: {
    CoreFooter: () => import('@/components/core/Footer'),
    CoreToolbar: () => import('@/components/core/Toolbar'),
    CoreView: () => import('@/components/core/View')
  }
}
</script>
