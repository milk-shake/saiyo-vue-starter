<template>
  <sai-container>
   <sai-notification :color="'red'">
      <p>notification dude</p>
   </sai-notification>
  </sai-container>
</template>
<style>
html, body {
  margin: 0;
  padding: 0;
}
</style>
<script>
  import { saiContainer, saiSection, saiLevel, saiLevelSection, saiLevelItem } from '../components/wrappers'
  import { saiNotification } from '../components/elements'
  export default {
    props: [],
    mixins: [],
    components: { saiContainer, saiSection, saiLevel, saiLevelSection, saiLevelItem, saiNotification },
    data () {
      return {}
    },
    computed: {},
    methods: {},
    beforeCreate () {},
    created () {},
    beforeMount () {},
    mounted () {},
    beforeUpdate () {},
    updated () {},
    beforeDestroy () {},
    destroyed () {}
}
</script>
