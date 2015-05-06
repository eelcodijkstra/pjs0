---
author: EJD
title: Les 8
date: 7-mei-2015
layout: lesson
---


## Programmeren in JavaScript - Les 8: Objecten

Dit is de achtste les in Programmeren in Javascript. Naast deze tutorials is er een uitleg via XXX.

Ga nu naar de volgende pagina.


## Objecten

Een object is een verzameling properties (eigenschappen). Een property heeft een *naam* en een *waarde*. <br> Je kunt een object-waarde noteren door de (naam: waarde)-paren op te sommen tussen accolades:

```js
var pos = {x: 0, y: 0};
var turtle = {name: "Henk", dir: 90, down: true};
```

Deze vorm heet een *object literal* of *initializer*. Via de naam kun je de waarde opvragen of veranderen. In beide gevallen gebruik je de vorm  `obj.p` voor property `p` van object `obj` .

```js
  turtle.name = "Marie";  // toekenning
  console.log(turtle.name);  // gebruik
```

---

*Opdrachten (uitvoeren via het console):*

1. Maak een object-variabele `leerling` aan met properties `naam` - geef deze een string-waarde; en `jaar` - geef deze een getal-waarde. <br> Laat de waarde hiervan zien op het console.
2. Verander de waarde van één van deze properties, en laat het resultaat-object zien op het console.


## Math object

Het `Math` object bevat een aantal veel gebruikte wiskundige constanten en functies, bijvoorbeeld:

* `Math.PI` - de constante pi ()
* `Math.sin(x)` - de sinus-functie (in radialen)
* `Math.sqrt(x)` - de wortel-functie

Door het gebruik van dit aparte `Math`-object verwar je de namen voor deze functies en constanten niet met namen in je eigen programma.

---

*Opdrachten:*

1. Zoek via de documentatie op het web uit wat de functie `Math.floor(x)` doet. Laat dit zien door een aantal test-voorbeelden via het console.
2. Hoe is de functie `sin` gedefinieerd in de turtle-code? Waarvoor wordt deze gebruikt?
3. Hoe zou de turtle-code beter gedefinieerd kunnen zijn, zodat de namen hiervoor niet met je eigen namen in de war komen?


## Object als property-waarde

Een property kan alle soorten JavaScript-waarden aannemen. In het bijzonder kan de waarde van een property ook weer een object zijn.

```js
var turtle = {name: "Henk", dir: 90, pos: {x: 0, y: 0}};
console.log("x=" + turtle.pos.x);

```

We zullen later zien dat we ook arrays en functies kunnen gebruiken als waarden in een object.

---

*Opdrachten:*

1. 
2.




## Toevoegen van een property

Je kunt in JavaScript een property toevoegen aan een object, door een toekenning.

```js
var turtle = {dir: 0, down: false};
turtle.pos = {x: 50, y: 100};
```

---

*Opdrachten (via het console):*

1. Kopieer bovenstaand voorbeeld naar het console. Vraag de waarde van `turtle` op via het console.
2. Voeg een property `color` toe (met een string-waarde). Vraag de waarde nogmaals op.
3. Je kunt een property ook weer verwijderen, met `delete turtle.color`


## Verwijzing naar object: toekenning, gelijkheid

Een variabele met een object als waarde bevat altijd een *verwijzing* naar dit object. Een toekenning van een object aan een variabele kopieert de verwijzing - niet de waarde zelf.

Een gevolg is dat twee variabelen naar dezelfde waarde kunnen verwijzen (*aliasing*). Als je deze waarde verandert via de ene variabele, zie je deze verandering ook via de andere variabele. Voorbeeld:

```js
var objA = {name: "Hans", year: 2013};
var objB = objA;
objB.name = "Klaas";
console.log(objA.name);  // levert "Klaas"
```

Dit geldt ook voor parameters en voor properties: deze verwijzen naar een object-waarde.

---

*Opdrachten*

1. Kopieer bovenstaande regels één voor één naar het console, en vraag steeds de waarde van `objA` en `objB` op.
2. Maak een tekening van deze objecten en van de toekenningen, om te laten zien welke verwijzingen veranderen. <br> Hint: voer het programma uit in pythontutor.com. Selecteer eerst JavaScript als taal.


## Toekenning en gelijkheid

Zoals we gezien hebben, kopieer je bij een toekenning van een object-waarde altijd de verwijzing naar het object, niet het object zelf.

De test op gelijkheid tussen twee object-waarden is daarom een test op de verwijzing, niet op de inhoud van het object:

```js
var objA = {name: "Hans", year: 2013};
var objB = objA;
var objC = {name: "Hans", year: 2013};
console.log(objA === objB); // levert true
console.log(objA === objC); // levert false
```

(Hoe kun je de waarde van een object kopiëren?)

## DOM als object

De variabele `document` in de browser is een object waarin het HTML-document voorgesteld wordt. Vanuit dit object: het Document Object Model (DOM), maakt de browser de presentatie op het scherm.

Je kunt een HTML-element met een id-attribuut in dit document vinden met de functie `getElementById`. Voorbeeld:

```js
var b = document.getElementById("testAButton");
```

Van een element in de DOM kun je waarden opvragen en veranderen, bijvoorbeeld:

```js
b.style.color = "red";
b.innerHTML = "klik hier";
```

---

*Opdrachten:*

1. Kopieer de bovenstaande voorbeeld-regels één voor één naar het console. Wat is het effect van de laatste twee regels?
2. Vraag de waarde van het element-object `b` op via het console. Schrik niet! Je krijgt een heel groot aantal eigenschappen te zien. Via het console kun je hier in bladeren. Kijk of je bekende dingen tegenkomt.
3. Het element met daarin de test-buttons heeft als naam (id): `"div4"`. Verander de achtergrondkleur (`backgroundColor`)van de `style` van dit element. (Bijvoorbeeld: "lightYellow"). <br> Zoek op het web naar "CSS color names" om te vinden welke namen je kunt gebruiken.


## Samengestelde objecten als waarde

Een variabele met een samengestelde waarde, bevat altijd een *verwijzing* naar de eigenlijke waarde. Een toekenning van een samengestelde waarde aan een variabele kopieert de verwijzing - niet de waarde zelf.

Twee variabelen kunnen naar dezelfde waarde verwijzen (*aliasing*). Als je deze waarde verandert via de ene variabele, zie je deze verandering ook via de andere variabele. Voorbeeld:

```js
var objA = {name: "Hans", year: 2013};
var objB = objA;
objB.name = "Klaas";
```

---

*Opdrachten:*

1. Kopieer bovenstaande regels één voor één naar het console, en vraag steeds de waarde van `objA` en `objB` op.
2. Maak een tekening van deze objecten en van de toekenningen, om te laten zien welke verwijzingen veranderen. <br> Hint: voer het onderstaande Python-programma uit in pythontutor.com:

```js
x = {'name': 'Klaas', 'year': 2014}
y = x
x['name'] = 'Hans'
```


## String als property-name

Een property-name is een string; deze hoeft niet aan de regels voor JavaScript-namen te voldoen.

Voor het gebruik en veranderen van property `name` van object `obj` kunnen we, in plaat `obj.name`, ook gebruiken: `obj["name"]`. <br> Deze index-notatie geeft ook de mogelijkheid om de naam van een property te berekenen (zie verderop: associatieve arrays.)

```js
var objA = {"name": "Hans, "year": 2013};
objA["name"]
```

---

*Opdrachten:*

1. a
2. b
3. c

## Van object naar string - en omgekeerd

Je kunt een object in de meeste gevallen niet zomaar afdrukken. Het resultaat van `obj.toString()` is `"[object Object]"`.

Er is een andere mogelijkheid: het gebruik van JSON ("JavaScript Object Notation", zie [json.org](http://json.org)). Deze vorm wordt veel gebruikt voor het uitwisselen van data tussen programma's en computers.

Je kunt een JavaScript-waarde `x` omzetten in JSON met behulp van `JSON.stringify(x)`.

> Deze functie `stringify` heeft allerlei extra mogelijkheden die vooral van belang zijn bij complexe objecten. Zie [MDN-JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify).

Voor het omzetten van een JSON-string `str` in een JavaScript-waarde gebruik je: `JSON.parse(str)`.
