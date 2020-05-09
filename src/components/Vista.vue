<template>

        <div>
           <form>
    <br><br>
    <input type="text" class="form-control" v-model="quote" placeholder="Nombre del Contacto:">
    <br><br>
    <input type="number" class="form-control" v-model="telefono" placeholder="Teléfono:">
    <br><br>
    <input type="hidden" class="form-control" v-model="theDate" />
    <button class="btn btn-primary"  @click.prevent="createNew" >Agregar Contacto</button>
</form>
<br><br>


        </div>

</template>

<script>

import moment from 'moment'

export default {

           data: function() {
            return {
                quote: '',
                telefono: '',
                theDate: moment().format('YYYY/MM/DD'),
                id: 1,
                props: ['quotes'],
            };

            
        },

     
methods: {
        createNew() {
            this.$emit('quoteAdded', this.id + ' - ' + 'Nombre: ' + this.quote + ' - ' + 'Teléfono: ' + this.telefono + ' - ' + 'Fecha de Activación: '  + this.theDate );
            this.quote = '';
            this.telefono = '';
            this.id++;
            this.theDate = moment().format('YYYY/MM/DD');
        },
    }  

}

</script>

<style>

</style>