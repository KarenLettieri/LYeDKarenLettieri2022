
var lugarOcupado= 0
let h2dispo = document.getElementById('lugardisponible')
let h2ocupado = document.getElementById('lugarocupado')
const miDiv = document.getElementById('respuesta')
let lugarDisponible = 25
h2dispo.innerHTML = lugarDisponible
h2ocupado.innerHTML = lugarOcupado


function ingresarAuto() {
    console.log(lugarDisponible)
    if(lugarDisponible > 0) {
        lugarDisponible = lugarDisponible - 1
        h2dispo.innerHTML = lugarDisponible
        lugarOcupado = lugarOcupado + 1
        h2ocupado.innerHTML = lugarOcupado 
    }
    
    

    
}

function salirAuto() {

    if(lugarOcupado > 0) {
        lugarOcupado = lugarOcupado - 1
        h2ocupado.innerHTML = lugarOcupado 
        lugarDisponible = lugarDisponible + 1
        h2dispo.innerHTML = lugarDisponible

    }

    
    
}









