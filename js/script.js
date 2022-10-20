// esconde ou mostra o Deslocamento
function tipoDeCodificacao() {
  var x = document.getElementById("selectCode").value;
  if (x === "vazio") {
    document.getElementById("shift").style.display = "none";
    document.getElementById("buttonDiminuir").style.display = "none";
    document.getElementById("buttonAumentar").style.display = "none";
  }
  if (x === "base64") {
    document.getElementById("shift").style.display = "none";
    document.getElementById("buttonDiminuir").style.display = "none";
    document.getElementById("buttonAumentar").style.display = "none";
  }
  if (x === "cifraDeCesar") {
    document.getElementById("shift").style.display = "inline";
    document.getElementById("buttonDiminuir").style.display = "inline";
    document.getElementById("buttonAumentar").style.display = "inline";
  }
}
// botão aumenta Deslocamento da Cifra de César
function aumentar() {
  var shift = document.getElementById("shift").value;
  shift = parseInt(shift) + 1;
  document.getElementById("shift").value = shift;
}
// botão diminui Deslocamento da Cifra de César
function diminuir() {
  var shift = document.getElementById("shift").value;
  shift = parseInt(shift) - 1;
  document.getElementById("shift").value = shift;
}
// chamada de função para cada tipo de codificação e mensagens de avisos
function codificar() {
  var entrada64 = document.getElementById("left").value;
  var entradaCesar = document.getElementById("left").value;
  var x = document.getElementById("selectCode").value;
  if (x === "vazio") {
    alert("Escolha um tipo de codificação!");
  }
  if (x === "base64") {
    base64Codificar(entrada64);
    if (entrada64 === "") {
      alert("Digite algo na caixa de entrada!");
    }
  }
  if (x === "cifraDeCesar") {
    cifraDeCesar(entradaCesar);
    if (entradaCesar === "") {
      alert("Digite algo na caixa de entrada!");
    }
  }
}
// chamada de função para cada tipo de codificação e mensagens de avisos
function decodificar() {
  var entrada64 = document.getElementById("left").value;
  var entradaCesar = document.getElementById("left").value;
  var x = document.getElementById("selectCode").value;
  if (x === "vazio") {
    alert("Escolha um tipo de codificação!");
  }
  if (x === "base64") {
    base64Decodificar(entrada64);
    if (entrada64 === "") {
      alert("Digite algo na caixa de entrada!");
    }
  }
  if (x === "cifraDeCesar") {
    cifraDeCesar(entradaCesar);
    if (entradaCesar === "") {
      alert("Digite algo na caixa de entrada!");
    }
  }
}
// esconde ou mostra os botões codificar mensagem e decodificar mensagem
function codificarBotao() {
  document.getElementById("codificar").style.display = "inline";
  document.getElementById("decodificar").style.display = "none";
  // facilitador na usabilidade quando se troca de codificar para decodificar ou vice-versa
  var shift = document.getElementById("shift").value;
  if (shift < 0) {
    shift = Math.abs(shift);
    document.getElementById("shift").value = shift;
  }
}
// esconde ou mostra os botões codificar mensagem e decodificar mensagem
function decodificarBotao() {
  document.getElementById("decodificar").style.display = "inline";
  document.getElementById("codificar").style.display = "none";
  // facilitador na usabilidade quando se troca de codificar para decodificar ou vice-versa
  var shift = document.getElementById("shift").value;
  if (shift > 0) {
    shift = -Math.abs(shift);
    document.getElementById("shift").value = shift;
  } else if (shift < 0) {
      shift = Math.abs(shift);
      document.getElementById("shift").value = shift;
  }
}
// codificação base64
function base64Codificar(entrada64) {
  var encoded = window.btoa(entrada64);
  return document.getElementById("right").value = encoded;
}
// decodificação base64
function base64Decodificar(entrada64) {
  var decoded = window.atob(entrada64);
  return document.getElementById("right").value = decoded;
}
// codificação e decodificação Cifra de César
var cifraDeCesar = (entradaCesar) => {
  var decoded1 = {
    a: 10, A: 11, b: 12, B: 13, c: 14, C: 15,
    d: 16, D: 17, e: 18, E: 19, f: 20, F: 21,
    g: 22, G: 23, h: 24, H: 25, i: 26, I: 27,
    j: 28, J: 29, k: 30, K: 31, l: 32, L: 33,
    m: 34, M: 35, n: 36, N: 37, o: 38, O: 39, 
    p: 40, P: 41, q: 42, Q: 43, r: 44, R: 45,
    s: 46, S: 47, t: 48, T: 49, u: 50, U: 51,
    v: 52, V: 53, w: 54, W: 55, x: 56, X: 57,
    y: 58, Y: 59, z: 60, Z: 61, " ": 62,
    
    1: 63, 2: 64, 3: 65, 4: 66, 5: 67, 6: 68, 7: 69, 8: 70, 9: 71, 0: 72
  }
  var decoded2 = {
    10: 'a', 11: 'A', 12: 'b', 13: 'B', 14: 'c', 15: 'C',
    16: 'd', 17: 'D', 18: 'e', 19: 'E', 20: 'f', 21: 'F',
    22: 'g', 23: 'G', 24: 'h', 25: 'H', 26: 'i', 27: 'I',
    28: 'j', 29: 'J', 30: 'k', 31: 'K', 32: 'l', 33: 'L',
    34: 'm', 35: 'M', 36: 'n', 37: 'N', 38: 'o', 39: 'O', 
    40: 'p', 41: 'P', 42: 'q', 43: 'Q', 44: 'r', 45: 'R',
    46: 's', 47: 'S', 48: 't', 49: 'T', 50: 'u', 51: 'U',
    52: 'v', 53: 'V', 54: 'w', 55: 'W', 56: 'x', 57: 'X',
    58: 'y', 59: 'Y', 60: 'z', 61: 'Z', 62: ' ',
    
    63: 1, 64: 2, 65: 3, 66: 4, 67: 5, 68: 6, 69: 7, 70: 8, 71: 9, 72: 0
  }

  var decipher2 = '';
  
  for (var i = 0 ; i < entradaCesar.length; i++) {
    //entradaCesar = entradaCesar.replace(/[^a-zA-Z0-9]/, '');
    var shift = document.getElementById("shift").value;
    var decipher1 = decoded1[entradaCesar[i]];

    decipher1 = decipher1 + (parseInt(shift) % 63 * 2);

    if (decipher1 < 10) {
      decipher1 = decipher1 + 63;
    } else if (decipher1 > 72) {
      decipher1 = decipher1 - 63;
    }
  
    decipher2 += decoded2[decipher1];
  }
  return document.getElementById("right").value = decipher2;
}
