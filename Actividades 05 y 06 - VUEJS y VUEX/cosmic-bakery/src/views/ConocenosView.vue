<template>
  <div class="todo">
    <BannerSecundario titulo="Conoce a tu pastelería"/>
    <NavegarConocenos/>
    <SeccionConocenos/>
    <ContactoCliente/>
  </div>
</template>

<script>
import BannerSecundario from '@/components/BannerSecundario.vue'
import NavegarConocenos from '@/components/NavegarConocenos.vue'
import SeccionConocenos from '@/components/SeccionConocenos.vue'
import ContactoCliente from '@/components/ContactoCliente.vue'

export default {
  name: 'ConocenosView',
  components: {
    BannerSecundario,
    NavegarConocenos,
    SeccionConocenos,
    ContactoCliente
  }
}
</script>