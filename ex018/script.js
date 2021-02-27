let num = document.getElementById('txtn')
let lista = document.querySelectorAll('select#flista')
let res = document.querySelectorAll('div#res')
let valores= []
 
function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    }else {
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1) {
        return true
    }else {
        return false
    }
}

function adicionar() {
 if(isNumero(num.value) && !inLista(num.value, valores)) {

    window.alert('Tudo Okay!')
 
} else {
    
    window.alert('Valor inválido ou já encontrado na lista!')
 
}

}

