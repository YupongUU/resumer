export default {
    name: 'ResumeEditor',
    computed: {
      count () {
        return this.$store.state.count
      },
      selected:{
        get(){
          return this.$store.state.selected
        },
        set(value){
          return this.$store.commit('switchTab', value)
        }
      },
      resume (){
        return this.$store.state.resume
      }
    },
    methods: {
      add (){
        this.$store.commit('increment')
      }
    }
  }