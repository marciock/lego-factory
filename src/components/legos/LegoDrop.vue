<template>
    <div>
      <div class="lego-wrapper">
        <div class="lego-height">
               <h4><strong>Rodada -{{rodada}} </strong></h4>
            </div>
    
    
            <div class="lego-height">
              <span> &#32;</span>
            </div>
      </div>
        <div class="lego-wrapper">
           
                <div class="form-group lego-height">
                   <select class="form-control player" data-id="jogador1" ref="jogador1" :anterior="referencia1">
                     <option value=""></option>
                     <option  v-for="(j,i) in jogadores " :key="i" :value="j.id">{{j.nome}}</option>
                     

                   </select>
                </div>
        
        
                <div class="form-group lego-height">
                    <input type="text" class="form-control point" ref="pontos1" v-on:blur="carregaRef()">
                </div>
        
         </div>
         <div class="lego-wrapper">
           
                <div class="form-group lego-height" v-show="oculta !=='none'" >
                 <select class="form-control player" data-id="jogador2"  ref="jogador2" :anterior="referencia2">
                    <option value=""></option>
                   <option v-for="(j,i) in jogadores " :key="i" :value="j.id">{{j.nome}}</option>
                   
                 </select>
                </div>
        
        
                <div class="form-group lego-height" v-show="oculta!=='none'">
                    <input type="text" class="form-control point" ref="pontos2" v-on:blur="carregaRef()">
                </div>
        
         </div>
         <div class="lego-wrapper lego-height">
               <div class="form-group player">
                 <input type="datetime-local" class="form-control" ref="dateTime">
                </div>
    
                <div class="lego-height">
                    <button type="button" class="btn btn-success rounded-circle " ref="butonSave">
                        <span class="fa fa-save"></span>]
                    </button>
                </div>
         </div>
    </div>
</template>
<script>
   import {mapState} from 'vuex';
   import {mapActions} from 'vuex';
   

export default {
    name:'LegoDrop',
    props:{
      rodada:Number,
      oculta:String,
      referencia1:Number,
      referencia2:Number,
      campeonatos:Number,
      anterior:Number
      },
      data:()=>{
        return{
          store:'',
          jogador:'',
                  
         
        }
      },

    computed:{
      ...mapState(['rodadas','jogadores'])
    },
    methods:{
      ...mapActions(['rodadaAction','jogadoresAction','campeonatoAction']),
      carregaJogador(){
      // console.log(this.campeonatos)
       const data={torneio:this.store.torneio}
        const url='instituicao/jogadores.php';
        const payload={url:url,data:data}
        this.jogadoresAction(payload);
      },
      carregaRef(){
        
        const rod=this.rodada;
        const r=document.querySelector(`[anterior="${rod}"]`)

        const jogador1=this.$refs.jogador1.selectedIndex;
        const jogador2=this.$refs.jogador2.selectedIndex;

        const pontos1=this.$refs.pontos1.value;
        const pontos2=this.$refs.pontos2.value;

        const data=[
          {
            jogador:jogador1,
            pontos:pontos1
          },
          {
            jogador:jogador2,
            pontos:pontos2
            }
          ]

          const val1=data[0].pontos;
          const val2=data[1].pontos;

          let max=Math.max(val1,val2);

          max=`${max}`;

          const find=data.find(f=>f.pontos===max)
          
          if(find !==undefined){
            r.selectedIndex=find.jogador;
           // console.log(r.selectedIndex)
            
          }
            console.log(find)
            
                 
      }
    },
    mounted(){

     if(localStorage.getItem('store')){
      this.store=JSON.parse(localStorage.getItem('store'));
      
    }

      
     
      this.carregaJogador();
    },
    created(){

       

       
      
      
    }

    
}
</script>
