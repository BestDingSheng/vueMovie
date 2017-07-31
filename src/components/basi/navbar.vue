<template>
  <div class="navbar">
    <ul>
      <router-link to="/home" active-class="act" tag="li">正在热映</router-link>
      <router-link to="/coming" active-class="act" tag="li">即将上映</router-link>
      <router-link to="/top250" active-class="act" tag="li">TOP250</router-link>
    </ul>
  </div>
</template>
<style scoped>
.navbar{
  width :100%;
  height: 40px;
  margin-bottom: 10px;

}
  ul{
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    list-style: none;
    margin:0;
    padding :0;
    margin-bottom: 10px;
  }
  li{
    list-style: none;
    line-height: 40px;
    text-align: center;
    flex :1;
    box-sizing: border-box;
  }

li.act{
  border-bottom: 2px solid #42bd56;
}

</style>
<script>
export default{

}

</script>
