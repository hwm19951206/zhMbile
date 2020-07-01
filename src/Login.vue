<template>
  <div class="bg_box">
    <header>
      <div class="logo_img">
        <img src="../src/assets/img/log1.png" alt />
      </div>
      <div class="logo_word">
        <img src="../src/assets/img/word.png" alt />
      </div>
    </header>
    <section>
      <van-form @submit="onSubmit" style="position:relative">
        <van-field
          v-model="username"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 16px;">
          <van-button round block type="info" @submit="onSubmit">登录</van-button>
        </div>
      </van-form>
    </section>
  </div>
</template>

<script>
  export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    onSubmit(values) {
      var data = { username: this.username, password: this.password };
      this.axios.post(this.uc + "/auth", data).then(res => {
        console.log(data)
        console.log(res.data)
        localStorage.setItem("token", res.data.token); // 存入一个值
        localStorage.setItem("username", res.data.username);
        localStorage.setItem("userId", res.data.userId);
        localStorage.setItem("account", res.data.account);
        this.getRoles(res.data.account)
      });
      console.log("submit", values);
    },
    getRoles(account){
      this.axios({
        method:'get',
        url:this.uc+"/api/role/v1/role/getRolesByUser",
        headers:{
          Authorization:'Bearer ' + localStorage.getItem("token")
        },
        params:{
          account
        }
      }).then(res=>{
        localStorage.setItem('role',JSON.stringify(res))
        const redirect = this.$route.query.redirect
        if(redirect){
          //存在回跳地址就回跳
          this.$router.push(redirect)
        }else{
          //否则就跳到默认的首页
          this.$router.push({
            name: 'Index'
          })
        }
      })
    }
  }
};
</script>

<style scoped lang='less'>
.bg_box {
  background-image: url("../src/assets/img/logo_bg1.png");
  width: 100%;
  height: 100%;
  position: fixed;
  header {
    width: 100%;
    display: flex;
    position: relative;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 1.026rem;
    .logo_img {
      width: 0.48rem;
      height: 0.403rem;
      img {
        width: 100%;
      }
    }
    .logo_word {
      width: 2.16rem;
      height: 0.22rem;
      margin-top: 0.1rem;
      img {
        width: 100%;
      }
    }
  }
  section {
    width: 100%;
    margin-top: 1rem;
  }
}
</style>

