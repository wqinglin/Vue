export default {
    template:
    `
    <div>
        <h2>{{message}}</h2>
        <button @click = "btnClick">点击</button>
    </div>
    `,
    data(){
        return {
             message:"hello webpack"
        }
    },
    methods:{
        btnClick(){
            console.log("我输出了A");
        }
    }
}