// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Your morning eyes, I could stare like watching stars", time: 15 },
  { text: "I could walk you by, and l'll tell without a thought", time: 25 },
  { text: "You'd be mine", time: 32 },
  { text: "Would you mind if I took your hand tonight", time: 33 },
  { text: "Know you're all that I want this life", time: 39 },
  { text: "I'll imagine we fell in love", time: 46 },
  { text: "I think l'll picture us, you with the waves", time: 53 },
  { text: "The oceans colors on your face", time: 56 },
  { text: "I'll leave my heart with your air", time: 101 },
  { text: "So let me fly with you", time: 104 },
  { text: "Will you be forever with me", time: 108 },
  { text: "My love will always stay by you", time: 144 },
  { text: "I'll keep it safe so don't you worry a thing, l'll tell you I love you more", time: 151 },
  { text: "It's stuck with you forever so promise you won't let it go", time: 299},
  { text: "I'll trust the universe will always bring me to you", time: 206 },
  { text: "I'll imagine we fell in love", time: 216 },
  { text: "I'll nap under moonlight skies with you", time: 217 },
  { text: "I think l'll picture us, you with the waves", time: 221 },
  { text: "The oceans colors on your face", time: 225 },
  { text: "I'll leave my heart with your air", time: 229 },
  { text: "So let me fly with you", time: 233 },
  { text: "Will you be forever with me", time: 236 },

];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);