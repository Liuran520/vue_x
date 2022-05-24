<template>
    <div>
        <h3>当前最新的count值为：{{$store.state.count}}</h3>
        <p>-----------</p>
         <h3>{{$store.getters.showNum}}</h3>
        <button @click='btnHandler1'>+1</button>
        <button @click='btnHandler2'>+N</button>
        <button @click='btnHandler3'>async+1</button>
        <button @click='btnHandler4'>async+N</button>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    methods: {
       btnHandler1(){
            // 触发 mutations 的第一种方式
            this.$store.commit('add')
       },
       btnHandler2(){
           this.$store.commit('addN',3)
       },
       btnHandler3(){
           // 触发 actions 的第一种方式
            this.$store.dispatch('AddAsync')
       },
       btnHandler4(){
           // 触发 actions 的第一种方式
           this.$store.dispatch('AddnAsync',3)
       }
    }
}
</script>
