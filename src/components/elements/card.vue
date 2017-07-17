<template>
  <div class="card">
    <div class="card__header">
      <slot name="header"></slot>
    </div>
    <div class="card__content">
      <slot name="content"></slot>
    </div>
    <div class="card__footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '../../scss/master';
.card {
  @include has-colored-bg('white');
  @include has-colored-text('black');
  @include has-shadow('tiny');
  @include has-rounded-corners('tiny');
  max-width: 100%;
  position: relative;
}

.card__header {
  border-bottom: map-get($sizes, 'tiny') solid map-get($colors, 'grey');
  align-items: stretch;
  display: flex;
}

.card__header-title {
  @include has-colored-text('black');
  @include has-padding('xsmall', 'every');
  align-items: center;
  display: flex;
  flex-grow: 1;
  font-weight: 700;
}

.card__header-icon {
  @include has-padding('xsmall', 'every');
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  color: currentColor;
}

.card__image {
  display: block;
  position: relative;
  width: 100%;
  object-fit: cover;
}

.card__content {
  @include has-padding('small', 'every');
  @include has-padding('medium', 'top');
}

.card__footer {
  @include has-border('tiny', 'grey', 'top');
  align-items: stretch;
  display: flex;
}

.card__footer-item {
  @include has-padding('xsmall', 'every');
  align-items: center;
  display: flex;
  flex-basis: 0;
  flex-grow: 1;
  flex-shrink: 0;
  justify-content: center;
  background-color: inherit;

  &:not(:last-child) {
    @include has-border('tiny', 'grey', 'right');
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
