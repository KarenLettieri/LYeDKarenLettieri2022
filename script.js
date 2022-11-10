let lugarOcupado = 0
let lugarDisponible = 25

let h2dispo = document.getElementById('lugardisponible')
h2dispo.innerHTML = lugarDisponible
let h2ocupado = document.getElementById('lugarocupado')
h2ocupado.innerHTML = lugarOcupado

let registro = document.getElementById('registro')
let patentes = []


function ingresarAuto() {
    let patente = document.getElementById('patenteEntrada').value
    if (patente != "") {
        if (lugarDisponible > 0) {
            patentes.push(patente)
            lugarDisponible = lugarDisponible - 1
            h2dispo.innerHTML = lugarDisponible
            lugarOcupado = lugarOcupado + 1
            h2ocupado.innerHTML = lugarOcupado
            imprimirPatentes(patentes)
        }
    }
    else {
        alert("No ingresó la patente")
    }

}

function salirAuto() {
    let patente = document.getElementById('patenteSalida').value
    if (patente != "") {
        if (lugarOcupado > 0) {
            var indice = patentes.indexOf(patente);
            if (indice != -1) {

                eliminarPatente(patentes, patente)
                lugarOcupado = lugarOcupado - 1
                h2ocupado.innerHTML = lugarOcupado
                lugarDisponible = lugarDisponible + 1
                h2dispo.innerHTML = lugarDisponible
                imprimirPatentes(patentes)
            }
            else {
                alert("No existe esa patente ingresada.")
            }

        }
    }
    else {
        alert("No ingresó la patente de salida")
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

function eliminarPatente(array, buscado) {
    var indice = array.indexOf(buscado); 
    array.splice(indice, 1); 
}














