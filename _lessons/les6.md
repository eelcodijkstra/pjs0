---
author: EJD
title: Les 6
date: 18-jan-2015
layout: lesson
---
    
## Programmeren in JavaScript - Les 6: variabelen

Dit is de zesde les in Programmeren in Javascript. Naast deze tutorials is er een uitleg via XXX.

Ga nu naar de volgende pagina. 

    
## Variabelen

De toestand van de turtle vinden we in de *variabelen*:

* `pos.x` - x-coordinaat van de turtle
* `pos.y` - y-coordinaat van de turtle
* `dir` - richting van de turtle
* `down` - turtle-pen op papier?
      
Door opdrachten als `forward(30)`, `right(20)`, of `penDown()`, besturen we de turtle. Daarmee verandert ook de toestand: de *waarden* van deze variabelen veranderen.

Je kunt (de naam van) een variabele gebruiken in een expressie: deze staat dan voor de *waarde* van de variabele.
      
---

*Opdrachten:*

1. Bekijk in het console de waarden van deze variabelen, voor en nadat je een turtle-opdracht geeft. (Je kunt een opdracht geven via het console, of via de buttons.)
2. Gebruik een of meer van deze variabelen in een expressie met operatoren als `+ * /`
3. Je kunt de waarde van `pos` als geheel ook opvragen. Probeer dit. <br> `pos` is een object - we zullen in een volgende les zien wat dat betekent.


## Toekenning

We kunnen de waarde van een variabele veranderen, door middel van een *toekenning* (assignment), bijvoorbeeld:

```js
dir = 90;
```

Een toekenning heeft de vorm: 

```js 
variable = expression; 
```

Het teken `=` spreek je uit als *wordt* (becomes). <br> Deze opdracht (i) rekent eerst de expressie uit; en (ii) kent het resultaat van deze berekening toe aan de variabele.

*Het gebruik van `=` voor toekenning kun je zien als een ontwerpfout in Javascript. Een asymmetrische notatie als `:=` of `<-` geeft de bedoeling duidelijker weer.*

---

*Opdrachten - voer uit via het console:*

1. Plaats de pen op het papier: <br> `down = true;`
2. Plaats de turtle op (50,50): <br> `pos.x = 50;` en `pos.y = 50;` <br> (Dit is een vorm van "teleportatie".)
3. Verplaats de turtle: `forward(50);`
4. Bekijk de waarden van de variabelen die de toestand van de turtle beschrijven.


## Variabele-declaratie

Voordat we een variabele kunnen gebruiken, moeten we deze *declareren*. Hiermee geven we twee dingen aan:

1. we voeren een nieuwe naam in, die we verderop in het programma als variabele kunnen gebruiken.
2. we reserveren ruimte in het geheugen om de waarde van de variabele op te slaan.

Een variabele-declaratie heeft de vorm:

```js
var varA = expr1;
```

De toekenning met de beginwaarde kun je weglaten. In dat geval is de waarde `undefined`.

---

*Opdrachten (uitvoeren via het console):*

1. Vraag de waarde op van de variabele `xx` (voordat je deze declareert). Welke melding krijg je?
2. Declareer de variabele `xx` d.m.v.: <br>`var xx = 25;`
3. Vraag nogmaals de waarde van `xx` op.
4. Declareer de variabele `yy` als: <br> `var yy;` <br> Wat krijg je nu als je de waarde van `yy` opvraagt?


## Toekenning: update

In een programma kom je vaak een toekenning tegen van de vorm: 

```js
x = x + 1;
```

of

```js
z = z * 10 * y;
```

Hoe moet je deze vorm begrijpen?

1. reken eerst de expressie rechts van de `=` uit; <br> als `x` de waarde `122` heeft, `x === 122`, dan is `x + 1` gelijk aan `123`
2. ken dit resultaat toe aan de variabele. <br> Nu heeft `x` de waarde `123`. <br> Er geldt: `x === 123`

Dit noemen we ook wel een *update* van de variabele.

---

*Opdrachten (uitvoeren via het console):*

1. Declareer: `var z = 1, y = 2;` <br> Vraag de waarden van deze variabelen op.
2. Reken hiermee uit: `z * 10 + y`
3. Voer uit: `z = z * 10 + y;` <br> Vraag de waarden van deze variabelen op.
4. Voer de vorige opdracht nog een keer uit.


## Update: turtle

We kunnen de turtle besturen met commando's als `right`, `penDown`, `forward`. Sommige van deze commando's kunnen we voor de Canvas-turtle, die het HTML Canvas gebruikt, eenvoudig uitwerken door het bijwerken van de toestands-variabelen van de turtle. In deze gevallen hoeven we niets te doen met het Canvas.

---

*Opdrachten:*

1. Zorg ervoor dat de pen op het papier staat.
2. Verander de richting van de turtle door er 45 (graden) bij op te tellen, en geef de turtle opdracht om 100 stappen vooruit te gaan.
3. Bekijk via de JavaScript-tab de code voor de functies `right` en `penDown` en `penUp`. <br> Je krijgt deze code ook in het console-venster, door de naam van de functie op te geven - zonder haakjes en parameters.


## Tekenen op het Canvas

Het turtle-commando `forward` kan een spoor op het Canvas achterlaten. Hiervoor hebben we  één  of meer Canvas-commando's nodig. Het is niet voldoende om alleen de toestandsvariabelen bij te werken.

Het turtle-commando `forward` gaat uit van een relatieve beweging ten opzichte van de positie en richting van de turtle. Deze moeten we omzetten in Canvas-coördinaten: een rechthoeking coördinatenstelsel met de oorsprong (0,0) links boven. We gebruiken de functies `cos` en `sin` voor de afbeelding van de nieuwe (relatieve) turtle-positie naar absolute Canvas-coördinaten

---

*Opdrachten*

1. Bekijk via de JavaScript-tab de code voor de functie `forward`. Ga na hoe de nieuwe turtle-positie afgebeeld wordt op Canvas-coördinaten.
2. Zoek uit hoe de Canvas-opdrachten in deze code werken. Zie hiervoor [Canvas-API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) en [Canvas shapes](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes).


## Absolute en relatieve beweging
De turtle-opdrachten uit de eerste lessen zijn relatief - ten opzichte van de huidige positie van de turtle. Dit betekent dat we eenvoudig een functie kunnen maken die een figuur tekent. Als we de turtle op een bepaalde positie zetten, met een bepaalde richting, wordt de figuur daar getekend.

Door een toekenning aan de variabelen kunnen we de positie en de richting van de turtle absoluut zetten - bijvoorbeeld `pos = {x: 100, y:100};`, en `dir = 90;`. De nieuwe positie hangt nu niet af van de vorige positie. <br> Met dergelijke opdrachten kunnen we geen functies maken die een bepaalde figuur op verschillende plaatsen kan tekenen. <br> Een oplossing in dit geval is als we de positie en de richting van de turtle meegeven als parameter aan de functie.

---

*Opdrachten:*

*  PM
*  PM
        




## Functie als waarde, functie-variabelen

In JavaScript is een functie een waarde, net als getallen en strings waarden zijn. Dit betekent dat we een functie-waarde ook kunnen toekennen aan een variabele. In de aanroep gebruiken we dan de naam van de variabele op de plek van de functie-naam.

```js
var pi = Math.PI;
var fun = Math.cos;
console.log(fun(pi));
fun  = Math.sin;
console.log(fun(pi));
```

We gebruiken functie-variabelen onder andere om eigen functies te koppelen aan html-elementen zoals knoppen (buttons).

Bij de behandeling van functies komen we hier uitgebreider op terug.

---

*Opdrachten:*

1. Kopieer bovenstaand voorbeeld naar het console, en bekijk het resultaat. <br> Merk op dat door het gebruik van variabelen een expressie die er hetzelfde uitziet, afhankelijk van de toestand een ander resultaat kan opleveren.





## Objecten

We zijn eerder de notaties `pos.x` en `pos.y` tegengekomen. Hoe kunnen we deze begrijpen?

`pos` is een *object*, met *properties* `x` en `y`. Een object kun je beschouwen als een samengestelde waarde die een verzameling variabelen bevat. De variabelen van een object noemen we de eigenschappen of properties van dat object.

Dit betekent dat we `pos.x` als een variabele kunnen gebruiken. Het betekent ook dat we `pos` kunnen gebruiken als waarde die zowel `pos.x` als `pos.y` bevat.

De declaratie van `pos` ziet er als volg uit:

```js
var pos = {x: 0, y: 0};
```

In het hoofdstuk over objecten komen we hier uitgebreid op terug.

---

*Opdrachten:*

1. Een variabele kan ook een functie-waarde bevatten. 
