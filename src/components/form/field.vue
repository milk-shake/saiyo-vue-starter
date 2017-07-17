<template>
  <div class="field">
    <slot></slot>
  </div>
</template>
<style lang="scss" scoped>
@import '../../scss/master';
.field {
  &:not(:last-child) {
    @include has-margin('large', 'bottom');
  }
  &.has-addons {
    display: flex;
    justify-content: flex-start;
    .control {
      margin-right: -1px;
      &:first-child {
        .button,
        .input,
        .select select {
          border-bottom-left-radius: map-get($sizes, 'tiny');
          border-top-left-radius: map-get($sizes, 'tiny');
        }
      }
      &:last-child {
        .button,
        .input,
        .select select {
          border-bottom-right-radius: map-get($sizes, 'tiny');
          border-top-right-radius: map-get($sizes, 'tiny');
        }
      }
      .button,
      .input,
      .select select {
        border-radius: 0;
        &:hover,
        &.is-hovered {
          z-index: 2;
        }
        &:focus,
        &.is-focused,
        &:active,
        &.is-active {
          z-index: 3;
          &:hover {
            z-index: 4;
          }
        }
      }
      &.is-expanded {
        flex-grow: 1;
        flex-shrink: 0;
      }
    }
    &.has-addons-centered {
      justify-content: center;
    }
    &.has-addons-right {
      justify-content: flex-end;
    }
    &.has-addons-fullwidth {
      .control {
        flex-grow: 1;
        flex-shrink: 0;
      }
    }
  }
  &.is-grouped {
    display: flex;
    justify-content: flex-start;
    & > .control {
      flex-basis: 0;
      flex-shrink: 0;
      &:not(:last-child) {
        margin-bottom: 0;
        margin-right: 0.75rem;
      }
      &.is-expanded {
        flex-grow: 1;
        flex-shrink: 1;
      }
    }
    &.is-grouped-centered {
      justify-content: center;
    }
    &.is-grouped-right {
      justify-content: flex-end;
    }
  }
  &.is-horizontal {
    @include tablet {
      display: flex;
    }
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
