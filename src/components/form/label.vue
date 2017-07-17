<template>
<label><slot></slot></label>
</template>
<style lang="scss" scoped>
@import '../../scss/master';
.label {
  @include has-sized-text('small');
  @include has-colored-text('black');
  margin: 0 0 map-get($sizes, 'tiny');
  display: block;
  font-weight: 700;
}
</style>
<script>
  export default {
    props: ['text'],
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
