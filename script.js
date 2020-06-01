let rightButton = document.querySelector(".rightButton");
let leftButton = document.querySelector(".leftButton");
let images = document.querySelectorAll(".image");

let imageID = 1;

//Fonction qui attend un paramètre qui provient des boutons
let majSlide = function(n) {
  slides((imageID += n));
};

//Fonction qui attend un paramètre d'une autre fonction => majSlide
let slides = function(n) {
  //Condition pour savoir si on est à la fin des images ou non
  if (n > images.length) {
    imageID = 1;
  }
  if (n < 1) {
    imageID = images.length;
  }

  //foreach qui fait disparaitre toutes les images
  images.forEach(element => {
    element.classList.remove("active");
  });

  //Affiche la bonne image
  images[imageID - 1].classList.add("active");
};

leftButton.addEventListener("click", function() {
  majSlide(-1);
});

rightButton.addEventListener("click", function() {
  majSlide(1);
});
