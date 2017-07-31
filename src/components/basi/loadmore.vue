<template>
  <div class="load">
    <div class="loadbox">
      <p v-if="status">正在加载...</p>
      <p v-if="!status">没有更多了...</p>
    </div>


  </div>
</template>
<script>
  export default{
    props:{
        status:{
          type:Boolean,
          default:true
        }
    }

  }
</script>
<style scoped lang="scss">
  .load{
      .loadbox{
        font-size :16px;
        text-align: center;
        line-height :40px;
      }
  }
</style>
