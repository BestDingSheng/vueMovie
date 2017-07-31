<template>
  <div>
    <div class="hello" v-if="error">
      <div class="title">
        {{title}}

      </div>
      <div class="img">
        <img :src="titleimg" alt="">
      </div>
      <p class="info">
        {{movieinfo}}
    </p>
      <div class="with">
        <button>看过{{wish_count}}</button>
        <button>想看</button>
      </div>
      <h2>{{title}}的剧情</h2>
      <div class="juqing">{{summary}}</div>
    </div>
    <div class="error_img" v-if="!error">
      <img src="../assets/404.jpg" alt="">
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import jsonp from 'jsonp'
  import axios from '../common/js/jsonp.js'
  import {mapGetters, mapActions} from 'vuex'
  export default {
    name: 'hello',
    data () {
      return {
        title: '',
        titleimg: '',
        movieinfo: '',
        summary: '',
        wish_count: '',
        error: true,
      }
    },
    deactivated(){
          this.error=true;
    },
    activated(){

      let vm = this;
      vm.setStatus(true);
      let id = this.$route.params.userId
      let url = 'https://api.douban.com/v2/movie/subject/' + id  // 详情
      jsonp(url, {
        param: 'callback',
        timeout: 3000,
      }, (err, res) => {
        if (err != null) {
          vm.error = false;
          vm.setStatus(false);
        }


        vm.title = res.original_title;
        vm.titleimg = res.images.large;

        let region = []; // 地区
        let genres = res.genres;  // 类型
        let daoyan = res.directors[0].name + '(导演)' // 导员
        let actor = []  // 演员
        region.push(res.countries[0]);
        for (let item in res.casts) {
          actor.push(res.casts[item].name)
        }
        vm.movieinfo = vm.info(region, genres, daoyan, actor); // 电影信息
        vm.wish_count = res.wish_count;
        vm.summary = res.summary;
        vm.setStatus(false);

      })


    },
    methods: {
      ...mapActions(['setStatus']),
      handleScroll () {
        this.scrolled = window.scrollY > 0;
        console.log(scrollY)
      },
      info(region, genres, director, actor){
        let arry = [].concat(region, genres, director, actor);
        return arry.join(' / ')
      }

    },
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  :focus
  {
    outline : none;
  }
  .juqing
  {
    line-height    : 20px;
    font-size      : 14px;
    color          : #9c9c9c;
    padding-bottom : 20px;
  }
  h2
  {
    color     : #aaa;
    font-size : 15px;
    margin    : 10px 0;
  }
  .hello
  {
    padding : 0 20px;
  }
  .title
  {
    font-size   : 16px;
    line-height : 40px;

  }
  .with
  {
    display         : flex;
    justify-content : space-between;
  }
  .with button
  {
    width         : 48%;
    border        : 1px solid #ffb712;
    background    : transparent;
    line-height   : 25px;
    color         : #ffb712;
    font-size     : 14px;
    border-radius : 5px;

  }
  .info
  {
    font-size   : 16px;
    margin      : 10px 0;
    line-height : 25px;
  }
  .img img
  {
    width         : 100%;
    display       : block;
    border-radius : 5px;
  }
  .error_img{
    width :100%;
    margin-top :100px;

  }
  .error_img img{
    width :100%;
    display : block;
  }
</style>
