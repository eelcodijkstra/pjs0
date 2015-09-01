---
author: EJD
title: Les 3
date: 15-jan-2015
layout: lesson
---


## Programmeren in JavaScript - Les 3: Rekenen

Dit is de derde les in Programmeren in Javascript. Naast deze tutorials is er een uitleg in het hoofdstuk [Rekenen met getallen](http://infvo.com/books/pjs-0/Chapter-4/rekenen-met-getallen.html).

Ga nu naar de volgende pagina. 
    

    
## Rekenen met waarden
Tot nu toe kunnen we alleen verschillende getallen invullen als parameter. De enige manier om 10 vierkanten te tekenen die steeds 10 stappen (pixels) groter zijn, is om alles uit te schrijven. Met computers moet dat slimmer kunnen.

We willen kunnen rekenen met waarden, zodat we bijvoorbeeld kunnen schrijven:
`size - 10`.

In JavaScript gebruiken we hiervoor *expressies* (uitdrukkingen).

---


## Rekenen via het console

Selecteer de tab "Console", en maak eventueel ruimte door de andere tabs te sluiten. <br> In de opdrachten moet je steeds een regel invoeren in het console. Denk erom dat je de regel afsluit met een return (anders kun je lang wachten).
      
---

*Opdrachten:*

1. Reken uit: `3 * 4 + 5`. 
2. Probeer een aantal expressies van de vorm `a # b`, waarin `a` en `b` getallen zijn, en `#` een van de rekenkundige operatoren is: `+ - * /`, bijv. `3 * 12`.
3. Probeer een aantal expressies van de vorm `a # b $ c`, waarin `#` en `$` verschillende rekenkundige operatoren zijn, bijv. `2 + 3 * 4` <br> Wat kun je zeggen over de prioriteit (rekenvolgorde) van de operatoren?
4. Door haakjes te gebruiken, kun je de volgorde in de berekening veranderen, bijvoorbeeld `(2 + 3) * 4`. Probeer dit uit.
        
      
## Rekenen met functies

Je kunt in een expressie ook een functie gebruiken. Het gaat daarbij om functies die een waarde opleveren als resultaat. De aanroep van een functie heeft de vorm:

```js
functienaam(... parameters ...)
```

Met het resultaat van een functies kunnen we direct verder rekenen in een expressie:

```js
3 * sqr(4 + 2)
```

In de volgende opdracht behandelen we de definitie van `sqr`.

In JavaScript zijn de meest gebruikte wiskundige functies voorgedefinieerd. Enkele voorbeelden:

`Math.sqrt(4)` - vierkantswortel (square root): `2`
`Math.sin(Math.PI / 2)` - sinus, van pi: `1`
`Math.random()` - random getal tussen 0 en 1 (tot aan 1) : bijv. `0.123`

Zie: [MDN: Math](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)

De notatie `Math.naam` leggen we later uit.

---

*Opdrachten:*

1. Probeer de bovenstaande functies, via het console.
2. Probeer voorbeelden van expressies waarin je een functie gebruikt in combinatie met operatoren en een andere functie. Voorbeeld: `Math.sin( Math.sqrt(4) * Math.PI / 4)`
3. Ga na welke functies nog meer gedefinieerd zijn voor `Math`, en probeer enkele daarvan uit.

    
## Functies: definitie

Met behulp van een functie kunnen we een expressie een naam geven, en van parameters voorzien. Met de opdracht `return` geven we de waarde aan die de functie als resultaat oplevert. Enkele voorbeelden:

```js
function twice(a) {
  return a + a;
}

function sqr(x) {
  return x * x;
}
```

Voorbeelden van het gebruik hiervan:
      
```js
square(twice(4) + 2);
square(sqr(2+3));
```

---

*Opdrachten:*

1. Definieer zelf een functie `triple` die het drievoud van de parameter oplevert.
2. Hoe kun je de functie `twice` anders schrijven?
3. Definieer een functie `surface(width, height)` die de oppervlakte van een rechthoek berekent.
4. Hoe zou je de functie `twice` kunnen testen? En de functie `sqr`?


## Tekenen en rekenen: teken een blad

Nu we kunnen rekenen met parameters, kunnen we ook interessantere teken-functies maken.
We geven hier een voorbeeld van een functie om een blad te tekenen:

```js
function leaf(rad, deg) {
  right(-deg);
  turnRight(rad, 2 * deg);
  right(180 - 2 * deg);
  turnRight(rad, 2 * deg);
  right(180 - deg);
}
```

Deze functie tekent een blad met kromming (straal) `rad`, en hoek (bij begin en eind) `deg`.

Na afloop van het tekenen van het blad staat de turtle weer op dezelfde positie, in dezelfde richting als voorheen.

---

*Opdrachten:*

1. Kopieer deze functie naar het JavaScript-deel voor user-defined functions.
2. Plaats de aanroep `leaf(x, y)`  in de button-functie `testC` . Probeer verschillende waarden voor de parameters van de button.
3. Breid de body `testC` uit: na de aanroep van `leaf` laat je de turtle draaien, bijv. `right(30);` <br> Teken een bloem.
4. Wat is de rol van de eerste opdracht, `right(-deg);` ?
5. Wat is de rol van de middelste opdracht, `right(180 - 2 * deg);` ?
6. Wat is de rol van de laatste opdracht, `right(180 - deg);` ?

    
## Voorbeeld: bloem

Een functie-definitie voor het tekenen van een bloem kan er als volgt uitzien:

```js
function leafStep(rad, deg) {
  leaf(rad, deg);
  right(45);
}

function flower() {
  leafStep(30, 45);
  leafStep(30, 45);
  leafStep(30, 45);
  leafStep(30, 45);
  leafStep(30, 45);
  leafStep(30, 45);
  leafStep(30, 45);
  leafStep(30, 45);
}
```

We zullen in de volgende les zien hoe je deze herhaling handiger kunt opschrijven.

---

*Opdrachten:*

1. Kopieer deze definitie naar het JavaScript-venster. Koppel deze vul de opdrachten in de "body" van deze functie in door (i) de bloem te tekenen uit de vorige opdracht; (ii) de opdrachten te kopiëren vanuit het log-venster naar de functie-body.
2. Je krijgt zo steeds dezelfde bloem. Welke parameters zou je kunnen gebruiken om
de vorm van de bloem mee aan te geven?


## Opstap naar herhaling

We willen het hele Canvas vullen met vierkanten van dezelfde grootte. Dit doen we door een basisfiguur steeds te herhalen. Hoe ziet deze basisfiguur eruit? Hebben we aan één basisfiguur genoeg?

De basisfiguur moet meer zijn dan alleen een vierkant. Immers, als we een vierkant tekenen, komen we weer op het beginpunt uit. Als we daar weer een vierkant tekenen, overlapt deze precies met de vorige: we komen niet verder.

```js
function squareStep(size) {
  square(size);
  forward(size);
}
```

We kunnen nu een rij vierkanten naast elkaar tekenen door deze functie te herhalen:

```js
squareStep(10);
squareStep(10);
squareStep(10);
```

---

*Opdrachten:*

1. Maak een vergelijkbare functie `squareStep1(size)` om een kolom vierkanten te tekenen, dus onder elkaar.
2. 


## Andere manieren (1)

Er zijn verschillende manieren om een vlak te vullen met vierkantjes. We hebben tot nu toe één manier gezien: van links naar rechts, en van boven naar beneden - zoals je leest.

Maar je kunt het ook anders doen. Probeer zelf een (of meer) andere manieren te bedenken. <br> *Hint:* hoe maai je een gazon?

---

*Opdrachten:*

1. PM
2. PM


## Andere manieren (2)

Een andere manier is om aan het eind van een rij, de rij eronder in de andere richting te doorlopen (van rechts naar links).

Nog een andere manier is om kolom voor kolom in te vullen, in plaats van rij voor rij.

Nog weer een andere manier is om het vlak van buiten naar binnen in te vullen. Of, van binnen naar buiten, spiraalsgewijs.

---

*Opdrachten:*

1. PM
2. PM
        

## Andere manieren (3)
We hebben een functie `turnRight(size)` gedefinieerd om het tekenen
van de vierkanten in een andere richting voor te zetten:

```js
function turnRight(size) {
  right(90);
  forward(size);
}
```

---

*Opdrachten:*

1. Hoe kun je met de twee functies `squareStep` en `turnRight` een vierkante rand van vierkanten tekenen, bijv. van 4 x 4? (totaal 12 vierkanten).
2. Hoe kun je met de twee functies `squareStep` en `turnRight` een vierkant van 4 x 4 vierkanten tekenen? (totaal 16 vierkanten).
3. Definieer een functie `turnLeft(size)` om de richting naar links te veranderen. *Hint:* zorg ervoor dat <br> `turnRight(30); turnLeft(30);` <br> weer op precies dezelfde positie uitkomt.
        