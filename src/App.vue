<template>
  <div id="app">
    <v-header :title="title" :show="back"></v-header>
    <v-nav v-if="isshou"></v-nav>
    <v-load v-if="loading"></v-load>
    <v-loading v-if="getLoadStatus"></v-loading>
    <keep-alive>
      <router-view @loadFn="loadFn"></router-view>
    </keep-alive>

  </div>
</template>

<script>
  import header from './components/basi/Header'
  import nav from './components/basi/navbar.vue'
  import load from './components/loadinit.vue'
  import loading from './components/basi/loading.vue'
  import {mapGetters,mapActions} from 'vuex'

  export default {
    name: 'app',
    data(){
        return{
          isshou:true,
          loading:true,
          title:'豆瓣电影',
          back:false,
        }
    },
    computed:{
      ...mapGetters(['getLoadStatus'])
    },
    components: {
      'v-header': header,
      'v-nav': nav,
      'v-load':load,
      'v-loading':loading
    },
    methods:{
        loadFn(){
            return this.loading=false;
        }
    },
    watch:{
        '$route'(to,from){
          if(to.path.indexOf('user')=='-1'){
            this.isshou=true;
            this.title='豆瓣电影';
            this.back=false;
          }else{
            this.isshou=false;
            this.title='电影详情'
            this.back=true;
          }
        }
    }

  }
</script>

<style>

</style>
