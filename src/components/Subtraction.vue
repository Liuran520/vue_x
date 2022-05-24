<template>
  <div>
    <h3>当前最新的count值为：{{count}}</h3>
    <p>-------------</p>
    <h3>{{showNum}}</h3>
    <button @click='sub'>-1</button>
    <button @click='subN(5)'>-N</button>
    <button @click='SubAsync'>async-1</button>
    <button @click='SubnAsync'>async-N</button>
  </div>
</template>
<script>
// 1. 从 vuex 中按需导入 mapState 函数
// 1. 从 vuex 中按需导入 mapMutations 函数
// 1. 从 vuex 中按需导入 mapActions 函数
import { mapState,mapMutations,mapActions,mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  // 2. 将全局数据，映射为当前组件的计算属性
  computed: {
    ...mapState(["count"]),
    ...mapGetters(["showNum"])
  },
  methods: {
    // 2. 将指定的 mutations 函数，映射为当前组件的 methods 函数
    ...mapMutations(["sub","subN"]),
    // 2. 将指定的 actions 函数，映射为当前组件的 methods 函数
    ...mapActions(["SubAsync","SubnAsync"])
  }
};
</script>
