const filmes_notas = {
    "x": {
        "blues_traveler": 3.5,
        "broken_bells": 2,
        "deadmau5": 0,
        "norah_jones": 4.5,
        "phoenix": 5,
        "slightly_stoopid": 1.5,
        "the_strokes": 2.5,
        "vampire_weekend": 2
    },
    "y": {
        "blues_traveler": 1,
        "broken_bells": 5,
        "deadmau5": 5,
        "norah_jones": 5,
        "phoenix": 1,
        "slightly_stoopid": 0.5,
        "the_strokes": 1,
        "vampire_weekend": 0
    }
};

/*
-------------------------------------
Produto dos itens                     |
-------------------------------------
*/
function converted_object_to_vetor(objeto) {
    
    return [Object.values(objeto.x), Object.values(objeto.y)]
}

function product_x_and_y(vetores) {
   let product = []
   for (let i = 0; i <= vetores[0].length; i++) {
        product.push(vetores[0][i] * vetores[1][i])
        
    }
   return product

}

function sum(list_sum) {
    
    list_sum = list_sum.filter(valor => !isNaN(valor));
    let tot_sum = 0
        
    for (let i = 0; i < list_sum.length; i++) {
        tot_sum  += list_sum[i]
    }

    return tot_sum
}


xy = sum(product_x_and_y(converted_object_to_vetor(filmes_notas)))

/*
-------------------------------------
Módulo do vetor                      |
-------------------------------------
*/

function vectComponent() {
    
    return converted_object_to_vetor(filmes_notas)
     
}


function moduleVect() {
    let matriz = vectComponent()
    
    let x_vect_module = matriz[0]
    let y_vect_module = matriz[1]

    let x_pot = []
    let y_pot = []
    for (let i = 0; i <= x_vect_module.length - 1; i++) {
        x_pot.push(Math.pow(x_vect_module[i], 2))
        y_pot.push(Math.pow(y_vect_module[i], 2))

    }

    const x_sum_pot = x_pot.reduce((acc, val) => acc + val, 0)
    const y_sum_pot = y_pot.reduce((acc, val) => acc + val, 0)

    return (Math.sqrt(x_sum_pot)) * (Math.sqrt(y_sum_pot))
}

function cossine_simility(xy, module_vector) {
    
    return xy / module_vector

}

cossine_simility(xy, moduleVect())

let cosseno_similaridade = cossine_simility(xy, moduleVect())

console.log(
    cossine_simility(xy, moduleVect()),
    `\nA semelhança está: ${cosseno_similaridade.toFixed(2)}% entre x e y`

)
