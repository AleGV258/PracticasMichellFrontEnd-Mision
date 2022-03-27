<template>
  <!-- Sección Navegar Usuario -->
  <div class="seccion_navegar amarillo centrar_columna">
    <div class="centrar_fila" style="width: 25%; margin-top: 1%;">
      <router-link to="/home"><h4>Home</h4></router-link>
      <div class="barra_horizontal"></div>
    </div>
    <div class="barra_vertical"></div>
    <div class="centrar_fila" style="width: 25%; margin-top: 1%;">
      <router-link to="/pedidos"><h4>Pedidos</h4></router-link>
      <div class="barra_horizontal"></div>
    </div>
    <div class="barra_vertical"></div>
    <div class="centrar_fila" style="width: 25%; margin-top: 1%;">
      <router-link to="/conocenos"><h4>Conocenos</h4></router-link>
      <div class="barra_horizontal blanco"></div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'NavegarConocenos'
}
</script>