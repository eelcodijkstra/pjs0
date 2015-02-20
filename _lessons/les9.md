---
date: 22-jan-2015
author: EJD
title: Les 9
layout: lesson
---


## Programmeren in JavaScript - Les 9: Arrays

Dit is de negende les in Programmeren in Javascript. Naast deze tutorials is er een uitleg via XXX.

Ga nu naar de volgende pagina. 


## Arrays en indicering

Een array is een samenstelling van gelijksoortige waarden, in een reeks:
      
```js
var primes = [2, 3, 5, 7, 11, 13];
var names = ["hans", "marie", "anna",
  "koos", "jan"];
```

We kunnen een element uit deze reeks selecteren door *indicering*, bijvoorbeeld `primes[i + 1]` of `names[f(j)]`.

De index-expressie, tussen de rechte haken, is een normale expressie; deze wordt tijdens uitvoering van het programma berekend.

`a.length` geeft de lengte van array `a` .

De elementen van een array zijn genummerd vanaf 0. Het index-bereik van array `a` loopt van 0 tot en met `a.length-1` .

---

*Opdrachten (uitvoeren op het console):*

* Kopieer bovenstaande regels naar het console. Vraag de waarde op van deze beide variabelen.
* Vraag de lengte op van beide variabelen. Wat is de waarde van `primes[0]`?
* Wat is de waarde van `primes[-1]`? En van `primes[6]`?


## Arrays: update

Een array is, net als een object, een samengestelde waarde. Dit betekent dat je de afzonderlijke elementen van een array kunt veranderen, door middel van een toekenning:
      
```js
names[1] = "maria";
```
---

*Opdrachten:*

* a
* b
* c


## Uitbreiden en inkrimpen van arrays
Je kunt een array in JavaScript naar behoefte uitbreiden (of kleiner maken). Voor het toevoegen van een waarde `x` aan het eind van array `a` gebruik je `a.push(x)`
      
```js
var primes = [2, 3, 5, 7, 11];
primes.push(13);
primes.push(17);
```

Je kunt de laatste waarde van een array `a` verwijderen met `a.pop()`
      
```js
var p = primes.pop();
```

---

*Opdrachten:*

* Kopieer bovenstaande regels één voor één naar het console. Vraag na elke opdracht de lengte van `primes` op.
* Zoek in de documentatie op het web uit hoe je een array aan de voorkant kunt uitbreiden en inkrimpen.


## Gelijksoortige waarden?
In Javascript zijn variabelen niet getypeerd, alleen waarden. Dit betekent dat de waarden in een JavaScript array van verschillende types kunnen zijn. Voorbeeld:
     
```js
var a = [0, true, "hallo", [2, 3, 5], function (x) { return x*x; } ];
```

Een gevolg hiervan is dat het type van een index-expressie als `a[i]` afhangt van de waarde van `i`. Deze is pas bij uitvoering van deze uitdrukking bekend.

We zullen van deze eigenschap zelden gebruik maken: (i) het maakt het redeneren over programma's lastiger; (ii) in andere talen heb je een dergelijke vrijheid meestal niet.

---

*Opdrachten:*

* a
* b
* c


## Arrays: iteratie (herhaling)

Het komt vaak voor dat je iets moet doen met alle elementen van een array. We behandelen eerst `a.forEach()`: deze geef je een functie mee met 3 parameters (of minder):


`function f (elt, inx, arr) {...}`

De eerste parameter is het array-element, de tweede parameter is de index van dit element, en de laatste parameter is het array zelf. Deze functie wordt voor alle elementen van het array aangeroepen.
      
```js
function printName (nm) {
  console.log("naam: " + nm);
}
var names = ["marie", "jan", "anna", "klaas", "piet"];
names.forEach( printName );
```

---

*Opdrachten:*

* Kopieer de bovenstaande regels naar het console, en bekijk het resultaat.
*


## Arrays: map, reduce

Een tweede vorm van herhaling over alle elementen van een array `a`is `a.map()`. Deze geef je een functie mee die voor elk element van het array een nieuwe waarde uitrekent. Het resultaat is een nieuw array, met deze nieuw berekende waarden:
      
```js

```

---

*Opdrachten:*

* a
* b
* c
