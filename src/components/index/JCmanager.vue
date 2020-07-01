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
                <span class="todo_word">待办事项</span>
                <div class="todo_img">
                    <img src="../../assets/img/line.png" alt />
                </div>
                <span class="todo_num">13</span>
            </div>
            <div class="item_box">
                <li>
                    <img src="../../assets/img/JCJL/wz.png" alt />
                    <span>物资库存</span>
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
        top: 1rem;
        .todo_box{
            width: 1.046rem;
            height: 1.046rem;
            border-radius: 50%;
            background:rgba(191,191,191,0.5);
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            .todo_word{
                font-size: 0.18rem;
            }
            .todo_img{
                margin-top: 0.066rem;
                width: 0.87rem;
                height: 0.036rem;
                img{
                    width: 100%;
                }
            }
            .todo_num{
                font-size: 0.2rem;
                margin-top: 0.106rem;
                color:rgba(251,54,44,1);
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
