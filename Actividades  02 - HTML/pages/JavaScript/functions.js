/* GitHub: @AleGV258 */

// Función para cambiar el fondo del banner principal
function background_banner(){
    var random = Math.floor(Math.random() * (5 - 0) + 1);
    var banner = document.getElementById('banner');
    switch(random){
        case 1:
            banner.classList.add('bg1');
            break;
        case 2:
            banner.classList.add('bg2');
            break;
        case 3:
            banner.classList.add('bg3');
            break;
        case 4:
            banner.classList.add('bg4');
            break;
        case 5:
            banner.classList.add('bg5');
            break;
        default:
            banner.classList.add('bg1');
            break;
    }
}

// Función para saber en que página se encuentra el cliente
function seccion_navegar(){
    var seccion = document.getElementById('navegacion').innerHTML;
    var seleccion = document.getElementById('navegacion_seleccion');
    if(seccion == "Home"){
        seleccion.classList.add('blanco');
    }else if(seccion == "Pedidos"){
        seleccion.classList.add('blanco');
    }else if(seccion == "Conocenos"){
        seleccion.classList.add('blanco');
    }else if(seccion == "Tablas"){
        seleccion.classList.add('blanco');
    }else if(seccion == "Stock"){
        seleccion.classList.add('blanco');
    }
}

// Funciones para redireccionar entre páginas
function pedidos(){
    location.href = "./seccion_pedidos.html";
}
function home(){
    location.href = "./seccion_home.html";
}
function conocenos(){
    location.href = "./seccion_conocenos.html";
}
function tabla(){
    location.href = "./seccion_tablas.html";
}
function stock(){
    location.href = "./seccion_stock.html";
}
function index(){
    location.href = "./index.html";
}