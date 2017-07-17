<template>
<article class="message" :class="computedColor">
  <div class="message__header">
    <slot name="header"></slot>
  </div>
  <div class="message__body">
    <slot name="body"></slot>
  </div>
</article>
</template>
<style lang="scss" scoped>
@import '../../scss/master';
.message {
  @include has-margin('xlarge', 'vert');
  @include has-rounded-corners('xsmall');

  @each $name, $color in $colors {
    $color-lightning: max(100% - lightness($color) - 2%, 0%);
    $color-luminance: colorLuminance($color);
    $darken-percentage: $color-luminance * 70%;
    $desaturate-percentage: $color-luminance * 30%;

    &.is-#{$name} {
      background-color: lighten($color, $color-lightning);

      .message__header {
        background-color: $color;
        color: findColorInvert($color);
      }

      .message__body {
        border-color: $color;
        color: desaturate(darken($color, $darken-percentage), $desaturate-percentage);
      }
    }
  }
}
.message__header {
  @include has-padding('tiny', 'vert');
  @include has-padding('small', 'horz');
  align-items: center;
  background-color: inherit;
  border-radius: map-get($sizes, 'xsmall') map-get($sizes, 'xsmall') 0 0;
  color: inherit;
  display: flex;
  justify-content: space-between;
  position: relative;
  max-width: none;

  a,
  strong {
    color: inherit;
  }

  & + .message__body {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-top: none;
  }
}
.message__body {
  @include has-padding('small', 'every');
  @include has-rounded-corners('xsmall');
  max-width: none;
  a {
    text-decoration: underline;
  }
  code,
  pre {
    @include has-colored-bg('white');
  }
  pre code {
    background: transparent;
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
