<template>
  <div class="todo">
    <BannerSecundario titulo="Haz tus Pedidos"/>
    <NavegarPedidos/>
    <SeccionPedidos/>
    <ContactoCliente/>
  </div>
</template>

<script>
import BannerSecundario from '@/components/BannerSecundario.vue'
import NavegarPedidos from '@/components/NavegarPedidos.vue'
import SeccionPedidos from '@/components/SeccionPedidos.vue'
import ContactoCliente from '@/components/ContactoCliente.vue'

export default {
  name: 'PedidosView',
  components: {
    BannerSecundario,
    NavegarPedidos,
    SeccionPedidos,
    ContactoCliente
  }
}
</script>