<template>
    <div class="principal">
        <!-- Banner Principal Usuario -->
        <div class="banner_principal centrar_columna amarillo bg1" id="banner">
            <router-link to="/" class="regresar"><br><br><br><img src="../assets/images/flecha.png" class="regresar2" alt="Regresar" name="Atras"></router-link>
            <img src="../assets/images/Logo.png" alt="Cosmic Bakery Logo" name="Logo" style="width: 20%; height: 20%;" class="logo">
            <div class="centrar_fila" style="margin: 0 0 0 2%;">
                <router-link to="/"><h1>¡Bienvenidos a!</h1></router-link>
                <router-link to="/"><h2>Cosmic Bakery</h2></router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BannerPrincipal'
}
</script>