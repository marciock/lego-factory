<template>
  <div id="app">
    
      <LegoDrop />
   
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import '@popperjs/core/dist/umd/popper.js';
import 'bootstrap/dist/js/bootstrap.js';
 import './assets/style/lego.css';

import LegoDrop from './components/LegoDrop.vue';
export default {
  name: 'App',
  components: {
   LegoDrop
  }
}
</script>


