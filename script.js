var Quotes = [
  "Diz que sim!!!!", 
];

var clicks = 0;

function displayQuote() {
  var num = Math.floor(Math.random() * 1);
  document.getElementById("quote").innerHTML = Quotes[num];
}

function btnMinecraft() {
  var sound = document.getElementById("btnAudioClick");
  sound.play();
}

function showTermsAndConditions() {
  // Ocultar todos os elementos do conteúdo
  var elementsToHide = document.querySelectorAll("#content img, #content table, #content .subtitle, #content .mainBtn");
  elementsToHide.forEach(function(element) {
    element.style.display = "none";
  });

  // Exibir o pop-up de termos e condições
  var termsPopup = document.getElementById("termsAndConditions");
  termsPopup.style.display = "block";

  // Trocar o background para bg2.png
  document.body.style.backgroundImage = "url('/bg2.png')";
}

function showErrorMessage() {
  var confirmButtonText = "Houve um erro ao executar o comando do botão, tente clicar novamente.";

  if (confirm(confirmButtonText)) {
    var button = document.getElementsByClassName("mainBtn")[1];
    clicks++;

    if (clicks <= 2) {
      button.style.transform = "scale(0.8)";
      button.style.opacity = 1 - (clicks / 4);
    } else {
      var interval = setInterval(function() {
        if (parseFloat(button.style.opacity) <= 0) {
          clearInterval(interval);
          button.style.display = "none";
          alert("Aparentemente estamos com problemas técnicos, restando apenas outras funções do nosso site :(");
        } else {
          button.style.transform = "scale(0.8)";
          button.style.opacity = parseFloat(button.style.opacity) - 0.25;
        }
      }, 250);
    }
  }
}

function redirectToLink() {
  window.location.href = "https://www.example.com"; // Coloque o link desejado
}

document.getElementById("termsCheckbox").addEventListener("change", function() {
  document.getElementById("agreeButton").disabled = !this.checked;
});
