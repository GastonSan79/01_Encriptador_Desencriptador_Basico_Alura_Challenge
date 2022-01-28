/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

var textoEncriptado = document.querySelector("#input-texto");
var botonDesencriptar = document.querySelector("#btn-desencriptar");
var textoDesencriptado = document.querySelector("#msg");
var aDesencriptar;

//Captura de texto ingresado
textoEncriptado.addEventListener("input",function(){
	aDesencriptar = textoEncriptado.value;
})
//El botón envía a desencriptar el texto con la función "desencriptarTexto" y muestra el resultado
botonDesencriptar.addEventListener("click",function(event){
	event.preventDefault();
	var desencriptado = desencriptarTexto(aDesencriptar);
	textoDesencriptado.value = desencriptado;
    textoEncriptado.value = "";
})
//Función que realiza el desencriptado:
function desencriptarTexto(texto){
	texto = aDesencriptar.replace(/enter/gi,"e").replace(/imes/gi,"i").replace(/ai/gi,"a").replace(/ober/gi,"o").replace(/ufat/gi,"u");
	return texto.toLowerCase();
}

