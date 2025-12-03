const cartasSection1 = document.querySelectorAll('#section1 img');
const cartasSection2 = document.querySelectorAll('#section2 img');

cartasSection2.forEach((carta) => {
  carta.addEventListener('click', () => {
    const cartaDisponivel = Array.from(cartasSection1).find((carta) => 
      carta.src.includes('carta.png')
    );
    if (cartaDisponivel) {
      cartaDisponivel.src = carta.src;
    } else {
      alert('Não há mais espaço disponível!');
    }
  });
});


cartasSection1.forEach((carta) => {
  carta.addEventListener('click', () => {
    carta.src = './img/carta.png';
  });
});