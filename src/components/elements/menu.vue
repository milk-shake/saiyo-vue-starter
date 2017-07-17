<template>
<aside class="menu">
  <sai-menu-list v-for="(item, index) in menu" :key="index" :items="item.items" :label="item.label"></sai-menu-list>
</aside>
</template>
<style lang="scss" scoped>
@import '../../scss/master';
.menu {
  font-size: inherit;
}
</style>
<script>
  import SaiMenuList from './menu/menu-list'
  export default {
    props: ['menu'],
    mixins: [],
    components: { SaiMenuList },
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
