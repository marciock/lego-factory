<template>
    <div>
        <Chave4 v-show="quantidade===4" />
        <Chave8 v-show="quantidade===8"  />
    </div>

</template>
<script>
import Chave4 from './Chave4.vue'
import Chave8 from './Chave8.vue';


export default {
  components: { Chave4,Chave8 },
   name:'ChavePrincipal',
   props:{quantidade:Number,
   campeonato:Number
   },
    mounted(){
       
    }

   
}
</script>
