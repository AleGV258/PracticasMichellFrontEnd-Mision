import { createStore } from 'vuex';

export default createStore({
  state: {
    contacto_correo1: "contacto@cosmicbk.com",
    contacto_correo2: "cotizaciones@cosmicbk.com",
    contacto_telefono1: "+52 (442) 439-2997",
    contacto_telefono2: "+33 (86) 753-1584",
    contacto_ubicacion: "AV. Madero NO. 752, Centro, CP: 76115. Querétaro, Qro.",
    contacto_horario1: "Lunes a Viernes",
    contacto_horario2: "9:00 a.m. - 6:00 p.m.",
    sabores: [{sabor: "Chocolate", stock: 20, precio: 9.25}, {sabor: "Vainilla", stock: 10, precio: 5.00}, {sabor: "Fresa", stock: 15, precio: 10.00}, {sabor: "Pay de Limón", stock: 1, precio: 12.30}, {sabor: "Tres Leches", stock: 25, precio: 20.50}, {sabor: "Cajeta", stock: 13, precio: 14.60}, {sabor: "Vino", stock: 7, precio: 25.30}, {sabor: "Naranja", stock: 24, precio: 8.66}, {sabor: "Zanahoria", stock: 14, precio: 7.00}],
    adornos: [{adorno: "Frutos Secos", stock: 15, precio: 5.80}, {adorno: "Almendras", stock: 7, precio: 6.00}, {adorno: "Rosas", stock: 8, precio: 10.00}, {adorno: "Galletas", stock: 60, precio: 8.70}, {adorno: "Chocolates", stock: 18, precio: 10.50}, {adorno: "Muñecos de Boda", stock: 12, precio: 20.60}, {adorno: "Fondant", stock: 23, precio: 7.30}, {adorno: "Chispas de Colores", stock: 9, precio: 3.60}, {adorno: "Perzonalizado", stock: 15, precio: 0.00}],
    descripcion_cliente: "",
    nombre_cliente: "",
    telefono_cliente: "",
    correo_cliente: "",
    costo_pedido: 0,
    sabor_cliente: [],
    sabor_texto: "",
    adorno_cliente: [],
    adorno_texto: "",
    pedidos: [ {descripcion: "NA", nombre: "NA", telefono: "NA", correo: "NA", sabores: "NA", adornos: "NA", costo: 0} ],
    pedido_actual: 0
  },
  getters: {
    generarSabor(state){
      state.sabor_texto = "";
      if(state.pedidos[state.pedido_actual].sabores["Chocolate"] == true){
        state.sabor_texto = state.sabor_texto + "- Chocolate ";
        state.costo_pedido = state.costo_pedido + state.sabores[0].precio;
      }
      if(state.pedidos[state.pedido_actual].sabores["Vainilla"] == true){
        state.sabor_texto = state.sabor_texto + "- Vainilla ";
        state.costo_pedido = state.costo_pedido + state.sabores[1].precio;
      }
      if(state.pedidos[state.pedido_actual].sabores["Fresa"] == true){
        state.sabor_texto = state.sabor_texto + "- Fresa ";
        state.costo_pedido = state.costo_pedido + state.sabores[2].precio;
      }
      if(state.pedidos[state.pedido_actual].sabores["Galletas"] == true){
        state.sabor_texto = state.sabor_texto + "- Pay de Limón ";
        state.costo_pedido = state.costo_pedido + state.sabores[3].precio;
      }
      if(state.pedidos[state.pedido_actual].sabores["Tres Leches"] == true){
        state.sabor_texto = state.sabor_texto + "- Tres Leches ";
        state.costo_pedido = state.costo_pedido + state.sabores[5].precio;
      }
      if(state.pedidos[state.pedido_actual].sabores["Cajeta"] == true){
        state.sabor_texto = state.sabor_texto + "- Cajeta ";
        state.costo_pedido = state.costo_pedido + state.sabores[6].precio;
      }
      if(state.pedidos[state.pedido_actual].sabores["Vino"] == true){
        state.sabor_texto = state.sabor_texto + "- Vino ";
        state.costo_pedido = state.costo_pedido + state.sabores[7].precio;
      }
      if(state.pedidos[state.pedido_actual].sabores["Naranja"] == true){
        state.sabor_texto = state.sabor_texto + "- Naranja ";
        state.costo_pedido = state.costo_pedido + state.sabores[8].precio;
      }
      if(state.pedidos[state.pedido_actual].sabores["Zanahoria"] == true){
        state.sabor_texto = state.sabor_texto + "- Zanahoria ";
        state.costo_pedido = state.costo_pedido + state.sabores[9].precio;
      }
      //console.log(state.sabor_texto);
      return state.sabor_texto;
    },
    generarAdorno(state){
      state.adorno_texto = "";
      if(state.pedidos[state.pedido_actual].adornos["Frutos Secos"] == true){
        state.adorno_texto = state.adorno_texto + "- Frutos Secos ";
      }
      if(state.pedidos[state.pedido_actual].adornos["Almendras"] == true){
        state.adorno_texto = state.adorno_texto + "- Almendras ";
      }
      if(state.pedidos[state.pedido_actual].adornos["Rosas"] == true){
        state.adorno_texto = state.adorno_texto + "- Rosas ";
      }
      if(state.pedidos[state.pedido_actual].adornos["Galletas"] == true){
        state.adorno_texto = state.adorno_texto + "- Galletas ";
      }
      if(state.pedidos[state.pedido_actual].adornos["Chocolates"] == true){
        state.adorno_texto = state.adorno_texto + "- Chocolates ";
      }
      if(state.pedidos[state.pedido_actual].adornos["Muñecos Boda"] == true){
        state.adorno_texto = state.adorno_texto + "- Muñecos de Boda ";
      }
      if(state.pedidos[state.pedido_actual].adornos["Fondant"] == true){
        state.adorno_texto = state.adorno_texto + "- Fondant ";
      }
      if(state.pedidos[state.pedido_actual].adornos["Chispas Colores"] == true){
        state.adorno_texto = state.adorno_texto + "- Chispas de Colores ";
      }
      if(state.pedidos[state.pedido_actual].adornos["Perzonalizado"] == true){
        state.adorno_texto = state.adorno_texto + "- Perzonalizado ";
      }
      //console.log(state.adorno_texto);
      return state.adorno_texto;
    }
  },
  mutations: {
    imprimirSabor(state){
      console.log(state.sabor_cliente);
    },
    imprimirAdorno(state){
      console.log(state.adorno_cliente);
    },
    cambiarSabores(state, sabor){
      state.sabor_cliente.push(sabor);
    },
    cambiarAdornos(state, adorno){
      state.adorno_cliente.push(adorno);
    },
    cambiarDescripcion(state, descripcion){
      state.descripcion_cliente = descripcion;
      //console.log(state.descripcion_cliente);
    },
    cambiarNombre(state, nombre){
      state.nombre_cliente = nombre;
      //console.log(state.nombre_cliente);
    },
    cambiarTelefono(state, telefono){
      state.telefono_cliente = telefono;
      //console.log(state.telefono_cliente);
    },
    cambiarCorreo(state, correo){
      state.correo_cliente = correo;
      //console.log(state.correo_cliente);
    },
    agregarPedido(state) {
      if(state.sabor_cliente["Chocolate"] == true){
        state.costo_pedido = state.costo_pedido + state.sabores[0].precio;
      }
      if(state.sabor_cliente["Vainilla"] == true){
        state.costo_pedido = state.costo_pedido + state.sabores[1].precio;
      }
      if(state.sabor_cliente["Fresa"] == true){
        state.costo_pedido = state.costo_pedido + state.sabores[2].precio;
      }
      if(state.sabor_cliente["Galletas"] == true){
        state.costo_pedido = state.costo_pedido + state.sabores[3].precio;
      }
      if(state.sabor_cliente["Tres Leches"] == true){
        state.costo_pedido = state.costo_pedido + state.sabores[4].precio;
      }
      if(state.sabor_cliente["Cajeta"] == true){
        state.costo_pedido = state.costo_pedido + state.sabores[5].precio;
      }
      if(state.sabor_cliente["Vino"] == true){
        state.costo_pedido = state.costo_pedido + state.sabores[6].precio;
      }
      if(state.sabor_cliente["Naranja"] == true){
        state.costo_pedido = state.costo_pedido + state.sabores[7].precio;
      }
      if(state.sabor_cliente["Zanahoria"] == true){
        state.costo_pedido = state.costo_pedido + state.sabores[8].precio;
      }
      if(state.adorno_cliente["Frutos Secos"] == true){
        state.costo_pedido = state.costo_pedido + state.adornos[0].precio;
      }
      if(state.adorno_cliente["Almendras"] == true){
        state.costo_pedido = state.costo_pedido + state.adornos[1].precio;
      }
      if(state.adorno_cliente["Rosas"] == true){
        state.costo_pedido = state.costo_pedido + state.adornos[2].precio;
      }
      if(state.adorno_cliente["Galletas"] == true){
        state.costo_pedido = state.costo_pedido + state.adornos[3].precio;
      }
      if(state.adorno_cliente["Chocolates"] == true){
        state.costo_pedido = state.costo_pedido + state.adornos[4].precio;
      }
      if(state.adorno_cliente["Muñecos Boda"] == true){
        state.costo_pedido = state.costo_pedido + state.adornos[5].precio;
      }
      if(state.adorno_cliente["Fondant"] == true){
        state.costo_pedido = state.costo_pedido + state.adornos[6].precio;
      }
      if(state.adorno_cliente["Chispas Colores"] == true){
        state.costo_pedido = state.costo_pedido + state.adornos[7].precio;
      }
      if(state.adorno_cliente["Perzonalizado"] == true){
        state.costo_pedido = state.costo_pedido + state.adornos[8].precio;
      }
      console.log(state.costo_pedido)
      var descripcion = document.getElementById("caracteristicas").value;
      var nombre = document.getElementById("nombre").value;
      var telefono = document.getElementById("telefono").value;
      var correo = document.getElementById("correo").value;
      if(correo != "" && telefono != "" && nombre != "" && descripcion != ""){
        var pedido = { descripcion: state.descripcion_cliente, nombre: state.nombre_cliente, telefono: state.telefono_cliente, correo: state.correo_cliente, sabores: state.sabor_cliente, adornos: state.adorno_cliente, costo: state.costo_pedido};
        state.pedidos.push(pedido);
        //console.log(this.state.pedidos);
        alert("Pedido realizado con éxito");
        document.getElementById("caracteristicas").value = "";
        document.getElementById("nombre").value = "";
        document.getElementById("telefono").value = "";
        document.getElementById("correo").value = "";
        document.getElementById("sabor1").checked = false;
        document.getElementById("sabor2").checked = false;
        document.getElementById("sabor3").checked = false;
        document.getElementById("sabor4").checked = false;
        document.getElementById("sabor5").checked = false;
        document.getElementById("sabor6").checked = false;
        document.getElementById("sabor7").checked = false;
        document.getElementById("sabor8").checked = false;
        document.getElementById("sabor9").checked = false;
        document.getElementById("adorno1").checked = false;
        document.getElementById("adorno2").checked = false;
        document.getElementById("adorno3").checked = false;
        document.getElementById("adorno4").checked = false;
        document.getElementById("adorno5").checked = false;
        document.getElementById("adorno6").checked = false;
        document.getElementById("adorno7").checked = false;
        document.getElementById("adorno8").checked = false;
        document.getElementById("adorno9").checked = false;
        state.descripcion_cliente = "";
        state.nombre_cliente = "";
        state.telefono_cliente = "";
        state.correo_cliente = "";
        state.costo_pedido = 0;
        state.sabor_cliente = [];
        state.adorno_cliente = [];
      }else{
        alert("Porfavor, Rellene todos los campos del Formulario");
        //console.log(descripcion + " " + nombre + " " + telefono  + " " + correo);
      }
    },
    borrarPedido(){
      document.getElementById("caracteristicas").value = "";
      document.getElementById("nombre").value = "";
      document.getElementById("telefono").value = "";
      document.getElementById("correo").value = "";
      document.getElementById("sabor1").checked = false;
      document.getElementById("sabor2").checked = false;
      document.getElementById("sabor3").checked = false;
      document.getElementById("sabor4").checked = false;
      document.getElementById("sabor5").checked = false;
      document.getElementById("sabor6").checked = false;
      document.getElementById("sabor7").checked = false;
      document.getElementById("sabor8").checked = false;
      document.getElementById("sabor9").checked = false;
      document.getElementById("adorno1").checked = false;
      document.getElementById("adorno2").checked = false;
      document.getElementById("adorno3").checked = false;
      document.getElementById("adorno4").checked = false;
      document.getElementById("adorno5").checked = false;
      document.getElementById("adorno6").checked = false;
      document.getElementById("adorno7").checked = false;
      document.getElementById("adorno8").checked = false;
      document.getElementById("adorno9").checked = false;
    },
    realizadoPedido(state){
      if(state.pedido_actual == 0){
        alert("No puedes eliminar este pedido");
      }else{
        if(state.pedidos[state.pedido_actual].sabores["Chocolate"] == true){
          state.sabores[0].stock--;
        }
        if(state.pedidos[state.pedido_actual].sabores["Vainilla"] == true){
          state.sabores[1].stock--;
        }
        if(state.pedidos[state.pedido_actual].sabores["Fresa"] == true){
          state.sabores[2].stock--;
        }
        if(state.pedidos[state.pedido_actual].sabores["Galletas"] == true){
          state.sabores[3].stock--;
        }
        if(state.pedidos[state.pedido_actual].sabores["Tres Leches"] == true){
          state.sabores[4].stock--;
        }
        if(state.pedidos[state.pedido_actual].sabores["Cajeta"] == true){
          state.sabores[5].stock--;
        }
        if(state.pedidos[state.pedido_actual].sabores["Vino"] == true){
          state.sabores[6].stock--;
        }
        if(state.pedidos[state.pedido_actual].sabores["Naranja"] == true){
          state.sabores[7].stock--;
        }
        if(state.pedidos[state.pedido_actual].sabores["Zanahoria"] == true){
          state.sabores[8].stock--;
        }
        if(state.pedidos[state.pedido_actual].adornos["Frutos Secos"] == true){
          state.adornos[0].stock--;
        }
        if(state.pedidos[state.pedido_actual].adornos["Almendras"] == true){
          state.adornos[1].stock--;
        }
        if(state.pedidos[state.pedido_actual].adornos["Rosas"] == true){
          state.adornos[2].stock--;
        }
        if(state.pedidos[state.pedido_actual].adornos["Galletas"] == true){
          state.adornos[3].stock--;
        }
        if(state.pedidos[state.pedido_actual].adornos["Chocolates"] == true){
          state.adornos[4].stock--;
        }
        if(state.pedidos[state.pedido_actual].adornos["Muñecos Boda"] == true){
          state.adornos[5].stock--;
        }
        if(state.pedidos[state.pedido_actual].adornos["Fondant"] == true){
          state.adornos[6].stock--;
        }
        if(state.pedidos[state.pedido_actual].adornos["Chispas Colores"] == true){
          state.adornos[7].stock--;
        }
        if(state.pedidos[state.pedido_actual].adornos["Perzonalizado"] == true){
          state.adornos[8].stock--;
        }
        state.pedidos.splice(state.pedido_actual, 1);
        state.pedido_actual = 0;
        alert("Pedido eliminado con éxito");
      }
    },
    siguientePedido(state){
      if(state.pedido_actual >= state.pedidos.length-1){
        state.pedido_actual = 0;
      }else{
        state.pedido_actual++;
      }
      //console.log(state.pedido_actual);
    },
    anteriorPedido(state){
      if(state.pedido_actual <= 0){
        state.pedido_actual = state.pedidos.length-1;
      }else{
        state.pedido_actual--;
      }
      //console.log(state.pedido_actual);
    }
  },
  actions: {
  },
  modules: {
  }
})
