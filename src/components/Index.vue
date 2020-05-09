<template>

  <div class="contenido">
    <h1>Directorio Personal</h1>
 <br><br>
<router-link to="/directory" class="btn btn-success large" tag="button">  Tu Directorio </router-link>
<br><br>
 <router-link to="/add" class="btn btn-primary large" tag="button"> + Agregar Contacto </router-link>
<br><br>
  </div>

</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.large {
  width: 300px;
}

</style>