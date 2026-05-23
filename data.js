const kwalificatieDossier = {
  dossierNaam: "Hospitality & Keuken Foodservice",
  creboNummers: "23425 / 23426",
  profielen: [
    {
      id: "medewerker_hospitality",
      naam: "Medewerker hospitality",
      niveau: "Mbo-niveau 2",
      crebo: "27052",
      typering: "De medewerker hospitality is werkzaam bij een bedrijf gericht op eten, drinken en slapen waarin de dienstverlening centraal staat. De taken zijn uitvoerend.",
      kerntaken: ["B1-K1", "P1-K1"]
    },
    {
      id: "zelfstandig_medewerker_hospitality",
      naam: "Zelfstandig medewerker hospitality",
      niveau: "Mbo-niveau 3",
      crebo: "27053",
      typering: "De zelfstandig medewerker hospitality combineert gestandaardiseerde werkwijzen met het werken naar eigen inzicht en draagt gedeelde verantwoordelijkheid.",
      kerntaken: ["B1-K1", "P2-K2"]
    },
    {
      id: "kok",
      naam: "Kok",
      niveau: "Mbo-niveau 2",
      crebo: "27060",
      typering: "De kok werkt in een keuken van horecabedrijven gericht op hoogwaardige maaltijden en gastronomie. Heeft een uitvoerende rol en volgt instructies op.",
      kerntaken: ["B1-K1_K"]
    },
    {
      id: "zelfstandig_werkend_kok",
      naam: "Zelfstandig werkend kok",
      niveau: "Mbo-niveau 3",
      crebo: "27062",
      typering: "De zelfstandig werkend kok werkt zelfstandig en voert naast uitvoerende ook coördinerende en optimaliserende werkzaamheden uit.",
      kerntaken: ["B1-K1_K", "P3-K1"]
    }
  ],
  kerntakenDatabase: {
    "B1-K1": {
      code: "B1-K1",
      titel: "Verleent gastvrijheid",
      type: "Basisdeel Hospitality",
      complexiteit: "De complexiteit wordt bepaald door de wens van de gast; deze staat centraal. Grote diversiteit en veel schakelen.",
      verantwoordelijkheid: "Verantwoordelijk voor de kwaliteit en het zelfstandig en veilig uitvoeren van de eigen werkzaamheden.",
      vakkennis: ["Basiskennis van processen, procedures en richtlijnen", "Basiskennis van het verloop van de guest journey", "Basiskennis van sociale hygiëne"],
      werkprocessen: [
        {
          code: "B1-K1-W1",
          titel: "Bereidt gastgerichte werkzaamheden voor",
          omschrijving: "Verdiept zich in de bedrijfsformule en het gastvrijheidsconcept. Plant de eigen werkzaamheden en maakt de werkplek klaar.",
          resultaat: "De werkzaamheden zijn afgestemd, gepland en organisatorisch en praktisch voorbereid.",
          gedrag: ["Verzamelt actief informatie over het bedrijf.", "Plant de werkzaamheden in een logische volgorde.", "Ziet er representatief uit."],
          competenties: ["Samenwerken en overleggen", "Plannen en organiseren"]
        },
        {
          code: "B1-K1-W2",
          titel: "Draagt bij aan een gastgerichte beleving",
          omschrijving: "Observeert de gast(en) en achterhaalt specifieke wensen. Creëert sfeer en neemt complimenten en klachten in ontvangst.",
          resultaat: "Er is een bijdrage aan een optimale beleving geleverd, afgestemd op de gast en in lijn met de formule.",
          gedrag: ["Toont oprechte interesse in gasten.", "Is vriendelijk en beleefd.", "Checkt continu en proactief de klanttevredenheid."],
          competenties: ["Aandacht en begrip tonen", "Op de behoeften van de klant richten"]
        }
      ]
    },
    "P1-K1": {
      code: "P1-K1",
      titel: "Bedient gasten",
      type: "Profieldeel Medewerker Hospitality",
      complexiteit: "Werkt over het algemeen volgens de standaardwerkwijze en beschikt hiervoor over basiskennis.",
      verantwoordelijkheid: "Vervult een uitvoerende rol en is verantwoordelijk voor diens eigen werk.",
      vakkennis: ["Basiskennis over allergenen", "Basiskennis over HACCP", "Regels voor etiquette"],
      werkprocessen: [
        {
          code: "P1-K1-W1",
          titel: "Neemt bestellingen op en informeert",
          omschrijving: "Neemt bestellingen op, informeert bij de gast naar speciale wensen en legt deze vast.",
          resultaat: "Gasten zijn geïnformeerd over het bedrijfsconcept, dranken en gerechten. Bestellingen zijn opgenomen.",
          gedrag: ["Presenteert het aanbod op adequate wijze.", "Luistert nauwkeurig.", "Noteert de bestelling volgens de bedrijfsrichtlijnen."],
          competenties: ["Presenteren", "Formuleren en rapporteren"]
        }
      ]
    },
    "B1-K1_K": {
      code: "B1-K1",
      titel: "Bereidt (componenten van) gerechten",
      type: "Basisdeel Keuken",
      complexiteit: "De diversiteit aan werkzaamheden die soms naast elkaar en tegelijkertijd worden uitgevoerd kunnen het werk complex maken.",
      verantwoordelijkheid: "Verantwoordelijk voor de kwaliteit en het zelfstandig en veilig uitvoeren van het eigen werk.",
      vakkennis: ["Basiskennis van recepturen", "Basiskennis van allergenen", "Basiskennis van bereidings- en kooktechnieken"],
      werkprocessen: [
        {
          code: "B1-K1-W1",
          titel: "Maakt mise en place",
          omschrijving: "Volgt de planning, verzamelt ingrediënten, producten en hulpmiddelen en controleert deze op kwaliteit.",
          resultaat: "Benodigde ingrediënten, producten en hulpmiddelen zijn gebruiksklaar voor het bereidingsproces.",
          gedrag: ["Beoordeelt de kwaliteit en bruikbaarheid van ingrediënten.", "Werkt ordelijk en netjes.", "Houdt zich aan de opgestelde planning."],
          competenties: ["Vakdeskundigheid toepassen", "Materialen en middelen inzetten"]
        }
      ]
    },
    "P3-K1": {
      code: "P3-K1",
      titel: "Coördineert en optimaliseert keukenwerkzaamheden",
      type: "Profieldeel Zelfstandig Werkend Kok",
      complexiteit: "Voert naast routinematige werkzaamheden ook meer complexe en specifieke werkzaamheden uit.",
      verantwoordelijkheid: "Werkt zelfstandig, heeft een uitvoerende en coördinerende rol en is verantwoordelijk voor de verrichte werkzaamheden.",
      vakkennis: ["Kennis van voedselveiligheid", "Kennis van planningsmethoden", "Kennis van smaakkenmerken"],
      werkprocessen: [
        {
          code: "P3-K1-W3",
          titel: "Vernieuwt en verbetert (componenten van) gerechten",
          omschrijving: "Draagt ideeën en suggesties voor vernieuwing of verbetering van bestaande gerechten aan bij de leidinggevende.",
          resultaat: "Gerechten zijn vernieuwed of verbeterd, recepten zijn beschreven en vastgelegd.",
          gedrag: ["Komt met creatieve ideeën bij het ontwikkelen.", "Controleert nauwkeurig of het gerecht voldoet aan kwaliteitseisen.", "Legt vernieuwde recepturen vast."],
          competenties: ["Creëren en innoveren", "Kwaliteit leveren"]
        }
      ]
    }
  }
};
