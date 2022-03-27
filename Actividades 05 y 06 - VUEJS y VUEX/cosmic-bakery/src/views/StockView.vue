<template>
  <div class="todo">
    <BannerSecundario titulo="Stock Restante"/>
    <NavegarStock/>
    <SeccionStock/>
    <ContactoPastelero/>
  </div>
</template>

<script>
import BannerSecundario from '@/components/BannerSecundario.vue'
import NavegarStock from '@/components/NavegarStock.vue'
import SeccionStock from '@/components/SeccionStock.vue'
import ContactoPastelero from '@/components/ContactoPastelero.vue'

export default {
  name: 'StockView',
  components: {
    BannerSecundario,
    NavegarStock,
    SeccionStock,
    ContactoPastelero
  }
}
</script>