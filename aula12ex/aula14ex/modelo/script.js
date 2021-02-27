function carregar (){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById ('imagem')
var agora = new Date();
var hora = agora.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
if (hora <= 0 || hora <=5 ){
    console.log('Boa Madrugada!')
    //madrugada
    img.src = 'fotomadrugada.png'
    document.body.style.background = '#696969'
}else if ( hora >= 6 && hora <=11 ){
    console.log('Bom dia!')
    // manhã
    img.src = 'fotomanha.png'
    document.body.style.background = '#EEDD82'
}else if (hora <= 12 || hora <= 17 ) {
    console.log('Boa Tarde!')
    //tarde
    img.src = 'fototarde.png'
    document.body.style.background ='#F4A460'
}else if (hora >= 18 && hora <= 23 ) {
    console.log('Boa noite!')
    //noite
    img.src = 'fotonoite.png'
    document.body.style.background = '#000080'
}
}