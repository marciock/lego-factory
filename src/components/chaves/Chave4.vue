<template>
    <div>
     <div class="lego-keys">
      
        <LegoDrop :rodada="1"/>
     
        <LegoColchets />
      
    </div>
    <div class="lego-keys">
       
            
            <LegoDrop :rodada="2"/>
        
            <LegoColchets />
       
       
        
            <LegoDrop :rodada="3" />
        
            <LegoColchets />
        
        
      <div class="lego-keys">
        
          <LegoDrop :rodada="4" oculta="none"/>
      
          <LegoColchets />
        
      </div>
    </div>
</div>
</template>
<script>
import LegoDrop from '../legos/LegoDrop.vue';
import LegoColchets from '../legos/LegoColchets.vue';


export default {

   name:'Chave4',
   components:{
       LegoColchets,LegoDrop
   }
       
}
</script>