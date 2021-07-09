<template>
    <div >
    <LegoHeader :status="texto" />
     <div class="lego-keys">
      
        <LegoDrop :rodada="1" />
     
        <LegoColchets />
        <LegoCurveDown />
      
    </div>
    <div class="lego-keys">
       
            
            <LegoDrop :rodada="2" />
        
            <LegoColchets />

             <LegoDrop :rodada="17" :referencia1="1" :referencia2="2" />
        
            <LegoColchets />
            <LegoCurveDown />

    </div> 
        
    <div class="lego-keys">
    
        <LegoDrop :rodada="3" />

        <LegoColchets />
        <LegoCurveDown />

        <LegoSpace />
        <LegoSpace />
         <LegoDrop :rodada="25" :referencia1="17" :referencia2="18" />
        
            <LegoColchets />
            <LegoCurveDown />


            
    </div>
     <div class="lego-keys">
    
        <LegoDrop :rodada="4" />

        <LegoColchets />

         <LegoDrop :rodada="18" :referencia1="3" :referencia2="4" />
        
        <LegoColchets />
        <LegoCurveUp />


            <LegoSpace />
            <LegoSpace />
            
            <LegoLine />

            <LegoSpace />
            <LegoSpace />
            <LegoSpace />
            

            
    </div>
     <div class="lego-keys">
    
        <LegoDrop :rodada="5" />

        <LegoColchets />
        <LegoCurveDown />


            <LegoSpace />
            <LegoSpace />
             <LegoSpace />
             <LegoSpace />
             <LegoSpace />
            
            <LegoDrop :rodada="29" :referencia1="25" :referencia2="26" />
             <LegoColchets />
             <LegoCurveDown />

          

        
            
    </div>
     <div class="lego-keys">
    
        <LegoDrop :rodada="6" />

        <LegoColchets />
         <LegoDrop :rodada="19" :referencia1="5" :referencia2="6" />
         <LegoColchets />
         <LegoCurveDown />
             <LegoSpace />
            <LegoSpace />
                      
            <LegoLine />

            
            <LegoSpace />
            <LegoSpace style="width:12.3rem;" />   
                      
            <LegoLine />

            
            
    </div>
     <div class="lego-keys">
    
        <LegoDrop :rodada="7" />

        <LegoColchets />
        <LegoCurveDown />

        <LegoSpace />
        <LegoSpace />
         <LegoDrop :rodada="26" :referencia1="19" :referencia2="20" />
    
        <LegoColchets />
        <LegoCurveUp />

        <LegoSpace />
        <LegoSpace  />   
                      
        <LegoLine />
            
    </div>
     <div class="lego-keys">
    
        <LegoDrop :rodada="8" />

        <LegoColchets />
         <LegoDrop :rodada="20 " :referencia1="7" :referencia2="8" />
         <LegoColchets />
         <LegoCurveUp />

         <LegoSpace />
         <LegoSpace />
         <LegoSpace />
         <LegoSpace />
        <LegoSpace />   
                    
        <LegoLine />

            
    </div>
     <div class="lego-keys">
    
        <LegoDrop :rodada="9" />

        <LegoColchets />
        <LegoCurveDown />

        <LegoSpace />
        <LegoSpace />
        <LegoSpace />
        <LegoSpace />
        <LegoSpace />
        <LegoSpace />
        <LegoSpace />
        <LegoSpace />

        <LegoDrop :rodada="31" :referencia1="29" :referencia2="30" />
        <LegoColchets />
        <LegoDrop :rodada="32" :referencia1="31" :referencia2="31" oculta="none" />
        
        
            
    </div>
     <div class="lego-keys">
    
        <LegoDrop :rodada="10" />

        <LegoColchets />
         <LegoDrop :rodada="21" :referencia1="9" :referencia2="10" />
         <LegoColchets />
         <LegoCurveDown />

        <LegoSpace />
        <LegoSpace />
        <LegoSpace />
        <LegoSpace />
        <LegoSpace />

        <LegoLine />

         
            
    </div>
    <div class="lego-keys">
    
        <LegoDrop :rodada="11" />

        <LegoColchets />
        <LegoCurveDown />

        <LegoSpace />
        <LegoSpace />
         <LegoDrop :rodada="27" :referencia1="21" :referencia2="22" />
        
        <LegoColchets />
        <LegoCurveDown />

        <LegoSpace />
        <LegoSpace />

        <LegoLine />

            
    </div>
     <div class="lego-keys">
    
        <LegoDrop :rodada="12" />

        <LegoColchets />
         <LegoDrop :rodada="22" :referencia1="11" :referencia2="12" />
         <LegoColchets />
         <LegoCurveUp />

        <LegoSpace />
        <LegoSpace />

        <LegoLine />

        <LegoSpace />
        <LegoSpace style="width:12.4rem;"  />
      

        <LegoLine />
         
         

            
    </div>
     <div class="lego-keys">
    
        <LegoDrop :rodada="13" />

        <LegoColchets />
        <LegoCurveDown />

        <LegoSpace />
        <LegoSpace />
        <LegoSpace />
        <LegoSpace />
        <LegoSpace />
        <LegoDrop :rodada="30" :referencia1="27" :referencia2="28" />
         <LegoColchets />
          <LegoCurveUp />
            
    </div>
     <div class="lego-keys">
    
        <LegoDrop :rodada="14" />

        <LegoColchets />
         <LegoDrop :rodada="23" :referencia1="13" :referencia2="14" />
         <LegoColchets />
         <LegoCurveDown />

         <LegoSpace />
        <LegoSpace />
        
        <LegoLine />
            
    </div>
     <div class="lego-keys">
    
        <LegoDrop :rodada="15" />

        <LegoColchets />
        <LegoCurveDown />

        <LegoSpace />
        <LegoSpace />
         <LegoDrop :rodada="28" :referencia1="23" :referencia2="24" />
        
        <LegoColchets />
        <LegoCurveUp />
       
            
    </div>
     <div class="lego-keys">
    
        <LegoDrop :rodada="16" />

        <LegoColchets />
         <LegoDrop :rodada="24" :referencia1="15" :referencia2="16" />
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
 
   name:'Chave32',
   components:{
      LegoColchets,LegoDrop,
       LegoCurveDown,
       LegoSpace,
       LegoCurveUp,
       LegoLine,
       LegoHeader
       
   },
   data:()=>{
       return{
           texto:[ '32ª de Finais','16ª de Finais', '8ª de Finais','Semifinais','Final' , 'Campeão']      
     
       }
   }
   
       
}
</script>