<template>
  <div class="todo">
    <BannerPrincipal/>
    <NavegarHome/>
    <SeccionHome/>
    <ContactoCliente/>
  </div>
</template>

<script>
import BannerPrincipal from '@/components/BannerPrincipal.vue'
import NavegarHome from '@/components/NavegarHome.vue'
import SeccionHome from '@/components/SeccionHome.vue'
import ContactoCliente from '@/components/ContactoCliente.vue'

export default {
  name: 'HomeView',
  components: {
    BannerPrincipal,
    NavegarHome,
    SeccionHome,
    ContactoCliente
  }
}
</script>