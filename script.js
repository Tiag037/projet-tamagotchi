/* 
États de notre Tamastudi possibles :
- 🥚 : partie non lancée
- 🐣 : naissance pendant tant qu'il n'a pas fait son 1er caca
Ensuite il devient un "grand" avec une humeur variable
- 😢 : triste 0/5
- 🙁 : pas content 1/5
- 🙂 : normal 2/5
- 😄 : content 3/5
- 🤗 : heureux 4/5
- 🥰 : très heureux 5/5
- 👻 : mort 0/5 pendant plus d'une minute 
Ses envies :
- 😋 : faim, aléatoire minimum 30 sec et max 3 minutes
- 🥱 : jouer, aléatoire minimum 30 sec et max 3 minutes
- 💩 : caca, aléatoire minimum 30 sec et max 1.30 minutes uniquement avoir mangé
*/

/* PHASE 0 : activer le tamastudi */

const detectStart = () => {
  // 1) Cliquer sur le bouton du milieu
  const buttonCenter = document.querySelector(
    `.js-button[data-direction="center"]`
  );

  //2) Ajouter un compteur qui attend d'avoir une valeur max de 5

  let count = 0;
  buttonCenter.addEventListener(`click`, () => {
    count++;

    console.log("click", count);
    if (count === 5) {
      // 3) Alors on fait naitre notre tama
      start();
    }
  });
};

/* 
PHASE 1 : la naissance de mon tama 
1) demander le nom de mon personnage
2) fait éclore mon oeuf pour passer au poussin
3) affiche mes vitals
4) affiche le nom de mon tama dans les vitals
5) mettre les scores des vitals à 5
*/
const start = () => {
  //  Demander le prénom
  const beastName = prompt("Choisir le nom de votre bête :");

  // éclore mon oeuf
  const character = document.querySelector(".js-character");
  character.textContent = "🐣";

  // afficher les vitals
  const vitals = document.querySelector(".js-vitals");
  vitals.classList.remove("hidden");

  //afficher le nom de la bête
  const beastNameVitals = document.querySelector(".js-tamaName");
  beastNameVitals.textContent = beastName;

  // Mettre les scores des vitals à 5
  const scoreVitals = document.querySelectorAll(".js-score");
  scoreVitals.forEach((score) => {
    score.textContent = 5;
  });

  //Afficher les actions
  const actions = document.querySelector(".js-actions");
  actions.classList.remove("hidden");

  // Appel de la fonction pour grandire

  evolve();
};

/*
PHASE 2 : L'évolution de la bête
1) générer le premier caca aléatoirement
2) il devient grand
2) nettoyer "son écran"
3) il devient grand
*/

const evolve = () => {
  setTimeout(() => {
    console.log("salut");
  }, 3000);
};

// LES ENVIES
/*
- 😋 : faim, aléatoire minimum 30 sec et max 3 minutes
- 🥱 : jouer, aléatoire minimum 30 sec et max 3 minutes
- 💩 : caca, aléatoire minimum 30 sec et max 1.30 minutes uniquement avoir mangé
*/
//1) créer une fonction qu'on va pouvoir appeler plus tard dans le code
//2) stocker les envies de ma bestiole dans une variable
//3) avec un setTimeout, choisir une envie aléatoire
//4) la durée su setTimeout est dynamique et est comprise entre une valeur max et une valeur min
//5) afficher l'envie de la bestiole sur notre écran

const wantsTo = () => {
  const need = ["😋", "🥱", "💩"];
  // pour tester, on fait min = 1s et max = 3s
  const minDuration = 1000;
  const maxDuration = 3000;
  const duration = getRandomInt(3000);
  console.log(duration);
  setTimeout(() => {
    const randomIndexNeeds = getRandomInt(need.length); // evité d'écrir les chiffres en dure ex:3
    const desire = need[randomIndexNeeds];
    console.log("Je veux faire ", desire);
  }, 1000);
};

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};
wantsTo();

//Lance la fonction de début
detectStart();
