let lugarOcupado= 0
let lugarDisponible = 25

let h2dispo = document.getElementById('lugardisponible')
h2dispo.innerHTML = lugarDisponible
let h2ocupado = document.getElementById('lugarocupado')
h2ocupado.innerHTML = lugarOcupado

let registro = document.getElementById('registro')
let patentes = []


function ingresarAuto() {
    
    if(lugarDisponible > 0) {
        let patente = document.getElementById('patenteEntrada').value
        patentes.push(patente)
        lugarDisponible = lugarDisponible - 1
        h2dispo.innerHTML = lugarDisponible
        lugarOcupado = lugarOcupado + 1
        h2ocupado.innerHTML = lugarOcupado 
        imprimirPatentes(patentes)
    }
}

function salirAuto() {
    if(lugarOcupado > 0) {
        let patente = document.getElementById('patenteSalida').value
        
        lugarOcupado = lugarOcupado - 1
        h2ocupado.innerHTML = lugarOcupado 
        lugarDisponible = lugarDisponible + 1
        h2dispo.innerHTML = lugarDisponible
    }
}

function imprimirPatentes(array) {
    registro.innerHTML = ""
    for (let patente of array) {
        const h4 = document.createElement('h4');
        h4.innerText = patente;
        registro.append(h4);
    }
}









