<template>

<div class="header">
	<div>
    <span v-if="show" @click="back">返回</span>
    {{title}}</div>
</div>

</template>
<script>

	export default{
		name:'header',
    props:{
      title:{
        type:String,
        default:'豆瓣电影'
      },
      show:{
        type:Boolean,
        default:false,
      }
    },
    methods:{
		    back(){
          this.$router.back(1)
        }
    }
	}

</script>

<style  lang="scss">
.header{
	line-height: 40px;
	background: #42bd56;
	line-height: 40px;
  text-align: center;
  font-size: 0.5rem;
  color : #fff;
  span{
    position: absolute;
    left :10px;
  }
}

</style>
