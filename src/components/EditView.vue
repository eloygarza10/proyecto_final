<template>
<div>


<div> Estas editando el contacto: <span class="editado"> {{ $route.params.id }} </span> </div>

<form>
    <br><br>
    <input type="text" class="form-control" v-model="quote" placeholder="Nombre del Contacto:">
    <br><br>
    <input type="number" class="form-control" v-model="nombre" placeholder="Teléfono:">
    <br><br>
    <input type="hidden" class="form-control" v-model="theDate" />
    <button class="btn btn-primary"  @click.prevent="createNew" > Finalizar Edición</button>
</form>
   
</div>
</template>

<script>


import moment from 'moment'

export default {

           data: function() {
            return {
                quote: this.quote,
                nombre: this.nombre,
                theDate: moment().format('YYYY/MM/DD'),
                id: this.id
            };
        },
    methods: {
        createNew() {
            this.$emit('quoteAdded', this.id + ' - ' + 'Nombre: ' + this.quote + ' - ' + 'Teléfono: ' + this.nombre + ' - ' + 'Fecha de Activación: '  + this.theDate );
            this.quote = '';
            this.nombre = '';
            this.id++;
            this.theDate = moment().format('YYYY/MM/DD')

        }
    }
    

}
</script>

<style>

.editado {
    color: gold;
   /* font-weight: 700;*/
}

</style>