<template>

  <section class="src-components-formulario">
    <div class="jumbotron">

      <form @submit.prevent="guardar">

        <div>
          <div class="form-group">
            <p>Nombre</p>
            <input id="nombre" type="text" class="form-control" v-model.trim="dato.nombre" @input="datoDirty.nombre = true">
            <div v-if="!this.validarNombre() && datoDirty.nombre" class="alert alert-danger mt-1">
              <span>{{ this.obtenerMensajeNombre() }}</span>
            </div>
          </div>

          <div class="form-group">
            <p>Edad</p>
            <input id="edad" type="number" class="form-control" v-model.trim="dato.edad" @input="datoDirty.edad = true">
            <div v-if="!this.validarEdad() && datoDirty.edad" class="alert alert-danger mt-1">
              <span>{{ this.obtenerMensajeEdad() }}</span>
            </div>
          </div>

          <div class="form-group">
            <p>Email</p>
            <input id="email" type="email" class="form-control" v-model.trim="dato.email" @input="datoDirty.email = true">
            <div v-if="!this.validarEmail() && datoDirty.email" class="alert alert-danger mt-1">
              <span>{{ this.obtenerMensajeEmail() }}</span>
            </div>
          </div>
        </div>

        <button class="btn btn-success my-3" v-if="this.puedeGuardar()" type="submit" @click="this.enviar()">Guardar</button>

        <div>
          <p> Dato ingresado </p>
          <div class="table-responsive">
            <table class="table table-dark">
              <tr>
                <th>Nombre</th>
                <th>Edad</th>
                <th>Email</th>
              </tr>

              <tr>
                <td>{{ dato.nombre }}</td>
                <td>{{ dato.edad }}</td>
                <td>{{ dato.email }}</td>
              </tr>

            </table>
          </div>
        </div>

        <p> Datos guardados </p>
        <div class="table-responsive">
          <table class="table table-dark">
            <tr>
              <th>Nombre</th>
              <th>Edad</th>
              <th>Email</th>
            </tr>

            <tr v-for="(usuario, index) in usuarios" :key="index">              
              <td>{{ usuario.nombre }}</td>
              <td>{{ usuario.edad }}</td>
              <td>{{ usuario.email }}</td>
            </tr>

          </table>
        </div>

        

      </form>


    </div>
  </section>

</template>

<script lang="js">

export default {
  name: 'src-components-formulario',
  props: [],
  mounted() {

  },
  data() {
    return {
      dato: this.inicializarDatos(),
      datoDirty: this.inicializarDatos(),
      usuarios: [this.inicializarDatos()],
    }
  },
  methods: {
    inicializarDatos() {
      return {
        nombre: null,
        edad: null,
        email: null
      }
    },
    //#region Atributo: nombre
    validarNombre(){
      return this.dato.nombre && this.dato.nombre.length > 4 && this.dato.nombre.length < 15
    },
    obtenerMensajeNombre(){
      let msj = ''
      
      if(!this.dato.nombre){
        msj = 'Campo Requerido'
      }else if(this.dato.nombre.length < 5){
        msj = 'El nombre debe contener al menos 5 caracteres'
      }else if(this.dato.nombre.length > 15){
        msj = 'El nombre no debe contener más 15 caracteres'
      }
      
      return msj
    },
    // #endregion
    //#region Atributo: edad
    validarEdad(){
      return this.dato.edad && this.dato.edad > 17 && this.dato.edad < 121
    },
    obtenerMensajeEdad(){
      let msj = ''
      
      if(!this.dato.edad){
        msj = 'Campo Requerido'
      }else if(this.dato.edad < 18){
        msj = 'La edad minima requerida es de 18 años'
      }else if(this.dato.edad > 121){
        msj = 'La edad maxima requerida es de 120 años'
      }
      
      return msj
    },
    // #endregion
    //#region Atributo: email
    validarEmail(){
      return this.dato.email && this.emailOk()
    },
    emailOk(){
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(this.dato.email)                
    },
    obtenerMensajeEmail(){
      let msj = ''
      
      if(!this.dato.email){
        msj = 'Campo Requerido'
      }else if(!this.emailOk()){
        msj = 'Formato de email ingresado es incorrecto'
      }
      
      return msj
    },
    // #endregion
    puedeGuardar(){
      return this.validarNombre() && this.validarEdad() && this.validarEmail()
    },
    enviar(){
      this.usuarios.push(this.dato)
      this.dato = this.inicializarDatos()
      this.datoDirty = this.inicializarDatos()
    },
  },
  computed: { 
  }
}


</script>

<style scoped lang="css"></style>
