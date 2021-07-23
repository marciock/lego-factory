import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

export const http=Vue.http;

http.options.root='https://www.alvarengaesportes.com.br';

//'https://www.alvarengaesportes.com.br'
//'https://alvarengaesportes.com.br'    

//'http://localhost'