<template>
<nav class="panel">
  <div class="panel__heading">
    <slot name="heading"></slot>
  </div>
  <div class="panel__block">
    <slot name="search"></slot>
  </div>
  <slot name="content"></slot>
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
