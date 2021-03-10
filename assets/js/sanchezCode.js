let btnA1 = document.getElementById("btnA1");
let btnB2 = document.getElementById("btnB2");
let btnC3 = document.getElementById("btnC3");
let btnD4 = document.getElementById("btnD4");
let btnE5 = document.getElementById("btnE5");
let btnF6 = document.getElementById("btnF6");
let btnG7 = document.getElementById("btnG7");
let btnH8 = document.getElementById("btnH8");
let btnI9 = document.getElementById("btnI9");
let btnJ10 = document.getElementById("btnJ10");
let hLetras = document.getElementById("hLetras");
let hNumeros = document.getElementById("hNumeros");
let letrasTemp = "";
let numerosTemp = "";

const logicaA1 = () => {
  if (letrasTemp === "A") {
    alert("ya esta");
  } else {
    if (letrasTemp === "") {
      hLetras.innerHTML = "A";
      letrasTemp = "A";
    } else {
      if (letrasTemp === "ABCDEFGHIJ" && numerosTemp === "") {
        hNumeros.innerHTML = "1";
        numerosTemp = "1";
      } else {
        alert("ya esta");
      }
    }
  }
};

const logicaB2 = () => {
  if (letrasTemp === "A") {
    hLetras.innerHTML = letrasTemp + "B";
    letrasTemp = "AB";
  } else {
    if (numerosTemp === "1") {
      hNumeros.innerHTML = numerosTemp + "2";
      numerosTemp = "12";
    } else {
      alert("ya esta");
    }
  }
};

const logicaC3 = () => {
  if (letrasTemp === "AB") {
    hLetras.innerHTML = letrasTemp + "C";
    letrasTemp = "ABC";
  } else {
    if (numerosTemp === "12") {
      hNumeros.innerHTML = numerosTemp + "3";
      numerosTemp = "123";
    } else {
      alert("ya esta");
    }
  }
};

const logicaD4 = () => {
  if (letrasTemp === "ABC") {
    hLetras.innerHTML = letrasTemp + "D";
    letrasTemp = "ABCD";
  } else {
    if (numerosTemp === "123") {
      hNumeros.innerHTML = numerosTemp + "4";
      numerosTemp = "1234";
    } else {
      alert("ya esta");
    }
  }
};

const logicaE5 = () => {
  if (letrasTemp === "ABCD") {
    hLetras.innerHTML = letrasTemp + "E";
    letrasTemp = "ABCDE";
  } else {
    if (numerosTemp === "1234") {
      hNumeros.innerHTML = numerosTemp + "5";
      numerosTemp = "12345";
    } else {
      alert("ya esta");
    }
  }
};

const logicaF6 = () => {
  if (letrasTemp === "ABCDE") {
    hLetras.innerHTML = letrasTemp + "F";
    letrasTemp = "ABCDEF";
  } else {
    if (numerosTemp === "12345") {
      hNumeros.innerHTML = numerosTemp + "6";
      numerosTemp = "123456";
    } else {
      alert("ya esta");
    }
  }
};
const logicaG7 = () => {
  if (letrasTemp === "ABCDEF") {
    hLetras.innerHTML = letrasTemp + "G";
    letrasTemp = "ABCDEFG";
  } else {
    if (numerosTemp === "123456") {
      hNumeros.innerHTML = numerosTemp + "7";
      numerosTemp = "1234567";
    } else {
      alert("ya esta");
    }
  }
};

const logicaH8 = () => {
  if (letrasTemp === "ABCDEFG") {
    hLetras.innerHTML = letrasTemp + "H";
    letrasTemp = "ABCDEFGH";
  } else {
    if (numerosTemp === "1234567") {
      hNumeros.innerHTML = numerosTemp + "8";
      numerosTemp = "12345678";
    } else {
      alert("ya esta");
    }
  }
};
const logicaI9 = () => {
  if (letrasTemp === "ABCDEFGH") {
    hLetras.innerHTML = letrasTemp + "I";
    letrasTemp = "ABCDEFGHI";
  } else {
    if (numerosTemp === "12345678") {
      hNumeros.innerHTML = numerosTemp + "9";
      numerosTemp = "123456789";
    } else {
      alert("ya esta");
    }
  }
};
const logicaJ10 = () => {
  if (letrasTemp === "ABCDEFGHI") {
    hLetras.innerHTML = letrasTemp + "J";
    letrasTemp = "ABCDEFGHIJ";
  } else {
    if (numerosTemp === "123456789") {
      hNumeros.innerHTML = numerosTemp + "10";
      numerosTemp = "12345678910";
    } else {
      alert("ya esta");
    }
  }
};

btnA1.onclick = function () {
  logicaA1();
};
btnB2.onclick = function () {
  logicaB2();
};
btnC3.onclick = function () {
  logicaC3();
};
btnD4.onclick = function () {
  logicaD4();
};
btnE5.onclick = function () {
  logicaE5();
};
btnF6.onclick = function () {
  logicaF6();
};
btnG7.onclick = function () {
  logicaG7();
};
btnH8.onclick = function () {
  logicaH8();
};
btnI9.onclick = function () {
  logicaI9();
};
btnJ10.onclick = function () {
  logicaJ10();
};
