<template>
  <div class="well" :class="computedColor">
    <slot></slot>
  </div>
</template>
<style lang="scss" scoped>
.well {
  @include has-padding('large', 'every');
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

 @each $name, $color in $colors {
   &.is-#{$name} {
    @include has-colored-bg($name);
   }
 }
}
</style>
<script>
  import ComputedColor from '../../mixins/computed-color'
  export default {
    props: ['color'],
    mixins: [ ComputedColor ],
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