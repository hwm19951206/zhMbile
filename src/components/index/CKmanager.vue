<template>
    <div class="package">
        <header>
            <div class="zh_ch">
                <img src="../../assets/img/word.png" alt />
            </div>
            <div class="zh_en">
                <img src="../../assets/img/eng.png" alt />
            </div>
        </header>
        <section>
            <div class="todo_box">
                <div class="todo_img">
                    <img src="../../assets/img/CKGL/code.png" alt />
                </div>
                <span class="todo_num">扫码查询</span>
            </div>
            <div class="item_box">
                <li>
                    <img src="../../assets/img/CKGL/dh.png" alt />
                    <span>到货验收</span>
                </li>
                <li>
                    <img src="../../assets/img/CKGL/rk.png" alt />
                    <span>入库登记</span>
                </li>
                <li>
                    <img src="../../assets/img/CKGL/ck.png" alt />
                    <span>出库扫码</span>
                </li>
                <li style="margin-top: 0.2rem">
                    <img src="../../assets/img/CKGL/pd.png" alt />
                    <span>盘点</span>
                </li>
                <li style="margin-top: 0.2rem">
                    <img src="../../assets/img/CKGL/kc.png" alt />
                    <span>库存</span>
                </li>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: "ckgl"
    };
</script>

<style scoped lang="less">
    .package {
        display: flex;
        justify-content: center;
    }
    header {
        position: fixed;
        width: 3.28rem;
        height: 1.593rem;
        margin: 0.26rem auto 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0.14rem;
        background: linear-gradient(
                90deg,
                rgba(105, 144, 246, 1) 0%,
                rgba(82, 111, 241, 1) 100%
        );
        border-radius: 0.066rem;
        .zh_ch {
            width: 1.966rem;
            height: 0.186rem;
            img {
                width: 100%;
            }
        }
        .zh_en {
            width: 2.903rem;
            height: 0.236rem;
            margin-top: 0.063rem;
            img {
                width: 100%;
            }
        }
    }
    section {
        width: 100%;
        position: relative;
        z-index: 10;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        top: 1.2rem;
        .todo_box{
            width: 1.503rem;
            height: 1.046rem;
            background:rgba(191,191,191,0.5);
            border-radius:0.06rem;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            .todo_word{
                font-size: 0.18rem;
            }
            .todo_img{
                margin-top: 0.1rem;
                width: 0.35rem;
                img{
                    width: 100%;
                }
            }
            .todo_num{
                font-size: 0.18rem;
                margin-top: 0.106rem;
                font-family:Adobe Heiti Std;
                font-weight:normal;
                color:rgba(26,26,26,1);
            }
        }
        .item_box{
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            padding: 0.433rem 0.296rem 0 0.296rem;
            li{
                width: 0.816rem;
                height: 0.806rem;
                display: flex;
                justify-content: center;
                flex-direction: column;
                align-items: center;
                img{
                    width: 100%;
                }
            }
        }
    }
</style>
