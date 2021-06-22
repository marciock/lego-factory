<template>
  <div id="app">
   
     <ChavePrincipal :quantidade="store.qtd" />
   
  </div>
</template>

<script>
/*import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import '@popperjs/core/dist/umd/popper.js';
import 'bootstrap/dist/js/bootstrap.js';*/
 import './assets/style/lego.css';


import ChavePrincipal from './components/chaves/ChavePrincipal.vue';
export default {
  name: 'App',
  components: {
    ChavePrincipal
  },
  data:()=>{
    return{
      store:'',
      
    }
  },
  computed:{
    
  },
  
  
  mounted(){
    if(localStorage.getItem('store')){
      this.store=JSON.parse(localStorage.getItem('store'));
      
    }

    

  },
 
 
}
</script>


