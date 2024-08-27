//letras (antes de ":") que serán sustituidas por caracteres (despues de ":")
const llaves = { "e":"enter","i":"imes","a":"ai","o":"ober","u":"ufat"};

//para verificar que el texto ingresado no incluya mayusculas ni caracteres especiales
function validarTexto(texto){
    const minusculas = /^[a-z\s]*$/;
       
    if(!minusculas.test(texto)){
        alert("Introduce solo minúsculas sin acentos y no utilices caracteres especiales.");
        return false;
    }else if (texto == ""){
        alert("Introduce un texto para encriptar / desencriptar.");
        return false
    } else{
        return true;   
    }    
}

//función para encriptar de acuerdo a las llaves declaradas
function encriptarTexto (textoIngresado) {
    let textoEncriptado = "";
    for (const llave in llaves) {
        textoEncriptado = textoIngresado.replaceAll(llave,llaves[llave]);
        textoIngresado = textoEncriptado;        
    }
    return (textoEncriptado);
}

//función para desencriptar aplicando la inversa de la función "encriptarTexto"
function desencriptarTexto (textoIngresado) {
    let textoDesencriptado = "";
    for (const llave in llaves) {
        textoDesencriptado = textoIngresado.replaceAll(llaves[llave],llave);
        textoIngresado = textoDesencriptado;        
    }
    return (textoDesencriptado);
}

//conecta la funcion encriptarTexto con boton-encriptar
let botonEncriptar = document.querySelector("#boton-encriptar");
botonEncriptar.addEventListener("click",function ()  {
    let textInput = document.querySelector("#input-texto").value;
    let textoIngresado = textInput;
   
    if (validarTexto (textoIngresado)) {       
        let textoEncriptado = encriptarTexto(textoIngresado);
        let resultado = document.querySelector("#output-texto");
        resultado.value = textoEncriptado;
    } else {        
        textInput = "";     

    }          
})

//conecta la funcion desencriptar con boton-desencriptar
let botonDesencriptar = document.querySelector("#boton-desencriptar");
botonDesencriptar.addEventListener("click", function(){
    let textoIngresado = document.querySelector("#input-texto").value;
    let textoDesencriptado = desencriptarTexto(textoIngresado);

    let resultado = document.querySelector("#output-texto");
    resultado.value = textoDesencriptado;

//para copiar lo que aparece en la ventana de mensaje despues de encriptar/desencriptar
let botonCopiar = document.querySelector("#boton-copiar");
botonCopiar.addEventListener("click",function(){        
    let Copiado = document.querySelector("#output-texto").value;
    navigator.clipboard.writeText(Copiado);
    document.querySelector("#input-texto").value="";
});
})












