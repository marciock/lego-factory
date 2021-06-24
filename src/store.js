import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export default new Vuex.Store({
    
    strict:process.env.NODE_ENV !== 'production',
    state:{
        rodadas:'',
        campeonato:'',
        jogadores:[],
        carregamento:[]
        


    },
    mutations:{
        
        mutRodada(state,rodadaAction){
            state.rodadas=rodadaAction
        },
        mutJogadores(state,jogadoresAction){
            state.jogadores=jogadoresAction;
        },
        mutCampeonato(state,campeonatoAction){
            state.campeonato=campeonatoAction
        },
        mutCarregamento(state,carregaRodada){
            state.carregamento=carregaRodada
        },
        
    },
    actions:{
        rodadaAction({commit},payload){

            return commit('mutRodada',payload);

        },

        jogadoresAction:async ({commit},payload)=>{

          
             const data=payload.data;   
            const url=payload.url;

          
           if(data.torneio !==undefined){
        
           let result= await Vue.http.post(url,data);

          
           commit('mutJogadores',result.data);
           } 
           
        },
       
        salvaRodada(context,payload){

            const data=payload;

            console.log(data);

            Vue.http.post('instituicao/salvapartida.php',data).then(res=>{
                console.log(res);
            });

            
        },
        carregaRodada: async ({commit},payload)=>{

            const data=payload;
            let result =await Vue.http.post('instituicao/carrega_rodada.php',data);

            //console.log(result.body);
            commit('mutCarregamento',result.body);
        }
        
       
    }
});