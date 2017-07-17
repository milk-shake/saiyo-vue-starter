<template>
 <button class="button" :class="`${computedColor} ${computedSize} ${computedWidth} `">{{ text }}</button>
</template>
<style lang="scss" scoped>
@import '../../scss/master';
// The button sizes use mixins so they can be used at different breakpoints
@mixin button-small {
  @include has-sized-text('small');
  line-height: .6;
}

@mixin button-medium {
  @include has-sized-text('medium');
  line-height: .8;
}

@mixin button-large {
  @include has-sized-text('large');
}

.button {
  @include control;
  @include unselectable;
  @include has-colored-bg('white');
  @include has-border('tiny', 'grey', 'every');
  @include has-colored-text('black');
  @include has-padding('xsmall', 'every');
  @include has-padding('small', 'bottom');
  cursor: pointer;
  justify-content: center;
  text-align: center;
  white-space: nowrap;

  strong {
    color: inherit;
  }

  .icon {
    &,
    &.is-small,
    &.is-medium,
    &.is-large {
      height: 1.5em;
      width: 1.5em;
    }

    &:first-child:not(:last-child) {
      margin-left: calc(-0.375em - 1px);
      margin-right: 0.1875em;
    }

    &:last-child:not(:first-child) {
      margin-left: 0.1875em;
      margin-right: calc(-0.375em - 1px);
    }

    &:first-child:last-child {
      margin-left: calc(-0.375em - 1px);
      margin-right: calc(-0.375em - 1px);
    }
  }

  // States
  &:hover,
  &.is-hovered {
    @include has-border('tiny', 'black', 'every');
    @include has-colored-text('black');
  }

  &:focus,
  &.is-focused {
    // @include has-border('tiny', 'primary', 'every');
    // @include has-shadow('tiny');
    // @include has-colored-text('primary');
  }

  &:active,
  &.is-active {
    @include has-border('tiny', 'primary', 'every');
    @include has-colored-text('primary');
    box-shadow: inset 0 1px 2px rgba($black, 0.2);
  }

  &.is-link {
    @include has-colored-text('black');
    background-color: transparent;
    border-color: transparent;
    text-decoration: underline;

    &:hover,
    &.is-hovered,
    &:focus,
    &.is-focused,
    &:active,
    &.is-active {
      background-color: $background;
      color: $text-strong;
    }

    &[disabled] {
      background-color: transparent;
      border-color: transparent;
      box-shadow: none;
    }
  }

  &.is-group {
    border-radius: 0;

    &:first-of-type {
      border-top-left-radius: map-get($sizes, 'tiny');
      border-bottom-left-radius: map-get($sizes, 'tiny');
    }

    &:last-of-type {
      border-top-right-radius: map-get($sizes, 'tiny');
      border-bottom-right-radius: map-get($sizes, 'tiny');
    }

  }

  @each $name, $color in $colors {

    &.is-#{$name} {
      background-color: $color;
      border-color: transparent;
      color: findColorInvert($color);

      &:hover,
      &.is-hovered {
        background-color: darken($color, 2.5%);
        border-color: transparent;
        color: findColorInvert($color);
      }

      &:focus,
      &.is-focused {
        border-color: transparent;
        box-shadow: 0 0 0.5em rgba($color, 0.25);
        color: findColorInvert($color);
      }

      &:active,
      &.is-active {
        background-color: darken($color, 5%);
        border-color: transparent;
        box-shadow: inset 0 1px 2px rgba($black, 0.2);
        color: findColorInvert($color);
      }

      &[disabled] {
        background-color: $color;
        border-color: transparent;
        box-shadow: none;
      }

      &.is-inverted {
        background-color: findColorInvert($color);
        color: $color;

        &:hover {
          background-color: darken(findColorInvert($color), 5%);
        }

        &[disabled] {
          background-color: findColorInvert($color);
          border-color: transparent;
          box-shadow: none;
          color: $color;
        }
      }

      &.is-loading {
        &:after {
          border-color: transparent transparent findColorInvert($color) findColorInvert($color) !important;
        }
      }

      &.is-outlined {
        background-color: transparent;
        border-color: $color;
        color: $color;

        &:hover,
        &:focus {
          background-color: $color;
          border-color: $color;
          color: findColorInvert($color);
        }

        &.is-loading {
          &:after {
            border-color: transparent transparent $color $color !important;
          }
        }

        &[disabled] {
          background-color: transparent;
          border-color: $color;
          box-shadow: none;
          color: $color;
        }
      }

      &.is-inverted.is-outlined {
        background-color: transparent;
        border-color: findColorInvert($color);
        color: findColorInvert($color);

        &:hover,
        &:focus {
          background-color: findColorInvert($color);
          color: $color;
        }

        &[disabled] {
          background-color: transparent;
          border-color: findColorInvert($color);
          box-shadow: none;
          color: findColorInvert($color);
        }
      }
    }
  }

  // Sizes
  &.is-small {
    @include button-small;
  }

  &.is-medium {
    @include button-medium;
  }

  &.is-large {
    @include button-large;
  }

  // Modifiers
  &[disabled] {
    @include has-colored-bg('white');
    @include has-border('tiny', 'grey', 'every');
    box-shadow: none;
    opacity: 0.5;
  }

  &.is-fullwidth {
    display: flex;
    width: 100%;
  }

  &.is-loading {
    color: transparent !important;
    pointer-events: none;

    &:after {
      @include loader;
      @include center(1em);

      position: absolute !important;
    }
  }
}

// Adjustment for vertical spacing
button.button,
input[type="submit"].button {
  line-height: 1;
}

</style>
<script>
  export default {
    props: ['size', 'color', 'text', 'is-fullwidth'],
    mixins: [],
    components: {},
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
      computedWidth () {
        return (this.isFullwidth) ? 'is-fullwidth' : ''
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
