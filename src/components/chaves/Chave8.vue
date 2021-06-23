<template>
    <div>
     <div class="lego-keys">
      
        <LegoDrop :rodada="1"/>
     
        <LegoColchets />

        <LegoCurveDown />
      
    </div>
    <div class="lego-keys">
        
            
            <LegoDrop :rodada="2"/>
        
            <LegoColchets />
        

        
            
            <LegoDrop :rodada="5" :referencia1="1" :referencia2="2"/>
        
            <LegoColchets />
             <LegoCurveDown />
        
      
    </div>
    <div class="lego-keys">
        
            <LegoDrop :rodada="3"/>
        
            <LegoColchets />
             <LegoCurveDown />

             <LegoSpace />
             <LegoSpace />  
             
              <LegoDrop :rodada="7" :referencia1="5" :referencia2="6"/>
               <LegoColchets />

             <LegoDrop :rodada="8" :referencia1="7" :referencia2="7" oculta="none"/>
        
    </div>
    <div class="lego-keys">
        
          <LegoDrop :rodada="4" />
      
          <LegoColchets />

           <LegoDrop :rodada="6"  :referencia1="3" :referencia2="4"/>
      
          <LegoColchets />
          <LegoCurveUp />
        
    </div>
</div>
</template>
<script>


import LegoDrop from '../legos/LegoDrop.vue';
import LegoColchets from '../legos/LegoColchets.vue';
import LegoCurveDown from '../legos/LegoCurveDown.vue';
import LegoSpace from '../legos/LegoSpace.vue';
import LegoCurveUp from '../legos/LegoCurveUp.vue';

export default {

   name:'Chave8',
   components:{
       LegoColchets,LegoDrop,
       LegoCurveDown,LegoSpace,
       LegoCurveUp
   }
       
}
</script>