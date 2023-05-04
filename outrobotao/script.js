// Referenciar o botão e o áudio
var playButton = document.getElementById("playButton");
var myAudio = document.getElementById("myAudio");

// Adicionar evento de clique ao botão
playButton.addEventListener("click", function() {
  myAudio.play();
});

// Esconder o player após o início da reprodução
myAudio.onplay = function() {
  document.getElementById("audioPlayer").style.display = "none";
};
