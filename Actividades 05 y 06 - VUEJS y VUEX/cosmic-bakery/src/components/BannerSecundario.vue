<template>
    <!-- Banner Secundario -->
    <div class="banner_secundario centrar_columna negro bg1" id="banner">
        <router-link to="/" class="regresar"><img src="../assets/images/flecha.png" class="regresar2" alt="Regresar" name="Atras"></router-link>
        <img src="../assets/images/Logo.png" class="logo" alt="Cosmic Bakery Logo" name="Logo">
        <div class="centrar_fila" style="margin: 0 0 0 2%;">
            <router-link to="/"><h2>{{ titulo }}</h2></router-link>
        </div>
    </div>
</template>

<script>
export default {
  name: 'BannerSecundario',
  props: {
    titulo: String
  }
}
</script>