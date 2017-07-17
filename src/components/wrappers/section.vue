<template>
  <section class="sai-section">
    <slot></slot>
  </section>
</template>
<style lang="scss" scoped>
@import '../../scss/master';
.sai-section {
  background-color: map-get($colors, 'white');
  padding: map-get($sizes, 'large') map-get($sizes, 'large');

  &.is-fullwidth {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
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
