import Vue from 'vue'
import Vuex from 'vuex'
import moment from 'moment'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    quote: '',
    nombre: '',
    theDate: moment().format('YYYY/MM/DD'),
    quotes: ['Agrega contacto al Directorio'],
    maxQuotes: 20

  },

  mutations: {
    createNew(state, quoteAdded) {
        this.$emit( quoteAdded,'Nombre: ' + state.quote + ' - ' + 'Teléfono: ' + state.nombre + ' - ' + 'Fecha de Activación: '  + this.theDate );
        state.quote = '';
        state.nombre = '';
        state.theDate = moment().format('YYYY/MM/DD')

    },
    NewQuote(state, quote) {
        if (state.quotes.length >= state.maxQuotes) {
          return alert('Ya son todas no chinques');
        }
        state.quotes.push(quote);
      },
    deleteQuote(state, index) {
          state.quotes.splice(index, 1);
        }
},

  actions: {

    
  },

  modules: {

  },

  getters: {
    
  }

})
