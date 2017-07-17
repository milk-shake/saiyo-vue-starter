<template>
<div class="nav__section" v-bind:class="{'is-collapsed': isCollapsed}">
  <slot></slot>
</div>
</template>
<style lang="scss" scoped>
@import '../../../scss/master';
.nav__section {
  align-items: stretch;
  display: flex;
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

  &:last-of-type {
    justify-content: flex-end;
    margin-left: inherit;
    margin-right: inherit;
  }

  &.is-collapsed {
    flex-grow: 0 !important;
  }

  &.is-centered {
    justify-content: center !important;
  }
}
</style>
<script>
  export default {
    props: ['is-collapsed'],
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
