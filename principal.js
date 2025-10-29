let index = 0;
const slides = document.querySelectorAll('.slide');
const total = slides.length;
const intervalo = 5000; // cada 5 segundos

document.getElementById('next').addEventListener('click', () => mover(1));
document.getElementById('prev').addEventListener('click', () => mover(-1));

function mover(n) {
  slides[index].classList.remove('activo');
  index = (index + n + total) % total;
  slides[index].classList.add('activo');
}

setInterval(() => mover(1), intervalo);
