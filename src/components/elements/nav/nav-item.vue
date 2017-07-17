<template>
<span>
  <a class="nav__item" v-if="link" href="link">
    <img :src="image.src" :alt="image.alt" v-if="image">
    <slot></slot>
  </a>
  <div class="nav__item" v-if="!link">
    <img :src="image.src" :alt="image.alt" v-if="image">
    <slot></slot>
  </div>
</span>
</template>
<style lang="scss" scoped>
@import '../../../scss/master';
.nav__item {
  @include has-padding('xsmall', 'vert');
  @include has-padding('small', 'horz');
  align-items: center;
  display: flex;
  flex-grow: 0;
  flex-shrink: 0;
  justify-content: center;
  line-height: 1.5;
}
a.nav__item {
  color: inherit;
  transition: background-color .3s ease-out;
  &:hover {
    transition: background-color .3s ease-out;
    background-color: rgba(#000, 0.1);
    mix-blend-mode: luminosity;
    span {
      isolation: isolate;
    }
  }
  &:active {
    transition: background-color .3s ease-out;
    background-color: rgba(map-get($colors, 'black'), 0.2);
  }
  &.is-active {
    color: inherit;
  }
}
</style>
<script>
  export default {
    props: ['text', 'link', 'image'],
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
