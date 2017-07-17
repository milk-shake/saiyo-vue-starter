<template>
  <div class="sai-container">
    <slot></slot>
  </div>
</template>
<style lang="scss" scoped>
  @import '../../scss/master';
  .sai-container {
    position: relative;
    color: inherit;

    @include mobile {
      padding: 0 map-get($sizes, 'medium');
    }

    @include desktop {
      margin: 0 auto;
      max-width: map-get($media, 'desktop') - 40px;
      width: map-get($media, 'desktop') - 40px;

      // Modifiers
      &.is-fluid {
        margin: 0;
        max-width: none;
        width: 100%;
      }
    }


    @include widescreen {
      max-width: map-get($media, 'widescreen') - 40px;
      width: map-get($media, 'widescreen') - 40px;
    }


    @include fullhd {
      max-width: map-get($media, 'fullhd') - 40px;
      width: map-get($media, 'fullhd') - 40px;
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
