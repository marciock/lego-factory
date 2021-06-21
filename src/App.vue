<template>
  <div id="app">
   
     <ChavePrincipal :quantidade="8" />
   
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import '@popperjs/core/dist/umd/popper.js';
import 'bootstrap/dist/js/bootstrap.js';
 import './assets/style/lego.css';


import ChavePrincipal from './components/chaves/ChavePrincipal.vue';
export default {
  name: 'App',
  components: {
    ChavePrincipal
  },
  props:['campeonato'],
  methods:{
    teste(){
       const div=this.campeonato;

       console.log(div)
    }
  },
  mounted(){
    this.teste();
  }
}
</script>


