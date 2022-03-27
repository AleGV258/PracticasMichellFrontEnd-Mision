<template>
    <!-- Sección Pedidos Pastelero -->
    <div class="centrar_fila">
        <div class="centrar_columna">
            <button class="regresar_boton" @click="$store.commit('anteriorPedido')"><img src="../assets/images/flecha.png" class="regresar2" alt="Regresar" name="Atras"></button>
            <div class="pedido_cliente">
                <label class="texto_llave" for="nombre_cliente">Nombre del Cliente:</label>
                <p class="texto_valor" id="nombre_cliente" name="nombre_cliente" value="Nombre Cliente">{{ $store.state.pedidos[$store.state.pedido_actual].nombre }}</p><br><br>
                <label class="texto_llave" for="correo_cliente">Correo del Cliente:</label>
                <p class="texto_valor" id="correo_cliente" name="correo_cliente" value="Correo Cliente">{{ $store.state.pedidos[$store.state.pedido_actual].correo }}</p><br><br>
                <label class="texto_llave" for="celular_cliente">Celular del Cliente:</label>
                <p class="texto_valor" id="celular_cliente" name="celular_cliente" value="Celular Cliente">{{ $store.state.pedidos[$store.state.pedido_actual].telefono }}</p><br><br>
                <label class="texto_llave" for="descripcion_cliente">Descripcion del Cliente:</label>
                <p class="texto_valor" id="descripcion_cliente" name="descripcion_cliente" value="Descripción Cliente">{{ $store.state.pedidos[$store.state.pedido_actual].descripcion }}</p><br><br>
                <label class="texto_llave" for="materiales_requeridos">Materiales Requeridos:<br></label>
                <div id="materiales_requeridos" name="materiales_requeridos" value="Materiales Requeridos">
                    <li class="texto_materiales">Sabores: {{ $store.getters.generarSabor }} -</li>
                    <li class="texto_materiales" style="margin: 0 9% 2% 9%;">Adorno: {{ $store.getters.generarAdorno }} -</li>
                </div>
                <label class="texto_llave" for="costo_pastel">Costo Total del Pastel:</label>
                <p class="texto_valor" id="costo_pastel" name="costo_pastel" value="Costo Pastel">$ {{ $store.state.pedidos[$store.state.pedido_actual].costo }}</p><br><br>
                <button class="boton_realizado" @click="$store.commit('realizadoPedido')">Realizado</button>
            </div>
            <button class="regresar_boton" @click="$store.commit('siguientePedido')"><img src="../assets/images/flecha.png" class="regresar2" alt="Regresar" name="Siguiente" style="transform: rotate(180deg);"></button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SeccionTablas'
}
</script>