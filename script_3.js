chiffre = prompt("veuillez saisir un chiffre pour notre superbe pyramide");
let i=1;
let decremente=chiffre;
while (i!=chiffre)
{
console.log(" ".repeat(decremente) + "#".repeat(i));
decremente--;
i++;

}
