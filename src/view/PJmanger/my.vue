<template>
    <div class="my">
        <CKmanager v-show="userShow==1"></CKmanager>
        <PJmanager v-show="userShow==3"></PJmanager>
        <JCmanager v-show="userShow==2"></JCmanager>
    </div>
</template>

<script>
    import PJmanager from "../../components/index/PJmanager";
    import CKmanager from "../../components/index/CKmanager";
    import JCmanager from "../../components/index/JCmanager";
    export default {
        name: "My",
        components:{
            PJmanager,
            CKmanager,
            JCmanager
        },
        data(){
            return {
                userShow:Number
            }
        },
        mounted() {
            var user=JSON.parse(localStorage.getItem('role'))
            console.log(user)
            var wz='wzz'
            var jc='jcz'
            var xm='xmjl'
            user.data.forEach(item=>{
                if(item.code.indexOf(wz)!=-1){
                    this.userShow=1
                }else if(item.code.indexOf(jc)!=-1){
                    this.userShow=2
                }else if(item.code.indexOf(xm)!=-1){
                    this.userShow=3
                }
            })
        }
    }
</script>

<style scoped>

</style>