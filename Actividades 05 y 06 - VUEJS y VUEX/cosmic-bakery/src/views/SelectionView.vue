<template>
    <div class="selection">
        <!-- Banner Completo de Redirección -->
        <div class="banner_completo centrar_columna amarillo bg1" id="banner">
            <img src="../assets/images/Logo.png" alt="Cosmic Bakery Logo" name="Logo" style="height: 50%; width: 30%; padding: 1%; transform: rotate(-15deg); margin: 12% 0 0 7%;" class="logo">
            <div>
                <button class="boton_redireccionar" style="margin: 22% 0 0 0;"><router-link to="/home">Página del Cliente</router-link></button>
                <button class="boton_redireccionar"><router-link to="/tablas">Página del Pastelero</router-link></button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SelectionView'
}
</script>
