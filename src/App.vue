<template>
  <div>
    <my-addition></my-addition>
    <p>---------------------------------</p>
    <my-subtraction></my-subtraction>
  </div>
</template>
<script>
import Addittion from './components/Addittion.vue'
import Substration from './components/Subtraction.vue'
export default {
   data(){
     return{
       
     }
   },
   components: {
     'my-addition':Addittion,
     'my-subtraction':Substration
   }
}
</script>
