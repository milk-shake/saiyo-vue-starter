<script>
  export default {
    props: ['color'],
    mixins: [],
    components: {},
    data () {
      return {}
    },
    computed: {
      computedColor () {
        return (this.color) ? 'is-' + this.color : 'is-primary'
      }
    },
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
