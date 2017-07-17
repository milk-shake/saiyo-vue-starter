<template>
  <span>
      <a class="nav__tab" v-if="link" href="link">
        <img :src="image.src" :alt="image.alt" v-if="image">
        {{ text }}
      </a>
      <div class="nav__tab" v-if="!link">
        <img :src="image.src" :alt="image.alt" v-if="image">
        {{ text }}
      </div>
  </span>
</template>
<style lang="scss" scoped>
@import '../../../scss/master';
.nav__tab {
  @include has-padding('xsmall', 'vert');
  @include has-padding('small', 'horz');
  align-items: center;
  display: flex;
  flex-grow: 0;
  flex-shrink: 0;
  justify-content: center;
  line-height: 1.5;
  border-bottom: 2px solid transparent;
  border-top: 2px solid transparent;
  &.is-active {
    border-color: inherit;
    border-top-color: transparent;
    color: map-get($colors, 'primary');
  }
}
a.nav_tab {
  &:hover {
    border-color: inherit;
    border-top-color: transparent;
    mix-blend-mode: initial;
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
