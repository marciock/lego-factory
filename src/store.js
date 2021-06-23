import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export default new Vuex.Store({
    
    strict:process.env.NODE_ENV !== 'production',
    state:{
        rodadas:'',
        campeonato:'',
        jogadores:[],
        qtd:''


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
        mutQtd(state){
            if(localStorage.getItem('qtd')){
                this.replaceState(
                    Object.assign(state,JSON.parse(localStorage.getItem('qtd')))
                )
            }
        }
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
        campeonatoAction({commit},payload){

            commit('mutCampeonato',payload);
        },
        
       
    }
});