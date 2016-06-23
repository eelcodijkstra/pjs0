---
author: EJD
title: Les 4
date: 16-jan-2015
layout: lesson
---
    
## Programmeren in JavaScript - Les 4: herhaling

Dit is de vierde les in Programmeren in Javascript. Naast deze tutorials is er een uitleg via het [hoofdstuk Herhaling](https://eelcodijkstra.gitbooks.io/programmeren-0/content/Chapter-5/herhaling.html) in het boek.

Ga nu naar de volgende pagina.


## Herhaling

In dit hoofdstuk maken we kennis met herhaling - en daarmee met de kracht van computers. We beginnen met een eenvoudige vorm van herhaling: we geven vooraf op hoe vaak een bepaalde actie uitgevoerd moet worden.

Hiervoor maken we gebruik van de volgende functie:

```js
function repeat(n, f)
```
De functie `repeat` voert `n` maal de functie `f` uit. <br> Voorbeeld: 

```js
repeat(3, sq);
```

komt overeen met 

```js
sq(); 
sq(); 
sq();
```

---

*Opdrachten:*

1. Wat betekent `repeat(0, sq)`?
2. Welke betekenis zou `repeat(-1, sq)` kunnen hebben?

## Vierkant met herhaling(1)

We kunnen nu de functie voor het tekenen van een vierkant formuleren met herhaling:

```js
function edge40() {
  forward(40);
  right(90);  
}

function square40() {
  repeat(4, edge40);
}
```

We kunnen in dit geval nog geen functie maken voor het tekenen van een willekeurig vierkant. Later zullen we hiervoor verschillende oplossingen laten zien.

---

*Opdracht(en):*

1. Voer bovenstaande declaraties in als "user defined functions" in het JavaScript-deel. Koppel de functie `square40` aan `testA`, door als body van `testA` te gebruiken: `square40();`.
2. Maak op een vergelijkbare manier een stel functies om een driehoek met zijde 50 te tekenen.

## Vierkant met herhaling(2)

We willen de functie `square40` *generaliseren*, voor het tekenen van een willekeurig vierkant. We doen dit door de *constante 40 te vervangen door een parameter* `size`. We krijgen dan een functie van de vorm:

```js
function square(size) {

  repeat(4, edge);
}
```

De functie `edge` die we hierin herhalen moet gebruik maken van de parameter `size` van `square`. Dit kan niet in de vorm van een parameter van `edge`: de parameters van deze functie worden bepaald door `repeat`.

We lossen dit op door de functie `edge` te declareren *binnen de functie `square`*. Zo'n lokale functie kan alle lokale namen van `square` gebruiken, inclusief de parameters.

Zie ook het boek: XXX


## Vierkant met herhaling(3)

We definiëren de functie `edge` binnen de definitie van de functie `square`, om de parameter `size` te kunnen gebruiken. Hiermee formuleren we een functie voor het tekenen van een willekeurig vierkant:

```js
function square(size) {

  function edge() {
    forward(size);
    right(90);
  }

  repeat(4, edge);
}
```

--- 

1. Voer bovenstaande declaraties in als "user defined functions" in het JavaScript-deel. Koppel de functie `square` aan `testB`.
2. Maak op een vergelijkbare manier een algemene functie om een willekeurige regelmatige driehoek te tekenen.

## Regelmatige veelhoek(1)

Als opstapje voor het tekenen van een regelmatige n-hoek (polygon), maken we eerst een functie voor het tekenen van een achthoek:

```js
function octagon(size) {

  function edge() {
    forward(size);
    right(45);
  }
  
  repeat(8, edge);
}
```

---

*Opdrachten:*

1. Voer bovenstaande declaraties in als "user defined functions" in het JavaScript-deel. Koppel de functie `square` aan `testB`.
2. Wat is het product van de hoek in `edge`, en het aantal herhalingen? Is dat toevallig? Wat is deze hoek voor een regelmatige veelhoek met n zijden?
3. Maak op een vergelijkbare manier een algemene functie om een zeshoek (hexagon) te tekenen.
4. Maak een functie voor het tekenen van een regelmatige veelhoek: <br> `function polygon(n,  size)`, <br> waarbij `n` het aantal hoeken is (`n > 2`). en `size` de lengte van een zijde is.


## Regelmatige veelhoek(2)

Een functie voor het tekenen van een regelmatige veelhoek:

```js
function polygon(n, size) {

  function edge() {
    forward(size);
    right(360 / n);
  }
  
  repeat(n, edge);
}
```

Dit is een generalisatie van de functies voor het tekenen van een vierkant, zeshoek, enzovoorts. We hebben de constanten (4 en 6) vervangen door een parameter.

---

*Opdrachten:*

1. Gebruik deze functie voor het tekenen van een regelmatige zeshoek.
2. Gebruik deze functie voor het tekenen van een regelmatige zestighoek.
3. Wat is het resultaat als je het aantal hoeken heel erg groot wordt?
4. Wat is het resultaat als 360 niet deelbaar is door het aantal hoeken dat je kiest? (Bijvoorbeeld: 7 of 11.) 

## Herhaling met index (rangnummer)

Bij herhaling gebruik je soms het rangnummer van de stap. Je kunt dit gebruiken als parameter van de opdracht die herhaald moet worden.

We gebruiken hiervoor de `function repeatRange(n, f)`. De functie `f` krijgt hierin het rangnummer (de index) van de herhaling als parameter. Deze stappen zijn *genummerd vanaf 0*. `repeatRange(3, f);` komt dan overeen met:

```js
f(0);
f(1);
f(2);
```

Het is gebruikelijk om in de Informatica vanaf 0 te tellen: dit geeft minder fouten, en levert regelmatiger programma's op. Het is in het begin even wennen, later wil je niets anders...

```js
function sqStep(i) {
  square(i * 10);
}

repeat(5, sqStep);

```
---

*Opdrachten:*

1. Voer de functie `sqStep` in als "user-defined function". Koppel de aanroep van `repeat` aan `testB`: gebruik als body van deze functie `repeat(x, sqStep);` 
2. Breid de functie `sqStep` uit met een draai van de turtle.
3. Maak een vergelijkbare opzet voor het tekenen van een aantal driehoeken.

## Geneste vierkanten

Een object (bijvoorbeeld een vierkant) is *genest* in een ander vierkant als het er helemaal binnen valt. Zo spreken we ook over de *nesting* van haakjes, of van functies.

Bekijk de volgende functie:
      
```js
function sqStep(n) {
  square(n * 20);
  right(-90);
  forward(10);  // up
  right(-90);
  forward(10);  // left
  right(180);   // original direction
}
```

Wat gebeurt er als je deze functie een aantal malen uitvoert? Teken dit eerst met de hand.

---

*Opdrachten:*

1. Voer deze functie in als "user defined function", en plaats `repeat(x, sqStep)` in `testB`. Test je voorspelling.
2. Je kunt de verbinding tussen twee vierkanten onzichtbaar maken door de pen van de turtle tijdelijk omhoog te bewegen. Voeg de opdrachten hiervoor toe.
3. Je kunt ook met een diagonale verbinding van het ene naar het andere vierkant volstaan. Beredeneer eerst (met een tekening) hoe dit kan.
4. Pas het programma aan volgens je uitwerking van (3). *Hint:* werk eerst met een zichtbare verbinding; maak deze daarna pas onzichtbaar.

    
## Anonieme functies als parameter
In de voorbeelden die we eerder gezien hebben definiëren we altijd eerst een functie voor de actie die we willen herhalen. Deze functie geven we dan mee aan `repeat`.

We kunnen direct een functie meegeven als parameter van `repeat`: we schrijven de definitie van de functie dan op de plaats van de parameter. In dit geval laten we de naam van de functie weg. <br> Voorbeeld:
      
```js
repeat(10, function (i) {
  square(i * 10);
});
```
Denk in dit geval om de afsluiting: `});`

---

*Opdrachten:*

1. Maak een test (bijv. `testB`) voor het voorbeeld hierboven.
2. PM

    
## Veelhoeken

We kunnen de herhaling gebruiken om op een gemakkelijke manier andere figuren te tekenen. We beginnen met veelhoeken.

Een vierkant met zijde `sz` heeft 4 hoeken, en een omtrek van `4 * sz`. De hoeken zijn samen 360 graden; elke hoek is 360 / 4 = 90 graden.

Een achthoek met zijde `sz` heeft 8 hoeken, en een omtrek van `8 * sz`. De hoeken zijn samen 360 graden; elke hoek is 360 / 8 = 45 graden.

Wat is het algemene patroon van een (regelmatige) n-hoek? 

1. de hoek is `360 /n` graden; 
2. de zijde is `omtrek / n`.

---

*Opdrachten:*
      
* (1) Maak een functie voor het tekenen van een achthoek met zijde `sz`:

```js
function octagon(sz) { ... }
```
        
* (2) Maak een functie voor het tekenen van een veelhoek met `n` hoeken en met omtrek `c`.

```js
function polygon(n, c) { .... }
```

* (3) Wat is het resultaat als het aantal hoeken erg groot wordt?
        
    
## Een nest van vierkanten

Bekijk de volgende functie:
      
```js
function sqStep(n) {
  square(n * 20);
  right(-90);
  forward(10);  // up
  right(-90);
  forward(10);  // left
  right(180);   // original direction
}
```

Gebruik deze in combinatie met de testfunctie:
      
```js
function testB() {
  penDown();
  repeat(10, sqStep);
}
```

---

*Opdrachten:*

1. Pas de functie `sqStep` zo aan dat de verbindingslijnen tussen de vierkanten niet getekend worden (met `penUp();` en `penDown();`).
2. Laat de turtle draaien voordat deze aan de herhaling (`repeat`) begint, in de functie `testB`. Wat is het effect?
3. Verander de hoek aan het eind een klein beetje, bijv. 179 of 181 graden. Wat is het effect?
4. Als je in de oorspronkelijke versie de factor 20 verandert, wat is dan het effect? Hoe krijg je weer een "nette" nesting?
5. (*) Hoe kun je de verbinding tussen twee vierkanten maken met twee rotaties (aanroepen van `right`) en één aanroep van `forward`?
        
 
## Spiraal

Ook een spiraal is een vorm die gebaseerd is op herhaling. We zien dat het duidelijkst als we de spiraal met rechte hoeken tekenen. Neem voor de stap van de herhaling de volgende functie:
      
```js
function spiralStep(i) {
  forward(i * 2);
  right(90);
}
```
De "straal" van de spiraal neemt elke stap toe, terwijl de draaiing gelijk blijft.

In natuurkundige termen: de hoeksnelheid blijft gelijk, terwijl de snelheid toeneemt.

---

*Opdrachten:*

1. Verander in dit voorbeeld de grootte van de stap - door de factor te veranderen. Kies zowel waarden groter als kleiner dan 2. (Je kunt ook door 2 delen, enz.)
2. Verander in dit voorbeeld de hoek (parameter van `right`); kies zowel een aantal waarden kleiner als een aantal waarden groter dan 90.
3. Wat is het verschil tussen een hoek die een deler is van 360 graden (bijv. 30, 60, 90, 120), en een hoek die dat niet is (bijv. 100)?
4. Teken een aantal mooie spiralen.
        

## Bloem met herhaling(1)

```js
function leaf(rad, deg) {
  right(-deg);
  turnRight(rad, 2 * deg);
  right(180 - 2 * deg);
  turnRight(rad, 2 * deg);
  right(180 - deg);
}

function leafStep() {
  leaf(30, 45);
  right(45);
}

function flower() {
  repeat(8, leafStep);
}
```

---

*Opdrachten*

1. Voer bovenstaande declaraties in als "user defined functions" in het JavaScript-deel. Koppel de functie `flower` aan `testA`.
2. Experimenteer met verschillende vormen van het blad (leaf).
3. Experimenteer met verschillende waarden voor de draai van de turtle (in `leafStep`), in combinatie met het aantal stappen in de herhaling (in `flower`). Wat is het product van de hoek en het aantal stappen? Is dat toevallig?

## Geneste cirkels

Gebruik de volgende functie:

```js
function circleStep(n) {
  turnRight(n * 10, 360);
  right(-90);
  forward(10);
  right(90);
}
```
Gebruik deze stap in een testfunctie met een herhaling.

---

*Opdrachten:*

1. Kopieer deze functie naar het JavaScript venster, en maak een testfunctie hiervoor.
2. Pas deze functie aan zodat de verbindingslijnen niet getekend worden.
3. Wat is het resultaat als je de verbindingslijnen korter of langer maakt?
4. Wat is het resultaat als je de turtle een kleine draai laat maken voor de herhaling (bijv. 30 graden)?
