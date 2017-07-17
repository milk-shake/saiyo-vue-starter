<template>
<sai-field>
  <sai-label class="label">{{ label }}</sai-label>
  <p class="control">
    <span class="icon is-small is-left" v-if="icon">
      <i class="fa" v-bind:class="computedIcon"></i>
    </span>
    <input class="input" :type="type" :placeholder="placeholder" :class="`${computedColor} ${computedSize}`" />
  </p>
</sai-field>
</template>
<style lang="scss" scoped>
@import '../../scss/master';
.input {
  @include input;
  max-width: 100%;
  width: 100%;
  &[type="search"] {
    @include has-rounded-corners('huge');
    @include has-padding('small', 'left');
  }
  @each $name, $color in $colors {
    &.is-#{$name} {
      @include has-border('tiny', $name, 'every');
    }
  }
  &.is-small {
    @include control-small;
  }
  &.is-medium {
    @include control-medium;
  }
  &.is-large {
    @include control-large;
  }
  &.is-inline {
    display: inline;
  }
}
</style>
<script>
  import saiField from './field'
  import saiLabel from './label'
  export default {
    props: ['label', 'type', 'placeholder', 'icon', 'color', 'size', 'inline'],
    mixins: [],
    components: { saiField, saiLabel },
    data () {
      return {}
    },
    computed: {
      computedColor () {
        return (this.color) ? 'is-' + this.color : ''
      },
      computedSize () {
        return (this.size) ? 'is-' + this.size : 'is-medium'
      },
      computedIcon () {
        return (this.icon) ? 'fa-' + this.icon : 'fa-user'
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
