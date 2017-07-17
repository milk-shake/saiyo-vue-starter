<template>
 <p class="panel__tabs">
    <a v-for="(link, index) in items" :key="index" :href="link.href" v-bind:class="{'is-active': (active === link.href)}">{{ link.text }}</a>
  </p>
</template>
<style lang="scss" scoped>
@import '../../../scss/master';
.panel__tabs {
  @include has-sized-text('xsmall');
  @include has-border('tiny', 'grey', 'horz');
  @include has-border('tiny', 'grey', 'bottom');
  align-items: flex-end;
  display: flex;
  justify-content: center;

  a {
    @include has-colored-text('black');
    @include has-padding('xsmall', 'every');
    @include has-border('tiny', 'grey', 'bottom');
    margin-bottom: -1px;

    &.is-active {
      @include has-border('tiny', 'grey', 'bottom');
      @include has-colored-text('primary');
    }
  }

  &:first-child {
    @include has-border('tiny', 'primary', 'bottom');
  }
}
</style>
<script>
  export default {
    props: ['items', 'active'],
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
