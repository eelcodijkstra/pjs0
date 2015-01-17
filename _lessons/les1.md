---
author: EJD
title: Les 1
date: 14-jan-2015
layout: lesson
---


## Programmeren in JavaScript - Les 1

Dit is het eerste tutorial om te leren programmeren in Javascript. Naast deze tutorials is er een uitleg via het boek, hoofdstuk "Elementaire opdrachten en opeenvolging".

---

Ga nu naar de volgende pagina door op het pijltje rechtsboven dit tutorial-deel te klikken.


## Bestuur de Turtle
Als eerste stap naar het programmeren gebruiken we een "tekenrobot". Stel je dit voor als een robot-schildpad (*turtle*) met een pen. Deze turtle kent de volgende opdrachten:

* `forward(n)` - ga *n* stappen vooruit;
* `right(n)` - draai *n* graden naar rechts;
* `turnright(r, n)` - maak een bocht met straal *r* over *n* graden;
* `penUp()` - haal de pen van het tekenvel;
* `penDown()` - zet de pen op het tekenvel.

360 graden is een hele draai; 90 graden is een kwartslag naar rechts; -90 graden is een kwartslag naar links.

Je kunt de turtle *direct besturen* met de knoppen in het blauwe deelvenster. Later kun je de turtle ook *programmeren*.

De knop *Clear canvas & log* maakt  het scherm schoon en zet de turtle in de beginpositie. 

---

*Opdrachten:*

1. Teken met deze knoppen een vierkant. <br> *Hint:* klik een aantal malen op knop *testA();*
2. Je kunt de waarden in de witte invoer-vakjes veranderen. Teken nu een groter vierkant met `forward` en `right`.


## Log van acties

In het venster naast (of onder) het teken-canvas zie je de *log* van de acties die uitgevoerd zijn voor de tekening die je ziet. Deze reeks van acties vormen het *proces* waarvan de tekening het *resultaat* is.

De knop voor het schoonvegen van het Canvas maakt ook deze log weer leeg.

Probeer steeds te begrijpen hoe de opdrachten die je geeft, het proces dat daaruit volgt, en de resulterende tekening samenhangen.


## De toestand van de turtle

De turtle staat altijd op een bepaalde plaats op het tekenvel (het *Canvas*), in een bepaalde richting.

De *plaats* geven we aan door de x-positie (horizontaal, neemt toe naar rechts) en de y-positie (verticaal, neemt toe naar beneden). <br> (0,0) is de linkerbovenhoek.

De *richting* (`dir`) geven we aan als hoek met de x-richting (x-as), waarbij een draaiing  naar rechts een positieve hoek is.

De *pen* kan op het tekenvel staan (`down: true`), of omhoog (`down: false`).

De plaats, de richting, en de pen-positie vormen samen de *toestand* of *state* van de turtle. Deze zie je in het gele vlak.

---

1. Kijk hoe de toestand verandert door de opdrachten die je met de knoppen geeft.
2. Probeer de toestand te bereiken: `x: 130, y: 130, down: true`. Kun je deze toestand bereiken zonder een spoor achter te laten?
3. Wat gebeurt er als je een negatief getal invoert als parameter voor `right`?
4. Wat gebeurt er als je een negatief getal invoert als parameter voor `forward`?


## JSBin tips

Enkele tips voor het werken met JSBin:

* Je kunt een deelvenster openen of sluiten door op de bijbehorende tab (bovenaan) te klikken;
* Als er niets gebeurt, controleer dan of "Auto-run JS" geselecteerd is (in het output-venster, bovenin of onderin).

---

*Opdrachten:*

1. Open het JavaScript-venster. Scroll naar het onderste deel van het venster, waar de "user defined functions" staan. De functies `testA`, `testB` en `testC` zijn gekoppeld aan de knoppen (buttons) met dezelfde naam in het "user defined commands" deelvenster. Probeer deze knoppen uit.
2. Sluit het Javascript-venster, open het Console-venster, en roep de functie `testA` aan vanuit het console: `testA();`


## Console

Je kunt voor de opdrachten voor de turtle ook het *console* gebruiken. Hier kun je JavaScript-opdrachten geven die direct uitgevoerd worden. Voorbeeld:  `forward(30);` (RETURN) <br> Je moet elke opdracht op het console afsluiten met de return-toets.

Let goed op de notatie: je moet precies de goede naam gebruiken, de juiste haakjes en de juiste leestekens, zoals de puntkomma.

Als je een fout maakt in de notatie, krijg je soms een foutmelding, en soms gebeurt er heel iets anders dan je bedoelt.

Door bijv. `pos.x` of `down` in te voeren in het console kun je de toestand van de turtle opvragen.

---

*Opdrachten:*

1. Open het console-venster. Je kunt dit als rekenmachine gebruiken, voer bijvoorbeeld in: `6 * 7` (gevolgd door de return-toets).
2. Probeer nu een vierkant te tekenen door opdrachten op het console. <br>*Tip:* je kunt ook (een deel van) de log kopiëren naar het console (via Copy/Paste).
3. Vraag de toestand van de turtle op via het console.


## Functies: aanroep

Door middel van een programma kun je de turtle opdrachten uit laten voeren zonder deze steeds zelf in te voeren.

Een *functie* is een stukje programma dat we een naam geven.

Het *gebruik* ofwel de *aanroep* van een functie hebben we eerder gezien. Deze heeft de vorm:

```
functienaam(...parameters...)
```

Enkele voorbeelden:

```js
penDown();
forward(50);
turnRight(50, 90);
```

We kunnen een functie ook koppelen aan een knop (button); een *click*  op die button zorgt dan voor een aanroep van die functie.
      
---

*Opdrachten:*

1. probeer als console-opdracht een aantal voorbeelden van functie-aanroepen, zoals in het voorbeeld;
2. wat gebeurt er als je op het console `penUp` invoert, dus zonder de `()`? <br> Of `forward`?


## Functies: definitie

We gaan nu zelf een functie definiëren. We groeperen een reeks opdrachten met behulp van accolades, en geven deze groep een naam, bijv.:

```js
function square50() {
  forward(50); right(90);
  forward(50); right(90);
  forward(50); right(90);
  forward(50); right(90);
}
```

De groep opdrachten tussen de accolades `{...}` noemen we de *body* van de functie.

Een aanroep van deze functie heeft de vorm: `square50();`

---

*Opdrachten:*

1. Open het JavaScript-venster, en zoek onderaan naar de "user defined functions". Kopieer daar de functie `square50`.
2. Verander onderaan dit venster de body tussen `{...}` van de functie `testC` zo dat deze de functie `square50` aanroept. Test of de button `testC();` nu doet wat je verwacht.
3. Breid de body van `testC` uit zodat deze na het tekenen van het vierkant, de turtle 15 graden naar rechts laat draaien. Test dit met de button.
3. Roep deze functie herhaaldelijk aan door op de knop `testC();` te klikken. Maak eventueel eerst het canvas leeg.

## Voorbeeld: driehoek

Een volgende opdracht is om een driehoek te tekenen - op dezelfde manier als het vierkant.

> ![Figuur van een driehoek](figs/triangle50.png)

Zorg ervoor dat de turtle na het tekenen van de driehoek weer precies in dezelfde positie staat.

---

*Opdrachten*:

1. probeer op dezelfde manier als de functie `square50`, een functie `triangle50` te maken die een driehoek tekent.
2. test deze functie door een aanroep hiervan in de functie `testB` te plaatsen. Controleer dat de turtle weer in dezelfde positie terugkomt - door de button `testB` herhaald in te drukken.
3. verander de functie `testB` zodat na het tekenen van de driehoek, de turtle 15 grander naar rechts draait. Test dit met de button.

## Uitwerking: driehoek

Een mogelijke uitwerking voor de driehoek is:

```js
function triangle50() {
  forward(50); right(120);
  forward(50); right(120);
  forward(50); right(120);
}
```

---

*Opdracht(en):*

1. probeer op eenzelfde manier een 5-hoek te maken.
2. hoe ziet het algemene patroon voor een n-hoek eruit? (Later zullen we daarvoor een functie maken.)

## Opdracht: huisje

Een eenvoudig huisje ziet er als volgt uit:

> ![Figuur van een huisje](figs/house50.png "house50")

---

*Opdrachten*

1. probeer een huisje te tekenen door eerst een driehoek te tekenen, en dan een vierkant (met de buttons die de functies voor de driehoek en het vierkant aanroepen). <br> Gaat dit goed?
2. als je eerste poging geen huisje oplevert, probeer dan uit te vinden welke extra opdrachten je nodig hebt om met je driehoek- en vierkant-functies een huisje te tekenen.
3. definieer een functie voor het tekenen van een huisje. Test deze met behulp van `testA`.

## Tips

* je kunt de vorige opdracht in het console oproepen door het pijltje naar boven.
* gebruik spaties en vormgeving zoals in de voorbeelden, om je programma's leesbaar te houden.