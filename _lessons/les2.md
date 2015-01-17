---
author: EJD
title: Les 2
date: 15-jan-2015
layout: lesson
---

## Programmeren in JavaScript - Les 2

Dit is de tweede les in Programmeren in Javascript. Naast deze tutorials is er een uitleg via XXX.
     

Ga nu naar de volgende pagina. 
    
     
## Functies met parameters
We hebben gezien hoe je in een functie-definitie een aantal opdrachten kunt groeperen en een naam kunt geven.

Nu gaan we een stap verder: we definiëren functies met parameters.

We hebben steeds de functies `forward(n)` en `right(n)` gebruikt: de getallen die we tussen de haakjes geven -het aantal stappen vooruit, of het aantal graden draaien- zijn de parameters voor deze functies.

Een functie zonder parameters voert altijd precies dezelfde opdrachten uit, met hetzelfde resultaat.

Door parameters te gebruiken maak je een functie algemener bruikbaar. Je kunt de parameters zien als de *invoer* voor de functie.

---


## Voorbeeld: vierkant

Door een parameter voor de lengte van een zijde toe te voegen, kunnen we een algemene functie maken voor het tekenen van een vierkant:
      
```js
function square(size) {
  forward(size); right(90);
  forward(size); right(90);
  forward(size); right(90);
  forward(size); right(90);
}
```

We schrijven de naam van de parameter tussen de haakjes, na de naam van de functie.

In de body voor de functie gebruiken we deze naam: deze staat dan voor de waarde die bij de aanroep meegegeven wordt.

---

*Opdrachten:*

1. Kopieer deze functie-definitie naar het JavaScript-venster, in het gedeelte voor user-defined functions.<br> Maak een test-aanroep voor deze functie gekoppeld aan een knop (bijv. via functie `testB`).


## Voorbeeld: driehoek

Op eenzelfde manier als een vierkant, kunnen we ook een driehoek tekenen:

```js
function triangle(size) {
  forward(size); right(120);
  forward(size); right(120);
  forward(size); right(120);
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

*Opdrachten:*
      
1. PM
2. PM
        
  
