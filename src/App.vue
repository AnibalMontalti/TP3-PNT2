<template>
  <div class="container">
    <div class="jumbotron">      
      <h2>TP3</h2>
      <hr>

      <Navbar/>
      <RouterView/>

    </div>
  </div>
</template>

<script>

import Navbar from './components/Navbar.vue';


export default {
  name: 'App',
  components: {
    Navbar,
  }
}
</script>

<style>

</style>
