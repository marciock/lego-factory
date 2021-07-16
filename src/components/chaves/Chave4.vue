<template>
    <div >
    
        <LegoHeader :status="texto" />

    


     <div class="lego-keys">
      
        <LegoDrop :rodada="1" principal="true"/>
     
        <LegoColchets />
        <LegoCurveDown />
      
    </div>
    <div class="lego-keys">
       
            
            <LegoDrop :rodada="2"  principal="true" />
        
            <LegoColchets />
       
        
            <LegoDrop :rodada="3" :referencia1="1" :referencia2="2" read="true"/>
        
            <LegoColchets />
        
        
      <div class="lego-keys">
        
          <LegoDrop :rodada="4" oculta="none" :referencia1="3" :referencia2="3" final="true" read="true"/>
      
          
        
      </div>
    </div>
</div>
</template>
<script>
import LegoDrop from '../legos/LegoDrop.vue';
import LegoColchets from '../legos/LegoColchets.vue';
import LegoCurveDown from '../legos/LegoCurveDown.vue';
import LegoHeader from '../legos/LegoHeader.vue';




 
export default {
 
   name:'Chave4',
   components:{
       LegoColchets,
       LegoDrop,
       LegoCurveDown,
       LegoHeader
       
   },
   data:()=>{
       return{
           texto:[ '4ª de Finais', 'Final' , 'Campeão']      
     
       }
   }
  
   
       
}
</script>