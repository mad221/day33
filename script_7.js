const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 9 },
  { title: 'A la recherche du temps perdu', id: 237634, rented: 2 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 6 },
  { title: 'Les frères Karamazov', id: 450911, rented: 5 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

let i = 0;
let stock=0;
let contain=1;
let idBook=0;
let delbook=0;
while (i < books.length)
{
  if (books[i].rented <= 0)
{
  console.log(books[i].title + "n'a pas été emprunté");
}
else {
  console.log("Tous les livres ont été empruntés")
}
if (books[i]["rented"]>= stock)
{

stock=i;

}
if (books[i]["rented"]<contain)
{

contain=i;

}
if (books[i]["id"]==873495)
{

idBook=i;

}
if (books[i]["id"]==133712)
{
books[i]=null;
}



i++;
}

console.log(books[stock]["title"] + " est le plus emprunte ")
console.log(books[contain]["title"] + " est le moins emprunte ")
console.log(books[idBook]["title"] + " a l'id 873495 ")
console.log("le book a l'id 133712 a ete supprime ");
console.log(books);
