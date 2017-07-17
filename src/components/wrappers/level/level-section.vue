<template>
  <div class="sai-level__section">
    <slot></slot>
  </div>
</template>
<style lang="scss" scoped>
  @import '../../../scss/master';
  .sai-level__section {
    @include has-padding('xsmall', 'vert');
    display: flex;
    flex-basis: auto;
    flex-grow: 1;
    flex-shrink: 0;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;

    &:first-of-type {
      justify-content: flex-start;
      white-space: nowrap;
      margin-left: inherit;
      margin-right: inherit;
      flex-grow: 1;

    }

    &:nth-of-type(2):not(:last-of-type) {
      justify-content: flex-start;
    }

    &:last-of-type:not(:only-of-type) {
      justify-content: flex-end;
      margin-left: inherit;
      margin-right: inherit;
    }

    &.is-collapsed {
      flex-grow: 0 !important;
    }

    &.is-centered {
      justify-content: center;
    }

    @include mobile {
      display: block;
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
