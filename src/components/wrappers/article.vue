<template>
  <article class="sai-article">
    <slot></slot>
  </article>
</template>
<style lang="scss" scoped>
  @import '../../scss/master';
  .sai-article {
    padding: map-get($sizes, 'large') 0;
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
