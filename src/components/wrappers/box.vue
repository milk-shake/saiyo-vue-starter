<template>
  <section class="sai-box">
    <slot></slot>
  </section>
</template>
<style lang="scss" scoped>
  @import '../../scss/master';
  .sai-box {
    @include has-colored-bg('white');
    @include has-padding('medium', 'every');
    @include has-rounded-corners('tiny');
    @include has-shadow('tiny');
    @include has-margin('medium', 'vert');
  }

  a.section {
    display: block;
    &:hover,
    &:focus {
      @include has-border('tiny', 'primary', 'every');
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
