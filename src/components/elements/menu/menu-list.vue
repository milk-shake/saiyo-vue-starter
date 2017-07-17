<template>
  <div>
    <p class="menu__label">
      {{ label }}
    </p>
    <ul class="menu__list">
      <li v-for="(item, index) in items" :key="index">
        <a v-if="item.url" :href="item.url">{{ item.title }}</a>
        <span v-if="!item.url">{{ item.title }}</span>
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
@import '../../../scss/master';
.menu__label {
  @include has-sized-text('xsmall');
  color: inherit;
  &:not(:first-child) {
    @include has-margin('small', 'top');
  }
  &:not(:last-child) {
    @include has-margin('small', 'bottom');
  }
}
.menu__list {
  line-height: 1.25;
  a {
    @include has-padding('xsmall', 'horz');
    @include has-padding('xsmall', 'vert');
    color: inherit;
    display: block;
    &:hover {
      @include has-colored-bg('black', 0.2);
      mix-blend-mode: luminosity;
      color: map-get($colors, 'white');
    }
    &.is-active {
      @include has-colored-bg('primary');
    }
  }
  li {
    ul {
      @include has-border('tiny', 'grey', 'left');
      @include has-margin('xsmall', 'every');
      @include has-padding('xsmall', 'left');
    }
  }
}
</style>
<script>
  export default {
    props: ['label', 'items'],
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
