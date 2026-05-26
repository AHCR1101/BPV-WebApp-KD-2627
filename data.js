/**
 * Albeda Horecacollege - Kwalificatie Portaal Database (Volledig Sluitend)
 * Huisstijl: Blauw (#0a62af), Lichtblauw (#85c9f0), Oranje (#f29400)
 * Gecorrigeerd conform Albeda Schrijfwijzer interpunctie (p.16-17)
 */

const kwalificatieDossierDatabase = {
  domeinen: [
    {
      id: "htl",
      titel: "Hospitality, Tourism & Leisure",
      crebo: "23425",
      profielen: [
        { 
          id: "medewerker_hospitality", 
          naam: "Medewerker hospitality", 
          niveau: "Mbo-niveau 2", 
          crebo: "27052", 
          pdfLink: "Medewerker hospitality_25.pdf",
          typering: "De medewerker hospitality vervult een uitvoerende rol en is verantwoordelijk voor diens eigen werk. In alle gevallen is de medewerker hospitality aanspreekpunt van gasten en zorgt deze voor een uitstekende gastervaring.",
          context: "De beginnend beroepsbeoefenaar werkt in de gastvrijheidsbranche bij bedrijven gericht op dag- of verblijfsrecreatie, toeristische informatie en verkoop, of op hospitality. De wens en beleving van de gast staan centraal.",
          houding: "Heeft een open, proactieve en servicegerichte houding. Stelt zich representatief, resultaat-, kwaliteit- en servicegericht op. Is flexibel, sociaal en communicatief zeer vaardig, heeft oog voor duurzaamheid en kan goed samenwerken.",
          resultaat: "Een optimale ervaring van (terugkerende) gasten, aantrekkelijke eindproducten en -diensten en een positief commercieel resultaat voor de organisatie.",
          complexiteit: "De complexiteit wordt bepaald door de wens van de gast; deze staat centraal. Voert standaard werkzaamheden uit, waarbij de diversiteit van de werkzaamheden groot is, wat betekent dat de beroepsbeoefenaar veel moet schakelen.",
          verantwoordelijkheid: "De beginnend beroepsbeoefenaar is verantwoordelijk voor de kwaliteit en het zelfstandig en veilig uitvoeren van de eigen werkzaamheden en werkt samen met anderen. Legt verantwoording af aan een leidinggevende.",
          vakkennis: [
            "Basiskennis van (bedrijfsspecifieke) processen, procedures en richtlijnen;",
            "Basiskennis van het verloop van de guest journey en het verloop van de gastbeleving;",
            "Basiskennis van verschillende doelgroepen, klant- en gasttypen en bijbehorend gedrag;",
            "Basiskennis van hygiëne, voedselveiligheid (HACCP) en sociale hygiëne;"
          ]
        },
        { 
          id: "zelfstandig_medewerker_hospitality", 
          naam: "Zelfstandig medewerker hospitality", 
          niveau: "Mbo-niveau 3", 
          crebo: "27053", 
          pdfLink: "Zelfstandig medewerker hospitality_25.pdf",
          typering: "De taken van de zelfstandig medewerker hospitality zijn vooral uitvoerend, deels ook coördinerend waar het aansturen en instrueren van medewerkers betreft. Voert werkzaamheden grotendeels zelfstandig en naar eigen inzicht uit.",
          context: "Werkt bij een bedrijf gericht op eten, drinken en slapen zoals een bar, restaurant, hotel of zalencentrum. De taken zijn operationeel van aard, met een focus op gastvrijheid en commercieel resultaat.",
          houding: "Toont initiatief, is stressbestendig tijdens piekmomenten en acteert als operationeel spilfiguur op de werkvloer. Beschikt over een proactieve, kwaliteitsbewuste en motiverende houding richting het team.",
          resultaat: "Een feilloos gecoördineerde shift, geoptimaliseerde voorraden, vakkundig behandelde klachten en een verhoogde gastretentie.",
          complexiteit: "Combineert verschillende gestandaardiseerde werkwijzen met het werken naar eigen inzicht. Moet snel kunnen schakelen tussen gastinteractie en de interne coördinatie van medewerkers.",
          verantwoordelijkheid: "Draagt gedeelde verantwoordelijkheid voor het resultaat van het routinewerk van anderen. Verantwoording wordt afgelegd aan de eindverantwoordelijke manager of ondernemer.",
          vakkennis: [
            "Brede kennis over hygiëne, voedselveiligheid, HACCP en wet- en regelgeving;",
            "Kennis van smaakprofielen, bereiding en samenstelling van dranken en menu-opbouw;",
            "Kennis van planningsmethoden, voorraadbeheer, inkoopstrategieën en transportmethodes;",
            "Kennis van diverse gesprekstechnieken en functionerings- en beoordelingsgesprekken;"
          ]
        },
        { 
          id: "leidinggevende_hospitality", 
          naam: "Leidinggevende hospitality", 
          niveau: "Mbo-niveau 4", 
          crebo: "27056", 
          pdfLink: "Leidinggevende 'Hospitality'_25.pdf",
          typering: "De leidinggevende hospitality werkt actief mee op de werkvloer en stuurt vanuit diens expertise medewerkers aan. Is heel nadrukkelijk bezig met het vertalen van beleid naar de dagelijkse praktijk.",
          context: "Werkt actief mee op de werkvloer van grotere horeca- of logiesbedrijven en stuurt operationele afdelingen aan. Richt zich op de dagelijkse operatie om processen soepel te laten verlopen.",
          houding: "Hanteert een inspirerende en coachende stijl van leidinggeven. Is stressbestendig, empathisch, besluitvaardig en treedt op als rolmodel voor de rest van de hospitalitybrigade.",
          resultaat: "Effectief geïmplementeerd en bewaakt HR-, financieel-, operationeel- en kwaliteitsbeleid op de werkvloer.",
          complexiteit: "Combineert gestandaardiseerde procedures met het werken naar eigen inzicht. De unieke vraagstukken op de vloer vragen om specifieke en aangepaste benaderingen of oplossingen.",
          verantwoordelijkheid: "Eindverantwoordelijk voor de operationele bedrijfsvoering van de afdeling, vestiging of het team, voor de resultaten heren voor de kwaliteit van de geleverde horecadiensten.",
          vakkennis: [
            "Brede kennis van kwaliteitsbeleid, arbo- en veiligheidsvoorschriften;",
            "Brede kennis van de cao van de branche, arbeidsvoorwaarden en HR-beleid;",
            "Brede kennis van financiële stromen, budgetbewaking en kostensoorten;",
            "Kennis van wet- en regelgeving waaronder de Alcoholwet en het Alcoholbesluit;"
          ]
        },
        { 
          id: "ondernemer_hospitality", 
          naam: "Ondernemer hospitality", 
          niveau: "Mbo-niveau 4", 
          crebo: "27059", 
          pdfLink: "Ondernemer hospitality_25.pdf",
          typering: "De ondernemer hospitality start en/of leidt een klein bedrijf of bedrijfsonderdeel. Heeft de taak om de visie van het bedrijf te beschrijven, de daarbij behorende plannen en het daaruit voortvloeiend beleid te maken met een focus op de lange termijn.",
          context: "Leidt een zelfstandige onderneming of franchisevestiging binnen de gastvrijheidsbranche. Werkt deels mee, maar stuurt hoofdzakelijk op strategisch en bedrijfseconomisch niveau.",
          houding: "Toont visionair ondernemerschap, is innovatief, commercieel gedreven, alert op marktkansen en bereid om gecalculeerde ondernemersrisico's te nemen.",
          resultaat: "Een financieel gezonde, onderscheidend gepositioneerde onderneming met een duurzame marktpositie.",
          complexiteit: "De grote diversiteit aan strategische taken (assortiment, marketing, financiën, wetgeving) in combinatie met sterke onderlinge samenhang maakt de functie hoegenaamd complex.",
          verantwoordelijkheid: "Volledig strategisch, juridisch en financieel eindverantwoordelijk voor de algehele bedrijfsvoering, het personeelsbeleid en het voortbestaan van de horecaonderneming.",
          vakkennis: [
            "Brede kennis van bedrijfseconomie, financieringsvormen en verdienmodellen;",
            "Brede kennis van strategische marketing, profilering en netwerkbeheer;",
            "Brede kennis van wet- en regelgeving omtrent ondernemerschap, personeel en milieu;",
            "Specialistische kennis van inkoopstrategieën en contractbeheer met leveranciers;"
          ]
        }
      ]
    },
    {
      id: "keuken",
      titel: "Keuken & Foodservice",
      crebo: "23426",
      profielen: [
        { 
          id: "kok", 
          naam: "Kok", 
          niveau: "Mbo-niveau 2", 
          crebo: "27060", 
          pdfLink: "Kok_25.pdf",
          typering: "De kok richt zich voornamelijk op het bereiden van hoogwaardige (culinaire) gerechten. Heeft een uitvoerende rol in de keuken, aanvaardt leiding en volgt bij de uitvoering van opdrachten instructies en aanwijzingen op.",
          context: "Werkt in een (open) keuken van horecabedrijven gericht op hoogwaardige maaltijden waar de focus ligt op gastronomie. De werkomgeving kenmerkt zich door piektijden, efficiëntie en teamwork.",
          houding: "Heeft een passie voor voedselbereiding, is motorisch vaardig, gefocust, collegiaal en planmatig ingesteld. Moet te allen tijde bestand zijn tegen extreme piekbelasting en operationele hectiek.",
          resultaat: "Visueel aantrekkelijke, smaakvolle (componenten van) gerechten conform receptuur en een schone, veilige keukenpost volgens de HACCP-eisen.",
          complexiteit: "De diversiteit aan keukentaken die tegelijkertijd moeten worden uitgevoerd (bereiden van componenten, bewaken van bonnen, handhaven hygiëne) maakt het werk complex.",
          verantwoordelijkheid: "Verantwoordelijk voor de kwaliteit en het zelfstandig en safe uitvoeren van het eigen werk op de post. Werkt onder supervisie van een zelfstandig kok of chef-kok.",
          vakkennis: [
            "Basiskennis van recepturen en basale menu- en smaakleer;",
            "Basiskennis van bereidings-, kook- en professionele afwerktechnieken;",
            "Basiskennis van de Hygiënecode, persoonlijke hygiëne en HACCP-richtlijnen;",
            "Basiswarenkennis van grondstoffen, ingrediënten en seizoensproducten;"
          ]
        },
        { 
          id: "zelfstandig_werkend_kok", 
          naam: "Zelfstandig werkend kok", 
          niveau: "Mbo-niveau 3", 
          crebo: "27062", 
          pdfLink: "Zelfstandig werkend kok_25.pdf",
          typering: "De zelfstandig werkend kok voert naast uitvoerende ook coördinerende en optimaliserende werkzaamheden uit, zoals het verbeteren en vernieuwen van (componenten van) gerechten en het bevorderen van de efficiëntie en duurzaamheid.",
          context: "Is werkzaam in de betere horecakeukens (midden- en hoogsegment). Stuurt een party aan en ontwikkelt recepturen binnen de kaders van de formule.",
          houding: "Toont culinaire creativiteit, vindingrijkheid en commercieel bewustzijn. Is initiatiefrijk, kritisch op de geleverde kwaliteit en enthousiast om het vak over te dragen aan leerlingen.",
          resultaat: "Vernieuwde en verbeterde (componenten van) gerechten, een efficiënt georganiseerde partie-planning en geminimaliseerde voedselverspilling.",
          complexiteit: "De veelheid aan wettelijke voorschriften en het coördineren van medewerkers met uiteenlopende motivaties en werkopvattingen verhogen de operationele complexiteit.",
          verantwoordelijkheid: "Zelfstandig verantwoordelijk voor de operationele resultaten en de constante kwaliteit van de eigen keukenpartie. Legt verantwoording af aan de souschef of chef-kok.",
          vakkennis: [
            "Gedegen kennis van smaakkenmerken, productkwaliteit en structuur van gerechten;",
            "Kennis van dieet- en voedingswensen vanuit gezondheid of geloofsovertuiging;",
            "Kennis van bedrijfseconomische begrippen zoals efficiëntie en foodcost-berekeningen;",
            "Kennis van inwerkprocedures en kwaliteitscontroles binnen het keukenproces;"
          ]
        },
        { 
          id: "gespecialiseerd_kok", 
          naam: "Gespecialiseerd kok", 
          niveau: "Mbo-niveau 4", 
          crebo: "27064", 
          pdfLink: "Gespecialiseerd kok_25.pdf",
          typering: "De gespecialiseerd kok richt zich voornamelijk op het bereiden en vernieuwen van hoogwaardige, culinaire gerechten die bijzonder, creatief en/of luxe zijn. Denkt na over de gastronomische samenstelling van de menukaart en bewaakt die kwaliteit.",
          context: "Werkt in keukens van het topsegment of fine-dining restaurants. Stuurt ingewikkelde parties aan en werkt nauw samen met de chef-kok aan de menustructuur.",
          houding: "Is innovatief, artistiek, nieuwsgierig naar mondiale gastronomische trends en bezit de absolute wil om te excelleren in culinair vakmanschap en esthetische bordpresentatie.",
          resultaat: "Hoogwaardige, exclusieve gerechten en horecapatisserie-producten die voldoen aan de hoogste gastronomische standaarden.",
          complexiteit: "Het toepassen van complexe, innovatieve technieken onder constante druk, gecombineerd met het bewaken van scherpe inkoopbudgetten, vereist een hoge vakspecialiteit.",
          verantwoordelijkheid: "Verantwoordelijk voor de innovatieve creatie en kwaliteitsbewaking binnen de toegewezen parties. Fungeert als culinair inspirator voor de overige brigade.",
          vakkennis: [
            "Specialistische warenkennis van luxe, exclusieve en internationale ingrediënten;",
            "Specialistische kennis van geavanceerde menu-engineering en Raamwerkindeling;",
            "Specialistische kennis van smaakprofielen, textuur- en kleurcombinaties;",
            "Kennis van kwaliteitsbeleid, margebewaking en kosten-batenanalyses;"
          ]
        },
        { 
          id: "leidinggevende_keuken", 
          naam: "Leidinggevende keuken", 
          niveau: "Mbo-niveau 4", 
          crebo: "27065", 
          pdfLink: "Leidinggevende keuken_25.pdf",
          typering: "De leidinggevende keuken heeft een coördinerende en leidinggevende rol in de keuken, maar voert daarnaast ook uitvoerende werkzaamheden uit. Richt zich voornamelijk op het aansturen en bewaken van het proces in de keuken.",
          context: "Is operationeel en tactisch manager van de gehele keukenbrigade in middelgrote tot grote horeca- en cateringorganisaties. Bewaakt de overkoepelende planning.",
          houding: "Is beslist, analytisch, stressbestendig en bezit sterke communicatieve vaardigheden om instructies over te dragen. Handelt altijd budget- en kostenbewust.",
          resultaat: "Een sluitende keukenbegroting, gestroomlijnde logistieke processen, een harmonieuze werksfeer en een rendabel menu-ontwerp.",
          complexiteit: "Moet een veelheid aan logistieke en financiële processen simultaan op elkaar afstemmen, zonder dat de voortgang of de culinaire kwaliteit in gevaar komen.",
          verantwoordelijkheid: "Eindverantwoordelijk voor de totale bedrijfsuitvoering in de keuken: de financiën, de veiligheid, de hygiëne (HACCP) en het HR-beleid van het keukenteam.",
          vakkennis: [
            "Brede kennis van financiële termen zoals omzet, brutomarges en urenbudgetten;",
            "Brede kennis van logistieke en facilitaire processen binnen grootschalige keukens;",
            "Brede kennis van conflicthantering, teambuilding en personeelsgesprekken;",
            "Kennis van strategische marketing instrumenten en menu-engineering calculaties;"
          ]
        }
      ]
    },
    {
      id: "generiek",
      titel: "Generieke Onderdelen & Keuzedelen",
      crebo: "Centrale Exameneisen",
      profielen: [
        { 
          id: "generiek_niveau2", 
          naam: "Generieke eisen - Niveau 2", 
          niveau: "Mbo-niveau 2", 
          crebo: "Wettelijk", 
          typering: "De verplichte generieke componenten voor elke mbo-opleiding op niveau 2. Dit omvat de basisvaardigheden die essentieel zijn voor participatie in de maatschappij en beroepsuitoefening." 
        },
        { 
          id: "generiek_niveau3", 
          naam: "Generieke eisen - Niveau 3", 
          niveau: "Mbo-niveau 3", 
          crebo: "Wettelijk", 
          typering: "De verplichte generieke componenten voor elke mbo-opleiding op niveau 3. De eisen voor taal en rekenen liggen hier op een hoger referentieniveau (2F/3F)." 
        },
        { 
          id: "generiek_niveau4", 
          naam: "Generieke eisen - Niveau 4", 
          niveau: "Mbo-niveau 4", 
          crebo: "Wettelijk", 
          typering: "De verplichte generieke componenten voor middenkader- en specialistopleidingen op niveau 4. Inclusief de wettelijke verplichting voor de Engelse taal." 
        }
      ]
    }
  ],
  
  profielKerntaken: {
    "medewerker_hospitality": ["B1-K1", "B1-K2", "P1-K1"],
    "zelfstandig_medewerker_hospitality": ["B1-K1", "B1-K2", "P2-K1", "P2-K2"],
    "leidinggevende_hospitality": ["B1-K1", "B1-K2", "P5-K1"],
    "ondernemer_hospitality": ["B1-K1", "B1-K2", "P8-K1"],
    "kok": ["B1-K1", "B1-K2", "B1-K3"],
    "zelfstandig_werkend_kok": ["B1-K1", "B1-K2", "B1-K3", "P3-K1"],
    "gespecialiseerd_kok": ["B1-K1", "B1-K2", "B1-K3", "P5-K1"],
    "leidinggevende_keuken": ["B1-K1", "B1-K2", "B1-K3", "P6-K1"],
    
    "generiek_niveau2": ["GEN-NED-2F", "GEN-REK-2F", "GEN-LOB-BUR"],
    "generiek_niveau3": ["GEN-NED-2F", "GEN-REK-3F", "GEN-LOB-BUR"],
    "generiek_niveau4": ["GEN-NED-3F", "GEN-REK-3F", "GEN-ENG-B1", "GEN-LOB-BUR"]
  },

  kerntakenDatabase: {
    // === HOSPITALITY BASISTAKEN & PROFIELTAKEN ===
    "B1-K1": {
      code: "B1-K1", titel: "Verleent gastvrijheid", type: "Basisdeel Hospitality (Alle Niveaus)",
      complexiteit: "De wens van de gast staat centraal; geen gast is hetzelfde. De student moet omgaan met diverse culturen en onvoorspelbare piekmomenten.",
      verantwoordelijkheid: "Verantwoordelijk voor de kwaliteit en het zelfstandig en veilig uitvoeren van de eigen werkzaamheden.",
      vakkennis: ["Basiskennis van het verloop van de guest journey.", "Basiskennis van verbale en non-verbale communicatie.", "Sociale hygiëne en omgangsvormen."],
      werkprocessen: [
        { code: "B1-K1-W1", titel: "Bereidt gastgerichte werkzaamheden voor", omschrijving: "Verdiept zich in de bedrijfsformule en het gastvrijheidsconcept, plant de eigen werkzaamheden.", resultaat: "De werkzaamheden zijn gepland en organisatorisch en praktisch voorbereid.", gedrag: ["Ziet er representatief uit conform de voorschriften;", "Plant de werkzaamheden in een logische volgorde;"], competenties: ["Plannen en organiseren"] },
        { code: "B1-K1-W2", titel: "Draagt bij aan een gastgerichte beleving", omschrijving: "Observeert de gast, achterhaalt specifieke wensen en behoeften en creëert sfeer.", resultaat: "Er is een bijdrage aan een optimale beleving geleverd, afgestemd op de gast.", gedrag: ["Toont oprechte interesse en luistert aandachtig;", "Is vriendelijk en beleefd;"], competenties: ["Aandacht en begrip tonen", "Klantgericht handelen"] }
      ]
    },
    "B1-K2": {
      code: "B1-K2", titel: "Voert hospitality werkzaamheden uit", type: "Basisdeel Hospitality (Alle Niveaus)",
      complexiteit: "Werkt volgens standaardwerkwijze maar moet altijd rekening houden met de onvoorspelbare wensen van gasten.",
      verantwoordelijkheid: "Verantwoordelijk voor de kwaliteit en veiligheid van het eigen werk.",
      vakkennis: ["Basiskennis van doelgroepen.", "Gesprekstechnieken."],
      werkprocessen: [
        { code: "B1-K2-W1", titel: "Verwerkt reserveringen", omschrijving: "Neemt reserveringen aan en verwerkt deze accuraat in het reserveringssysteem.", resultaat: "De reserveringen zijn volgens afspraken verwerkt en inzichtelijk voor collega's.", gedrag: ["Inventariseert actief de wensen van de gast;", "Verwerkt alle informatie zorgvuldig;"], competenties: ["Formuleren", "Klantgericht handelen"] }
      ]
    },
    "P1-K1": {
      code: "P1-K1", titel: "Bedient gasten", type: "Profieldeel Medewerker Hospitality (Niveau 2)",
      complexiteit: "Werkt over het algemeen volgens de standaardwerkwijze en beschikt over basiskennis.",
      verantwoordelijkheid: "Vervult een uitvoerende rol en is verantwoordelijk voor diens eigen operationele werk.",
      vakkennis: ["Basiskennis over allergenen.", "Basiskennis over HACCP.", "Serveertechnieken."],
      werkprocessen: [
        { code: "P1-K1-W1", titel: "Neemt bestellingen op en informeert", omschrijving: "Neemt bestellingen op, informeert naar speciale wensen en legt deze vast.", resultaat: "Gasten zijn geïnformeerd over de gerechten en dranken. Bestellingen zijn genoteerd.", gedrag: ["Presenteert het aanbod op adequate wijze;", "Luistert nauwkeurig naar de gast;"], competenties: ["Presenteren", "Aandacht tonen"] }
      ]
    },
    "P2-K1": {
      code: "P2-K1", titel: "Bedient gasten (Zelfstandig)", type: "Profieldeel Zelfstandig Medewerker Hospitality (Niveau 3)",
      complexiteit: "Moet gasten proactief adviseren over smaakprofielen en drank-spijscombinaties naar eigen inzicht.",
      verantwoordelijkheid: "Verantwoordelijk voor de uitvoering en kwaliteit van de eigen taken; stuurt niveau 2 medewerkers functioneel aan.",
      vakkennis: ["Wijn-spijscombinaties.", "Allergenenwetgeving diepgaand.", "Storytelling-verkoop."],
      werkprocessen: [
        { code: "P2-K1-W1", titel: "Neemt bestellingen op en adviseert", omschrijving: "Geeft uitgebreide informatie en advies aan de gast over de menukaart, ingrediënten en passende dranken.", resultaat: "Gasten zijn passend geadviseerd over de diverse dranken en gerechten.", gedrag: ["Geeft informatie of advies passend bij de wens van de klant;", "Presenteert het aanbod op adequate wijze;"], competenties: ["Adviseren", "Presenteren"] }
      ]
    },
    "P2-K2": {
      code: "P2-K2", titel: "Coördineert hospitality werkzaamheden", type: "Profieldeel Zelfstandig Medewerker Hospitality (Niveau 3)",
      complexiteit: "Organiseren van hospitalitytaken onder wisselende bezetting en het accuraat bijhouden van voorraadadministratie.",
      verantwoordelijkheid: "Medeverantwoordelijk voor het teamresultaat, urenbelasting en de dervingscontrole op de afdeling.",
      vakkennis: ["Methoden van voorraadbeheer (FIFO).", "Roosterplanning.", "Klachtenafhandeling."],
      werkprocessen: [
        { code: "P2-K2-W1", titel: "Plant werkzaamheden, en instrueert en begeleidt medewerkers", omschrijving: "Maakt een dagplanning voor de inzet van medewerkers op de dienst.", resultaat: "Werkzaamheden zijn gepland en verdeeld en medewerkers hebben instructie ontvangen.", gedrag: ["Houdt bij het toewijzen van taken rekening met de capaciteiten;", "Geeft heldere uitleg, instructies en aanwijzingen;"], competenties: ["Aansturen", "Begeleiden"] }
      ]
    },
    "P5-K1": {
      code: "P5-K1", titel: "Voert operationele managementtaken uit", type: "Profieldeel Leidinggevende Hospitality (Niveau 4)",
      complexiteit: "Tactische afstemming tussen budgetten en gastvrijheid; aansturen van een divers team.",
      verantwoordelijkheid: "Eindverantwoordelijk voor de urenregistratie, budgetbewaking en wettelijke naleving van sociale hygiëne tijdens de shift.",
      vakkennis: ["Financiële sturingsmechanismen.", "HR-instrumenten.", "Wettelijke handhavingscriteria."],
      werkprocessen: [
        { code: "P5-K1-W4", titel: "Voert het sociaal-hygiënisch beleid uit", omschrijving: "De leidinggevende handhaaft het Alcoholbesluit en de interne huisregels op de werkvloer.", resultaat: "Het sociaal-hygiënisch beleid wordt effectief uitgevoerd en gehandhaafd.", gedrag: ["Geeft duidelijke instructies over de naleving en controleert hier zorgvuldig op;", "Treedt adequaat en consequent op bij overtredingen;"], competenties: ["Handhaven", "Aansturen"] }
      ]
    },
    "P8-K1": {
      code: "P8-K1", titel: "Voert strategische ondernemerstaken uit", type: "Profieldeel Ondernemer Hospitality (Niveau 4)",
      complexiteit: "Lange termijn beleidsvorming, financieel risicomanagement en positionering in de markt.",
      verantwoordelijkheid: "Volledig strategisch en financieel verantwoordelijk voor het voortbestaan van de onderneming.",
      vakkennis: ["Businessplan-ontwikkeling.", "Inkoopstrategieën macro-niveau.", "HR-retentiebeleid."],
      werkprocessen: [
        { code: "P8-K1-W2", titel: "Koopt producten en/of diensten in", omschrijving: "Onderhandelt met leveranciers over raamcontracten, inkoopprijzen en leveringsvoorwaarden.", resultaat: "Het inkoopproces is uitgevoerd waardoor er producten worden afgenomen tegen gunstige voorwaarden.", gedrag: ["Analyseert zorgvuldig inkooprelevante aspecten, zoals prijs en kwaliteit;", "Maakt weloverwogen afwegingen tussen kosten en baten;"], competenties: ["Onderzoeken", "Ondernemend handelen"] }
      ]
    },

    // === KEUKEN BASISTAKEN & PROFIELTAKEN ===
    "B1-K1": {
      code: "B1-K1", titel: "Bereidt (componenten van) gerechten", type: "Basisdeel Keuken (Alle Niveaus)",
      complexiteit: "Gelijktijdig managen van meerdere bonnen onder hoge fysieke werkdruk. Strikte handhaving van de Hygiënecode tijdens piekmomenten.",
      verantwoordelijkheid: "Verantwoordelijk voor de culinaire smaak, garing en esthetische presentatie van componenten og gerechten.",
      vakkennis: ["Warenkennis van grondstoffen.", "Kook-, bereidings- en snijtechnieken.", "HACCP-richtlijnen."],
      werkprocessen: [
        { code: "B1-K1-W1", titel: "Maakt mise en place", omschrijving: "Volgt de keukenplanning, verzamelt ingrediënten en controleert deze op versheid.", resultaat: "Benodigde grondstoffen en hulpmiddelen zijn gebruiksklaar voor het bereidingsproces.", gedrag: ["Beoordeelt de kwaliteit van ingrediënten kritisch;", "Werkt ordelijk, netjes en hygiënisch;"], competenties: ["Vakdeskundigheid toepassen"] },
        { code: "B1-K1-W3", titel: "Bereidt (componenten van) gerechten", omschrijving: "Bereidt componenten of gerechten volgens receptuur en planning.", resultaat: "Componenten van gerechten zijn smaakvol en correct bereid conform standaarden.", gedrag: ["Past bereidingstechnieken snel en accuraat toe;", "Controleert de smaak en garing continu;"], competenties: ["Samenwerken", "Kwaliteit leveren"] }
      ]
    },
    "B1-K2": {
      code: "B1-K2", titel: "Beheert voorraden", type: "Basisdeel Keuken (Alle Niveaus)",
      complexiteit: "De bederfelijkheid en kwetsbaarheid van verse grondstoffen vereisen strakke controle.",
      verantwoordelijkheid: "Verantwoordelijk voor de kwaliteitscontrole bij ontvangst en correcte opslag.",
      vakkennis: ["Basiskennis van opslagcondities.", "Richtlijnen van HACCP en FIFO."],
      werkprocessen: [
        { code: "B1-K2-W2", titel: "Ontvangt en controleert bestellingen", omschrijving: "Neemt de geleverde bestelling in ontvangst, controleert de bon en checkt de versheid.", resultaat: "Bestellingen zijn gecontroleerd en eventuele afwijkingen zijn direct gerapporteerd.", gedrag: ["Controleert geleverde producten zeer secuur;", "Signaleert en meldt afwijkingen op tijd;"], competenties: ["Secuur controleren", "Procedures opvolgen"] }
      ]
    },
    "B1-K3": {
      code: "B1-K3", titel: "Verleent gastvrijheid (Keuken)", type: "Basisdeel Keuken (Alle Niveaus)",
      complexiteit: "Dit wordt bepaald door de communicatie en afstemming met aansluitende disciplines zoals de bediening.",
      verantwoordelijkheid: "Verantwoordelijk voor een gastvrije instelling en service vanuit de keukenomgeving.",
      vakkennis: ["Basiskennis van gastvrijheidsconcepten.", "Klachtenafhandeling in de keuken."],
      werkprocessen: [
        { code: "B1-K3-W2", titel: "Draagt bij aan een gastgerichte beleving", omschrijving: "Geeft informatie over producten en gerechten aan gasten of bediening en neemt feedback aan.", resultaat: "Er is bijgedragen aan een optimale gastbeleving in lijn met de formule.", gedrag: ["Speelt adequaat in op dieetwensen en behoeften;", "Stemt tijdig af met collega's uit de bediening;"], competenties: ["Aandacht tonen", "Samenwerken"] }
      ]
    },
    "P3-K1": {
      code: "P3-K1", titel: "Coördineert en optimaliseert keukenwerkzaamheden", type: "Profieldeel Zelfstandig Werkend Kok (Niveau 3)",
      complexiteit: "Het managen van processen (routing, inkoop) en het creatief ontwikkelen van nieuwe gerechten.",
      verantwoordelijkheid: "Operationele aansturing van teamleden binnen de partie; verantwoordelijk voor de kostenefficiëntie.",
      vakkennis: ["Kosten-batenanalyses.", "Zero-waste methodieken.", "Didactische basisvaardigheden."],
      werkprocessen: [
        { code: "P3-K1-W1", titel: "Plant en verdeelt werkzaamheden", omschrijving: "Maakt een efficiënte shiftplanning en werkroosters op basis van de individuele kwaliteiten van het team.", resultaat: "Werkzaamheden zijn zo optimaal mogelijk gepland en verdeeld.", gedrag: ["Wijst de activiteit toe aan de medewerker die daar het meest geschikt voor is;", "Stelt de juiste prioriteiten in werkzaamheden;"], competenties: ["Plannen en organiseren", "Delegeren"] },
        { code: "P3-K1-W2", titel: "Instrueert en begeleidt medewerkers", omschrijving: "Geeft heldere, vaktechnische instructies aan leerlingen en koks en spreekt hen aan op onveilig handelen.", resultaat: "Medewerkers zijn vakinhoudelijk begeleid en teamdoelen zijn behaald.", gedrag: ["Geeft opbouwende en constructieve feedback direct op de werkplek;"], competenties: ["Aansturen", "Coachen"] }
      ]
    },
    "P5-K1": {
      code: "P5-K1", titel: "Organiseert culinaire managementtaken", type: "Profieldeel Gespecialiseerd Kok (Niveau 4)",
      complexiteit: "Aansturen van meerdere parties in de keuken; bewaken van hoogwaardige gastronomische trends.",
      verantwoordelijkheid: "Eindverantwoordelijk voor de culinaire verfijning, innovatie en kwaliteitscontrole op de gerechten.",
      vakkennis: ["Menu-engineering.", "Inkoop grootsegment.", "Culinaire trends."],
      werkprocessen: [
        { code: "P5-K1-W1", titel: "Ontwikkelt en calculeert menu's en gerechten", omschrijving: "Ontwerpt thematische menukaarten och voert nauwkeurige marge- en kostprijscalculaties uit.", resultaat: "Menukaart is rendabel gecalculeerd en culinair vernieuwend.", gedrag: ["Houdt strak rekening met de inkoopbudgetten en margedoelen;"], competenties: ["Bedrijfsmatig handelen"] }
      ]
    },
    "P6-K1": {
      code: "P6-K1", titel: "Stuurt de totale keukenorganisatie aan", type: "Profieldeel Leidinggevende Keuken (Niveau 4)",
      complexiteit: "Operationeel en strategisch keukenmanagement; verantwoordelijk voor wetgeving en personeelsbeleid.",
      verantwoordelijkheid: "Volledig eindverantwoordelijk voor de foodcost-resultaten, de HACCP-audits en het HR-klimaat in de keuken.",
      vakkennis: ["Keukenbegrotingen.", "Conflictbeheersing.", "Procesoptimalisatie."],
      werkprocessen: [
        { code: "P6-K1-W3", titel: "Voert gesprekken och overleg met medewerkers", omschrijving: "Voert functionerings- en beoordelingsgesprekken met de keukenbrigade en legt afspraken vast.", resultaat: "Overleg en gesprekken met medewerkers zijn gevoerd.", gedrag: ["Communiceert helder en in voor medewerkers begrijpelijke taal;", "Luistert actief en met aandacht naar medewerkers;"], competenties: ["Begeleiden", "Ethisch handelen"] }
      ]
    },

    // === GENERIEKE ONDERDELEN ===
    "GEN-NED-2F": {
      code: "Nederlands", titel: "Centrale Eisen - Referentieniveau 2F", type: "Wettelijk Generiek Deel",
      complexiteit: "Het vlot kunnen communiceren, begrijpen en schrijven van teksten in alledaagse en beroepsgerichte situaties.",
      verantwoordelijkheid: "Zelfstandig kunnen begrijpen van instructies en professioneel kunnen communiceren met gasten en collega's.",
      vakkennis: ["Grammatica- en spellingsregels.", "Gespreksconventies.", "Zakelijke brief- en e-mailstructuren."],
      werkprocessen: [
        { code: "NED-2F-1", titel: "Spreken en Gesprekken voeren", omschrijving: "Voert gesprekken met gasten (bestellingen opnemen, klachten aanhoren) en overlegt functioneel met collega's.", resultaat: "De communicatie verloopt vloeiend, beleefd en begrijpelijk voor de ander.", gedrag: ["Spreekt in begrijpelijk en correct Nederlands;", "Luistert actief en reageert passend op de gesprekspartner;"], competenties: ["Communiceren", "Aandacht en begrip tonen"] },
        { code: "NED-2F-2", titel: "Zakelijk Schrijven", omschrijving: "Schrijft korte, duidelijke teksten zoals interne overdrachten, reserveringsbevestigingen of e-mails naar leveranciers.", resultaat: "De geschreven tekst is foutloos, helder en professioneel van toon.", gedrag: ["Past de spellings- en grammaticaregels correct toe;", "Structureert de e-mail of notitie op een logische manier;"], competenties: ["Formuleren en rapporteren"] }
      ]
    },
    "GEN-NED-3F": {
      code: "Nederlands", titel: "Centrale Eisen - Referentieniveau 3F", type: "Wettelijk Generiek Deel (Niveau 4)",
      complexiteit: "AnalysZEN van complexe zakelijke documenten en het schrijven van formele beleidsteksten of plannen.",
      verantwoordelijkheid: "Verantwoordelijk voor de formele schriftelijke en mondelinge communicatie op management- of ondernemersniveau.",
      vakkennis: ["Uitgebreide zakelijke correspondentie.", "Rapportagetechnieken.", "Argumentatiestructuren."],
      werkprocessen: [
        { code: "NED-3F-1", titel: "Formeel Rapporteren en Presenteren", omschrijving: "Schrijft operationele plannen, HR-verslagen of businessplannen en presenteert deze aan belanghebbenden.", resultaat: "Het rapport of de presentatie is overtuigend, zakelijk correct en professioneel onderbouwd.", gedrag: ["Hanteert een zakelijke en objectieve schrijfstijl;", "Onderbouwt standpunten met logische argumenten;"], competenties: ["Presenteren", "Formuleren en rapporteren"] }
      ]
    },
    "GEN-REK-2F": {
      code: "Rekenen", titel: "Functioneel Rekenen - Niveau 2F", type: "Wettelijk Generiek Deel",
      complexiteit: "Toepassen van basisbewerkingen (procenten, verhoudingen, hoofdrekenen) in dagelijkse praktijksituaties.",
      verantwoordelijkheid: "Accuraat uitvoeren van dagelijkse operationele berekeningen op de werkvloer.",
      vakkennis: ["Hoofdbewerkingen (optellen, aftrekken, delen, vermenigvuldigen).", "Metriek stelsel (liters, grammen, kilo's).", "Procentberekeningen."],
      werkprocessen: [
        { code: "REK-2F-1", titel: "Calculaties op de werkvloer uitvoeren", omschrijving: "Berekent ingrediëntenhoeveelheden bij het omvormen van recepten en weegt grondstoffen nauwkeurig af.", resultaat: "De recepturen zijn correct omgerekend en grondstoffen zijn foutloos afgewogen.", gedrag: ["Past de regels van het metriek stelsel (gram naar kilo) correct toe;", "Voert wegingen en berekeningen uiterst secuur uit;"], competenties: ["Nauwkeurig werken", "Omrekenen"] }
      ]
    },
    "GEN-REK-3F": {
      code: "Rekenen", titel: "Functioneel Rekenen - Niveau 3F", type: "Wettelijk Generiek Deel (Niveau 3 & 4)",
      complexiteit: "Analyseren van cijfermatige overzichten, budgetbewaking, foodcost-berekeningen en winstmarges.",
      verantwoordelijkheid: "Verantwoordelijk voor foutloze financiële calculaties, kassacontroles en urenbegrotingen.",
      vakkennis: ["Kosten-batenanalyse.", "Margecalculaties (bruto/netto).", "Statistieken en diagrammen lezen."],
      werkprocessen: [
        { code: "REK-3F-1", titel: "Financiële en bedrijfsmatige calculaties", omschrijving: "Berekent de kostprijs per bord (foodcost), controleert btw-afdrachten en bewaakt urenbudgetten.", resultaat: "De keuken- of afdelingsfinanciën zijn sluitend en winstgevend gecalculeerd.", gedrag: ["Analyseert cijfers nauwkeurig om margeverlies te spotten;", "Maakt logische en bedrijfseconomisch verantwoordingen op basis van data;"], competenties: ["Analyseren", "Bedrijfsmatig handelen"] }
      ]
    },
    "GEN-LOB-BUR": {
      code: "LOB & Burgerschap", titel: "Loopbaan & Burgerschap", type: "Wettelijk Generiek Deel",
      complexiteit: "Reflecteren op de eigen loopbaanontwikkeling en actief participeren in de maatschappij volgens democratische waarden.",
      verantwoordelijkheid: "Verantwoordelijk voor de eigen professionele ontwikkeling en respectvol omgaan met diversiteit en duurzaamheid op de werkvloer.",
      vakkennis: ["Arbeidsrechten en -plichten (CAO).", "Duurzaamheidsaspecten in de horeca.", "Democratische grondrechten."],
      werkprocessen: [
        { code: "LOB-BUR-1", titel: "Stuurt de eigen loopbaanontwikkeling", omschrijving: "Formuleert eigen leerdoelen, reflecteert op stage-ervaringen en voert netwerkgesprekken.", resultaat: "Een actueel portfolio met bewijslast van de eigen professionele groei is opgebouwd.", gedrag: ["Toont een proactieve en leergierige houding;", "Formuleert concrete en haalbare ontwikkelpunten;"], competenties: ["Leren en reflecteren"] }
      ]
    }
  }
};