function inverterString(str) {
    let invertida = "";
    for (let i = str.length - 1; i >= 0; i--) {
      invertida += str[i];
    }
    return invertida;
  }
  
  const texto = "Exemplo";
  const textoInvertido = inverterString(texto);
  
  console.log(textoInvertido);
  