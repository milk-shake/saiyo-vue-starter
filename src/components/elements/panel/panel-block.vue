<template>
<a class="panel__block" href="link">
  <span class="panel__icon" v-if="icon">
    <i class="fa" :class="`fa-${icon}`"></i>
  </span>
  {{ text }}
</a>
</template>
<style lang="scss" scoped>
@import '../../../scss/master';
.panel__block {
  @include has-border('tiny', 'grey', 'horz');
  @include has-border('tiny', 'grey', 'bottom');
  @include has-padding('xsmall', 'vert');
  @include has-padding('xsmall', 'horz');
  @include has-colored-text('black');
  align-items: center;
  display: flex;
  justify-content: flex-start;

  input[type="checkbox"] {
    @include has-margin('xsmall', 'right');
  }

  & > .control {
    flex-grow: 1;
    flex-shrink: 1;
    width: 100%;
  }

  &.is-wrapped {
    flex-wrap: wrap;
  }

  &.is-active {
    @include has-border('tiny', 'primary', 'left');
    @include has-colored-text('primary');

    .panel__icon {
      @include has-colored-text('primary');
    }
  }

  &:first-child {
    @include has-border('tiny', 'primary', 'top');
  }
}

a.panel__block,
label.panel__block {
  cursor: pointer;

  &:hover {
    @include has-colored-text('white');
    background-color: map-get($colors, 'black');
  }
}
</style>
<script>
  export default {
    props: ['link', 'icon', 'text'],
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
