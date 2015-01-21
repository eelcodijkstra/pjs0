---
date: 21-jan-2015
author: EJD
title: Les 7
layout: lesson
---

## Programmeren in JavaScript - Les 7

Dit is de zevende les in Programmeren in Javascript.
Naast deze tutorials is er een uitleg via XXX.

Ga nu naar de volgende pagina. 

    
## Tekstwaarden (strings)
Een string is een reeks tekens. Een stringwaarde in een programmatekst noemen we een string literal. Enkele voorbeelden van string literals - hier toegekend aan variabelen:
      
```js
var aap = 'aap';
var hi = 'Hello World';
var par = '<p>$tekst$</p>';
var nr = '1234';
var spatie = ' ';
```

Zoals je ziet is een enkel teken ook een string - van lengte 1. De lengte van de string `str` krijg je via `str.length`.
      
---

*Opdrachten:*

Voer onderstaande opdrachten uit via het console. Kopieer deze variabele-declaratiesnaar het JS-venster.

1. Ga na dat het geen verschil uitmaakt of je enkele of dubbele aanhalingstekens gebruikt: wat is het resultaat van <br> `'aap' === "aap"`?
2. Bepaal de lengte van deze strings.


## Concatenatie

De eerste operatie die we gebruiken op strings is concatenatie: het aaneenrijgen van strings. JavaScript gebruikt hiervoor de operator `+`

---

*Opdrachten:*

1. Geef een aantal voorbeelden van concatenatie van strings; gebruik zowel string-variabelen als string-literals.
2. Je kunt meerdere contatenaties in één expressie gebruiken. Hierbij kun je zowel
variabelen als string literals combineren.

## De lege string

De string `""` of `''` noemen we *de lege string*. Dit is de enige string met lengte 0.

De lege string is de *nul-waarde* voor concatenatie; voor elke string `str` geldt:

* `str + "" === str`
* `"" + str === str`
      
---

*Opdrachten:*

1. aa
2. bb


## Positie van tekens

Het eerste (meest linkse) teken van een string heeft positie 0.  Je krijgt het teken op positie `pos` van string `str` door middel van `str.charAt(pos).`

Je krijgt de eerste (meest linkse) positie van string (of teken) `x` in string `str` via `str.indexOf(x)`.
      
---

*Opdrachten:*

1. Geef een aantal voorbeelden van het gebruik van `charAt`.
2. Welk resultaat geeft `charAt` voor een index (positie) die buiten de string ligt, links of rechts? Kun je hiervoor een logische uitleg geven?
3. Geef een aantal voorbeelden van het gebruik van `indexOf`.
4. (*) Je kunt de functie `indexOf` gebruiken met een extra parameter. Zoek dit op, en geef een voorbeeld.

    
## Conversie naar string

Strings vormen een handige en universele representatie als je een waarde moet communiceren: als een waarde in de invoer of uitvoer gebruikt wordt, als deze naar een andere computer verstuurd moet worden, of als deze opgeslagen moet worden.

Dit betekent dat je het omzetten van een waarde in een string, en omgekeerd, vaak in een programma tegenkomt.

Je kunt een getal of een logische waarde omzetten in een string, met de functie `toString:`
      
```js
  var num = 1234;
  console.log("num: " + num.toString());
  var valid = false;
  console.log("valid: " + valid.toString());
```

Opmerking: je kunt niet zomaar schrijven: `1234.toString()` (Waarom niet?) Je moet de betreffende waarde altijd een naam geven - als variabele of als parameter.
      
---

*Opdrachten:*

1. Kopieer bovenstaande tekst naar het JS console
2. Wat gebeurt er als je `toString()` gebruikt voor andere waarden, bijvoorbeeld voor een functie, voor een string, voor een ????
3.
    