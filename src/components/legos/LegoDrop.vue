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
                   <select class="form-select player" data-id="jogador1" >
                     <option  v-for="j in jogadores " :key="j.id" :value="j.id">{{j.nome}}</option>

                   </select>
                </div>
        
        
                <div class="form-group lego-height">
                    <input type="text" class="form-control point">
                </div>
        
         </div>
         <div class="lego-wrapper">
           
                <div class="form-group lego-height" v-show="oculta !=='none'" >
                 <select class="form-select player" data-id="jogador2" >
                   <option v-for="j in jogadores " :key="j.id" :value="j.id">{{j.nome}}</option>
                 </select>
                </div>
        
        
                <div class="form-group lego-height" v-show="oculta!=='none'">
                    <input type="text" class="form-control point">
                </div>
        
         </div>
         <div class="lego-wrapper lego-height">
               <div class="form-group player">
                 <input type="datetime-local" class="form-control">
                </div>
    
                <div class="lego-height">
                    <button type="button" class="btn btn-success rounded-circle ">
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
    props:['rodada','oculta','refrencia','campeonatos'],
    computed:{
      ...mapState(['rodadas','jogadores','campeonato'])
    },
    methods:{
      ...mapActions(['rodadaAction','jogadoresAction','campeonatoAction']),
      carregaJogador(){
       
        const url='instituicao/jogadores.php';
        this.jogadoresAction(url);
      }
    },
    created(){

     
     
     // this.campeonatoAction(this.campeonatos);
      this.carregaJogador();
    }
    
}
</script>
