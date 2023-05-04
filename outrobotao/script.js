// Referenciar o bot�o e o �udio
var playButton = document.getElementById("playButton");
var myAudio = document.getElementById("myAudio");

// Adicionar evento de clique ao bot�o
playButton.addEventListener("click", function() {
  myAudio.play();
});

// Esconder o player ap�s o in�cio da reprodu��o
myAudio.onplay = function() {
  document.getElementById("audioPlayer").style.display = "none";
};
