<template>
   <div>
        <h2 class="title">{{message}}</h2>
        <button @click = "btnClick">点击</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
             message:"hello webpack"
        }
    },
    methods:{
        btnClick(){
            console.log("我输出了B");
        }
    }
}
</script>


<style>
    .title{
        color: aqua;
    }
</style>

