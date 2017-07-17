<template>
<span>
  <a class="nav__item" v-if="link" href="link">
    <img :src="image.src" :alt="image.alt" v-if="image">
    {{ text }}
  </a>
  <div class="nav__item" v-if="!link">
    <img :src="image.src" :alt="image.alt" v-if="image">
    {{ text }}
  </div>
</span>

</template>
<style lang="scss" scoped>
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
