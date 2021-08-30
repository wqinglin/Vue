<template>
  <div class="home">
    <h2>计步器：{{ $store.state.count }}</h2>
    <h2>计步器：{{ $store.state.info }}</h2>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addCount1(10)">另一种风格+10</button>
    <button @click="addStudent">增加学生</button>
    <button @click="update">响应式验证</button>
    <h2>---------modules中的内容-----------</h2>
    <h2>{{ $store.state.a.name }}</h2>
    <button @click="updateName">修改名字</button>
    <h2>{{ $store.getters.fullname }}</h2>
    <h2>{{ $store.getters.fullname2 }}</h2>
    <h2>{{ $store.getters.fullname3 }}</h2>
    <button @click="asyncupdateName">模块内异步</button>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import { INCREMENT } from "../store/mutations-types";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  methods: {
    increment() {
      this.$store.commit(INCREMENT);
    },
    decrement() {
      this.$store.commit("sub");
    },
    addCount(count) {
      //1.普通的提交封装
      this.$store.commit("incrementCount", count);
    },
    addCount1(count) {
      // 2.特殊的提交封装 事件类型+回调函数
      this.$store.commit({
        type: "incrementCount1",
        count,
      });
    },
    addStudent() {
      const stu = { id: 10, name: "Alley", age: 30 };
      this.$store.commit("addStu", stu);
    },
    update() {
      // this.$store.commit("updateInfo")
      //  this.$store.dispatch("aupdateInfo","我是payload")

      //  this.$store.dispatch("aupdateInfo",{
      //     //携带的信息和回调写在一起，太乱 不推荐
      //     message:"我是携带的信息",
      //     success:() => {
      //       console.log("里面已经执行完毕");
      //     }
      //   })

      this.$store.dispatch("aupdateInfo", "我是携带的信息").then((res) => {
        console.log("里面已经执行完毕");
        console.log(res);
      });
    },
    updateName() {
      this.$store.commit("updateName", "lisi");
    },
    asyncupdateName() {
      this.$store.dispatch("aUpdateName");
    },
  },
};
</script>
