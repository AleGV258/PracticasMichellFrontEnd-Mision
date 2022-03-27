<template>
    <!-- Sección Stock Pastelero -->
    <div>
        <form action="post" id="formulario_pedidos">
            <div class="centrar_fila">
                <h5>Stock restante de los sabores:</h5>
                <div class="centrar_columna">
                    <label class="texto_seleccion_izq" for="sabor1">Chocolate:</label>
                    <p class="texto_seleccion_der" id="sabor1" name="sabor1" value="Chocolate">{{ $store.state.sabores[0].stock }} kg</p>
                    <label class="texto_seleccion_izq" for="sabor2">Vainilla:</label>
                    <p class="texto_seleccion_der" id="sabor2" name="sabor2" value="Vainilla">{{ $store.state.sabores[1].stock }} kg</p>
                    <label class="texto_seleccion_izq" for="sabor3">Fresa:</label>
                    <p class="texto_seleccion_der" id="sabor3" name="sabor3" value="Fresa">{{ $store.state.sabores[2].stock }} kg</p>
                </div>
                <div class="centrar_columna">
                    <label class="texto_seleccion_izq" for="sabor4">Pay de Limón:</label>
                    <p class="texto_seleccion_der" id="sabor4" name="sabor4" value="Pay Limón">{{ $store.state.sabores[3].stock }} kg</p>
                    <label class="texto_seleccion_izq" for="sabor5">Tres Leches:</label>
                    <p class="texto_seleccion_der" id="sabor5" name="sabor5" value="Tres Leches">{{ $store.state.sabores[4].stock }} kg</p>
                    <label class="texto_seleccion_izq" for="sabor6">Cajeta:</label>
                    <p class="texto_seleccion_der" id="sabor6" name="sabor6" value="Cajeta">{{ $store.state.sabores[5].stock }} kg</p>
                </div>
                <div class="centrar_columna">
                    <label class="texto_seleccion_izq" for="sabor7">Vino:</label>
                    <p class="texto_seleccion_der" id="sabor7" name="sabor7" value="Vino">{{ $store.state.sabores[6].stock }} kg</p>
                    <label class="texto_seleccion_izq" for="sabor8">Naranja:</label>
                    <p class="texto_seleccion_der" id="sabor8" name="sabor8" value="Naranja">{{ $store.state.sabores[7].stock }} kg</p>
                    <label class="texto_seleccion_izq" for="sabor9">Zanahoria:</label>
                    <p class="texto_seleccion_der" id="sabor9" name="sabor9" value="Zanahoria">{{ $store.state.sabores[8].stock }} kg</p>
                </div>
            </div>
            <div class="centrar_fila">
                <h5>Stock restante de los adornos:</h5>
                <div class="centrar_columna">
                    <label class="texto_seleccion_izq" for="adorno1">Frutos Secos:</label>
                    <p class="texto_seleccion_der" id="adorno1" name="adorno1" value="Frutos Secos">{{ $store.state.adornos[0].stock }} kg</p>
                    <label class="texto_seleccion_izq" for="adorno2">Almendras:</label>
                    <p class="texto_seleccion_der" id="adorno2" name="adorno2" value="Almendras">{{ $store.state.adornos[1].stock }} kg</p>
                    <label class="texto_seleccion_izq" for="adorno3">Rosas:</label>
                    <p class="texto_seleccion_der" id="adorno3" name="adorno3" value="Rosas">{{ $store.state.adornos[2].stock }} pza</p>
                </div>
                <div class="centrar_columna">
                    <label class="texto_seleccion_izq" for="adorno4">Galletas:</label>
                    <p class="texto_seleccion_der" id="adorno4" name="adorno4" value="Galletas">{{ $store.state.adornos[3].stock }} pza</p>
                    <label class="texto_seleccion_izq" for="adorno5">Chocolates:</label>
                    <p class="texto_seleccion_der" id="adorno5" name="adorno5" value="Chocolates">{{ $store.state.adornos[4].stock }} pza</p>
                    <label class="texto_seleccion_izq" for="adorno6">Muñecos de Boda:</label>
                    <p class="texto_seleccion_der" id="adorno6" name="adorno6" value="Muñecos Boda">{{ $store.state.adornos[5].stock }}8 pza</p>
                </div>
                <div class="centrar_columna" style="margin-bottom: 5%;">
                    <label class="texto_seleccion_izq" for="adorno7">Fondant:</label>
                    <p class="texto_seleccion_der" id="adorno7" name="adorno7" value="Fondant">{{ $store.state.adornos[6].stock }} pza</p>
                    <label class="texto_seleccion_izq" for="adorno8">Chispas de Colores:</label>
                    <p class="texto_seleccion_der" id="adorno8" name="adorno8" value="Chispas Colores">{{ $store.state.adornos[7].stock }} kg</p>
                    <label class="texto_seleccion_izq" for="adorno9">Otros:</label>
                    <p class="texto_seleccion_der" id="adorno9" name="adorno9" value="Otros" style="font-size: 150%;">Visitar<br>Almacén</p>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'SeccionStock'
}
</script>