<template>
    <!-- Sección Home Usuario -->
    <div id="menu" class="seccion_pasteles">
        <div class="centrar_fila">
            <div class="centrar_columna">
                <h3 style="color: black; margin-bottom: -1%;">Trendings</h3>
            </div>
            <div class="centrar_columna" style="margin-bottom: -3%;">
                <div class="centrar_fila" style="width: 20%;">
                    <img src="../assets/images/pastel1.jpg" alt="Pastel 1" class="imagen_trending">
                    <p class="texto_trending">Pastel "Chocolate Milk"<br>Desde: $350.00 MXN</p>
                    <button class="boton_trending">No Disponible...</button>
                </div>
                <div class="barra_vertical blanco"></div>
                <div class="centrar_fila" style="width: 20%;">
                    <img src="../assets/images/pastel2.jpg" alt="Pastel 2" class="imagen_trending">
                    <p class="texto_trending">Pastel "Happy Unicorn"<br>Desde: $550.00 MXN</p>
                    <button class="boton_trending">No Disponible...</button>
                </div>
                <div class="barra_vertical blanco"></div>
                <div class="centrar_fila" style="width: 20%;">
                    <img src="../assets/images/pastel3.jpg" alt="Pastel 3" class="imagen_trending">
                    <p class="texto_trending">Pastel "Cookie Monster"<br>Desde: $550.00 MXN</p>
                    <button class="boton_trending">No Disponible...</button>
                </div>
                <div class="barra_vertical blanco"></div>
                <div class="centrar_fila" style="width: 20%;">
                    <img src="../assets/images/pastel4.jpg" alt="Pastel 4" class="imagen_trending">
                    <p class="texto_trending">Pastel "M&Ms Gift"<br>Desde: $500.00 MXN</p>
                    <button class="boton_trending">No Disponible...</button>
                </div>
            </div>
            <div class="centrar_columna" style="margin-top: 2%;">
                <div class="centrar_fila" style="width: 20%;">
                    <img src="../assets/images/pastel5.jpg" alt="Pastel 5" class="imagen_trending">
                    <p class="texto_trending">Pastel "Mini Fruit"<br>Desde: $150.00 MXN</p>
                    <button class="boton_trending">No Disponible...</button>
                </div>
                <div class="barra_vertical blanco"></div>
                <div class="centrar_fila" style="width: 20%;">
                    <img src="../assets/images/pastel6.jpg" alt="Pastel 6" class="imagen_trending">
                    <p class="texto_trending">Pastel "Rainbow Tower"<br>Desde: $350.00 MXN</p>
                    <button class="boton_trending">No Disponible...</button>
                </div>
                <div class="barra_vertical blanco"></div>
                <div class="centrar_fila" style="width: 20%;">
                    <img src="../assets/images/pastel7.jpg" alt="Pastel 7" class="imagen_trending">
                    <p class="texto_trending">Pastel "Pink Promise"<br>Desde: $250.00 MXN</p>
                    <button class="boton_trending">No Disponible...</button>
                </div>
                <div class="barra_vertical blanco"></div>
                <div class="centrar_fila" style="width: 20%; cursor: pointer;" onclick="pedidos();">
                    <img src="../assets/images/opt4.gif" alt="More" class="imagen_trending" >
                    <p class="texto_trending">ó Pide tu Pastel Perzonalizado</p>
                    <button class="boton_trending" style="margin-top: 4vh; cursor: pointer;"><router-link to="/pedidos">Ver Más...</router-link></button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SeccionHome'
}
</script>