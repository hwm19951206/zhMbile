<template>
  <div id="app">
      <router-view />
    </div>
</template>
<script>
import Login from './Login'
export default {
  components:{
    Login
  },
  data() {
    return {
      Isshow: localStorage.getItem("username")
    };
  }
};
</script>

<style lang="less">
</style>
