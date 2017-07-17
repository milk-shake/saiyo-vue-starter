<template>
  <nav class="nav">
    <slot></slot>
  </nav>
</template>
<style lang="scss" scoped>
@import '../../scss/master';
.nav {
  align-items: stretch;
  display: flex;
  position: relative;
  text-align: center;
  z-index: 2;
  width: 100%;
  overflow-y: scroll;

  & > .container {
    align-items: stretch;
    display: flex;
    width: 100%;

    @include mobile {
      padding-left: 0;
      padding-right: 0;
    }
  }

  img {
    max-height: 1.75rem;
  }

  @include mobile {
    justify-content: flex-start;
  }
}
</style>
<script>
  export default {
    props: ['color'],
    mixins: [],
    components: {},
    data () {
      return {}
    },
    computed: {
      computedColor () {
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
