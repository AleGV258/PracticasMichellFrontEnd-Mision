<template>
  <!-- Sección Navegar Pastelero -->
  <div class="seccion_navegar amarillo centrar_columna">
    <div class="centrar_fila" style="width: 25%; margin-top: 1%;">
      <router-link to="/tablas"><h4>Tablas</h4></router-link>
      <div class="barra_horizontal blanco"></div>
    </div>
    <div class="barra_vertical"></div>
    <div class="centrar_fila" style="width: 25%; margin-top: 1%;">
      <router-link to="/stock"><h4>Stock</h4></router-link>
      <div class="barra_horizontal"></div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'NavegarTablas'
}
</script>