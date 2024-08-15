const app = document.getElementById('typewriter'); //El elemento 'typewriter' es un div vacío 

const typewriter = new Typewriter(app, {
  loop: true,
  delay: 75
});

typewriter
.typeString('La capital del sol')
.pauseFor(200)
.start();






