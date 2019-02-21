chiffre= prompt("veuillez saisir un chiffre pour le retourner en factoriel ");
let i=1;
let conteneur = 1;
while (i!=chiffre)
{

conteneur= conteneur*i;
i++;


}
conteneur= conteneur*i;

console.log("le factoriel  de "+" "+ chiffre + " "+ "est" + " "+ conteneur);
