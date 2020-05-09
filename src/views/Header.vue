<template>

   
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <router-link to="/"  class="navbar-brand" >Home</router-link>
 <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button> 
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <router-link to="/directory" activeClass="nav-item active" tag="li"><a class="nav-link">Directorio</a></router-link>
      <router-link to="/add" activeClass="nav-item active" tag="li"><a class="nav-link">+ Agregar</a></router-link>
    <!--  <router-link to="/edit" activeClass="nav-item active" tag="li"><a class="nav-link">Editar</a></router-link> -->
    </ul>
  </div>
</nav>



</template>