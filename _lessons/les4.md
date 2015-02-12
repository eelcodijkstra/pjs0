---
author: EJD
title: Les 4
date: 16-jan-2015
layout: lesson
---
    
## Programmeren in JavaScript - Les 4: herhaling

Dit is de vierde les in Programmeren in Javascript. Naast deze tutorials is er een uitleg via XXX.

Ga nu naar de volgende pagina.


## Herhaling

In dit hoofdstuk maken we kennis met herhaling - en daarmee met de kracht van computers. We beginnen met een eenvoudige vorm van herhaling: we geven vooraf op hoe vaak een bepaalde actie uitgevoerd moet worden.

Hiervoor maken we gebruik van de volgende functie:

```js
function repeat(n, f)
```
De functie `repeat` voert `n` maal de functie `f` uit. <br> Voorbeeld: `repeat(3, sq)` komt overeen met `sq(); sq(); sq();`

---

*Opdrachten:*

1. Maak een test voor een herhaling van de functie `squareStep30`.
2. Wat betekent `repeat(0, sq)`?
3. Wat voor betekenis zou `repeat(-1, sq)` kunnen hebben?


## Herhaling met index
Bij herhaling is het soms handig om te weten om de hoeveelste stap het gaat. Je kunt dit gebruiken als parameter van de opdracht.

De functie die je meegeeft aan `repeat` kun je voorzien van een parameter: deze geeft de stap in de herhaling aan.

De stappen zijn genummerd *vanaf 0*. <br> Voorbeeld: `repeat(3, fz);` resulteert in `fz(0); fz(1); fz(2); `

Het is gebruikelijk om in de Informatica vanaf 0 te tellen: dit geeft minder fouten, en levert regelmatiger programma's op. Het is in het begin even wennen, later wil je niets anders...

---

*Opdrachten:*

1. Definieer een `function sqStep(i)`, die een vierkant tekent met een zijde `i * 10`
2. Maak een test voor een herhaling van deze functie (bijv. 15 maal).

    
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
