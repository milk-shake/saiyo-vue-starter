<template>
  <nav class="nav" :class="`has-${computedColor}-background`">
    <slot></slot>
  </nav>
</template>
<style lang="scss" scoped>

</style>
<script>
  export default {
    props: [],
    mixins: [],
    components: {},
    data () {
      return {}
    },
    computed: {
      computedColor() {
        return (this.color) ? this.color : 'primary'
      }
    },
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