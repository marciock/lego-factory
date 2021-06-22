import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export default new Vuex.Store({

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
        mutQtd(state,qtdAction){
            state.qtd=qtdAction;
        }
    },
    actions:{
        rodadaAction({commit},payload){

            return commit('mutRodada',payload);

        },

        jogadoresAction:async ({commit},payload)=>{

          
             const data=payload.data;   
            const url=payload.url;
   
          //  let headers=new Headers({'Content-type':'application/json;charset=utf-8'});
           let result= await Vue.http.post(url,data);

           console.log(result.data)
           commit('mutJogadores',result.data);
        },
        campeonatoAction({commit},payload){

            commit('mutCampeonato',payload);
        },
        qtdAction({commit}){
            commit('mutQtd',localStorage.getItem('qtd'));
        }
    }
});