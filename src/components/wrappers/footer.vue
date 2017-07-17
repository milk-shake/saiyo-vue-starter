<template>
  <footer>
    <slot></slot>
  </footer>
</template>
<style lang="scss" scoped>
  @import '../../scss/master';
  .sai-footer {
    background-color: map-get($colors, 'white');
    padding: map-get($sizes, 'large') 0 map-get($sizes, 'large');
  }
</style>
<script>
  export default {
    props: [],
    mixins: [],
    components: {},
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
