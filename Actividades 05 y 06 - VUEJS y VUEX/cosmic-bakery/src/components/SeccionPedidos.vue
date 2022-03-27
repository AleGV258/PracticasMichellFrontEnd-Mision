<template>
    <!-- Sección Pedidos Usuario -->
    <div>
            <div class="centrar_fila" id="sabores">
                <h5>Selecciona los sabores deseados:</h5>
                <div class="centrar_columna">
                    <input type="checkbox" id="sabor1" name="sabor1" v-model="generarSabor[0, 'Chocolate']" @click="$store.commit('imprimirSabor')" value="Chocolate">
                    <label class="texto_seleccion" for="sabor1">{{ $store.state.sabores[0].sabor }}</label>
                    <label class="texto_seleccion2" for="sabor1">${{ $store.state.sabores[0].precio }}</label>
                    <input type="checkbox" id="sabor2" name="sabor2" v-model="generarSabor['Vainilla']" @click="$store.commit('imprimirSabor')" value="Vainilla">
                    <label class="texto_seleccion" for="sabor2">{{ $store.state.sabores[1].sabor }}</label>
                    <label class="texto_seleccion2" for="sabor2">${{ $store.state.sabores[1].precio }}</label>
                    <input type="checkbox" id="sabor3" name="sabor3" v-model="generarSabor['Fresa']" @click="$store.commit('imprimirSabor')" value="Fresa">
                    <label class="texto_seleccion" for="sabor3">{{ $store.state.sabores[2].sabor }}</label>
                    <label class="texto_seleccion2" for="sabor3">${{ $store.state.sabores[2].precio }}</label>
                </div>
                <div class="centrar_columna">
                    <input type="checkbox" id="sabor4" name="sabor4" v-model="generarSabor['Pay Limón']" @click="$store.commit('imprimirSabor')" value="Pay Limón">
                    <label class="texto_seleccion" for="sabor4">{{ $store.state.sabores[3].sabor }}</label>
                    <label class="texto_seleccion2" for="sabor4">${{ $store.state.sabores[3].precio }}</label>
                    <input type="checkbox" id="sabor5" name="sabor5" v-model="generarSabor['Tres Leches']" @click="$store.commit('imprimirSabor')" value="Tres Leches">
                    <label class="texto_seleccion" for="sabor5">{{ $store.state.sabores[4].sabor }}</label>
                    <label class="texto_seleccion2" for="sabor5">${{ $store.state.sabores[4].precio }}</label>
                    <input type="checkbox" id="sabor6" name="sabor6" v-model="generarSabor['Cajeta']" @click="$store.commit('imprimirSabor')" value="Cajeta">
                    <label class="texto_seleccion" for="sabor6">{{ $store.state.sabores[5].sabor }}</label>
                    <label class="texto_seleccion2" for="sabor6">${{ $store.state.sabores[5].precio }}</label>
                </div>
                <div class="centrar_columna">
                    <input type="checkbox" id="sabor7" name="sabor7" v-model="generarSabor['Vino']" @click="$store.commit('imprimirSabor')" value="Vino">
                    <label class="texto_seleccion" for="sabor7">{{ $store.state.sabores[6].sabor }}</label>
                    <label class="texto_seleccion2" for="sabor7">${{ $store.state.sabores[6].precio }}</label>
                    <input type="checkbox" id="sabor8" name="sabor8" v-model="generarSabor['Naranja']" @click="$store.commit('imprimirSabor')" value="Naranja">
                    <label class="texto_seleccion" for="sabor8">{{ $store.state.sabores[7].sabor }}</label>
                    <label class="texto_seleccion2" for="sabor8">${{ $store.state.sabores[7].precio }}</label>
                    <input type="checkbox" id="sabor9" name="sabor9" v-model="generarSabor['Zanahoria']" @click="$store.commit('imprimirSabor')" value="Zanahoria">
                    <label class="texto_seleccion" for="sabor9">{{ $store.state.sabores[8].sabor }}</label>
                    <label class="texto_seleccion2" for="sabor9">${{ $store.state.sabores[8].precio }}</label>
                </div>
            </div>
            <div class="centrar_fila" id="adornos">
                <h5>Selecciona los adornos deseados:</h5>
                <div class="centrar_columna">
                    <input type="checkbox" id="adorno1" name="adorno1" v-model="generarAdorno['Frutos Secos']" @click="$store.commit('imprimirAdorno')" value="Frutos Secos">
                    <label class="texto_seleccion" for="adorno1">{{ $store.state.adornos[0].adorno }}</label>
                    <label class="texto_seleccion2" for="adorno1">${{ $store.state.adornos[0].precio }}</label>
                    <input type="checkbox" id="adorno2" name="adorno2" v-model="generarAdorno['Almendras']" @click="$store.commit('imprimirAdorno')" value="Almendras">
                    <label class="texto_seleccion" for="adorno2">{{ $store.state.adornos[1].adorno }}</label>
                    <label class="texto_seleccion2" for="adorno2">${{ $store.state.adornos[1].precio }}</label>
                    <input type="checkbox" id="adorno3" name="adorno3" v-model="generarAdorno['Rosas']" @click="$store.commit('imprimirAdorno')" value="Rosas">
                    <label class="texto_seleccion" for="adorno3">{{ $store.state.adornos[2].adorno }}</label>
                    <label class="texto_seleccion2" for="adorno3">${{ $store.state.adornos[2].precio }}</label>
                </div>
                <div class="centrar_columna">
                    <input type="checkbox" id="adorno4" name="adorno4" v-model="generarAdorno['Galletas']" @click="$store.commit('imprimirAdorno')" value="Galletas">
                    <label class="texto_seleccion" for="adorno4">{{ $store.state.adornos[3].adorno }}</label>
                    <label class="texto_seleccion2" for="adorno4">${{ $store.state.adornos[3].precio }}</label>
                    <input type="checkbox" id="adorno5" name="adorno5" v-model="generarAdorno['Chocolates']" @click="$store.commit('imprimirAdorno')" value="Chocolates">
                    <label class="texto_seleccion" for="adorno5">{{ $store.state.adornos[4].adorno }}</label>
                    <label class="texto_seleccion2" for="adorno5">${{ $store.state.adornos[4].precio }}</label>
                    <input type="checkbox" id="adorno6" name="adorno6" v-model="generarAdorno['Muñecos Boda']" @click="$store.commit('imprimirAdorno')" value="Muñecos Boda">
                    <label class="texto_seleccion" for="adorno6">{{ $store.state.adornos[5].adorno }}</label>
                    <label class="texto_seleccion2" for="adorno6">${{ $store.state.adornos[5].precio }}</label>
                </div>
                <div class="centrar_columna">
                    <input type="checkbox" id="adorno7" name="adorno7" v-model="generarAdorno['Fondant']" @click="$store.commit('imprimirAdorno')" value="Fondant">
                    <label class="texto_seleccion" for="adorno7">{{ $store.state.adornos[6].adorno }}</label>
                    <label class="texto_seleccion2" for="adorno7">${{ $store.state.adornos[6].precio }}</label>
                    <input type="checkbox" id="adorno8" name="adorno8" v-model="generarAdorno['Chispas Colores']" @click="$store.commit('imprimirAdorno')" value="Chispas Colores">
                    <label class="texto_seleccion" for="adorno8">{{ $store.state.adornos[7].adorno }}</label>
                    <label class="texto_seleccion2" for="adorno8">${{ $store.state.adornos[7].precio }}</label>
                    <input type="checkbox" id="adorno9" name="adorno9" v-model="generarAdorno['Personalizado']" @click="$store.commit('imprimirAdorno')" value="Personalizado">
                    <label class="texto_seleccion" for="adorno9">{{ $store.state.adornos[8].adorno }}</label>
                    <label class="texto_seleccion2" for="adorno9">${{ $store.state.adornos[8].precio }}</label>
                </div>
            </div>
            <div class="centrar_fila">
                <h5>Descripción y Características del Pastel:</h5>
                <input style="margin-bottom: 1%;" type="text" id="caracteristicas" name="caracteristicas" placeholder="Escribe más detalladamente las características del pastel. En caso de estar satisfecho escribe 'NA'" required v-model="generarDescripcion">
            </div>
            <div class="centrar_fila">
                <h5>Completa los campos de contacto:</h5>
                <label for="nombre" class="texto_seleccion" style="text-align: center; width: 100%; border: none;">Nombre del Solicitante</label><br>
                <input type="text" id="nombre" name="nombre" placeholder="Nombre" required v-model="generarNombre">
                <label for="telefono" class="texto_seleccion" style="text-align: center; width: 100%; border: none;">Teléfono Celular</label><br>
                <input type="tel" id="telefono" name="telefono" placeholder="Teléfono" required maxlength="18" v-model="generarTelefono">
                <label for="correo" class="texto_seleccion" style="text-align: center; width: 100%; border: none;">Correo Electrónico</label><br>
                <input type="email" id="correo" name="correo" placeholder="Correo" required v-model="generarCorreo">
                <div class="centrar_columna">
                    <input type="submit" id="correo" name="correo" value="Enviar" @click="$store.commit('agregarPedido')">
                    <input type="reset" id="correo" name="correo" value="Borrar" @click="$store.commit('borrarPedido')">
                </div>
            </div>
    </div>
</template>

<script>
export default {
    name: 'SeccionPedidos',
    computed: {
        generarSabor: { 
            get(){ 
                return this.$store.state.sabor_cliente;
            }, 
            set(sabor){ 
                this.$store.commit('cambiarSabores', sabor);
            } 
        },
        generarAdorno: { 
            get(){ 
                return this.$store.state.adorno_cliente;
            }, 
            set(adorno){ 
                this.$store.commit('cambiarAdornos', adorno);
            } 
        },
        generarDescripcion: {
            get(){
                return this.$store.state.descripcion_cliente;
            },
            set(descripcion){
                this.$store.commit('cambiarDescripcion', descripcion);
            }
        },
        generarNombre: {
            get(){
                return this.$store.state.nombre_cliente;
            },
            set(nombre){
                this.$store.commit('cambiarNombre', nombre);
            }
        },
        generarTelefono: {
            get(){
                return this.$store.state.telefono_cliente;
            },
            set(telefono){
                this.$store.commit('cambiarTelefono', telefono);
            }
        },
        generarCorreo: {
            get(){
                return this.$store.state.correo_cliente;
            },
            set(correo){
                this.$store.commit('cambiarCorreo', correo);
            }
        }
    }
}
</script>