<template>
    <div>
        <van-tabbar v-model="active">
            <van-tabbar-item icon="home-o" to="/my">首页</van-tabbar-item>
            <van-tabbar-item icon="search" to="/todos">待办</van-tabbar-item>
            <van-tabbar-item icon="friends-o" to="/login" @click="outLogin()">个人中心</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
    export default {
        name: "tabbar",
        data(){
            return{
                active:0
            }
        },
        methods:{
            outLogin(){
                localStorage.clear()
            }
        },
        created() {
                if(this.active==0){
                    this.$router.push({
                        path:'/my'
                    })
                }else if(this.active==1){
                    this.$router.push('/todos')
                }else{
                    this.$router.push('/login')
                }
        }
    }
</script>

<style scoped>

</style>