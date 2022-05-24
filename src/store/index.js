import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count:0
  },
//   Getter 用于对 Store 中的数据进行加工处理形成新的数据。
// Getter 可以对 Store 中已有的数据加工处理之后形成新的数据，类似 Vue 的计算属性。
// Store 中数据发生变化，Getter 的数据也会跟着变化。
  getters: {
    showNum: state => {
      return '当前最新的数量是【'+ state.count +'】'
      }
  },
  //只有mutations中定义的函数，才有权修改state中的数据
  mutations: {
      add(state){
        // 变更状态
        state.count++;
      },
      //增加N
      addN(state,step){
        state.count+=step
      },
      //减等于一
      sub(state){
         // 变更状态
        state.count--;
      },
      //减N
      subN(state,step){
        state.count-=step
      }

  },
// Action 用于处理异步任务。
// 如果通过异步操作变更数据，必须通过 Action，而不能使用 Mutation，但是在 Action 中还是要通过触发
// Mutation 的方式间接变更数据。
  actions: {
    AddAsync(context){
      setTimeout(() => {
        //add是mutations的函数
         context.commit('add')
      }, 1000);
    },
    AddnAsync(context,step){
      setTimeout(() => {
         context.commit('addN',step)
      }, 1000);
    },
    SubAsync(context){
      setTimeout(() => {
        context.commit('sub')
      }, 1000);
    },
    SubnAsync(context,step){
        setTimeout(() => {
          context.commit('subN',10)
        }, 1000);
    }
  },
  modules: {
  }
})
