<template>
<article class="media" v-bind:class="{'is-large': isLarge}">
  <figure v-if="image" v-bind:class="{'media__left': !isRight, 'media__right': isRight }">
    <p class="image is-64x64">
      <img :src="image">
    </p>
  </figure>
  <div class="media__content">
    <div class="content">
      <slot name="content"></slot>
    </div>
    <slot name="footer"></slot>
  </div>
</article>
</template>
<style lang="scss" scoped>
@import '../../scss/master';
.media {
  @include has-padding('small', 'every');
  align-items: flex-start;
  display: flex;
  text-align: left;
  .content:not(:last-child) {
    margin-bottom: 0.75rem;
  }
  .media {
    border-top: 1px solid rgba($border, 0.5);
    display: flex;
    padding-top: 0.75rem;
    .content:not(:last-child),
    .control:not(:last-child) {
      margin-bottom: 0.5rem;
    }
    .media {
      padding-top: 0.5rem;

      & + .media {
        margin-top: 0.5rem;
      }
    }
  }
  &.is-large {
    & + .media {
      margin-top: 1.5rem;
      padding-top: 1.5rem;
    }
  }
}
.media__left {
  @include has-margin('medium', 'right');
  flex-basis: auto;
  flex-grow: 0;
  flex-shrink: 0;
}
.media__right {
  @include has-margin('medium', 'left');
  flex-basis: auto;
  flex-grow: 0;
  flex-shrink: 0;
}
.media__content {
  flex-basis: auto;
  flex-grow: 1;
  flex-shrink: 1;
  text-align: left;
}
</style>
<script>
  export default {
    props: ['is-large', 'is-right', 'image'],
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
