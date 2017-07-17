<template>
  <div class="sai-level__item">
    <slot></slot>
  </div>
</template>
<style lang="scss" scoped>
  @import '../../../scss/master';
  .sai-level__item {
  align-items: center;
  display: flex;
  flex-basis: auto;
  flex-grow: 0;
  flex-shrink: 0;
  justify-content: center;

  &:not(:last-child) {
    margin-right: map-get($sizes, 'xsmall');
  }

  .title,
  .subtitle {
    margin-bottom: 0;
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
