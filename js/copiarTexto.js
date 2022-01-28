var botonCopiar = document.querySelector("#btn-copy");
var textoACopiar = document.querySelector("#msg");

botonCopiar.addEventListener("click",function(){
    botonCopiar = textoACopiar.select();
    document.execCommand('copy');
})
