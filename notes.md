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

###
