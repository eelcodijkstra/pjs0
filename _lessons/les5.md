---
author: EJD
title: Les 5
date: 18-jan-2015
layout: lesson
---
    
## Programmeren in JavaScript - Les 5: IF

Dit is de vijfde les in Programmeren in Javascript.
In deze les maken we kennis met de keuze-opdracht: het `if`-statement, ofwel de *conditionele opdracht*.
Naast deze tutorials is er een uitleg via XXX.

Ga nu naar de volgende pagina. 
    

## Keuze: if ... else

Het `if`-statement (de *conditionele opdracht*) gebruiken we als er voor verschillende gevallen verschillende opdrachten uitgevoerd moeten worden. De vorm hiervan is:

```js
  if (cond) {
    command1;
  } else {
    command2;
  }
```

De conditie `cond` is een expressie met als resultaat `true` (waar) of `false` (onwaar). Als de conditie `true` is, wordt opdracht `command1;` uitgevoerd; als de conditie `false` is, wordt `command2;` uitgevoerd.

`false` en `true` zijn waarden van het type `Boolean` (later meer hierover).

Let op de plaats van de accolades, spaties en regelovergangen in het voorbeeld. Gebruik deze vorm: je maakt minder fouten en je code is beter leesbaar.

---

*Opdrachten:*

1. Zoek in het JavaScript-venster naar voorbeelden van `if`. 
2. Wat is de rol van `if (down) {...}` in de functie `forward`? (De verkorte vorm, zonder `else`, behandelen we later.)

## IF: verkorte vorm

Als er in het `else`-deel geen opdracht uitgevoerd hoeft te worden, dan kunnen we dit afkorten door het `else`-deel weg te laten. Met andere woorden:

```js
if (cond) {
  command1;
}
```

is een afkorting voor

```js
if (cond) {
  command1;
} else {
  // no command
}
```
    
## Condities en vergelijkingen

Een conditie bevat vaak een vergelijking van waarden. De eenvoudigste vergelijkingsoperatoren in JavaScript zijn:

| vergelijking   | betekenis |
| :---           | :---      |
| `a === b`      | `a` is gelijk aan `b` |
| `a !== b`      | `a` verschilt van `b` |

Deze vergelijkingen kun je voor (bijna) alle waarden gebruiken. Voor getallen heb je meer mogelijkheden:

| vergelijking | betekenis |
| :---         | :---      |
| `a > b`      | `a` is groter dan `b` |
| `a >= b`     | `a` is tenminste `b`  |
| `a < b`      | `a` is kleiner dan `b` |
| `a >= b`     | `a` is ten hoogste `b` |

---

*Opdrachten:*

* PM
* PM

## Voorbeeld: trapje

We tekenen een trapje, met zijde 10, waarbij het aantal zijden gegeven is. De elementaire stap is dan niet een trede, maar een zijde ("halve trede"). De even zijden tekenen we horizontaal, de oneven verticaal. Bij een even stap in de herhaling gebruiken we een draai naar rechts, bij een oneven stap een draai naar links.

```js
function step(n) {
  forward(10);
  if (n % 2 === 0) {  // n is even
    right(90);
  } else {
    right(-90);
  }
}
```

De conditie `n % 2 === 0` betekent: `n` deelbaar door 2, ofwel: `n` is even. De operator `a % b` geeft de rest van de deling `a / b`.

---

*Opdrachten:*

1 Ga op papier na wat deze functie doet, door bijvoorbeeld een tekening te maken van `repeat(5, step)`.
2. Kopieer deze functie naar het JS-deelvenster (onder "user defined functions"), en definieer `testB` als: `repeat(x, step);`. Test met verschillende waarden. 


## Een trapje (vervolg)

---

*Opdrachten:*

1. Herhaal de test met waarde 7 een aantal malen. Wat zie je?
2. Idem, met waarde 8. Wat zie je?
3. Wat gebeurt er als je `i === 2` vervangt door `i === 3` (i deelbaar door 3)? Probeer dit eerst op papier uit, en test dit daarna in je programma.
4. Experimenteer met andere waarden voor de deler in de conditie, en andere waarden voor de herhaling.
    
## Voorbeeld: min

We willen soms het minimum of het maximum van twee of meer getallen bepalen. We kunnen de functie hiervoor als volgt definiëren:
      
```js
function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}
```

We zullen later zien dat we deze functie ook anders kunnen schrijven, als een *conditionele expressie*.

---

*Opdrachten:*

1. Kopieer deze functie naar het JS-deelvenster, en test deze functie met een aantal voorbeelden via het console.
2. Maakt het uit of we hier `a <= b` als conditie gebruiken, in plaats van `a < b` ?
3. Schrijf een functie `max` die het maximum van twee getallen bepaalt.
        
  
## Slinger
 
Een slinger is een figuur die er als volgt uitziet:

---

*Opdrachten:*

1. Maak een functie voor het tekenen van een slinger met n stappen, waarbij een stap de helft van een complete slingerbeweging is.
2. PM


## Voorbeeld: grensgevallen

We gebruiken if-opdrachten vaak voor grensgevallen. Je kunt je voorstellen dat de turtle bij de "grens" van het Canvas (tekenvel) zich anders gaat gedragen. We geven eerst een voorbeeld waarbij de turtle "botst" en terugkaatst. Dit effect zien we alleen goed bij kleine verplaatsingen: een grote verplaatsing maken we dan met behulp van herhaling.
      
```js
function fdStep() {
  if (pos.x < 0) {
    right(180 -2 * dir);
  } else if (pos.x >= 200) {
    right(180 -2 * dir);
  }
  if (pos.y < 0) {
    right(-2 * dir);
  } else if (pos.y >= 200) {
    right(-2 * dir);
  }
  forward(1);
}

function fd(n) {
  repeat(n, fdStep);
}
```
Het valt op dat de acties bij de x-grens links en rechts gelijk zijn. We zullen later zien hoe je dat handiger kunt schrijven.

---

*Opdrachten:*

* (1) Kopieer deze functies naar het JS-deel, en test het gedrag van de turtle uit met `fd` in plaats van `forward`. Bijv.:

```js
  right(15);
  fd(1000);
```
        
* (2) Maar een andere functie `fdStep` die de turtle, als deze over een grens gaat, aan de andere kant weer laat verschijnen, in plaats van te laten botsen. <br> *Hint:* tel 200 op bij de positie, of trek er 200 vanaf.


## Deling: rest en quotient

Bij het delen van gehele getallen hebben we te maken met een *rest* na deling en met een *quotient*.
Voor de rest na deling heeft JavaScript de operator `%`.
      
```js
  125 % 5 === 0
  127 % 5 === 2
```
      
Voor het quotient is er geen operator, maar je kunt dit op de volgende manier berekenen:

```js
  (127 - 127 % 5) / 5 === 25
  127 % 5 === 2
```

Een getal `n` is deelbaar door 3 als de rest na deling 0 is: `(n % 3) === 0`. (We gebruiken hier haakjes voor de duidelijkheid; deze zijn hier niet echt nodig.)

Als de deler of het deeltal een negatief getal is, moet je  opletten wat de betekenis is. Deze is niet altijd "logisch".
      
---

*Opdrachten:*

* PM
* PM
