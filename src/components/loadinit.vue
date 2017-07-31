<template>
  <div class="loading">
    <div class="welcome">
      <div class="welcome-wrapper">
        <div class="smile">^_^</div>
        <div class="date">{{date}}</div>
        <div class="test">遇见你，真美好</div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    computed: {
      date() {
        let now = new Date();
        const week = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
        let currentWeek = week[now.getDay()]; // 获取当天星期
        let year = now.getFullYear(); // 当前年
        let month = now.getMonth()+1; // 月
        let day = now.getDate(); // 日
        return `${year}年${month}月${day}日，${currentWeek}`;
      }
    }
  };
</script>

<style scoped lang="scss">
.loading{
  position:fixed;
  top:0;
  bottom:0;
  left :0;
  right:0;
  font-size :16px;
  z-index: 999;
  background: #fff;
  .welcome{
    width :100;
    height: 50%;
    .welcome-wrapper{
      position: absolute;
      top: 25%;
      left: 50%;
      -webkit-transform: translate(-50%);
      /* transform: translate(-50%); */
      text-align: center;
      color: #333;
      .smile{
        color: #42bd56;
        font-size: 50px;
        white-space: nowrap;
      }
      .date{
        margin: 30px 0 20px;
        white-space: nowrap;
      }
    }
  }
}

</style>
