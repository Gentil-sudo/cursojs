var idade = 162
console.log(`Você tem ${idade} anos.`)
if (idade < 16)  {
console.log('Não Vota!')
} else if (idade >= 16 && idade < 18 || idade > 65) {
     console.log('Voto Opicional')
}else {
    console.log('Voto Obrigatorio!')
}