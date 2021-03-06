## Aantekeningen bij pjs0

### Gebruik van Thimble tutorial-formaat

Probleem: het Thimble-formaat veronderstelt "sections" voor de indeling van de opdrachten van de lessen. Vanuit Markdown is dat niet zonder meer mogelijk.

Het Thimble-script is niet zo ingewikkeld. Waarschijnlijk is het eenvoudiger om dit aan te passen, dan om een aanpassing elders te doen. Dit heeft bovendien als voordeel dat we een externe afhankelijkheid minder hebben.

Een mogelijke oplossing is om elke "h2" (in Markdown: `##`) om te vormen tot een sectie.
(De sectie loopt dan van voor de h2 tot aan de volgende h2, of tot aan het eind. Dat is even uitzoeken hoe we dat bijv. via jQuery kunnen vormgeven.)

Het zou gemakkelijk(er) kunnen als we elementen met een class-indicatie kunnen genereren vanuit Markdown. Maar ik weet niet hoe dat moet - volgens mij is dat geen onderdeel van de Markdown-spec.

Voorlopige oplossing:

```js
$("h2").each(function() {$(this).add($(this).nextUntil("h2")).wrapAll("<section />")});

```

(Vlak voor de aanroep:  `$('body').tutorial({smartlines: false});` )

### Opmaak van code

Voor het opmaken van code gebruiken we de oplossing van *progblog*.

### JSLint/JSHint

JSBin maakt gewoonlijk gebruik van JSLint of JSHint - je krijgt nette foutmeldingen als er iets mis is. Maar kennelijk werkt dit niet meer op het moment dat JSBin in een iframe geplaatst is. Erg jammer...

Heeft dit te maken met de jsbin-omgeving in een iframe? Hoe kun je die "sturen"? Kan dat van buiten?

Zie de issues op GitHUb: de uitbreidingen voor de editor worden alleen geactiveerd voor de niet-embedded versie. We kunnen dit dus niet realiseren door ergens een variable een andere waarde te geven...

## Bij les 2

* een functie zonder parameters kun je aan een knop koppelen.
* voor een functie met parameters heb je daarbij een invoerveld nodig.
    * moeten we ook een testknop maken met een invoerveld?
    * en, misschien met twee invoervelden?
    
### Principes

Enkele principes bij het ontwikkelen van deze module:

* kleine stappen: we voeren de begrippen zoveel mogelijk stap voor stap in;
* bij elk begrip geven we voorbeelden van het gebruik
* bij elk begrip proberen we aan te geven hoe je hiermee een *probleem* kunt oplossen
    * welke rol speelt dit begrip bij het oplossen van problemen?
    * waar moet je om denken als je deze constructie gebruikt?
* de opdrachten zijn bedoeld om direct te oefenen in het gebruik van het begrip
    * eerst: variaties op gegeven voorbeelden
    * dan: oplossen van een "nieuw" probleem met dit begrip.
* bij de opdrachten herhalen we de onderwerpen uit de vorige lessen.
    * (NB: als we dit goed willen doen, moeten we ook opdrachten hebben die je met de begrippen uit de vorige lessen moet oplossen. Je leert dan ook te analyseren welke begrippen je nodig hebt: dat hoeft niet beslist het begrip van deze les te zijn.
    * we kunnen hiervoor "gemengde opdrachten" invoeren.
* gebruik voor definitie
* concreet voor abstract

### Begrijpen, parate kennis en opzoeken

Bij het programmeren moet je in de eerste plaats begrijpen hoe de programmeertaal werkt, en hoe je deze gebruikt voor het construeren van programma's en voor het oplossen van problemen. In de tweede plaats moet je een deel van de programmeertaal als parate kennis hebben: niet alleen omdat het teveel tijd kost om steeds bepaalde dingen op te zoeken, maar ook omdat je bij het lezen van een programma anders over dingen heen kunt lezen. In de derde plaats moet je andere dingen kunnen opzoeken. Dit geldt in het bijzonder voor bibliotheekfuncties.

#### Wat moet je paraat hebben?

* de veel voorkomende constructies, reserved words, en operatoren. 

Als je een naam tegenkomt die je niet kent, dan weet je dat je deze moet opzoeken. Als je een naam of teken (operator) tegenkomt waarvan je denkt dat je deze kent, zul je niet de neiging hebben om deze op te zoeken. (Denk bijvoorbeeld aan een +-teken.) Dit betekent dat je alle subtiele eigenschappen van die veel voorkomende constructies moet kennen.

Voorbeeld: strings

* je moet weten dat `+` voor string-concatenatie staat, en dat hierbij een type-conversie (verandering van waarde) kan plaatsvinden. 
* je moet weten dat er allerlei functies zijn voor het zoeken in strings, splitsen e.d. Deze kun je opzoeken als je er behoefte aan hebt.
** Als je in een programma een functie als `str.split` tegenkomt, dan kun je de betekenis daarvan opzoeken;
** Als je behoefte hebt aan een bepaalde functionaliteit voor strings, dan kijk je eerst in de lijst van standaard-operaties op strings.

#### Wat kun je opzoeken


### Opmerkingen bij Turtle-opdrachten

Voor de turtle hebben we enkele keuzes gemaakt die afwijken van wat elders gebruikelijk is:

* de opdracht `turnRight` (of `circleRight`?) werkt anders dan de `circle` opdracht in Python-turtle:
    * `circleRight(r, -90)` geeft een draai naar links (in Python geef je dit aan met een negatieve straal: `t.circle(-r, 90)`. 
    * een gevolg van deze aanpak is dat de hoeken van `right` en `circleRight` bij elkaar opgeteld kunnen worden, om te bepalen wat de totale rotatie van de turtle is.
    
## Opmerkingen bij de vormgeving (tutorial frame)

* de margin aan de onderkant is 60px groot; dit kan beter 20px zijn. De marge aan de bovenkant is 60 px vanwegen het navigatie-deel.

## Issues

* hoe kun je als gebruiker de JSBin code resetten? (Als je op een of andere manier deze verziekt hebt.)
    * een simpele browser-refresh lijkt niet te werken, door de caching die gebruikt wordt.
    * gebruik van reload etc. werkt niet; of je hebt geen toegang tot een iframe-inhoud van een ander domein (cross domain); of een refresh (bijv. `iframe.src = iframe.src;`) gebruikt een cache-versie;
    * openen van de oorspronkelijke pagina in een nieuw venster (werkt onder Chrome; controleren bij andere browsers.)
    