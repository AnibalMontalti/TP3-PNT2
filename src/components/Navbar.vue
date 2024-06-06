<template>
  <section class="src-components-navbar">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <RouterLink class="navbar-brand" to="/">Inicio</RouterLink>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/formulario">Formulario</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/api">API</RouterLink>
          </li>
        </ul>
      </div>
    </nav>
  </section>
</template>

<script lang="js">

export default {
  name: 'src-components-navbar',
  props: [],
  mounted() {

  },
  data() {
    return {

    }
  },
  methods: {

  },
  computed: {

  }
}
</script>

<style scoped lang="css">
</style>
