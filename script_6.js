const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

console.log ("voici les prenoms des personnes nees en 70")
let i=0;
while (i<entrepreneurs.length)
{
  if (Number(entrepreneurs[i]["year"]) <= 1979 && Number(entrepreneurs[i]["year"]) >= 1970 )
  {
console.log(entrepreneurs[i]["first"]);
  }
i++;
}



var myarray = [];
for(let i = 0; i < entrepreneurs.length; i ++) {
  myarray[ i ] = entrepreneurs[i].first +" " + entrepreneurs[i].last;
}
console.log(myarray);


 i=0;
while (i<entrepreneurs.length)
{


console.log(2019 - entrepreneurs[i]["year"]+ " ans  a "+ entrepreneurs[i]["first"])

i++;
}


i=0;
var tableau=[];

while (i<entrepreneurs.length)
{
tableau[i]=entrepreneurs[i].last;
i++;
}
console.log( "voici les noms tries ! " + tableau.sort());
i=0;
while (i<entrepreneurs.length)
{
entrepreneurs[i]["last"]=tableau[i];
i++;
}
console.log(entrepreneurs);
