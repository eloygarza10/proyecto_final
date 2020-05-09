<template>

  <div class="contenido">
    <h1>Agregar Contacto</h1>

    
    <div>        

     <input type="text" v-model="search" class="form-control" placeholder="Buscar Contacto">
    <br><br>
                 <Barra  :quoteCount="quotes.length" :MaxQuotes="maxQuotes"/>
                 <Vista  @quoteAdded="NewQuote" />
                 <Grid :quotes="quotes" @quoteDeleted="deleteQuote"/>

                
             
    </div>

  </div>


</template>


<script>

import Vista from '@/components/Vista'
import Grid from '@/components/Grid'
import Barra from '@/components/Barra'
import moment from 'moment'
import { mapState, mapMutations } from 'vuex'
   
    export default {

  data: function() {
          return {
            quotes: ['Agrega contacto al Directorio'],
            maxQuotes: 20,
            search: ''
          }
        },

          mounted() {
    
    if(localStorage.getItem('quotes')) {
      try {
        this.quotes = JSON.parse(localStorage.getItem('quotes'));
      } catch(e) {
        localStorage.removeItem('quotes');
      }
    }
  },
        methods: {

          NewQuote(quote) {
            if (this.quotes.length >= this.maxQuotes) {
              return alert('Memoria Llena');
            }
            this.quotes.push(quote);
            this.saveQuotes();
          },
          deleteQuote(index) {
                this.quotes.splice(index, 1);
                this.saveQuotes();
            },
            saveQuotes() {
      const parsed = JSON.stringify(this.quotes);
      localStorage.setItem('quotes', parsed);
    }
        },
          
    
components: {
   Grid, Vista, Barra
},
       computed: {
  filteredQuotes: function() {
    return this.quotes.filter((quote) => {
      return quote.match(this.search)
    })
  }
}
    
    }


</script>


<style scoped>

</style>