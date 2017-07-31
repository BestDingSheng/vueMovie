<template>
  <div class="hello">
    <h1>{{title}}</h1>

    <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="0">
      <ul class="box">
        <router-link :to="{ name: 'user', params: { userId: movie.id }}" v-for='movie in movie' :key="movie.id"
                     tag="li">
          <div class="item">
            <div class="info-img">
              <img v-lazy="movie.image" class="" height="120" width="80">
            </div>
            <div class="info-desc">
              <p class="title">{{movie.title}}</p>
              <p  v-if="movie.average!==0"
                  :class="{ 'raking': true, 'siban':10>movie.average && movie.average>9,
              'si':9>=movie.average && movie.average>=8,
              'sanban':8>movie.average && movie.average>=7,
              'san':7>movie.average && movie.average>=6,
              'erban':6>movie.average && movie.average>=5,
              'er':5>movie.average && movie.average>=4,
              'yiban':4>movie.average && movie.average>=3,
              'yi':3>movie.average && movie.average>=2,
              }"
              >
                {{movie.average}}
                分
              </p>

              <p class="" v-if="movie.average==0">暂无评分</p>
              <div class="director">导演: {{movie.director}}</div>
              <div class="casts">主演: {{movie.casts}}</div>
              <div class="hasWatched">{{movie.collectCount}}人看过</div>
            </div>
          </div>
        </router-link>
      </ul>
      <v-load :status="!busy"></v-load>
    </div>
  </div>
</template>

<script>

  import {InfiniteScroll} from 'mint-ui';
  import BScroll from 'better-scroll'
  import jsonp from 'jsonp'
  import axios from '../common/js/jsonp.js'
  import loading from './basi/loadmore.vue'
  import {mapGetters,mapActions} from 'vuex'

  export default {
    name: 'hello',
    components: {
      'v-load': loading
    },
    data () {
      return {
        movie: [],
        title: '',
        busy: true,
        start:0,
      }
    },
    computed:{
      ...mapGetters(['getLoadStatus'])
    },
    deactivated(){
      this.busy=true;
    },
    mounted(){
      this.loadMore()
    },
    methods: {
      ...mapActions(['setStatus']),
      loadMore(){

        let vm = this;
        vm.load=true;
        let url = `https://api.douban.com/v2/movie/top250?start=${vm.start}&count=10` // 即将上映
        jsonp(url, {
          param: 'callback'
        }, (err, res) => {
          vm.start+=10;
          if(res.total>vm.start){
            vm.busy=false;
          }else{
            vm.busy=true;
          }
          vm.title = res.title;
          let list = res.subjects;
          list.forEach((item, index) => {
            let casts = item.casts;
            let name = '';
            for (let i in casts) {
              name += casts[i].name + ','
            }
            vm.movie.push({
              title: item.title,
              director: item.directors[0].name,
              casts: name.substring(0, name.length - 1),
              image: item.images.large,
              collectCount: item.collect_count,
              id: item.id,
              average:item.rating.average
            })
          })
          if(vm.start==10){
            setTimeout(() => {
              vm.$emit('loadFn')
            }, 2000)
          }

        })

      }
    },
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
