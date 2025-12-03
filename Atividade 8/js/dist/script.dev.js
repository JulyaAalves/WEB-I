"use strict";

var cartasSection1 = document.querySelectorAll('#section1 img');
var cartasSection2 = document.querySelectorAll('#section2 img');
cartasSection2.forEach(function (carta) {
  carta.addEventListener('click', function () {
    var cartaDisponivel = Array.from(cartasSection1).find(function (carta) {
      return carta.src.includes('Carta-Costas.png');
    });

    if (cartaDisponivel) {
      cartaDisponivel.src = carta.src;
    } else {
      alert('Não há mais espaço disponível!');
    }
  });
});
cartasSection1.forEach(function (carta) {
  carta.addEventListener('click', function () {
    carta.src = './img/carta.png';
  });
});