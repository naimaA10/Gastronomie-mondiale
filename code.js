//Commentaires des utilisateurs pour les plats des différents pays 
//Sélectionne les éléments HTML dont la classe CSS est .product-container-com et les stokes dans le tableau productContainers
const productContainers = [...document.querySelectorAll('.product-container-com')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn-com')];
const preBtn = [...document.querySelectorAll('.pre-btn-com')];

// Boucle sur chaque élément item dans le tableau productContainers avec son index i
productContainers.forEach((item, i) => {
    
    //Les dimensions (hauteur, largeur, position et marges) du conteneur de produit actuel "item"
    let containerDimensions = item.getBoundingClientRect();
    //Largeur du conteneur de produit "item " à partir de l'objet containerDimensions
    let containerWidth = containerDimensions.width;

    //Ecoute d'événements de clic du bouton "suivant" correspondant à "nxtBtn[i]", déplace le contenue du conteneur de "item" vers la droite et ajoutant la larheur du conteneur "containerWidh"
    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })
    //Bouton "précédent"
    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})



//Curseur personalisé
//Eléments HTML avec la classe "cursor"
const cursor = document.querySelector('.cursor');

//Ajoute événement de souris sur la page, met à jour la position de élément "cursor" en temps réel en utilisant la position de la souris détectée dans "event" et modifiant l'attribut "style" de l'élement "cursor"
document.addEventListener('mousemove', e => {
    cursor.setAttribute('style', 'top:'+(e.pageY - 20)+"px; left:"+(e.pageX - 20)+"px;")
})

//Ajoute évenement clique sur l'ensemble de la page, ajoute temporairement la classe expand à l'élément cursor et se supprime dans un délai de 500milisecondes
document.addEventListener('click', ()=>{
    cursor.classList.add('expand');
    setTimeout(()=>{
        cursor.classList.remove("expand");
    }, 500);
})



// Animations de la page d'acceuil
//Sélectionne les élements <span> contenus dans la balise <h1>
const titreSpans = document.querySelectorAll('h1 span');
//Sélectionne les élement de la classe .btn-first
const btns = document.querySelectorAll('.btn-first');
const logo = document.querySelector('.logo');
const medias = document.querySelectorAll('.bulle');
const l1 = document.querySelector('.l1');
const l2 = document.querySelector('.l2');

//Evénement load, une séquence d'animation GSAP qui anime l'apparition de certains éléments sur la page lors du chargement
window.addEventListener('load', () => {
    const TL = gsap.timeline({paused: true});

    TL
    .staggerFrom(titreSpans, 1, {top: -50, opacity: 0, ease: "power2.out"}, 0.3)
    .staggerFrom(btns, 1, {opacity: 0, ease: "power2.out"}, 0.3, '-=1')
    .from(logo, 0.4, {transform: "scale(0)", ease: "power2.out"}, '-=2')   
    

    TL.play();
})


// Vérifier l'état du mode sombre dans le stockage local du navigateur
const isDarkMode = localStorage.getItem("darkMode") === "true";
checkbox.checked = isDarkMode;
changer();

// Ajouter un écouteur d'événement sur la case à cocher
checkbox.addEventListener("change", changer);



//Italie : Evaluer et commenter le plat
function printinfo() {
  // Récupérer les informations du formulaire
  var star = document.principal.star.value;
  var login = document.principal.usr_login.value || "Anonyme";
  var age = document.principal.user_age.value || "";
  if (age <= 0) {
    alert("Veuillez entrer un age supérieur à zéro.");
    return;
  }
  var sexe = document.principal.user_sex.value || "";
  var devise = document.principal.usr_devise.value; //le commentaire

  // Créer un objet pour stocker les informations du commentaire
  var commentaire = {
    star: star,
    login: login,
    age: age,
    sexe: sexe,
    devise: devise,
    date: new Date().toLocaleString() // ajouter la date et l'heure du commentaire
  };


  // Récupérer les commentaires existants dans le stockage local
  var commentairesExistants = JSON.parse(localStorage.getItem("liste_commentaireit")) || [];

  // Ajouter le nouveau commentaire au tableau de commentaires
  commentairesExistants.push(commentaire);

  // Stocker le tableau de commentaires mis à jour dans le stockage local
  localStorage.setItem("liste_commentaireit", JSON.stringify(commentairesExistants));

  // Afficher les commentaires dans la page
  afficherCommentaires();
}

function afficherCommentaires() {
  // Récupérer les commentaires depuis le stockage local
  var commentairesExistants = JSON.parse(localStorage.getItem("liste_commentaireit")) || [];

  // Créer une chaîne HTML pour afficher les commentaires
  var htmlCommentaires = "";
  for (var i = 0; i < commentairesExistants.length; i++) {
    var commentaire = commentairesExistants[i];
    htmlCommentaires+=`
       <div class="contenair-box-com">
                <div class="box-com">
                <h1>${commentaire.star}/5</h1>
                <h2>${commentaire.login} ${commentaire.age} ${commentaire.sexe}</h2>
                <p>${commentaire.devise}</p>
                <h3>${commentaire.date}</h3>
        </div>
      `;
  }

  // Afficher les commentaires dans la page
  var commentairesDiv = document.getElementById("liste_commentaireit");
  commentairesDiv.innerHTML = htmlCommentaires;
}

//appel afficher commentaires lorsque la page est chargé
window.onload = function() {
  afficherCommentaires();
};

//France : Evaluer et commenter le plat
function printinfofr() {
  // Récupérer les informations du formulaire
  var starfr = document.principal.starfr.value;
  var loginfr = document.principal.usr_loginfr.value || "Anonyme";
  var agefr = document.principal.user_agefr.value || "";
  if (agefr <= 0) {
    alert("Veuillez entrer un age supérieur à zéro.");
    return;
  }
  var sexefr = document.principal.user_sexfr.value || "";
  var devisefr = document.principal.usr_devisefr.value; //le commentaire

  // Créer un objet pour stocker les informations du commentaire
  var commentairefr = {
    star: starfr,
    login: loginfr,
    age: agefr,
    sexe: sexefr,
    devise: devisefr,
    date: new Date().toLocaleString() // ajouter la date et l'heure du commentaire
  };


  // Récupérer les commentaires existants dans le stockage local
  var commentairesExistantsfr = JSON.parse(localStorage.getItem("liste_commentaire_fr")) || [];

  // Ajouter le nouveau commentaire au tableau de commentaires
  commentairesExistantsfr.push(commentairefr);

  // Stocker le tableau de commentaires mis à jour dans le stockage local
  localStorage.setItem("liste_commentaire_fr", JSON.stringify(commentairesExistantsfr));

  // Afficher les commentaires dans la page
  afficherCommentairesfr();
}

function afficherCommentairesfr() {
  // Récupérer les commentaires depuis le stockage local
  var commentairesExistantsfr = JSON.parse(localStorage.getItem("liste_commentaire_fr")) || [];

  // Créer une chaîne HTML pour afficher les commentaires
  var htmlCommentairesfr = "";
  for (var i = 0; i < commentairesExistantsfr.length; i++) {
    var commentairefr = commentairesExistantsfr[i];
    htmlCommentairesfr+=`
       <div class="contenair-box-com">
                <div class="box-com">
                <h1>${commentairefr.star}/5</h1>
                <h2>${commentairefr.login} ${commentairefr.age} ${commentairefr.sexe}</h2>
                <p>${commentairefr.devise}</p>
                <h3>${commentairefr.date}</h3>
        </div>
      `;
  }

  // Afficher les commentaires dans la page
  var commentairesDivfr = document.getElementById("liste_commentaire_fr");
  commentairesDivfr.innerHTML = htmlCommentairesfr;
}

//appel afficher commentaires lorsque la page est chargé
window.onload = function() {
  afficherCommentairesfr();
};



//Japon : Evaluer et commenter le plat
function printinfojp() {
  // Récupérer les informations du formulaire
  var starjp = document.principal.starjp.value;
  var loginjp = document.principal.usr_loginjp.value || "Anonyme";
  var agejp = document.principal.user_agejp.value || "";
  if (agejp <= 0) {
    alert("Veuillez entrer un age supérieur à zéro.");
    return;
  }
  var sexejp = document.principal.user_sexjp.value || "";
  var devisejp = document.principal.usr_devisejp.value; //le commentaire

  // Créer un objet pour stocker les informations du commentaire
  var commentairejp = {
    star: starjp,
    login: loginjp,
    age: agejp,
    sexe: sexejp,
    devise: devisejp,
    date: new Date().toLocaleString() // ajouter la date et l'heure du commentaire
  };


  // Récupérer les commentaires existants dans le stockage local
  var commentairesExistantsjp = JSON.parse(localStorage.getItem("liste_commentaire_jp")) || [];

  // Ajouter le nouveau commentaire au tableau de commentaires
  commentairesExistantsjp.push(commentairejp);

  // Stocker le tableau de commentaires mis à jour dans le stockage local
  localStorage.setItem("liste_commentaire_jp", JSON.stringify(commentairesExistantsjp));

  // Afficher les commentaires dans la page
  afficherCommentairesjp();
}

function afficherCommentairesjp() {
  // Récupérer les commentaires depuis le stockage local
  var commentairesExistantsjp = JSON.parse(localStorage.getItem("liste_commentaire_jp")) || [];

  // Créer une chaîne HTML pour afficher les commentaires
  var htmlCommentairesjp = "";
  for (var i = 0; i < commentairesExistantsjp.length; i++) {
    var commentairejp = commentairesExistantsjp[i];
    htmlCommentairesjp+=`
       <div class="contenair-box-com">
                <div class="box-com">
                <h1>${commentairejp.star}/5</h1>
                <h2>${commentairejp.login} ${commentairejp.age} ${commentairejp.sexe}</h2>
                <p>${commentairejp.devise}</p>
                <h3>${commentairejp.date}</h3>
        </div>
      `;
  }

  // Afficher les commentaires dans la page
  var commentairesDivjp = document.getElementById("liste_commentaire_jp");
  commentairesDivjp.innerHTML = htmlCommentairesjp;
}

//appel afficher commentaires lorsque la page est chargé
window.onload = function() {
  afficherCommentairesjp();
};




//Calcul ingrédients
//calcul d'ingredients pour la pâte à pizza
function calculerIngredients_pizza() {
  /*récupère la valeur entrée par l'utilisateur pour le nombre de personnes en utilisant la 
  méthode document.getElementById qui permet d'accéder à l'élément HTML avec l'ID nbPersonnes et
  calcule les quantités nécessaires pour chaque ingrédient en multipliant le nombre
  de personnes par une valeur spécifique.*/
  const nbPersonnes = document.getElementById("nbPersonnes").value;
  if (nbPersonnes <= 0) {
    alert("Veuillez entrer un nombre de personnes supérieur à zéro.");
    return;
  }
  const quantiteFarine = nbPersonnes * 87.5;
  const quantiteSel = nbPersonnes * 1/2;
  const quantiteEau = nbPersonnes * 6.5;
  const quantiteLevure = nbPersonnes * 0.25;
  const quantiteHuile = nbPersonnes * 3/4;
  const resultat = document.getElementById("resultat"); // l'élément HTML avec l'ID "resultat", dans 
  //lequel elle va afficher les quantités d'ingrédients nécessaire

  resultat.innerHTML = `
    <p>Voici les ingrédients nécessaires pour ${nbPersonnes} personnes :</p>
      <ul>
        <li>${quantiteFarine}g de farine</li>
        <li>${quantiteSel}cuillère(s) à café de sel</li>
        <li>${quantiteEau}cl d'eau tiède</li>
        <li>${quantiteLevure}g de levure de boulanger</li>
        <li>${quantiteHuile} cuillère(s) à soupe d'huile d'olive</li>
        <li>Sel</li>
      </ul>
    `;
  }

  function calculerIngredients_sushis() {
    const nbPersonnes = document.getElementById("nbPersonnes").value;
    if (nbPersonnes <= 0) {
      alert("Veuillez entrer un nombre de personnes supérieur à zéro.");
      return;
    }
    const quantiteSucre = nbPersonnes *1/4;
    const quantiteSel = nbPersonnes * 1/4;
    const quantiteVinaigre = nbPersonnes * 6.5;
    const quantiteAvocat = nbPersonnes * 1/4;
    const quantiteConcombre = nbPersonnes * 1/4;
    const quantiteSurimi = nbPersonnes * 1/4;
    const quantiteNori = nbPersonnes * 1/2;
    const quantiteRiz = nbPersonnes * 31;
    const resultat = document.getElementById("resultat"); 

    resultat.innerHTML = `
      <p>Voici les ingrédients nécessaires pour ${nbPersonnes} personnes :</p>
        <ul>
          <li>${quantiteSucre}cuillère(s) à soupe de sucre en poudre</li>
          <li>${quantiteSel}cuillère(s) à café de sel</li>
          <li>${quantiteVinaigre}cuillère(s) à soupe de Vinaigre de riz</li>
          <li>${quantiteAvocat} d'avocat</li>
          <li>${quantiteConcombre} de comcombre</li>
          <li>${quantiteSurimi}de crabe ou 8 batonnets de surimi ou 150 g de saumon cru ou fumé</li>
          <li>${quantiteNori} feuille de nori (algues) coupées en 2 (donc 4)</li>
          <li>${quantiteRiz}g de riz rond</li>
          <li> Wasabi</li>
          <li> Sauce soja</li>
        </ul>
      `;
    }

    function calculerIngredients_paf() {
      const nbPersonnes = document.getElementById("nbPersonnes").value;
      if (nbPersonnes <= 0) {
        alert("Veuillez entrer un nombre de personnes supérieur à zéro.");
        return;
      }
      const quantiteCarotte = nbPersonnes *3/4;
      const quantitePoireau = nbPersonnes * 1/3;
      const quantiteOignon = nbPersonnes * 1/4;
      const quantiteBoeuf = nbPersonnes * 1/4;
      const quantiteOs = nbPersonnes * 1;
      const quantiteChou = nbPersonnes * 2/3;
      const quantiteCelri = nbPersonnes * 1/3;
      const quantiteAil = nbPersonnes * 1/4;
      const resultat = document.getElementById("resultat"); 
  
      resultat.innerHTML = `
        <p>Voici les ingrédients nécessaires pour ${nbPersonnes} personnes :</p>
          <ul>
            <li>${quantiteCarotte} carotte </li>
            <li>${quantitePoireau} poireau</li>
            <li>${quantiteOignon} oignon</li>
            <li>${quantiteBoeuf}kg de boeuf à pot-au-feu</li>
            <li>${quantiteOs} os à moelle </li>
            <li>${quantiteChou} de chou-rave ou navets</li>
            <li>${quantiteCelri} de  branche de céleri</li>
            <li>${quantiteAil} de  gousse d'ail</li>
            <li> bouquet garni (thym, laurier, persil) </li>
            <li> Sel</li>
            <li> Poivre</li>
            <li> Clou de girofle</li>
          </ul>
        `;
      }



//Quizz Italie
/* Ce code utilise JavaScript pour gérer un formulaire de quiz. Il est valable pour es trois pays. 
On récupère les éléments HTML avec les classes "form", "result" et l'élément HTML 
avec l'ID "score" en utilisant la méthode document.querySelector.*/
const form = document.querySelector('form');
const resultit = document.querySelector('.result');
const score = document.querySelector('#score');


/* la fonction ajoute écouteur d'événements sur l'événement "submit" du formulaire 
qui est déclenché lorsqu'un utilisateur envoie le formulaire en cliquant sur le bouton "Envoyer".

Lorsque l'événement est déclenché, le code appelle la méthode preventDefault() sur l'objet 
event pour éviter que la page ne se recharge lors de la soumission du formulaire.*/
form.addEventListener('submit', (e) => {
  e.preventDefault();


  let points = 0;
  if (form.q1.value === 'c') {
    points++;
  }
  if (form.q2.value === 'a') {
    points++;
  }
  if (form.q3.value === 'c') {
    points++;
  }
  /*Après avoir calculé le nombre de points, le code met à jour le contenu de l'élément HTML avec l'ID
"score" en utilisant la propriété textContent pour afficher le nombre de points. Enfin, il affiche
l'élément HTML avec la classe "result" en utilisant la propriété 
style.display pour le rendre visible.*/
  score.textContent = points;
  resultit.style.display = 'block';
});



//Quizz Japon
const formjap = document.querySelector('#formjap');
const resultjap = document.querySelector('.result');
const scorejap = document.querySelector('#scorejap');

document.getElementById("formjap").addEventListener("submit", function(event) {
  event.preventDefault(); // Empêcher le formulaire de soumettre les données
  var scorejap = 0; // Initialiser le score à zéro
  
  // Récupérer les réponses sélectionnées
  var responses = new FormData(event.target);
  
  // Vérifier les réponses
  if (responses.get("q1") === "a") {
    scorejap++;
  }
  if (responses.get("q2") === "b") {
    scorejap++;
  }
  if (responses.get("q3") === "c") {
    scorejap++;
  }
  
  // Afficher les résultats
  var resultDiv = document.querySelector("#japon .result");
  resultDiv.style.display = "block";
  resultDiv.querySelector("#scorejap").textContent = scorejap;
});



// Quizz France
const formfr = document.querySelector('#formfr');
const resultfr = document.querySelector('.result');
const scorefr = document.querySelector('#scorefr');

document.getElementById("formfr").addEventListener("submit", function(event) {
  event.preventDefault(); // Empêcher le formulaire de soumettre les données
  var scorefr = 0; // Initialiser le score à zéro
  
  // Récupérer les réponses sélectionnées
  var responsesfr = new FormData(event.target);
  
  // Vérifier les réponses
  if (responsesfr.get("q1") === "a") {
    scorefr++;
  }
  if (responsesfr.get("q2") === "b") {
    scorefr++;
  }
  if (responsesfr.get("q3") === "b") {
    scorefr++;
  }
  
  // Afficher les résultats
  var resultDivfr = document.querySelector("#france .result");
  resultDivfr.style.display = "block";
  resultDivfr.querySelector("#scorefr").textContent = scorefr;
});
