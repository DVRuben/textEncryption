const inputTexto = document.querySelector(".input-texto");
const textoEncriptado = document.querySelector(".texto-encriptado");

function btnEncriptar(){
    const textoAEncriptar = encriptar(inputTexto.value);
    textoEncriptado.value = textoAEncriptar;
    textoEncriptado.style.backgroundImage = "none";
    inputTexto.value = "";
}

function btnDesencriptar(){
    const revelar = desencriptar(inputTexto.value);
    textoEncriptado.value = revelar;
    textoEncriptado.style.backgroundImage = "none";
}

function encriptar(texto){
    texto = texto.toLowerCase();
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    for(let i = 0; i < matrizCodigo.length; i++){
        if(texto.includes(matrizCodigo[i][0])){
            texto = texto.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return texto;
}

function desencriptar(texto){
    let matrizReverso = [["enter", "e"], ["imes", "i"], ["ai", "a"], ["ober", "o"], ["ufat", "u"]];

    for(let i = 0; i < matrizReverso.length; i++){
        if(texto.includes(matrizReverso[i][0])){
            texto = texto. replaceAll(matrizReverso[i][0], matrizReverso[i][1]);
        }
    }
    return texto;
}

function copy() {
    let copyText = document.querySelector("#input");
    copyText.select();
    document.execCommand("copy");
  }
  
  document.querySelector("#copy").addEventListener("click", copy);