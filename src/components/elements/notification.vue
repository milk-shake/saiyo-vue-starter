<template>
<div class="notification" :class="computedColor">
  <slot></slot>
</div>
</template>
<style lang="scss" scoped>
@import '../../scss/master';
.notification {
  @include has-padding('large', 'vert');
  @include has-padding('medium', 'horz');
  @include generate-color-classes();
  background-color: inherit;
  border-radius: $radius;
  position: relative;
  
  a:not(.button) {
    color: currentColor;
    text-decoration: underline;
  }
  code,
  pre {
    background: $white;
  }
  pre code {
    background: transparent;
  }
  & > .delete {
    position: absolute;
    right: 0.5em;
    top: 0.5em;
  }
  .title,
  .subtitle,
  .content {
    color: inherit;
  }
}
</style>
<script>
  import ComputedColor from '../../mixins/computed-color'
  export default {
    props: [],
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
