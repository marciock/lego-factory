<template>
    <div>
         <LegoHeader :status="texto" />
      <div class="lego-keys">
      
        <LegoDrop :rodada="1"/>
     
        <LegoColchets />

        <LegoCurveDown />
      
    </div>  
     <div class="lego-keys">
      
        <LegoDrop :rodada="2"/>
     
        <LegoColchets />

        <LegoDrop :rodada="9" :referencia1="1" :referencia2="2"/>
     
        <LegoColchets />
         <LegoCurveDown />

    </div>  
    <div class="lego-keys">
      
        <LegoDrop :rodada="3"/>
     
        <LegoColchets />
         <LegoCurveDown />

          <LegoSpace />
          <LegoSpace />
         <LegoDrop :rodada="13" :referencia1="9" :referencia2="10"/>
     
        <LegoColchets />
        <LegoCurveDown />
      
    </div> 
    <div class="lego-keys">
      
        <LegoDrop :rodada="4"/>
     
        <LegoColchets />

        <LegoDrop :rodada="10" :referencia1="3" :referencia2="4"/>
     
        <LegoColchets />
        <LegoCurveUp />

         
        
          <LegoSpace />
          <LegoSpace />
          <LegoLine />        
    </div> 
    <div class="lego-keys">
      
        <LegoDrop :rodada="5"/>
     
        <LegoColchets />
         <LegoCurveDown />

         <LegoSpace />
         <LegoSpace />
          <LegoSpace />
          <LegoSpace />
          <LegoSpace />
         <LegoDrop :rodada="15" :referencia1="13" :referencia2="14"/>
     
        <LegoColchets />
        <LegoDrop :rodada="16" :referencia1="15" :referencia2="15" oculta="none"/>
      
    </div> 
    <div class="lego-keys">
      
        <LegoDrop :rodada="6"/>
     
        <LegoColchets />
        <LegoDrop :rodada="11" :referencia1="5" :referencia2="6"/>
     
        <LegoColchets />
        <LegoCurveDown />

        <LegoSpace />
          <LegoSpace />
          <LegoLine />  
      
    </div> 
    <div class="lego-keys">
      
        <LegoDrop :rodada="7"/>
     
        <LegoColchets />
         <LegoCurveDown />


          <LegoSpace />
          <LegoSpace />
         <LegoDrop :rodada="14" :referencia1="11" :referencia2="12"/>
     
        <LegoColchets />
        <LegoCurveUp />
      
    </div>  
    <div class="lego-keys">
      
        <LegoDrop :rodada="8"/>
     
        <LegoColchets />
        <LegoDrop :rodada="12" :referencia1="7" :referencia2="8"/>
     
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
import LegoLine from '../legos/LegoLine.vue';

import LegoHeader from '../legos/LegoHeader.vue';

export default {

   name:'Chave16',
   components:{
       LegoColchets,LegoDrop,
       LegoCurveDown,LegoSpace,
       LegoCurveUp,
       LegoLine,
       LegoHeader
   },
   data:()=>{
       return{
           texto:[ '16ª de Finais', '8ª de Finais','Semifinais','Final' , 'Campeão']      
     
       }
   }
       
}
</script>