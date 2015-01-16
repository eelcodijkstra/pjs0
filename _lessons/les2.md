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

Een functie zonder parameters voert altijd precies dezelfde opdrachten uit, met hetzelfde resultaat. Door het gebruik van parameters maak je een functie algemener bruikbaar. Je kunt de parameters zien als de *invoer* voor de functie.

---

*Opdrachten:*
      
* P.M.
* idem


## Voorbeeld: vierkant

Door een parameter voor de grootte van een zijde in te voeren, kunnen we een algemene functie maken voor het tekenen van een vierkant:
      
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

1. Kopieer deze functie-definitie naar het JavaScript-venster, in het gedeelte voor
user-defined functions.<br> Maak een test-aanroep voor deze functie gekoppeld aan een knop
(bijv. via functie `testB`).
        
  
## Functies met meerdere parameters

We hebben nu ook een turtle-opdracht met meerdere parameters:
      
```js
turnRight(rad, deg)
```

Met deze opdracht kun je de turtle een bocht laten maken over `deg` graden.
De straal van de bocht is rad posities (pixels). Een kortere straal betekent een
scherpere bocht.
      

Een negatief argument voor `deg` geeft een bocht naar links.
      

Door de aanroep `turnRight(50, 360);` tekent de turtle een cirkel met een straal van 50.

Deze opdracht is een voorbeeld van een functie met meerdere parameters. Bij de aanroep scheiden we de parameters door komma's.

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

We zijn vrij in de keuze van de naam, binnen zekere grenzen: (i) het moet een geldige Javascript-naam (identifier) zijn; (ii) als we meerdere parameters gebruiken, moeten de namen hiervan verschillen. <br> Een regel die niet tot de Javascript-spelregels hoort, maar wel tot de regels van goed programmeer-gedrag: gebruik namen met een duidelijke betekenis.
      
---

*Opdrachten:*
      
1. PM
2. PM
        

## Voorbeeld: driehoek

Op eenzelfde manier als een vierkant, kunnen we ook een driehoek tekenen. (Later zullen we dit generaliseren tot regelmatige n-hoeken.)

```js
function triangle(size) {
   forward(size); right(120);
   forward(size); right(120);
   forward(size); right(120);
}
```

Als je deze functie uitvoert, krijg je niet het gebruikelijke huisje te zien. Hoe kan dat?
      
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
---

*Opdrachten:*
      
1. Kopieer deze functie-definitie naar het JavaScript-venster. Maak een test-aanroep met een van de functies die aan de knoppen gekoppeld zijn. <br> Pas de functie `house` zo aan dat je een huisje krijgt.
2. Voeg aan de test voor het huisje nog een extra opdracht toe, zodat je bij herhaald aanroepen (drukken op de knop) een straatje krijgt.
3. Maak de definitie van `house` zo dat het huisje getekend wordt 'als een doorlopende lijn', zonder de pen van het papier te halen.
4. Merk je aan de kant van het gebruik (de test) iets van deze verandering?     
