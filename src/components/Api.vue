<template>

  <section class="src-components-api">

    <button class="btn btn-info my-3 mr-2" @click="this.getUsers()">Obtener usuarios</button>
    <div v-if="usuarios.length" class="table-responsive">
      <table class="table table-dark">
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Email</th>
          <th>Telefono</th>
        </tr>

        <tr v-for="(usuario, index) in usuarios" :key="index">
          <td>{{ usuario.id }}</td>
          <td>{{ usuario.nombre }}</td>
          <td>{{ usuario.email }}</td>
          <td>{{ usuario.telefono }}</td>
        </tr>

      </table>
    </div>

  </section>

</template>

<script lang="js">

import * as userServices from '../services/users'

export default {
  name: 'src-components-api',
  props: [],
  mounted() {

  },
  data() {
    return {
      usuarios: []
    }
  },
  methods: {
    async getUsers(){
        const u = await userServices.getUsers()
        this.usuarios = u        
      },
  },
  computed: {

  }
}

</script>

<style scoped lang="css">
</style>
