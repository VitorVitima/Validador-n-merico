var inputNumber = document.querySelector('#number')
var boxValores = document.querySelector('#valores')
var validarValores = document.querySelector('#validarValores')
var valoresSalvos = []

function numeroRepe(n){
    var validadorNumerovaRepe = valoresSalvos.indexOf(n)
    if (validadorNumerovaRepe < 0){
        return false
    } else {
        return true
    }
}

function salvar(){
    
    
    if (numeroRepe(Number(inputNumber.value)) ){
        window.alert('numero ja foi')
    } else {
        validarValores.innerHTML = " "
        valoresSalvos.push(Number(inputNumber.value))
        for(var k = 0 ; k < valoresSalvos.length ; k++){
            var span = document.createElement('span')
            span.innerHTML = `O valor <strong>${valoresSalvos[k]}</strong> foi adicionado.`
        }
        boxValores.insertAdjacentElement('beforeend', span)
    }
    inputNumber.value = ""
    inputNumber.focus()
}
function temOuNao(){
    if (valoresSalvos.length == 0){
        return true
    } else if (valoresSalvos.length != 0){
        return false
    }
}

function validar(){
    
    if (temOuNao()){
        window.alert('Não tem valores salvos!!!')
    } else {
        var totalDeValores = valoresSalvos.length
        var soma = 0
        var media = 0
        var maior = 0
        var menor = 0
            for( var k = 0 ; k < valoresSalvos.length ; k++){
                soma = soma + valoresSalvos[k]
            }
            for (var k = 0 ; k < valoresSalvos.length ; k++){
                if (maior < valoresSalvos[k]){
                    maior = valoresSalvos[k]
                }
                if (menor > valoresSalvos[k]){
                    menor = valoresSalvos[k]
                }
            }
        media += soma / valoresSalvos.length
            

        validarValores.innerHTML += `<p>Ao todo são <strong>${totalDeValores}</strong> valores cadastrados.</p>`
        validarValores.innerHTML += `<p>A soma de todos os valores é <strong>${soma}</strong> </p>`
        validarValores.innerHTML += `<p>A média de todos esses valores é <strong>${media}</strong></p>`
        validarValores.innerHTML += `<p>O menor valor cadastrado foi <strong>${menor}</strong>. </p>`
        validarValores.innerHTML += `<p>O maior valor cadastrado foi <strong>${maior}</strong>. </p>`
    }
}