class AudioController {
  constructor() {
    this.bgMusic = new Audio("Assets/Audio/creepy.mp3");
    this.flipSound = new Audio("Assets/Audio/flip.wav");
    this.matchSound = new Audio("Assets/Audio/match.wav");
    this.victorySound = new Audio("Assets/Audio/victory.wav");
    this.gameoverSound = new Audio("Assets/Audio/gamesOver.wav");
    this.bgMusic.volume = 0.5;
    this.bgMusic.loop = true;
  }
  startMusic() {
    this.bgMusic.play();
  }
}

$(document).ready(function() {
  let overleys = Array.from($(".overlay-text"));
  let cards = Array.from($(".card"));

  overleys.forEach(function(overley) {
    overley.addEventListener("click", function() {
      overley.classList.remove("visible");
      let audioController = new AudioController();
      audioController.startMusic();
    });
  });

  cards.forEach(function(card) {
    card.addEventListener("click", function() {
      flipCard(card);
    });

    //  card.addClass("visible");
  });
});

function flipCard(card) {
  card.classList.add("visible");
}
