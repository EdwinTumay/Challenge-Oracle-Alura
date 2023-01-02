function encriptar(){
    var cadena = document.querySelector("#contenedor-texto")
    var texto = document.getElementById("contenedor-texto").value.toLocaleLowerCase();
    var textoCifrado;

    if(cadena.value!=""){

        textoCifrado = texto.replace(/e/igm, "enter");
        textoCifrado = textoCifrado.replace(/o/img, "ober");
        textoCifrado = textoCifrado.replace(/i/img, "imes");
        textoCifrado = textoCifrado.replace(/a/img, "ai"); 
        textoCifrado = textoCifrado.replace(/u/img, "ufat");

        document.getElementById("img-munheco").style.display = "none";
        document.getElementById("frame-5").style.display = "none";
        document.getElementById("rectangle-1").style.display = "value";//  en el responsive
        document.getElementById("rectangle-1").style.display = "inherit";// en el responsive
        document.getElementById("text-cifrado").style.display = "value";
        document.getElementById("text-cifrado").style.display = "inherit";
        document.getElementById("text-cifrado").innerHTML = textoCifrado;
        document.getElementById("btn-copiado").style.display = "value";
        document.getElementById("btn-copiado").style.display = "inherit";
    } else{
        swal("Error", "Introduzca el mensaje a encriptar.", "error")
        }
};

function desencriptar(){
    var cadena = document.querySelector("#contenedor-texto")
    var texto = document.getElementById("contenedor-texto").value.toLocaleLowerCase();
    var textoCifrado;

    if(cadena.value!=""){
        textoCifrado = texto.replace(/enter/igm, "e");
        textoCifrado = textoCifrado.replace(/ober/img, "o");
        textoCifrado = textoCifrado.replace(/imes/img, "i");
        textoCifrado = textoCifrado.replace(/ai/img, "a");
        textoCifrado = textoCifrado.replace(/ufat/img, "u");

        document.getElementById("img-munheco").style.display = "none";
        document.getElementById("frame-5").style.display = "none";
        document.getElementById("rectangle-1").style.display = "value";//  en el responsive
        document.getElementById("rectangle-1").style.display = "inherit";// en el responsive
        document.getElementById("text-cifrado").style.display = "value";
        document.getElementById("text-cifrado").style.display = "inherit";
        document.getElementById("text-cifrado").innerHTML = textoCifrado;
        document.getElementById("btn-copiado").style.display = "value";
        document.getElementById("btn-copiado").style.display = "inherit";
    } else{
        swal("Error", "Introduzca el mensaje a Desencriptar.", "error")
        
        }
};

function copiar(){
    var text = document.querySelector("#text-cifrado");
    text.select();
    document.execCommand("copy");
};


