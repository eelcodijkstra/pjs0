---
author: EJD
title: Les 5
date: 18-jan-2015
layout: lesson
---
    
## Programmeren in JavaScript - Les 5

Dit is de vijfde les in Programmeren in Javascript.
Naast deze tutorials is er een uitleg via XXX.

Ga nu naar de volgende pagina. 
    

## Keuze: if ... else

In deze les maken we kennis met de keuze-opdracht: het `if`-statement", ofwel de *conditionele opdracht*. Dit gebruiken we als er voor verschillende gevallen verschillende opdrachten uitgevoerd moeten worden. De vorm hiervan is:

```js
  if (cond) {
    command1;
  } else {
    command2;
  }
```

Hierin is `cond` een conditie die als resultaat `true` (waar) of `false` (onwaar) heeft. Als de conditie `true` is, wordt opdracht `command1;` uitgevoerd; als de conditie `false` is, wordt opdracht `command2;` uitgevoerd.

Er is ook een verkorte vorm, zonder `else`-deel. In dat geval wordt als de conditie `false` is, de *lege opdracht* uitgevoerd. Deze "doet niets": er verandert niets aan de toestand.

---

*Opdrachten:*

1. Let op de plaats van de accolades, spaties en regelovergangen in het voorbeeld. Door deze vorm te gebruiken, maak je minder fouten, en is je code beter leesbaar.

    
## Condities en vergelijkingen

Een conditie bevat vaak een vergelijking van waarden. De eenvoudigste vergelijkings-operatoren zijn "a gelijk aan b" - in JavaScript, `a === b`, en "a ongelijk aan b" , in JavaScript `a !== b`

*Opmerking:* er zijn ook vergelijkingsoperatoren met een = minder: `a == b` en `a != b`. Deze kun je in het algemeen beter niet gebruiken.

---

*Opdrachten:*

* PM
* PM      


## Voorbeeld: trapje

We tekenen een trapje, met zijde 10, waarbij het aantal zijden gegeven is. De elementaire stap is dan niet een trede, maar een zijde ("halve trede"). De even zijden tekenen we horizontaal, de oneven verticaal. De draaiing aan het eind van een zijde hangt er dan van af of we met een even stap (draai naar rechts) of met een oneven stap (draai naar links) van de herhaling te maken hebben.

```js
function stairSide(n) {
  forward(10);
  if (n % 2 === 0) {  // n is even
    right(90);
  } else {
    right(-90);
  }
}
```

We leggen later de conditie `n % 2 === 0` uit: deze is `true` als `n` deelbaar is door 2: n is even.

---

*Opdrachten:*

1. Kopieer deze functie naar het JS-deelvenster, en maak twee testfuncties (knoppen): voor bijvoorbeeld 7 en 8 zijden.
2. Voer de test voor 7 zijden een aantal malen uit. Doe dit ook met de test voor 8 zijden. Wat zie je?


## Andere vergelijkingen

Voor getallen hebben we ook nog andere operatoren om waarden te vergelijken:

* `a <  b` &nbsp; - a kleiner dan b
* `a <= b` - a ten hoogste b
* `a >  b` &nbsp; - a groter dan b
* `a >= b` - a ten minste b

---

*Opdrachten:*

* PM
* PM

    
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


## FizzBuzz (1)
Een bekende programmeer-opdracht is FizzBuzz. We maken hiervan een turtle-variant:


1. doorloop alle getallen van 0 tot aan (en zonder) 50 - soms noteren we dit als `[0..]50`
2. als het huidige getal `n` deelbaar is door 3, draai dan 90 naar rechts, en ga `n` stappen vooruit;
3. als `n` deelbaar is door 5, draai dan 90 graden naar links, en ga `n` stappen vooruit;
4. als `n` deelbaar is door 3 en door 5, voer dan beide stappen uit (in deze volgorde).

---

*Opdrachten:*

1. Probeer met de hand te schetsen wat het resultaat is voor de eerste 20 stappen.
2. Wat is het resultaat voor `n` gelijk is aan 0?
        

## FizzBuzz (2)
We geven hier de functie fizzBuzz
      
```js
  function fizzBuzz(n) {
    if ((n % 3) === 0) {
      right(90);
      forward(n);
    }
    if ((n % 5) === 0) {
      left(90);
      forward(n);
    }
  }
```

```js
  function testB() {
    forward(100);  // go to (100, 100)
    right(90);
    forward(100);
    right(-90);
    penDown();
    repeat(50, fizzBuzz);
    }
```

---

*Opdrachten:*

* PM
* PM

## Deling: rest en quotient

Bij het delen van gehele getallen hebben we te maken met een rest na deling, en met een quotient.
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

Als de deler of het deeltal een negatief getal is, moet je altijd opletten wat de betekenis is. Deze is niet altijd "logisch".
      
---

*Opdrachten:*

* PM
* PM
        
      
    

    
## Conditionele actie
Soms wil je dat een opdracht alleen uitgevoerd wordt als aan een bepaalde voorwaarde (condition) is voldaan. Hiervoor heeft JavaScript het *if-statement*:

```js
if (condition) {
  ...command...;
}
```

Je kunt ook een alternatieve opdracht aangeven voor het geval er niet aan de voorwaarde is voldaan:

```js
if (condition) {
  ...command...;
} else {
  ...alternative command...;
}
```

---

*Opdrachten:*

* PM
* PM


## Een trapje

We kunnen een trapje tekenen door afwisselend een horizontale en een verticale lijn te tekenen. Bij de even stappen maken we een draai naar rechts, bij de oneven stappen een draai naar links:
      
```js
function step(i) {
  forward(10);
  if ((i % 2) === 0) {
    right(90);
  } else {
    right(-90);
  }
}
```

---

*Opdrachten:*

* PM
* PM
