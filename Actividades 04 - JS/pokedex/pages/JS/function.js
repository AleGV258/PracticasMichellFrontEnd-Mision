/* GitHub: @AleGV258 */

var pokeIDActual = 0;

const fetchPokemon = () => {
    var pokeNameInput = document.getElementById("pokeName");
    var pokeIDInput = document.getElementById("pokeID");
    var pokeName = pokeNameInput.value.toLowerCase();
    var pokeID = Math.abs(pokeIDInput.value);
    if(pokeName != ""){
        var urlName = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
        fetch(urlName).then((res) => {
            if (res.status != "200") {
                console.log(res);
                pokeImagen("./assets/images/not_found.png");
            }
            else {
                return res.json();
            }
        }).then((data) => {
            if (data) {
                pokeIDActual = data.id;
                pokeNameInput.value = "";
                pokeIDInput.value = "";
                console.log(data);
                pokeImagen(data.sprites.front_default);
                pokeEstadisticas(pokeIDActual, data.name.toUpperCase(), data.stats[0].base_stat, data.stats[1].base_stat, data.stats[2].base_stat, data.stats[3].base_stat, data.stats[4].base_stat, data.stats[5].base_stat, data.height, data.weight);
                if(data.types.length == 1){
                    pokeTipo(data.types[0].type.name, "-");
                }else if(data.types.length == 2){
                    pokeTipo(data.types[0].type.name, data.types[1].type.name);
                }
                if(data.abilities.length == 1){
                    pokeHabilidades(data.abilities[0].ability.name, "-");
                }else if(data.abilities.length == 2){
                    pokeHabilidades(data.abilities[0].ability.name, data.abilities[1].ability.name);
                }
            }
        });
    }else if(pokeID != ""){
        var urlID = `https://pokeapi.co/api/v2/pokemon/${pokeID}`;
        fetch(urlID).then((res) => {
            if (res.status != "200") {
                console.log(res);
                pokeImagen("./assets/images/not_found.png");
            }
            else {
                return res.json();
            }
        }).then((data) => {
            if (data) {
                pokeIDActual = data.id;
                pokeNameInput.value = "";
                pokeIDInput.value = "";
                console.log(data);
                pokeImagen(data.sprites.front_default);
                pokeEstadisticas(pokeIDActual, data.name.toUpperCase(), data.stats[0].base_stat, data.stats[1].base_stat, data.stats[2].base_stat, data.stats[3].base_stat, data.stats[4].base_stat, data.stats[5].base_stat, data.height, data.weight);
                if(data.types.length == 1){
                    pokeTipo(data.types[0].type.name, "-");
                }else if(data.types.length == 2){
                    pokeTipo(data.types[0].type.name, data.types[1].type.name);
                }
                if(data.abilities.length == 1){
                    pokeHabilidades(data.abilities[0].ability.name, "-");
                }else if(data.abilities.length == 2){
                    pokeHabilidades(data.abilities[0].ability.name, data.abilities[1].ability.name);
                }
            }
        });
    }else{
        nada();
    }
}

const fetchPokemonID = (id) => {
    var pokeNameInput = document.getElementById("pokeName");
    var pokeIDInput = document.getElementById("pokeID");
    var url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImagen("./assets/images/not_found.png");
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            pokeIDActual = data.id;
            pokeNameInput.value = "";
            pokeIDInput.value = "";
            console.log(data);
            pokeImagen(data.sprites.front_default);
            pokeEstadisticas(pokeIDActual, data.name.toUpperCase(), data.stats[0].base_stat, data.stats[1].base_stat, data.stats[2].base_stat, data.stats[3].base_stat, data.stats[4].base_stat, data.stats[5].base_stat, data.height, data.weight);
            if(data.types.length == 1){
                pokeTipo(data.types[0].type.name, "-");
            }else if(data.types.length == 2){
                pokeTipo(data.types[0].type.name, data.types[1].type.name);
            }
            if(data.abilities.length == 1){
                pokeHabilidades(data.abilities[0].ability.name, "-");
            }else if(data.abilities.length == 2){
                pokeHabilidades(data.abilities[0].ability.name, data.abilities[1].ability.name);
            }
        }
    });
}

const nada = () => {
    var pokemon = document.getElementById("stat");
    var vida = document.getElementById("stat1");
    var ataque = document.getElementById("stat2");
    var defensa = document.getElementById("stat3");
    var ataque_especial = document.getElementById("stat4");
    var defensa_especial = document.getElementById("stat5");
    var velocidad = document.getElementById("stat6");
    var altura = document.getElementById("stat7");
    var peso = document.getElementById("stat8");
    var pokeImg = document.getElementById("imagen_pokemon");
    var tipo1 = document.getElementById("tipo1");
    var tipo2 = document.getElementById("tipo2");
    var img_tipo1 = document.getElementById("img_tipo1");
    var img_tipo2 = document.getElementById("img_tipo2");
    var habilidad1 = document.getElementById("habilidad1");
    var habilidad2 = document.getElementById("habilidad2");
    pokemon.innerHTML = "Pokémon";
    vida.innerHTML = "-";
    ataque.innerHTML = "-";
    defensa.innerHTML = "-";
    ataque_especial.innerHTML = "-";
    defensa_especial.innerHTML = "-";
    velocidad.innerHTML = "-";
    altura.innerHTML = "-";
    peso.innerHTML = "-";
    pokeImg.src = "./assets/images/pokeball1.gif";
    tipo1.innerHTML = "-";
    tipo2.innerHTML = "-";
    img_tipo1.src = "./assets/images/none.png";
    img_tipo2.src = "./assets/images/none.png";
    habilidad1.innerHTML = "-";
    habilidad2.innerHTML = "-";
}

const pokeImagen = (url) => {
    var pokeImg = document.getElementById("imagen_pokemon");
    pokeImg.src = url;
}

const pokeEstadisticas = (id, name, hp, atk, def, sp_atk, sp_def, vel, hei, wei) => {
    wei = wei.toString();
    wei = wei.slice(0, -1) + "." + wei.substr(-1);
    hei = hei.toString();
    hei = hei.slice(0, -1) + "." + hei.substr(-1);
    var pokemon = document.getElementById("stat");
    var vida = document.getElementById("stat1");
    var ataque = document.getElementById("stat2");
    var defensa = document.getElementById("stat3");
    var ataque_especial = document.getElementById("stat4");
    var defensa_especial = document.getElementById("stat5");
    var velocidad = document.getElementById("stat6");
    var altura = document.getElementById("stat7");
    var peso = document.getElementById("stat8");
    pokemon.innerHTML = (name + " \t-\t " + id);
    vida.innerHTML = (hp + " HP");
    ataque.innerHTML = (atk + " ATK");
    defensa.innerHTML = (def + " DEF");
    ataque_especial.innerHTML = (sp_atk + " SP. ATK");
    defensa_especial.innerHTML = (sp_def + " SP. DEF");
    velocidad.innerHTML = (vel + " VEL");
    altura.innerHTML = (hei + " m");
    peso.innerHTML = (wei + " kg");
}

const pokeTipo = (type1, type2) => {
    var tipo1 = document.getElementById("tipo1");
    var tipo2 = document.getElementById("tipo2");
    var img_tipo1 = document.getElementById("img_tipo1");
    var img_tipo2 = document.getElementById("img_tipo2");
    switch(type1){
        case "-":
            tipo1.innerHTML = "-";
            img_tipo1.src = "./assets/images/none.png";
            break;
        case "bug":
            tipo1.innerHTML = "Bicho";
            img_tipo1.src = "./assets/images/bicho.png";
            break;
        case "dark":
            tipo1.innerHTML = "Siniestro";
            img_tipo1.src = "./assets/images/siniestro.png";
            break;
        case "dragon":
            tipo1.innerHTML = "Dragón";
            img_tipo1.src = "./assets/images/dragon.png";
            break;
        case "electric":
            tipo1.innerHTML = "Eléctrico";
            img_tipo1.src = "./assets/images/electrico.png";
            break;
        case "fairy":
            tipo1.innerHTML = "Hada";
            img_tipo1.src = "./assets/images/hada.png";
            break;
        case "fighting":
            tipo1.innerHTML = "Lucha";
            img_tipo1.src = "./assets/images/lucha.png";
            break;
        case "fire":
            tipo1.innerHTML = "Fuego";
            img_tipo1.src = "./assets/images/fuego.png";
            break;
        case "flying":
            tipo1.innerHTML = "Volador";
            img_tipo1.src = "./assets/images/volador.png";
            break;
        case "ghost":
            tipo1.innerHTML = "Fantasma";
            img_tipo1.src = "./assets/images/fantasma.png";
            break;
        case "grass":
            tipo1.innerHTML = "Planta";
            img_tipo1.src = "./assets/images/planta.png";
            break;
        case "ground":
            tipo1.innerHTML = "Tierra";
            img_tipo1.src = "./assets/images/tierra.png";
            break;
        case "ice":
            tipo1.innerHTML = "Hielo";
            img_tipo1.src = "./assets/images/hielo.png";
            break;
        case "normal":
            tipo1.innerHTML = "Normal";
            img_tipo1.src = "./assets/images/normal.png";
            break;
        case "poison":
            tipo1.innerHTML = "Veneno";
            img_tipo1.src = "./assets/images/veneno.png";
            break;
        case "psychic":
            tipo1.innerHTML = "Psíquico";
            img_tipo1.src = "./assets/images/psiquico.png";
            break;
        case "rock":
            tipo1.innerHTML = "Roca";
            img_tipo1.src = "./assets/images/roca.png";
            break;
        case "steel":
            tipo1.innerHTML = "Acero";
            img_tipo1.src = "./assets/images/acero.png";
            break;
        case "water":
            tipo1.innerHTML = "Agua";
            img_tipo1.src = "./assets/images/agua.png";
            break;
        default:
            tipo1.innerHTML = "-";
            img_tipo1.src = "./assets/images/none.png";
            break;
    }
    switch(type2){
        case "-":
            tipo2.innerHTML = "-";
            img_tipo2.src = "./assets/images/none.png";
            break;
        case "bug":
            tipo2.innerHTML = "Bicho";
            img_tipo2.src = "./assets/images/bicho.png";
            break;
        case "dark":
            tipo2.innerHTML = "Siniestro";
            img_tipo2.src = "./assets/images/siniestro.png";
            break;
        case "dragon":
            tipo2.innerHTML = "Dragón";
            img_tipo2.src = "./assets/images/dragon.png";
            break;
        case "electric":
            tipo2.innerHTML = "Eléctrico";
            img_tipo2.src = "./assets/images/electrico.png";
            break;
        case "fairy":
            tipo2.innerHTML = "Hada";
            img_tipo2.src = "./assets/images/hada.png";
            break;
        case "fighting":
            tipo2.innerHTML = "Lucha";
            img_tipo2.src = "./assets/images/lucha.png";
            break;
        case "fire":
            tipo2.innerHTML = "Fuego";
            img_tipo2.src = "./assets/images/fuego.png";
            break;
        case "flying":
            tipo2.innerHTML = "Volador";
            img_tipo2.src = "./assets/images/volador.png";
            break;
        case "ghost":
            tipo2.innerHTML = "Fantasma";
            img_tipo2.src = "./assets/images/fantasma.png";
            break;
        case "grass":
            tipo2.innerHTML = "Planta";
            img_tipo2.src = "./assets/images/planta.png";
            break;
        case "ground":
            tipo2.innerHTML = "Tierra";
            img_tipo2.src = "./assets/images/tierra.png";
            break;
        case "ice":
            tipo2.innerHTML = "Hielo";
            img_tipo2.src = "./assets/images/hielo.png";
            break;
        case "normal":
            tipo2.innerHTML = "Normal";
            img_tipo2.src = "./assets/images/normal.png";
            break;
        case "poison":
            tipo2.innerHTML = "Veneno";
            img_tipo2.src = "./assets/images/veneno.png";
            break;
        case "psychic":
            tipo2.innerHTML = "Psíquico";
            img_tipo2.src = "./assets/images/psiquico.png";
            break;
        case "rock":
            tipo2.innerHTML = "Roca";
            img_tipo2.src = "./assets/images/roca.png";
            break;
        case "steel":
            tipo2.innerHTML = "Acero";
            img_tipo2.src = "./assets/images/acero.png";
            break;
        case "water":
            tipo2.innerHTML = "Agua";
            img_tipo2.src = "./assets/images/agua.png";
            break;
        default:
            tipo2.innerHTML = "-";
            img_tipo2.src = "./assets/images/none.png";
            break;
    }
}

const pokeHabilidades = (hab1, hab2) => {
    // console.log(hab1 + " + " + hab2);
    var habilidad1 = document.getElementById("habilidad1");
    var habilidad2 = document.getElementById("habilidad2");
    habilidad1.innerHTML = hab1;
    habilidad2.innerHTML = hab2;
}

const siguiente = () => {
    pokeIDActual++;
    if(pokeIDActual <= 0 || pokeIDActual >= 899){
        fetchPokemonID(1)
    }else{
        fetchPokemonID(pokeIDActual)
    }
}

const anterior = () => {
    pokeIDActual--;
    if(pokeIDActual <= 0 || pokeIDActual >= 899){
        fetchPokemonID(898)
    }else{
        fetchPokemonID(pokeIDActual)
    }
}

