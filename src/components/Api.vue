<template>

  <section class="src-components-api">

    <button class="btn btn-info my-3 mr-2" @click="this.getUsuarios()">Obtener usuarios</button>
    <div v-if="usuarios.length" class="table-responsive">
      <table class="table table-dark">
        <tr>
          <th>id</th>
          <th>nombreCompleto</th>
          <th>email</th>
          <th>telefono</th>
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
    async getUsuarios(){
        const u = await userServices.getAll()
        this.usuarios = u        
      },
  },
  computed: {

  }
}

</script>

<style scoped lang="css">
</style>
