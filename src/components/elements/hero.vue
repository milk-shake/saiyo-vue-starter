<template>
  <section class="hero" v-bind:class="{'is-large': isLarge, 'is-fullheight': isFullheight}">
    <img class="hero__image" v-if="image" src="image" v-bind:class="{'is-transparent': isTransparent}" />
    <div class="hero__video" v-if="video" v-bind:class="{'is-transparent': isTransparent}">
      <video src="video" autoplay loop/>
    </div>
    <section class="hero__header">
      <slot name="header"></slot>
    </section>
    <section class="hero__body" v-bind:class="{'is-centered': isCentered, 'is-right': isRight}">
      <slot name="body"></slot>
    </section>
    <section class="hero__footer">
      <slot name="footer"></slot>
    </section>
  </section>
</template>
<style lang="scss" scoped>
@import '../../scss/master';
.hero {
  align-items: stretch;
  background-color: map-get($colors, 'white');
  color: inherit;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  z-index: 0;
  .nav {
    background: none;
  }
  &.is-large {
    @include tablet {
      .hero__body {
        @include has-padding('xlarge', 'vert');
        @include has-padding('xlarge', 'horz');
      }
    }
  }
  &.is-fullheight {
    height: 100vh;
    .hero__body {
      align-items: center;
      justify-content: center;
      display: flex;
      & > .container {
        flex-grow: 1;
        flex-shrink: 1;
      }
    }
  }
}
.hero__header {
  flex-grow: 0;
  flex-shrink: 0;
}
.hero__body {
  flex-grow: 1;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  @include has-padding('large', 'vert');
  @include has-padding('small', 'horz');

  &.is-centered {
    align-items: center;
  }
  &.is-right {
    align-items: flex-end;
  }
  @include from(map-get($media, 'widescreen')) {
    padding-left: 0;
    padding-right: 0;
  }
}
.hero__footer {
  flex-grow: 0;
  flex-shrink: 0;
}
.hero__buttons {
  margin-top: 1.5rem;
  @include mobile {
    .button {
      display: flex;
      &:not(:last-child) {
        margin-bottom: 0.75rem;
      }
    }
  }
  @include tablet {
    display: flex;
    justify-content: center;
    .button:not(:last-child) {
      margin-right: 1.5rem;
    }
  }
}
.hero__image {
  position: absolute;
  top: 0;
  object-fit: cover;
  height: 100%;
  width: 100%;
  z-index: -1;
  &.is-transparent {
    opacity: 0.7;
  }
}
.hero__video {
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  position: absolute;
  overflow: hidden;
  z-index: -1;
  video {
    left: 50%;
    min-height: 100%;
    min-width: 100%;
    position: absolute;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);
  }
  &.is-transparent {
    opacity: 0.3;
  }
  @include mobile {
    display: none;
  }
}

</style>
<script>
  export default {
    props: ['is-large', 'is-fullheight', 'is-right', 'is-centered', 'is-transparent', 'image', 'video'],
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
