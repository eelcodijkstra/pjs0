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

Met deze stap kunnen we een vierkant tekenen van willekeurige grootte:

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
4. In welke richting staat de turtle na het tekenen van een vierkant met deze functie?
5. Verander de testfunctie, door na het tekenen van het vierkant de turtle 15 graden te laten draaien. Teken met deze button een fraaie figuur.



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

1. Kopieer deze functies naar het JavaScript-venster, en maak een test voor de functie `triangle` (gekoppeld aan één van de knoppen).
2. In welke richting staat de turtle na het tekenen van een driehoek met deze functie?
2. Voeg aan de testfunctie nog een extra rotatie toe, bijvoorbeeld `right(30);`


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

De functies `sqEdge` en `triEdge` lijken erg veel op elkaar:

```js
function triEdge(size) {
  forward(size);
  right(120);
}

function triEdge(size) {
  forward(size);
  right(120);
}
```

We kunnen een functie `edge(size, angle)` maken als *generalisatie* van deze functies: de tweede parameter (`angle`) is de hoek waarover de turtle draait. We scheiden de opeenvolgende parameters met een komma (`,`). De volgorde van de parameters bij aanroep (gebruik) is dezelfde als in de definitie.

---

*Opdrachten*:

1. Bedenk zelf hoe je de functie `edge(size, angle)` kunt definiëren (voordat je naar de oplossing op de volgende pagina kijkt).

## Een gegeneraliseerde `edge`-functie.

De gegeneraliseerde functie voor het tekenen van een kant definiëren we als volgt:

* de eerste parameter, `size`, geeft de grootte van de zijde aan;
* de tweede parameter, `angle`, geeft de hoek (het aantal graden) aan waarmee de turtle naar rechts draait.

```js
function edge(size, angle) {
  forward(size);
  right(angle);
}
```

---

*Opdrachten*:

1. Kopieer deze functie naar het *user-defined functions* deel.
2. Test deze functie, door deze met verschillende waarden voor de parameter aan te roepen vanaf het Console.
3. Verander de definitie (body) van `square` en `triangle` door de functie `edge` te gebruiken.
4. Koppel deze functie aan een button. Wat voor figuren krijg je door herhaald klikken, bij de verschillende waarden voor de parameter `angle` (het aantal graden)?
4. Wat voor figuren krijg je als `angle` een deler is van 360? (Dat wil zeggen: 360 / `angle` heeft rest 0.)
5. Wat voor figuren krijg je als `angle` niet een deler is van 360? (bijv.: `angle` is 100?)

## Een functie met meerdere parameters: `turnRight`

Een nieuwe turtle-opdracht is `turnRight`. Deze heeft twee parameters:
      
```js
turnRight(rad, angle)
```

Deze opdracht laat de turtle een bocht  maken:

* met straal `rad` (zelfde maten als bij `forward`)
* over `angle` graden (als bij `right`).

Een kortere straal betekent een scherpere bocht.    

Een negatief argument voor `angle` geeft een bocht naar links.
      
De aanroep `turnRight(50, 360);` resulteert in een cirkel met een straal van 50.

---

*Opdrachten:*

1. Probeer de opdracht `turnRight` uit met verschillende waarden voor de parameters.
2. Probeer deze opdracht uit via het console.
3. Ga na dat het effect van `right(n);` gelijk is aan dat van `turnRight(0, n);` Waarom zouden we dan toch een aparte opdracht `right` willen hebben?
        

## Functies met meerdere parameters

Voor het tekenen van een rechthoek met twee verschillende zijden kun je een functie definiëren met twee parameters: 
      
```js
function rectangle(width, height) {
  ...
}
```
Bij de aanroep geven we de de parameters tussen haakjes, gescheiden foor komma's:
      
```js
rectangle(60, 40);
```

---

*Opdrachten:*
      
1. Definieer een functie `rectangle` zoals hierboven beschreven, voor het tekenen van een rechthoek. Maak een test voor deze functie gekoppeld aan een knop (bijv. via `function testC()`).
2. Waarom gebruiken we voor de draaiing een vaste waarde (90 graden)?
3. Maak een functie voor het tekenen van een *parallellogram*. Hiervoor heb je een derde parameter nodig, waarmee je aangeeft hoe scheef het parallellogram is. (Waarom hoef je maar 1 hoek op te geven?)
        
    
## Namen voor parameters

Bij de definitie van een functie zijn we vrij in de keuze van de namen voor de parameters, binnen zekere grenzen: (i) het moet een geldige JavaScript-naam zijn (identifier); (ii) als we meerdere parameters gebruiken, moeten de namen hiervan verschillen.

Gebruik namen met een duidelijke betekenis. Voor JavaScript maakt dit niet uit, maar voor je collega's maakt het een groot verschil.
      
---

        
  
