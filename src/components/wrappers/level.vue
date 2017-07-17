<template>
  <section class="sai-level">
    <slot></slot>
  </section>
</template>
<style lang="scss" scoped>
  @import '../../scss/master';
  .sai-level {
    @include block;
    align-items: center;
    justify-content: space-between;

    code {
      border-radius: $radius;
    }

    img {
      display: inline-block;
      vertical-align: top;
    }

    &.is-mobile {
      display: flex;

      .level__section {
        display: flex;
      }
    }

    @include tablet {
      display: flex;
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
