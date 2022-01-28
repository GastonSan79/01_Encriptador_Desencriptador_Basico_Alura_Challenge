
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/
var textoFuente = document.querySelector("#input-texto");
var botonEncriptar = document.querySelector("#btn-encriptar");
var textoSalida = document.querySelector("#msg");
var aEncriptar;

//Captura el campo de texto
textoFuente.addEventListener("input",function(){
	aEncriptar = textoFuente.value;
})

//Envía el texto a la función de encriptado mediante el botón "Encriptar" y muestra el resultado
//en el campo "Mensaje encriptado"
botonEncriptar.addEventListener("click",function(event){
	event.preventDefault();
	var encriptado = encriptarTexto(aEncriptar);
	textoSalida.value = encriptado;
	textoFuente.value =""; //línea que me limpia el campo de entrada una vez presionado el
	//botón para encriptar/desencriptar							
})

//Función para encriptar: 
function encriptarTexto(texto){
	texto = aEncriptar.replace(/e/gi,"enter").replace(/i/gi,"imes").replace(/a/gi,"ai").replace(/o/gi,"ober").replace(/u/gi,"ufat");
	return texto.toLowerCase();
}







