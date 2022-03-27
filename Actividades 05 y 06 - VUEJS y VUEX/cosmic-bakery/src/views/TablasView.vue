<template>
  <div class="todo">
    <BannerSecundario titulo="Tabla de Pedidos"/>
    <NavegarTablas/>
    <SeccionTablas/>
    <ContactoPastelero/>
  </div>
</template>

<script>
import BannerSecundario from '@/components/BannerSecundario.vue'
import NavegarTablas from '@/components/NavegarTablas.vue'
import SeccionTablas from '@/components/SeccionTablas.vue'
import ContactoPastelero from '@/components/ContactoPastelero.vue'

export default {
  name: 'TablasView',
  components: {
    BannerSecundario,
    NavegarTablas,
    SeccionTablas,
    ContactoPastelero
  }
}
</script>