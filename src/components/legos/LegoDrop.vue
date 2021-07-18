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
                   <select class="form-control player" data-id="jogador1" ref="jogador1" :anterior="referencia1" v-if="!read" :data-principal="principal" v-on:change="nameValidate">
                     <option :value="recebimento.jogador1">{{recebimento.nome1}}</option>
                     <option  v-for="(j,i) in jogadores " :key="i" :value="j.id">{{j.nome}}</option>
                  </select>
                  <select class="form-control player" data-id="jogador1" ref="jogador1" :anterior="referencia1" v-if="read==='true'" readOnly>
                     <option :value="recebimento.jogador1">{{recebimento.nome1}}</option>


                  </select>
                   
                </div>
        
        
                <div class="form-group lego-height">
                    <input type="text" class="form-control point" ref="pontos1" 
                    v-on:click="selectPoint" :pontoanterior="referencia1" :pontua="final"
                     v-model="recebimento.pontos1" v-mask="'###'" >
                </div>
        
         </div>
         <div class="lego-wrapper">
           
                <div class="form-group lego-height" v-show="oculta !=='none'" >
                 <select class="form-control player" data-id="jogador2"  ref="jogador2" :anterior="referencia2"  v-if="!read" :data-principal="principal" v-on:change="nameValidate">
                    <option :value="recebimento.jogador2">{{recebimento.nome2}}</option>
                   <option v-for="(j,i) in jogadores " :key="i" :value="j.id">{{j.nome}}</option>
                   
                 </select> 
                  <select class="form-control player" data-id="jogador2"  ref="jogador2" :anterior="referencia2"  v-if="read==='true'" readOnly>
                    <option :value="recebimento.jogador2">{{recebimento.nome2}}</option>


                 </select>
        
                </div>
                
                <div class="form-group lego-height" v-show="oculta!=='none'">
                    <input type="text" class="form-control point" ref="pontos2" 
                  v-on:click="selectPoint"
                    v-model="recebimento.pontos2" v-mask="'###'"  >
                </div>
        
         </div>
         <div class="lego-wrapper lego-height">
               <div class="form-group player">
                 <input type="datetime-local" class="form-control player" ref="dateTime" v-model="recebimento.data"  >
                
                </div>
    
                <div class="lego-height">
                    <button type="button" :class="btn" ref="buttonSave" v-on:click="save">
                        <span class="fa fa-save"> </span>
                    </button>
                </div>
                
         </div>
         <div class="lego-wrapper lego-height">
           <input type="text" class="form-control player" ref="pontuacao" v-model="recebimento.pontuacao"  >
         </div>
         <toast-message :title="titleToast" :message="messagegeToast" v-show="timeToast===true" :posX="toastX" :posY="toastY"/>
        <DialogBox :title="titleToast" :message="messagegeToast" v-show="timeDialog===true" :top="top" />
    </div>
</template>
<script>
   import {mapState} from 'vuex';
   import {mapActions} from 'vuex';
   import Vue from 'vue';
   
   import ToastMessage from '../widgets/ToastMessage.vue';
   import DialogBox from '../widgets/DialogBox.vue';


export default {
    name:'LegoDrop',
    components:{
      ToastMessage,
      DialogBox
    },
    props:{
      rodada:Number,
      oculta:String,
      referencia1:Number,
      referencia2:Number,
      campeonatos:Number,
      anterior:Number,
      pontoanterior:Number,
      final:String,
      pontua:String,
      read:String,
      principal:String
     
      
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
          },
          timeDialog:Boolean,
          top:'',
          
          
        }
      },

    computed:{
      ...mapState(['rodadas','jogadores'])
    },
    methods:{
      ...mapActions(['jogadoresAction','salvaRodada']),
      carregaJogador(){
      // console.log(this.campeonatos)
       const data={torneio:this.store.torneio,empresa:this.store.empresa}
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
          //this.btn='btn btn-success rounded-pill';
      },
      carregaRef(){
        //this.btn='btn btn-success rounded-pill';
       
        const rod=this.rodada;
        const r=document.querySelector(`[anterior="${rod}"]`)
        const p=document.querySelector(`[pontoanterior="${rod}"]`)
      

        const jogador1=this.$refs.jogador1.selectedIndex;
        const jogador2=this.$refs.jogador2.selectedIndex;
        const valor1=this.$refs.jogador1.options[jogador1].value;
        const valor2=this.$refs.jogador2.options[jogador2].value;
        const texto1=this.$refs.jogador1.options[jogador1].text;
        const texto2=this.$refs.jogador2.options[jogador2].text;
        
       
         
        const pontos1=this.$refs.pontos1.value;
        const pontos2=this.$refs.pontos2.value;

        const data=[
          {
            jogador:jogador1,
            pontos:pontos1,
            valor:valor1,
            texto:texto1
          },
          {
            jogador:jogador2,
            pontos:pontos2,
            valor:valor2,
            texto:texto2
            }
          ]

          const val1=data[0].pontos;
          const val2=data[1].pontos;

          let max=Math.max(val1,val2);
         // let maxNumber=max;

          max=`${max}`;

        if(val1 !== val2 && max !=='0'){
          
          
          const find=data.find(f=>f.pontos===max)
          
          if(find !==undefined){

            if(find.jogador !==0){
             // r.selectedIndex=find.jogador;
              r.options[0].value=find.valor;
              r.options[0].text=find.texto;
              if(p !== null && p.getAttribute('pontua')==='true'){
                p.value=max;
              }

               
                 
            }else{
              r.options[0].value=find.valor;
              r.options[0].text=find.texto;
               
               if(p !== null && p.getAttribute('pontua')==='true'){
                p.value=max;
              }
            }
          }
            
           

           // this.recebimento.jogador2=r.value;
           // this.btn='btn btn-success rounded-pill';
          }else{
            console.log('empate');
            this.timeDialog=true;
               

                 this.titleToast='Rodada Com Empate';
                 this.messagegeToast=`Os Jogadores ${texto1} e ${texto2} Empataram!`;

                 setTimeout(()=>{
                    this.timeDialog=false;
                   // e.target.selectedIndex=0;
                },5000)
          }
           
          
                 
      },
      save(e){

        
        const btn=e.target;
         this.carregaRef();

            this.recebimento.jogador1=this.$refs.jogador1.value;
            this.recebimento.jogador2=this.$refs.jogador2.value;
            
            console.log(this.recebimento.jogador1);
            const val1=this.recebimento.pontos1;  
            const val2=this.recebimento.pontos2;  


            

           if(val1 !==val2 || (parseInt(val1)+parseInt(val2))===0  ){
// && this.recebimento.jogador1===undefined && this.recebimento.jogador2===undefined 

          if( this.recebimento.jogador1){
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
          }else{
          
             this.titleToast='Rodada Não Salva';
                 this.messagegeToast=`Ao menos o Campo Do Primeiro Jogador Deve Ser Preenchido!`;
          }
        }
        else{
            console.log('empate');

            const texto1=this.$refs.jogador1.options[this.$refs.jogador1.selectedIndex].text;
            const texto2=this.$refs.jogador2.options[this.$refs.jogador2.selectedIndex].text;

            this.timeDialog=true;
            this.timeToast=true;

                this.toastX=btn.left;
                this.toastY=btn.top;

                this.top=btn.top;
        
                 this.titleToast='Rodada Com Empate';
                 this.messagegeToast=`Os Jogadores ${texto1} e ${texto2} Empataram!`;

                 setTimeout(()=>{
                    this.timeDialog=false;
                     this.timeToast=false;
                   // e.target.selectedIndex=0;
                },5000)
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
              // console.log(res.data);
               switch (result.length) {
                 case 0:
                    this.recebimento
                   //this.carregaRef();
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
                     // this.carregaRef();

                    // this.jogo.pontos1=result[0].pontos1;
                   //  this.jogo.pontos2=result[1].pontos2;
                   
                   break;
               
                 default:
                   break;
               }
              
             });
                  
            
        },
        
        nameValidate(e){
            const validates=document.querySelectorAll('[data-principal="true"]');
            const index=e.target.value;
           
             let container=[];

            validates.forEach(f=>{
              const select=f.selectedIndex;
              const opt=f.options[select];
              container.push({text:opt.text,value:opt.value});
            })
            
           // console.log(container)
            const filter=container.filter(f=>{
              if(f.value===index){
                return f;
              }
            });
            if(filter.length ===2){
              //console.log(filter);
              this.timeDialog=true;
               

                 this.titleToast='Jogador já selecionado';
                 this.messagegeToast=`O Jogador ${filter[0].text} já foi selecionado em outra rodada!`;

                 setTimeout(()=>{
                    this.timeDialog=false;
                    e.target.selectedIndex=0;
                },2000)

            }else{
              this.timeDialog=false;
            }
        }
        
      
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
