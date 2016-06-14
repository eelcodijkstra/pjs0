---
author: EJD
title: Les 2
date: 15-jan-2015
layout: lesson
---

## Programmeren in JavaScript - Les 2

Dit is de tweede les in Programmeren in Javascript. Naast deze tutorials is er een uitleg via het boek: [functies en parameters](https://eelcodijkstra.gitbooks.io/programmeren-0/content/Chapter-3/functies-en-parameters.html).
     

Ga nu naar de volgende pagina. 
    
     
## Functies met parameters

We hebben gezien hoe je in een functie-definitie een aantal opdrachten groepeert en een naam geeft.

Nu gaan we een stap verder: we definiëren functies met parameters.

We hebben steeds de functies `forward(n)` en `right(n)` gebruikt. De getallen die we tussen de haakjes geven: het aantal stappen vooruit, of het aantal graden draaien, zijn de *parameters* voor deze functies.

Een functie zonder parameters voert altijd precies dezelfde opdrachten uit, met hetzelfde resultaat.

Door parameters maak je een functie algemener bruikbaar. Je kunt de parameters zien als de *invoer* voor de functie.

---

## Voorbeeld: zijde van een vierkant

De elementaire stap bij het tekenen van een vierkant is de volgende functie:

```js
function sqEdge(size) {
  forward(size);
  right(90);
}
```

---

*Opdracht*:

1. Kopieer deze definitie naar het JavaScript-venster, in het deel voor de *user-defined functions*.
2. Test deze function, door deze aan te roepen vanaf het Console. Gebruik verschillende waarden voor de parameter `size`.
3. Test deze functie, door deze te koppelen aan een knop (button). Gebruik de aanroep: `sqEdge(40);`
4. Teken met deze button een vierkant.

## Voorbeeld: vierkant

Met deze stap kunnen we een vierkant tekenen, van willekeurige grootte:

```js
function square(size) {
  sqEdge(size);
  sqEdge(size);
  sqEdge(size);
  sqEdge(size);
}
```

---

*Opdrachten*:

1. Kopieer deze functie naar het *user-defined functions*-deel.
2. Test deze functie, door deze vanuit het Console aan te roepen met verschillende waarden voor de parameter `size`.
3. Test deze functie, door deze te koppelen aan een knop (button). Gebruik de aanroep: `square(40);` 
4. Verander de testfunctie, door na het tekenen van het vierkant de turtle 15 graden te laten draaien. Teken met deze button een fraaie figuur.



## Voorbeeld: driehoek

Op eenzelfde manier als een vierkant, kunnen we ook een regelmatige driehoek ("driekant") tekenen:

```js
function triEdge(size) {
  forward(size);
  right(120);
}

function triangle(size) {
  triEdge(size);
  triEdge(size);
  triEdge(size);
}
```

Later zullen we dit generaliseren tot regelmatige n-hoeken.

---

*Opdrachten:*

1. Kopieer deze functie naar het JavaScript-venster, en maak een test voor deze functie (gekoppeld aan één van de knoppen).
2. Vraag: waarom hebben we de laatste opdracht `right(120);` toegevoegd? Ook zonder die opdracht wordt er toch een driehoek getekend?
3. Voeg aan de testfunctie nog een extra rotatie toe, bijvoorbeeld `right(30);`


## Voorbeeld: huisje

Als voorbeeld willen we een huisje tekenen. Dit kan op verschillende manieren. We proberen hier een huisje te tekenen op basis van een vierkant en een driehoek. Een eerste poging ziet er dan bijvoorbeeld als volgt uit:
      
```js
function house(size) {
  triangle(size);
  square(size);
}
```

Als je deze functie uitvoert, krijg je niet het gebruikelijke huisje te zien. Hoe kan dat?

---

*Opdrachten:*
      
1. Kopieer deze functie-definitie naar het JavaScript-venster. Maak een test-aanroep met een van de functies die aan de knoppen gekoppeld zijn. <br> Pas de functie `house` zo aan dat je een huisje krijgt.
2. Voeg aan de test voor het huisje nog een extra opdracht toe, zodat je bij herhaald aanroepen (drukken op de knop) een straatje krijgt.
3. Maak de definitie van `house` zo dat het huisje getekend wordt 'als een doorlopende lijn', zonder de pen van het papier te halen.
4. Merk je aan de kant van het gebruik (de test) iets van deze verandering?     


## Functies met meerdere parameters

Als we de stap voor het tekenen van een zijde algemeen willen maken, zodat we deze kunnen gebruiken voor een vierkant en voor een driehoek, dan  moeten we twee parameters gebruiken:

* de eerste parameter, `size`, geeft de grootte van de zijde aan;
* de tweede parameter, `n`, geeft het aantal graden aan dat de turtle draait.

```js
function edge(size, n) {
  forward(size);
  right(n);
}
```

---

*Opdrachten*:

1. Kopieer deze functie naar het *user0defined functions* deel.
2. Test deze functie, door deze met verschillende waarden voor de parameter aan te roepen vanaf het Console.
2. Koppel deze functie aan een button. Wat voor figuren krijg je bij de verschillende waarden voor de parameter `n` (het aantal graden)?
3. Wat voor figuren krijg je als `n` een deler is van 360?
4. Wat voor figuren krijg je als `n` niet een deler is van 360? (bijv.: 100?)

## Functies met meerdere parameters

We hebben een turtle-opdracht met meerdere parameters:
      
```js
turnRight(rad, deg)
```

Deze opdracht laat de turtle een bocht  maken:

* met straal `rad` (zelfde maten als bij `forward`)
* over `deg` graden (als bij `right`).

Een kortere straal betekent een scherpere bocht.    

Een negatief argument voor `deg` geeft een bocht naar links.
      

De aanroep `turnRight(50, 360);` resulteert in een cirkel met een straal van 50.

Deze opdracht is een voorbeeld van een functie met meerdere parameters. We scheiden de parameters door komma's. De volgorde van de parameters bij gebruik is dezelfde als bij de definitie.

---

*Opdrachten:*

1. Probeer de opdracht `turnRight` uit met verschillende waarden voor de parameters.
2. Probeer deze opdracht uit via het console.
3. Ga na dat het effect van `right(n);` gelijk is aan dat van `turnRight(0, n);` Waarom zouden we dan toch een aparte opdracht `right` willen hebben?
        

## Functies met meerdere parameters

We kunnen ook functies definiëren met meerdere parameters. De namen van deze parameters scheiden we dan door komma's, bijvoorbeeld:
      
```js
function rectangle(width, height) {
  ...
}
```
Zoals we eerder gezien hebben, geven we bij de aanroep de parameters weer in aan lijst gescheiden door haakjes:
      
```js
rectangle(60, 40);
```

---

*Opdrachten:*
      
1. Definieer een functie `rectangle` zoals hierboven beschreven, voor het tekenen van een rechthoek. Maak een test voor deze functie gekoppeld aan een knop (bijv. via `function testC()`).
2. Waarom gebruiken we voor de draaiing een vaste waarde (90 graden)?
        
    
## Namen voor parameters

Bij de definitie van een functie zijn we vrij in de keuze van de namen voor de parameters, binnen zekere grenzen: (i) het moet een geldige JavaScript-naam zijn (identifier); (ii) als we meerdere parameters gebruiken, moeten de namen hiervan verschillen.

Gebruik namen met een duidelijke betekenis. Voor JavaScript maakt dit niet uit, maar voor je collega's maakt het een groot verschil.
      
---

        
  
