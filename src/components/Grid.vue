<template>
<div>
      
     <Contacto v-for="(quote, index) in quotes" @click.native="deleteQuote(index)" :key="index">
         {{ quote | to-uppercase }} 
        <div style="float: right;"> <router-link :to="{ name: 'Editar', params:{id: quote} }" class="btn btn-success" tag="button"> Editar </router-link> <button class="btn btn-danger"> Eliminar </button>
        </div> 
         </Contacto>
     
  
</div>
</template>

<script>
import Contacto from '@/components/Contacto'

export default {

 props: ['quotes', 'quote'],
 
 components: {
     Contacto
 },
      methods: {
            deleteQuote(index) {
                this.$emit('quoteDeleted', index);
            }
        },


}
</script>

<style>

</style>
