<template>
    <!-- Sección Contacto Usuario -->
    <div id="contacto" class="negro centrar_columna">
        <div class="centrar_fila">
            <div>
                <h3>Contáctanos</h3>
            </div>
            <div class="centrar_columna">
                <div class="centrar_fila" style="width: 20%;">
                    <img class="imagen_contacto s" src="../assets/images/mail.png" alt="Correo Electrónico" name="Mail"><br>
                    <label class="texto_contacto" for="Mail">{{ $store.state.contacto_correo1 }}<br>{{ $store.state.contacto_correo2 }}</label>
                </div>
                <div class="barra_vertical"></div>
                <div class="centrar_fila" style="width: 20%;">
                    <img class="imagen_contacto" src="../assets/images/phone.png" alt="Celular de Contacto" name="Cellphone"><br>
                    <label class="texto_contacto" for="Cellphone">{{ $store.state.contacto_telefono1 }}<br>{{ $store.state.contacto_telefono2 }}</label>
                </div>
                <div class="barra_vertical"></div>
                <div class="centrar_fila" style="width: 20%;">
                    <img class="imagen_contacto" src="../assets/images/location.png" alt="Ubicación" name="Location"><br>
                    <label class="texto_contacto" for="Location">{{ $store.state.contacto_ubicacion }}</label>
                </div>
                <div class="barra_vertical"></div>
                <div class="centrar_fila" style="width: 20%;">
                    <img class="imagen_contacto" src="../assets/images/schedule.png" alt="Horarios" name="Schedule"><br>
                    <label class="texto_contacto" for="Schedule">{{ $store.state.contacto_horario1 }}<br>{{ $store.state.contacto_horario2 }}</label>
                </div>
            </div>
        </div>
    </div>
</template>