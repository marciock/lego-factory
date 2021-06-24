<template>
    <div >
     <div class="lego-keys">
      
        <LegoDrop :rodada="1" :carregamento="filtro('1')"/>
     
        <LegoColchets />
        <LegoCurveDown />
      
    </div>
    <div class="lego-keys">
       
            
            <LegoDrop :rodada="2" :carregamento="filtro('2')"/>
        
            <LegoColchets />
       
        
            <LegoDrop :rodada="3" :referencia1="1" :referencia2="2" />
        
            <LegoColchets />
        
        
      <div class="lego-keys">
        
          <LegoDrop :rodada="4" oculta="none" :referencia1="3" :referencia2="3"/>
      
          
        
      </div>
    </div>
</div>
</template>
<script>
import LegoDrop from '../legos/LegoDrop.vue';
import LegoColchets from '../legos/LegoColchets.vue';
import LegoCurveDown from '../legos/LegoCurveDown.vue';


import Vue from 'vue';

 
export default {
 
   name:'Chave4',
   components:{
       LegoColchets,
       LegoDrop,
       LegoCurveDown
   },
   data:()=>{
     return{
       store:'',
       jogadores:''
     }
   },
   computed:{
       
          
   },
   methods:{
      open(data){
          Vue.http.post('instituicao/carrega_rodada.php',data).then(res=>{
              this.jogadores=res.body;
             // return this.jogadores;
          })
      },
      filtro(r){
         
         let data=[];
        
           for(let c of this.jogadores){

               data.push(c);
           }
         

          console.log(data);
            console.log(r)
        const result= data.filter(f=>
        {
          if(f.rodada===r){
             return f;
          }
        }
        );
        console.log(result);

          return result;
      }
       
   },
   mounted(){

         if(localStorage.getItem('store')){
      this.store=JSON.parse(localStorage.getItem('store'));
      
    }
     
     let data={torneio:this.store.torneio};

     this.open(data);
      
   }
   
       
}
</script>