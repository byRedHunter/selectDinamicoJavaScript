let $departemento = document.getElementById('departamento')
let $provincia = document.getElementById('provincia')
let $distrito = document.getElementById('distrito')

let departamentos = ['Lima', 'Arequipa']
let provincias = ['Cañete', 'Huaral', 'Castilla']
let distritos = ['Imperial', 'San Vicente', 'Asia', 'Mala', 'Pacaraos', 'Sumbilca', 'Aucallama', 'Andahua', 'Ayo']

function mostrarLugares(arreglo, lugar) {
    let elementos = '<option selected disables>--Seleccione--</option>'

    for(let i = 0; i < arreglo.length; i++) {
        elementos += '<option value="' + arreglo[i] +'">' + arreglo[i] +'</option>'
    }

    lugar.innerHTML = elementos
}

mostrarLugares(departamentos, $departemento)

function recortar(array, inicio, fin, lugar) {
    let recortar = array.slice(inicio, fin)
    mostrarLugares(recortar, lugar)
}

$departemento.addEventListener('change', function() {
    let valor = $departemento.value

    switch(valor) {
        case 'Lima':
            recortar(provincias, 0, 2, $provincia)
        break
        case 'Arequipa':
            recortar(provincias, 2, 3, $provincia)
        break
    }

    $distrito.innerHTML = ''
})

$provincia.addEventListener('change', function() {
    let valor = $provincia.value

    if(valor == 'Cañete') {
        recortar(distritos, 0, 4, $distrito)
    } else if(valor == 'Huaral') {
        recortar(distritos, 4, 7, $distrito)
    } else {
        recortar(distritos, 7, 9, $distrito)
    }
})