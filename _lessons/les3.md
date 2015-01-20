---
author: EJD
title: Les 3
date: 15-jan-2015
layout: lesson
---


## Programmeren in JavaScript - Les 3

Dit is de derde les in Programmeren in Javascript. Naast deze tutorials is er een uitleg via XXX.

Ga nu naar de volgende pagina. 
    

    
## Rekenen met waarden
Tot nu toe kunnen we alleen verschillende getallen invullen als parameter. De enige manier om 10 vierkanten te tekenen die steeds 10 stappen (pixels) groter zijn, is om alles uit te schrijven. Met computers moet dat slimmer kunnen.

We willen kunnen rekenen met waarden, zodat we bijvoorbeeld kunnen schrijven:
`size - 10`.

In JavaScript gebruiken we hiervoor *expressies* (uitdrukkingen).

---

*Opdrachten:*

1. PM
2. PM

    
## Rekenen met het console


Selecteer de tab "Console", en maak eventueel ruimte door de andere tabs te sluiten. <br> In de opdrachten moet je steeds een regel invoeren in het console. Denk erom dat je de regel afsluit met een return (anders kun je lang wachten).
      
---

*Opdrachten:*

1. Probeer een aantal uitdrukkingen van de vorm `a # b`, waarin `a` en `b` getallen zijn, en `#` een van de rekenkundige operatoren is: `+ - * /`, bijv. `3 * 12`.
2. Probeer een aantal uitdrukkingen van de vorm `a # b $ c`, waarin `#` en `$` verschillende rekenkundige operatoren zijn, bijv. `2 + 3 * 4` <br> Wat kun je zeggen over de prioriteit (rekenvolgorde) van de operatoren?
3. Door haakjes te gebruiken, kun je de volgorde in de berekening veranderen, bijvoorbeeld `(2 + 3) * 4`. Probeer dit uit.
        
      
## Functies

Zoals ook bij de andere elementen voor het bouwen van programma's, hebben we hier
te maken met:

* elementaire bouwstenen (waarden, hier getallen; en operaties, zoals optellen);
* samenstellen van bouwstenen (hier: uitdrukkingen, eventueel met meerdere waarden, operatoren, en haakjes);
* benoemen van een samenstelling, om deze tot een nieuwe bouwsteen te maken.

Voor deze benoemde expressies gebruiken we functies, zoals we deze tot nu toe gezien hebben. Met één verschil: de functie levert een resultaat op waarmee we in het programma verder kunnen rekenen.

Voorgedefinieerde functies: `Math.sqrt` enz.

---

*Opdrachten:*

1. PM
2. PM


    
## Voorbeelden

Enkele voorbeelden

```js
function dubbel(a) {
  return 2 * a;
}

function kwadraat(num) {
  return num * num;
}
```

Voorbeelden van het gebruik hiervan:
      
```js
vierkant(double(4) + 2);
vierkant(square(2+3));
```

---

*Opdrachten:*

1. Definieer zelf een functie `triple` die het drievoud van de parameter oplevert.
2. Hoe kun je de functie `double` anders schrijven?
3. Definieer een functie `rectangleSurface(width, height)` die de oppervlakte van een rechthoek berekent.
4. Hoe zou je de functie `double` kunnen testen? En de functie `square`?


## Namen en naamsconflicten

We hebben de functie hiervoor "kwadraat" genoemd - en niet "square"... waarom? <br> We hebben al een functie "square", namelijk voor het tekenen van een vierkant. En we kunnen een naam maar één keer gebruiken. (Welke betekenis zou je anders bedoelen?) <br> Zoals je ziet geeft deze regel soms aanleiding tot vreemde namen. Dat is niet alleen een gebrek aan fantasie. We zullen later zien welke hulpmiddelen we hebben om minder last te hebben van dit soort problemen.

---

*Opdrachten:*

1. PM
2. PM


## Voorbeeld: blad
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

---

*Opdrachten:*

1. Kopieer deze functie naar het JavaScript-deel voor user-defined functions.
2. Probeer deze functie uit met verschillende waarden voor de parameters.
3. Gebruik een van de test-functies voor het tekenen van een blad, gevolgd door een draai, bijv. `right(30);` <br> Teken een bloem.
4. Wat is de rol van de eerste opdracht, `right(-deg);` ?
5. Wat is de rol van de middelste opdracht, `right(180 - 2 * deg);` ?
6. Wat is de rol van de laatste opdracht, `right(180 - deg);` ?

    
## Voorbeeld: bloem

Een functie-definitie voor het tekenen van een bloem kan er als volgt uitzien:

```js
function flower() {
  // ... body: a lot of leaves ...
}
```

Maak deze functie.

*Hint:* teken de bloem van de vorige opdracht, en kopieer de opdrachten
vanuit het log-venster naar de body.

---

*Opdrachten:*

1. Kopieer deze definitie naar het JavaScript-venster; vul de opdrachten in de "body" van deze functie in door (i) de bloem te tekenen uit de vorige opdracht; (ii) de opdrachten te kopiëren vanuit het log-venster naar de functie-body.
2. Je krijgt zo steeds dezelfde bloem; welke parameters zou je kunnen gebruiken om
de vorm van de bloem mee aan te geven?


## Opstap naar herhaling

We willen het hele Canvas vullen met vierkanten van dezelfde grootte. Dit doen we door een basisfiguur steeds te herhalen. Hoe ziet deze basisfiguur eruit? Hebben we aan één basisfiguur
genoeg?

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
        