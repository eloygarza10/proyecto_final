<template>
<div id="app">

<Header/>

<transition name="slide" mode="out-in">
    <router-view/>
</transition>

  </div>

</template>
 
 <script>

 import Header from '@/views/Header'
 import { mapState, mapMutations } from 'vuex'
  
  export default {
  name: 'App',
    components: {
    Header
    },

  }

 </script>


<style lang="scss">
#app {
  font-family: 'Jost', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

body {
  margin: 10px;
}

.contenido {
   margin-top: 20px;
    padding: 20px;
    border: solid 1px #ccc;
}


    .slide-enter-active {
        animation: slide-in 200ms ease-out forwards;
    }

    .slide-leave-active {
        animation: slide-out 200ms ease-out forwards;
    }

    @keyframes slide-in {
        from {
            transform: translateY(-30px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }

    @keyframes slide-out {
        from {
            transform: translateY(0);
            opacity: 1;
        }
        to {
            transform: translateY(-30px);
            opacity: 0;
        }
    }

</style>
