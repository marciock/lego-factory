<template>
    <div >
      
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
                   <select class="form-control player" data-id="jogador1" ref="jogador1" :anterior="referencia1" >
                     <option :value="recebimento.jogador1">{{recebimento.nome1}}</option>
                     <option  v-for="(j,i) in jogadores " :key="i" :value="j.id">{{j.nome}}</option>
                     

                   </select>
                </div>
        
        
                <div class="form-group lego-height">
                    <input type="text" class="form-control point" ref="pontos1" 
                    v-on:change="carregaRef()" v-on:click="selectPoint"
                     v-model="recebimento.pontos1" v-mask="'###'" >
                </div>
        
         </div>
         <div class="lego-wrapper">
           
                <div class="form-group lego-height" v-show="oculta !=='none'" >
                 <select class="form-control player" data-id="jogador2"  ref="jogador2" :anterior="referencia2"  >
                    <option :value="recebimento.jogador2">{{recebimento.nome2}}</option>
                   <option v-for="(j,i) in jogadores " :key="i" :value="j.id">{{j.nome}}</option>
                   
                 </select> 
                </div>
        
        
                <div class="form-group lego-height" v-show="oculta!=='none'">
                    <input type="text" class="form-control point" ref="pontos2" 
                    v-on:change="carregaRef()" v-on:click="selectPoint"
                    v-model="recebimento.pontos2" v-mask="'###'"  >
                </div>
        
         </div>
         <div class="lego-wrapper lego-height">
               <div class="form-group player">
                 <input type="datetime-local" class="form-control player" ref="dateTime" v-model="recebimento.data"  >
                
                </div>
    
                <div class="lego-height">
                    <button type="button" :class="btn" ref="butonSave" v-on:click="save">
                        <span class="fa fa-save"> </span>
                    </button>
                </div>
                
         </div>
         <div class="lego-wrapper lego-height">
           <input type="text" class="form-control player" ref="pontuacao" v-model="recebimento.pontuacao"  >
         </div>
         <toast-message :title="titleToast" :message="messagegeToast" v-show="timeToast===true" :posX="toastX" :posY="toastY"/>
     
    </div>
</template>
<script>
   import {mapState} from 'vuex';
   import {mapActions} from 'vuex';
   import Vue from 'vue';
   
   import ToastMessage from '../widgets/ToastMessage.vue';

export default {
    name:'LegoDrop',
    components:{
      ToastMessage
    },
    props:{
      rodada:Number,
      oculta:String,
      referencia1:Number,
      referencia2:Number,
      campeonatos:Number,
      anterior:Number,
     
      
      },
      data:()=>{
        return{
          store:'',
          titleToast:'',
          messagegeToast:'',
          timeToast:Boolean,
          toastX:'',
          toastY:'',
          btn:'btn btn-success rounded-pill',
          recebimento:{
             rodada:'',
            jogador1:'',
            pontos1:'0',
            nome1:'',
            jogador2:'',
            pontos2:'0',
            nome2:'',
            data:'',
            campeonato:'',
            quantidade:'',
            pontuacao:''
          }
         
                  
         
        }
      },

    computed:{
      ...mapState(['rodadas','jogadores'])
    },
    methods:{
      ...mapActions(['jogadoresAction','salvaRodada']),
      carregaJogador(){
      // console.log(this.campeonatos)
       const data={torneio:this.store.torneio}
        const url='instituicao/jogadores.php';
        const payload={url:url,data:data}
        this.jogadoresAction(payload);
      },
      selectPoint(e){
          e.target.select();
      },
      selectedPress(){

          const index1=this.$refs.jogador1.selectedIndex;
          const index2=this.$refs.jogador2.selectedIndex;

          this.$refs.jogador1.selectedIndex=index1;
          this.$refs.jogador2.selectedIndex=index2;
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

            this.recebimento.jogador2=r.value;
           
          }
           
           
                 
      },
      save(e){

          
        const btn=e.target;

           // this.jogo.jogador1=this.$refs.jogador1.value;
           // this.jogo.jogador2=this.$refs.jogador2.value;

            this.recebimento.jogador1=this.$refs.jogador1.value;
            this.recebimento.jogador2=this.$refs.jogador2.value;

           // console.log(JSON.stringify(this.jogo));
            // this.salvaRodada(JSON.stringify(this.jogo));
             this.salvaRodada(JSON.stringify(this.recebimento));

           

            if(this.btn==='btn btn-success rounded-pill'){
              
                this.timeToast=true;
                this.toastX=btn.left;
                this.toastY=btn.top;
                this.btn='btn btn-dark rounded-pill'
           
            
                 this.titleToast='Salvando Rodada - '+this.rodada;
                 this.messagegeToast='Rodada salva com sucesso';

                setTimeout(()=>{
                    this.timeToast=false;
                },2000)
            }else{

                //  this.salvaRodada(this.jogo);
                this.timeToast=true;
                this.toastX=btn.left;
                this.toastY=btn.top;

                 this.titleToast='Salvando Rodada - '+this.rodada;
                 this.messagegeToast='Rodada atualizada com sucesso';
                 setTimeout(()=>{
                    this.timeToast=false;
                },2000)
            }
         
      },
      convertDate(data){

          let today = new Date(data);
            let date = today.getFullYear() + '-' +
             (today.getMonth() + 1).toString().padStart(2, '0') + '-' +
               today.getDate().toString().padStart(2, '0');
            let time = today.getHours().toString().padStart(2, '0') + ':' + today.getMinutes().toString().padStart(2, '0');
              let juntaData=date + 'T' + time;
             this.recebimento.data=juntaData;

             //this.$refs.data.value=juntaData;

      },
       carregaRodada(payload){

            const data=payload;
            
             Vue.http.post('instituicao/carrega_rodada.php',data).then(res=>{
             //  console.log(res.body)
               let result=res.body;
               
               switch (result.length) {
                 case 0:
                    this.recebimento
                   
                   break;
                   case 1:
                      this.btn='btn btn-dark rounded-pill';
                     this.recebimento.rodada=result[0].rodada
                     this.recebimento.jogador1=result[0].jogador1
                     this.recebimento.pontos1=result[0].pontos1
                     this.recebimento.nome1=result[0].nome
                    // this.recebimento.jogador2='0'
                   //  this.recebimento.pontos2='0'
                     this.convertDate(result[0].data);
                     this.recebimento.campeonato=result[0].campeonato
                     this.recebimento.pontuacao=result[0].pontuacao
                   
                   break;
                   case 2:
                     this.btn='btn btn-dark rounded-pill';
                     this.recebimento.rodada=result[0].rodada

                      this.recebimento.jogador1=result[0].jogador1
                     this.recebimento.pontos1=result[0].pontos1
                     this.recebimento.nome1=result[0].nome

                     this.recebimento.jogador2=result[1].jogador2
                     this.recebimento.pontos2=result[1].pontos2
                     this.recebimento.nome2=result[1].nome

                    this.convertDate(result[0].data);
                     this.recebimento.campeonato=result[0].campeonato
                     this.recebimento.pontuacao=result[0].pontuacao


                    // this.jogo.pontos1=result[0].pontos1;
                   //  this.jogo.pontos2=result[1].pontos2;
                   
                   break;
               
                 default:
                   break;
               }
               
             });
                 
            
        },
      
    },
    mounted(){

     if(localStorage.getItem('store')){
      this.store=JSON.parse(localStorage.getItem('store'));
      
    }
      
      
     this.recebimento.rodada=`${this.rodada}`;
     this.recebimento.campeonato=`${this.store.torneio}`;
     this.recebimento.quantidade=`${this.store.qtd}`;

    // this.open();

      this.carregaJogador();
      this.carregaRodada({torneio:this.store.torneio,rodada:this.rodada});
 
     
    },
    

    
}
</script>
