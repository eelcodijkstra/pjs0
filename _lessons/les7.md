---
date: 17-apr-2015
author: EJD
title: Les 7
layout: lesson
---

## Programmeren in JavaScript - Les 7: Strings

Dit is de zevende les in Programmeren in Javascript.
Naast deze tutorials is er een uitleg via XXX.

Ga nu naar de volgende pagina. 

    
## Tekstwaarden (strings)

Een string is een reeks tekens: letters, cijfers, en andere tekens. Een letterlijk stringwaarde in een programmatekst noemen we een *string literal*. Deze schrijf je als een reeks tekens tussen een paar aanhalingstekens (quotes).

Enkele voorbeelden van string literals:
      
```js
var hi = "Hello World";
var par = '<p>$tekst$</p>';
var nr = "1234";
var letterA = "A";
var spatie = ' ';
```

De lengte van de string `str` krijg je via `str.length`.

Zoals je ziet is een enkel teken ook een string, van lengte 1. 
      
---

*Opdrachten:*

1. Voer de bovenstaande opdrachten één voor één uit via het console. Vraag de waarden van  deze variabelen op.
2. Ga na dat het geen verschil uitmaakt of je een paar enkele of dubbele aanhalingstekens gebruikt: wat is het resultaat van <br> `'aap' === "aap"`?
3. Bepaal de lengte van deze strings.


## Concatenatie

De eerste operatie die we gebruiken op strings is concatenatie: het aaneenrijgen van strings. JavaScript gebruikt hiervoor de operator `+`

> De operator `+` heeft in JavaScript dus meerdere betekenissen.

Voorbeelden:

```js
hi + " " + hi 
"-" + nr
'Hello' + spatie + nr
```

*Hint*: je kunt `+` ook gebruiken als je een hele lange string-literal hebt die niet op een regel in het programma past.

---

*Opdrachten:*

1. Reken deze expressies uit via het console.
2. Geef een aantal voorbeelden van concatenatie van strings; gebruik zowel string-variabelen als string-literals.
3. Je kunt meerdere contatenaties in één expressie gebruiken. Hierbij kun je zowel variabelen als string-literals combineren.


## Gebruik van strings: log

Een *log* is een spoor van een proces waarmee we een deel van het proces kunnen reconstrueren. 

We gebruiken hier de log voor *alle* uitgevoerde turtle-opdrachten. Bij een simpel proces kan dit nog. Meestal moet je veel selectiever zijn: computers zijn erg snel, en de log wordt dan veel te groot.

Door een aanroep van de functie `log()` stuur je een stringwaarde naar deze turtle-log. Deze functie hebben we hier voor de turtle gedefinieerd.

*Suggestie*: de turtle-log bestaat uit uitvoerbare Javascript-tekst. Extra uitvoer kun je  als commentaar wegschrijven. Dit begint met `"//"`.

*Hint*: bij  een concatenatie  van een string en een getal (Number), wordt dit getal eerst in een string omgezet: `"Hi" + 123` wordt `"Hi123"`. Later komen we hierop terug.

---

*Opdrachten*

1. Pas de functie `mouseDown` zo aan dat deze een string naar de log schrijft. Test dit door met de muis boven het turtle-canvas te klikken.
2. Zoek het gebruik van de functie `log()` in de JavaScript-code (JavaScript-venster). Ga van twee voorbeelden na hoe je de uitvoer in de log terugziet.
3. In JavaScript is de functie `console.log()` gedefinieerd, met uitvoer naar het console. Probeer deze functie uit.


## De lege string

De string `""` of `''` noemen we *de lege string*. Dit is de enige string met lengte 0.

De lege string is de *nul-waarde* voor concatenatie; voor elke string `str` geldt:

* `str + "" === str`
* `"" + str === str`
      
---

*Opdrachten:*

1. Vraag op het console de lengte op van de lege string.
2. Controleer de bovenstaande vergelijkingen voor een zelf-gekozen waarde voor `str`.



## Positie van tekens in een string

Het eerste (meest linkse) teken van een string heeft positie 0.  Je krijgt het teken op positie `pos` van string `str` door middel van `str[pos]` of door `str.charAt(pos).`

Voorbeelden:

```js
nr = "1234";
nr[0]         // geeft "1"
nr[i * 2 + 1] // geeft "4" als i===1
nr.charAt(f(x))
```

---

*Opdrachten:*

1. Vraag de tekens van `nr` één voor één op.
2. Welk resultaat geeft `nr.charAt(100)`? Kun je hiervoor een logische uitleg geven?
3. Welk resultaat geeft `nr[100]`?


## Zoeken naar een teken of een string

Je krijgt de eerste positie van string `x` in string `str` via `str.indexOf(x)`. Als `x` niet voorkomt in `str` is het resultaat `-1`.

Voorbeelden:

```js
nr.indexOf("43") // geeft -1
nr.indexOf("34") // geeft 2
```

---

*Opdrachten:*

1. Geef een aantal voorbeelden van het gebruik van `indexOf`.
2. (*) Je kunt de functie `indexOf` gebruiken met een extra parameter. Zoek dit op, en geef een voorbeeld.
3. (*) Zoek op wat de functie `str.lastIndexOf(x)` doet, en geef een voorbeeld. 


## Bijzondere tekens

Je kunt in een string ook speciale tekens opnemen, zoals een overgang naar een nieuwe regel. Hiervoor gebruik je een combinatie van het *escape-teken* `\ ` en een letter of ander teken. Enkele voorbeelden:

* `"\n"` - newline, overgang op een nieuwe regel
* `"\\"` - het teken `\ ` zelf
* `"\""` - het teken `"`
* `"\'"` - het teken `'`


Voorbeelden: 

```js
str1 = "Voor een string " + 
    "gebruik je \" of \' "
str2 = "Hello\nWorld";
```


## Zoeken naar een substring

`indexOf` O.a.

* vervangen van een substring

## Vergelijken van strings

Je kunt nagaan of twee strings gelijk zijn (`str === 'Hello'`). Je kunt ook nagaan of een string kleiner is dan een andere string: `strX < strY`. Dit kun je  gebruiken voor het alfabetisch sorteren van string-waarden.

De sorteervolgorde van string, ook wel "Collating sequence" genoemd, hangt af van de gebruikte taal. Als je hiermee rekening wilt houden, kun je gebruik maken van `str.localCompare`.



## Strings en getallen (1)

We moeten soms een getalwaarde (Number) omzetten in een String, of omgekeerd.

* `parseInt(str, 10)` zet een String-waarde `str` om in een Number. De tweede parameter (10) geeft het grondtal aan: 10, voor een decimale representatie.
* `num.toString()` zet een Number-waarde om in een String.
* `num.toFixed(dec)` zet  een Number-waarde om in een String in "fixed point" notatie - `dec` is het aantal cijfers na de decimale punt.

---

*Opdrachten*

1. Zoek in de JavaScript-code naar plaatsen waar `parseInt` gebruikt wordt. Welke stringwaarden worden daar omgezet in getallen? <br>
(Je hoeft niet alle code te begrijpen - probeer vooral na te gaan waar de stringwaarde vandaan komt, en wat er met de getalwaarde verder gebeurt.)

## Strings en getallen (2)

Als een getal (Number) gebruikt wordt op een plek waar een String verwacht wordt, wordt dit getal automatisch omgezet in een String.

Dit is het geval bij concatenatie: <br> `"Hallo" + 23` resulteert in `"Hallo23"`.

Omdat `+` zowel optelling van getallen kan betekenen als concatenatie van strings, moet je oppassen met het combineren van getallen en strings.

| Expressie &nbsp; &nbsp; &nbsp; &nbsp; | Resultaat |
| :---          |  ---:     |
| `123 + 4`     | `127`     |
| `4 + 123`     | `127`     |
| `"123" + "4"` | `"1234"`  |
| `"123" + 4`   | `"1234"`  |
| `4 + "123"`   | `"4123"`  |

---

*Opdrachten (via het console)*

1. Probeer bovenstaande voorbeelden uit.
2. Wat is het resultaat van: <br> `"" + 123 + 4` ?
3. Wat is het resultaat van: <br> `123 + 4 + ""` ?


## Conversie naar string

Strings vormen een handige vorm voor communicatie: voor invoer en uitvoer van een waarde, naar het scherm of naar een andere computer; of voor het opslaan en terughalen van een waarde.

Hiervoor moet je een waarde kunnen omzetten in een string, of omgekeerd.

Je kunt een getal of een logische waarde omzetten in een string, met de functie `toString:`
      
```js
  var num = 1234;
  console.log("num: " + num.toString());
  var valid = false;
  console.log("valid: " + valid.toString());
```

Opmerking: je kunt niet zomaar schrijven: `1234.toString()` Je moet de betreffende waarde altijd een naam geven - als variabele of als parameter.
      
---

*Opdrachten:*

1. Voer de bovenstaande opdrachten één voor één uit op het console.
2. Wat gebeurt er als je `toString()` gebruikt voor andere waarden, bijvoorbeeld voor een functie, voor een string, voor een object als `pos`?
3. Waarom zou je niet kunnen schrijven: `123.toString()`?


## Nog heel veel andere operaties...

* reguliere expressies
* 