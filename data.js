const kwalificatieDossier = {
  dossierNaam: "Hospitality & Keuken Foodservice",
  creboNummers: "23425 / 23426", // Dossier Crebo's[cite: 1, 5]
  
  // Alle beschikbare uitstroomprofielen uit de geüploade documenten
  profielen: [
    {
      id: "medewerker_hospitality",
      naam: "Medewerker hospitality",
      niveau: "Mbo-niveau 2 (Basisberoepsopleiding)", //[cite: 1]
      crebo: "27052", //[cite: 1]
      typering: "De medewerker hospitality vervult een uitvoerende rol bij een bedrijf gericht op eten, drinken en slapen. Is het aanspreekpunt voor gasten en zorgt voor een uitstekende gastervaring.", //[cite: 1]
      kerntaken: ["B1-K1", "B1-K2", "P1-K1"] // Koppeling naar specifieke kerntaken[cite: 1]
    },
    {
      id: "zelfstandig_medewerker_hospitality",
      naam: "Zelfstandig medewerker hospitality",
      niveau: "Mbo-niveau 3 (Vakopleiding)", //[cite: 2]
      crebo: "27053", //[cite: 2]
      typering: "Combineert gestandaardiseerde werkwijzen met werken naar eigen inzicht. Heeft brede productkennis, stimuleert bij-verkoop en heeft coördinerende taken ten aanzien van niveau 2 medewerkers.", //[cite: 2]
      kerntaken: ["B1-K1", "B1-K2", "P2-K1", "P2-K2"] //[cite: 2]
    },
    {
      id: "leidinggevende_hospitality",
      naam: "Leidinggevende hospitality",
      niveau: "Mbo-niveau 4 (Middenkaderopleiding)", //[cite: 3]
      crebo: "27056", //[cite: 3]
      typering: "Verantwoordelijk voor de dagelijkse operatie, bedrijfsvoering en het behalen van doelen. Vertaalt beleid (HR, financieel, kwaliteit) naar de werkvloer en stuurt medewerkers aan. Heeft wettelijke verplichting inzake Sociale Hygiëne.", //[cite: 3]
      kerntaken: ["B1-K1", "B1-K2", "P5-K1", "P5-K2", "P5-K3"] //[cite: 3]
    },
    {
      id: "ondernemer_hospitality",
      naam: "Ondernemer hospitality",
      niveau: "Mbo-niveau 4 (Middenkaderopleiding)", //[cite: 4]
      crebo: "27059", //[cite: 4]
      typering: "Start en leidt een hospitality-onderneming. Focus ligt op de lange termijn: businessplan schrijven, HR-plan, financieel plan en kwaliteitsbeleid maken en bewaken. Werkt deels mee in de operatie.", //[cite: 4]
      kerntaken: ["B1-K1", "B1-K2", "P8-K1", "P8-K2", "P8-K3"] //[cite: 4]
    },
    {
      id: "kok",
      naam: "Kok",
      niveau: "Mbo-niveau 2 (Basisberoepsopleiding)", //[cite: 5]
      crebo: "27060", //[cite: 5]
      typering: "Heeft een uitvoerende rol in een (open) gastronomische keuken. Richt zich op de basis-voedselbereiding, hygiëne (HACCP) en mise en place onder supervisie van een leidinggevende.", //[cite: 5]
      kerntaken: ["B1-K1_K", "B1-K2_K", "B1-K3_K"] //[cite: 5]
    },
    {
      id: "zelfstandig_werkend_kok",
      naam: "Zelfstandig werkend kok",
      niveau: "Mbo-niveau 3 (Vakopleiding)", //[cite: 6]
      crebo: "27062", //[cite: 6]
      typering: "Werkt zelfstandig in de keuken. Richt zich op hoogwaardige culinaire gerechten, plannen/verdelen van werk, instrueren van medewerkers en het vernieuwen en verbeteren van gerechten.", //[cite: 6]
      kerntaken: ["B1-K1_K", "B1-K2_K", "B1-K3_K", "P3-K1"] //[cite: 6]
    },
    {
      id: "gespecialiseerd_kok",
      naam: "Gspecialiseerd kok",
      niveau: "Mbo-niveau 4 (Middenkaderopleiding)", //[cite: 7]
      crebo: "27064", //[cite: 7]
      typering: "Werkt in het midden- en hogere segment. Richt zich op de bereiding van bijzondere, creatieve en luxe gerechten. Stuurt parties aan en optimaliseert/evalueert het gastronomisch aanbod.", //[cite: 7]
      kerntaken: ["B1-K1_K", "B1-K2_K", "B1-K3_K", "P5-K1_K", "P5-K2_K"] //[cite: 7]
    },
    {
      id: "leidinggevende_keuken",
      naam: "Leidinggevende keuken",
      niveau: "Mbo-niveau 4 (Middenkaderopleiding)", //[cite: 8]
      crebo: "27065", //[cite: 8]
      typering: "Eindverantwoordelijk voor de keukenuitvoering, het keukenproces en de sfeer. Maakt operationele plannen, begroot/bewaakt keukenfinanciën en voert menu-engineering uit.", //[cite: 8]
      kerntaken: ["B1-K1_K", "B1-K2_K", "B1-K3_K", "P6-K1", "P6-K2"] //[cite: 8]
    }
  ],

  // De daadwerkelijke kerntaken en werkprocessen gecodeerd volgens dossier-eisen
  kerntakenDatabase: {
    // --- HOOFDGROEP: HOSPITALITY (CREBO 23425) ---
    "B1-K1": {
      code: "B1-K1",
      titel: "Verleent gastvrijheid (HTL Basis)", //[cite: 1]
      type: "Basisdeel Hospitality", //[cite: 1]
      complexiteit: "Wensen van de gast staan centraal. Diversiteit is groot, veel schakelen. Wisselende werktijden vereisen flexibiliteit. Risico op imagoschade bij negatieve ervaringen. Beheersing Engels noodzakelijk.", //[cite: 1]
      verantwoordelijkheid: "Verantwoordelijk voor de kwaliteit en het zelfstandig en veilig uitvoeren van de eigen werkzaamheden. Niveau 2 legt direct verantwoording af; Niveau 3/4 dragen (gedeelde) operationele verantwoordelijkheid.", //[cite: 1, 2, 3]
      werkprocessen: [
        {
          code: "B1-K1-W1",
          titel: "Bereidt gastgerichte werkzaamheden voor", //[cite: 1]
          omschrijving: "Verdiept zich in de bedrijfsformule, het concept, de guest journey en openstaande acties. Verzamelt materialen en maakt de werkplek startklaar.", //[cite: 1]
          resultaat: "De werkzaamheden zijn afgestemd, gepland en organisatorisch/praktisch voorbereid conform de formule.", //[cite: 1]
          gedrag: ["Verzamelt actief informatie over het bedrijf en gasten.", "Plant werkzaamheden in logische volgorde.", "Ziet er representatief uit.", "Werkt accuraat, snel en netjes."], //[cite: 1]
          competenties: ["Samenwerken", "Plannen & Organiseren", "Procedures opvolgen"] //[cite: 1]
        },
        {
          code: "B1-K1-W2",
          titel: "Draagt bij aan een gastgerichte beleving", //[cite: 1]
          omschrijving: "Observeert gasten, achterhaalt specifieke behoeften, creëert sfeer en handelt complimenten of klachten af. Checkt proactief de tevredenheid.", //[cite: 1]
          resultaat: "Optimale gastbeleving gerealiseerd. Niveau 2 meldt klachten direct; hogere niveaus nemen deze zelfstandig in behandeling.", //[cite: 1, 3]
          gedrag: ["Toont oprechte interesse en luistert aandachtig.", "Is vriendelijk en beleefd.", "Checkt continu en proactief de klanttevredenheid.", "Reageert adequaat op verbale en non-verbale signalen."], //[cite: 1]
          competenties: ["Aandacht & Begrip tonen", "Klantgerichtheid", "Aanpassingsvermogen"] //[cite: 1]
        }
      ]
    },
    "P1-K1": {
      code: "P1-K1",
      titel: "Bedient gasten (Medewerker)", //[cite: 1]
      type: "Profieldeel Medewerker Hospitality (Niveau 2)", //[cite: 1]
      complexiteit: "Werkt volgens standaardwerkwijze en basiskennis (HACCP, allergenen). Moet alert reageren tijdens piekuren en bij internationale gasten.", //
      verantwoordelijkheid: "Uitvoerende rol. Verantwoordelijk voor eigen werk en het signaleren van normafwijkend gedrag op basis van huisregels.", //
      werkprocessen: [
        {
          code: "P1-K1-W1",
          titel: "Neemt bestellingen op en informeert", //
          omschrijving: "Neemt bestellingen op, noteert dieetwensen en geeft informatie over de dranken, gerechten, opbouw en bereidingswijze ervan.", //
          resultaat: "Gasten zijn geïnformeerd en bestellingen zijn conform de bedrijfsrichtlijnen vastgelegd.", //
          gedrag: ["Presenteert het aanbod op adequate wijze.", "Luistert nauwkeurig.", "Stelt gerichte vragen om wensen vast te stellen."], //
          competenties: ["Presenteren", "Formuleren & Rapporteren"] //
        }
      ]
    },
    "P2-K2": {
      code: "P2-K2",
      titel: "Coördineert hospitality werkzaamheden", //
      type: "Profieldeel Zelfstandig Medewerker (Niveau 3)", //
      complexiteit: "Organiseert capaciteit (mensen) en middelen op de vloer. Moet flexibel inspelen op wisselende piekmomenten en de teamsfeer bewaken.", //
      verantwoordelijkheid: "Verdeelt dagelijkse werkzaamheden, draagt gedeelde verantwoordelijkheid voor teamresultaat en lost werkvloerproblemen zelfstandig op.", //
      werkprocessen: [
        {
          code: "P2-K2-W1",
          titel: "Plant werkzaamheden, instrueert en begeleidt medewerkers", //
          omschrijving: "Maakt de dagplanning, delegeert taken op basis van capaciteiten en geeft medewerkers constructieve feedback over hun handelen.", //
          resultaat: "Dienst is efficiënt georganiseerd en medewerkers zijn effectief geïnstrueerd en gemotiveerd.", //
          gedrag: ["Zorgt voor een evenwichtige werkbelasting.", "Spreekt teamleden direct aan op onveilig gedrag.", "Motiveert op inspirerende wijze."], //
          competenties: ["Aansturen", "Begeleiden", "Vakdeskundigheid toepassen"] //
        }
      ]
    },

    // --- HOOFDGROEP: KEUKEN (CREBO 23426) ---
    "B1-K1_K": {
      code: "B1-K1",
      titel: "Bereidt (componenten van) gerechten", //[cite: 5]
      type: "Basisdeel Keuken (Alle niveaus)", //[cite: 5]
      complexiteit: "Hoge fysieke werkdruk en piekbelasting. Strikt handhaven van wetgeving rondom hygiëne (HACCP), voedselveiligheid en arbo.", //[cite: 7, 8]
      verantwoordelijkheid: "Kok (Niveau 2) werkt onder supervisie[cite: 8]; Zelfstandig werkend/Gespecialiseerd kok en Leidinggevende (Niveau 3/4) werken zelfstandig naar eigen inzicht en dragen partie- of eindverantwoordelijkheid[cite: 6, 7, 8].",
      vakkennis: [
        "Kennis van recepturen en allergenen", //[cite: 8]
        "Kennis van bereidings-, kook- en afwerktechnieken", //[cite: 8]
        "Wettelijke richtlijnen (HACCP, Hygiënecode, Veiligheid)" //[cite: 8]
      ],
      werkprocessen: [
        {
          code: "B1-K1-W1",
          titel: "Maakt mise en place", //[cite: 5]
          omschrijving: "Volgt de planning, verzamelt ingrediënten en hulpmiddelen, controleert kwaliteit en bewerkt grondstoffen voor (schoonmaken, opdelen, wegen).", //[cite: 8]
          resultaat: "Alle benodigde ingrediënten en materialen staan tijdig gebruiksklaar voor het operationele bereidingsproces.", //
          gedrag: ["Beoordeelt ingrediënten kritisch op versheid.", "Werkt ordelijk, hygiënisch en strak volgens planning.", "Minimaliseert derving en verspilling."], //[cite: 9]
          competenties: ["Vakdeskundigheid", "Materiaalbeheer", "Milieubewust handelen"] //[cite: 9]
        },
        {
          code: "B1-K1-W3",
          titel: "Bereidt (componenten van) gerechten", //[cite: 5]
          omschrijving: "Past kook- en bereidingstechnieken toe volgens receptuur. Bewaakt smaak, kleur, structuur en consistentie continu.", //
          resultaat: "Gerechten of componenten zijn kwalitatief correct bereid en afwijkingen zijn direct gecorrigeerd of gemeld.", //
          gedrag: ["Past technieken snel, precies en accuraat toe.", "Gebruikt apparatuur strikt volgens veiligheidsvoorschriften.", "Werkt ergonomisch om fysieke overbelasting te voorkomen."], //
          competenties: ["Vaktechniek", "Samenwerken", "Kwaliteitsbewaking"] //
        }
      ]
    },
    "P3-K1": {
      code: "P3-K1",
      titel: "Coördineert en optimaliseert keukenwerkzaamheden", //[cite: 6]
      type: "Profieldeel Zelfstandig Werkend Kok (Niveau 3)", //[cite: 6]
      complexiteit: "Combinatie van operationele topdrukte en coördinerende/begeleidende taken. Creativiteit is vereist voor receptvernieuwing.", //
      verantwoordelijkheid: "Verantwoordelijk voor de resultaten en kwaliteit binnen de eigen keukenafdeling; begeleidt lerende medewerkers.", //
      werkprocessen: [
        {
          code: "P3-K1-W3",
          titel: "Vernieuwt en verbetert (componenten van) gerechten", //[cite: 6]
          omschrijving: "Draagt creatieve ideeën aan voor de menukaart. Combineert smaakprofielen, houdt rekening met trends, test recepten uit en legt ze vast.", //
          resultaat: "Recepturen zijn succesvol vernieuwd, proefgekookt en correct gedocumenteerd in het receptensysteem.", //
          gedrag: ["Toont culinaire vindingrijkheid en innovatiekracht.", "Berekent portiegrootte en kostprijs nauwkeurig.", "Bewaakt de gestelde kwaliteitsstandaard."], //
          competenties: ["Creëren & Innoveren", "Bedrijfsmatig handelen"] //
        }
      ]
    }
  }
};
