<template>
  <div id="app">
   
     <ChavePrincipal :quantidade="qtd" />
   
  </div>
</template>

<script>
/*import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import '@popperjs/core/dist/umd/popper.js';
import 'bootstrap/dist/js/bootstrap.js';*/
 import './assets/style/lego.css';
import {mapState} from 'vuex';
import {mapActions} from 'vuex';

import ChavePrincipal from './components/chaves/ChavePrincipal.vue';
export default {
  name: 'App',
  components: {
    ChavePrincipal
  },
  computed:{
    ...mapState(['qtd'])
  },
  props:['campeonato'],
  methods:{
   ...mapActions(['qtdAction'])
  },
  created(){
    this.qtdAction();
  }
}
</script>


