// data.js
const kwalificatieDossierDatabase = {
  domeinen: [
    {
      id: "htl",
      titel: "Hospitality, Tourism & Leisure",
            crebo: "23425",
      bronvermelding: "Gebaseerd op de kwalificatiedossiers Hospitality, Tourism & Leisure van SBB en de bijbehorende profiel-PDF's in deze webapp.",
      profielen: [
        { 
          id: "medewerker_hospitality", 
          naam: "Medewerker hospitality", 
          niveau: "Mbo-niveau 2", 
          crebo: "27052", 
          pdfLink: "downloads/Medewerker hospitality.pdf",
          samenvatting: "Als Medewerker hospitality ben jij het echte visitekaartje en het eerste aanspreekpunt binnen de gastvrijheidsbranche. Met een open, proactieve en servicegerichte houding zorg je ervoor dat nationale en internationale gasten zich direct welkom voelen vanaf het moment dat ze binnenstappen. Jouw passie voor gastvrijheid zit in je DNA en dat laat je dagelijks zien binnen uiteenlopende hospitalitybedrijven, van restaurants tot hotels en evenementenlocaties.<br><br>In de dagelijkse praktijk ben je verantwoordelijk voor een breed en gevarieerd takenpakket. Je bereidt gastgerichte werkzaamheden organisatorisch voor, kiest de juiste materialen en middelen, ziet er representatief uit en draagt actief bij aan een sociaal en fysiek veilige omgeving voor gasten en collega's. Daarnaast verwerk je reserveringen in digitale systemen, ontvang je gasten hartelijk en hanteer je verkooptechnieken om producten en diensten succesvol aan te bieden.<br><br>Binnen het specifieke profieldeel focus je je op de operationele bediening. Je neemt bestellingen accuraat op, informeert gasten over de menukaart en allergenen, en maakt dranken of kleine bestellingen zelfstandig klaar. Vervolgens serveer je deze uit met een professionele oog-handcoordinatie en debarrasseer je de tafels tijdig. Ook werk je enthousiast mee aan de opbouw, uitvoering en afronding van diverse activiteiten en evenementen binnen de formule."
        },
        { 
          id: "zelfstandig_medewerker_hospitality", 
          naam: "Zelfstandig medewerker hospitality", 
          niveau: "Mbo-niveau 3", 
          crebo: "27053", 
          pdfLink: "downloads/Zelfstandig medewerker hospitality.pdf",
          samenvatting: "Als Zelfstandig medewerker hospitality combineer je gestandaardiseerde werkwijzen met het werken naar eigen inzicht. Je bent werkzaam aan de balie, receptie, frontoffice of in de bediening, en bent het centrale aanspreekpunt voor gasten om hen een uitstekende gastervaring te bieden. Dit vraagt om een brede productkennis en uitstekende communicatieve vaardigheden om vakdeskundige adviezen te kunnen geven.<br><br>Naast de uitvoerende basistaken draag je een gedeelde verantwoordelijkheid voor het resultaat en het routinewerk van collega's. Je plant de dagelijkse werkzaamheden op de werkvloer, delegeert taken aan medewerkers en voorziet hen van de nodige opdrachten, instructies en constructieve feedback. Je bent alert op de samenwerking binnen het team om een gezonde werksfeer en een hoge gasttevredenheid te waarborgen.<br><br>Commercieel handelen en voorraadbeheer vormen een belangrijk onderdeel van jouw rol. Je beheert en registreert de voorraad nauwkeurig volgens het FIFO-principe en de HACCP-eisen, controleert opslagcondities en handelt eventuele retourzendingen af. Daarnaast ben je proactief in de verkoop middels up- en cross-selling, behandel je klachten zelfstandig om de verwachtingen van de gast te overtreffen, en signaleer je knelpunten om actieve verbetervoorstellen te doen."
        },
        { 
          id: "leidinggevende_hospitality", 
          naam: "Leidinggevende hospitality", 
          niveau: "Mbo-niveau 4", 
          crebo: "27056", 
          pdfLink: "downloads/Leidinggevende 'Hospitality'.pdf",
          samenvatting: "Als Leidinggevende hospitality stuur je vanuit jouw operationele expertise medewerkers aan op de werkvloer en werk je zelf actief mee. Je bent werkzaam binnen bedrijven gericht op eten, drinken en slapen, waar je de focus legt op de dagelijkse operatie. Je bent het directe aanspreekpunt voor gasten en zorgt ervoor dat alle activiteiten vlekkeloos verlopen, wat sterke organisatorische kwaliteiten en flexibiliteit vereist.<br><br>Jouw verantwoordelijkheid ligt bij de operationele aansturing van het team en het vertalen van strategisch beleid naar de praktijk. Je maakt personeelsplanningen, coordineert de onboarding van nieuwe medewerkers en begeleidt hen prestatie- en ontwikkelingsgericht. Hierbij pas je je leiderschapsstijl aan op de persoon en de situatie, met specifieke aandacht voor vitale en duurzame inzetbaarheid. Ook misstanden of meningsverschillen binnen het team los je professioneel op.<br><br>Daarnaast stuur je bedrijfsprocessen aan en bewaak je de budgetten en kwaliteitsnormen. Je maakt operationele plannen met begrotingsvoorstellen, voert kwaliteitscontroles en inspecties uit op het gebied van voedselveiligheid (HACCP) en arbo, en haalt systematisch feedback op bij gasten. Je analyseert commerciele kansen en risico's om onderbouwde verbetervoorstellen te doen ter optimalisering van de bedrijfsvoering."
        },
        { 
          id: "ondernemer_hospitality", 
          naam: "Ondernemer hospitality", 
          niveau: "Mbo-niveau 4", 
          crebo: "27059", 
          pdfLink: "downloads/Ondernemer hospitality.pdf",
          samenvatting: "Als Ondernemer hospitality start en/of leid je een zelfstandig klein bedrijf of bedrijfsonderdeel gericht op eten, drinken en slapen. Je combineert strategische visie met operationele daadkracht, aangezien je een groot deel van de tijd zelf meewerkt op de werkvloer. Jouw blik is nadrukkelijk gericht op de lange termijn, waarbij de financiele gezondheid, marktoverlevingskansen, innovatie en relatiebeheer met gasten en zakelijke netwerkpartners centraal staan.<br><br>Jouw hoofdverantwoordelijkheid ligt bij het ontwerpen en bewaken van het totale bedrijfsbeleid. Je formuleert een integraal businessplan met duidelijke, meetbare doelstellingen en stelt een passend marketing-, HR- en financieel plan op. Je maakt complexe commerciele calculaties, bepaalt inkoop- en verkoopprijzen en analyseert grondig financiele rapportages om de winstgevendheid te optimaliseren en risico's te minimaliseren.<br><br>Daarnaast geef je vorm aan het kwaliteits- en sociaal-hygienisch beleid binnen de onderneming. Je ontwerpt heldere huisregels, instrueert medewerkers over voedselveiligheid (HACCP) en sociale veiligheid, en handhaaft protocollen effectief bij overtredingen of calamiteiten. Wat personeelsmanagement betreft focus je je op de volledige medewerkersreis ('employee journey'), met specifieke aandacht voor het effectief boeien, binden en behouden van jouw personeelsleden."
        }
      ]
    },
    {
      id: "keuken",
      titel: "Keuken & Foodservice",
            crebo: "23426",
      bronvermelding: "Gebaseerd op de kwalificatiedossiers Keuken & Foodservice van SBB en de bijbehorende profiel-PDF's in deze webapp.",
      profielen: [
        { 
          id: "kok", 
          naam: "Kok", 
          niveau: "Mbo-niveau 2", 
          crebo: "27060", 
          pdfLink: "downloads/Kok.pdf",
          samenvatting: "Als Kok werk je in de dynamische (open) keuken van een horeca-, catering- of foodservicebedrijf, waar je je voornamelijk richt op de bereiding van gastronomische maaltijden. Je bent motorisch vaardig, gefocust en gaat planmatig te werk om een uitstekende gastervaring te realiseren. Omdat de keuken gekenmerkt wordt door piektijden en hectiek, bezit je de nodige flexibiliteit en stressbestendigheid.<br><br>Jouw hoofdtaak is het routinematig en gestandaardiseerd bereiden van componenten van gerechten en complete maaltijden volgens receptuur. Je voert de mise en place nauwkeurig uit (schoonmaken, opdelen, afwegen), berekent grondstoffen om bij wisselende gastaantallen, en past diverse kooktechnieken bedreven toe. Voor uitgifte werk je gerechten a-la-minute af tot aantrekkelijke creaties door ze vakkundig te dresseren en te garneren, conform de geldende kwaliteitsnormen en presentatie-eisen.<br><br>Daarnaast speel je een actieve rol in het voorraadbeheer en de keukenhygiene. Je controleert voorraden op aantal en houdbaarheid, plaatst bestellingen bij leveranciers en slaat geleverde goederen op volgens de HACCP- en FIFO-richtlijnen. Je werkt te allen tijde kostenbewust, minimaliseert voedselverspilling en zorgt na afloop van de dienst voor een grondige schoonmaak en desinfectie van de apparatuur en werkruimtes."
        },
        { 
          id: "zelfstandig_werkend_kok", 
          naam: "Zelfstandig werkend kok", 
          niveau: "Mbo-niveau 3", 
          crebo: "27062", 
          pdfLink: "downloads/Zelfstandig werkend kok.pdf",
          samenvatting: "Als Zelfstandig werkend kok ben je werkzaam in de gastronomische keuken van horecabedrijven in het midden- en hogere segment. Je combineert gestandaardiseerde werkwijzen met creatieve technieken en het werken naar eigen inzicht om hoogwaardige maaltijden te bereiden. Je bent mede-verantwoordelijk voor het behalen van het gezamenlijke keukeneindresultaat en de gasttevredenheid binnen het concept.<br><br>Naast de operationele bereidingstaken heb je een belangrijke coordinerende en begeleidende rol op de werkvloer. Je maakt werkplanningen en roosters voor medewerkers, verdeelt taken op basis van individuele capaciteiten en houdt rekening met cao- en Arbowetgeving. Je geeft heldere, duidelijke aanwijzingen en instructies aan (lerende) medewerkers, spreekt hen direct aan op onveilig gedrag en voorziet hen van constructieve feedback.<br><br>Vernieuwing, efficientie en kwaliteitsbewaking vormen de kern van jouw vakmanschap. Je draagt actief creatieve ideeen aan voor de verbetering van gerechten, combineert innovatieve smaakprofielen en legt nieuwe recepturen vast in het receptensysteem. Daarnaast bewaak je het doelmatige gebruik van grondstoffen en apparatuur om voedselverspilling te minimaliseren, analyseer je de productieprocessen en doe je voorstellen om de efficientie en duurzaamheid te verhogen."
        },
        { 
          id: "gespecialiseerd_kok", 
          naam: "Gespecialiseerd kok", 
          niveau: "Mbo-niveau 4", 
          crebo: "27064",
          pdfLink: "downloads/Gespecialiseerd kok.pdf",
          samenvatting: "Als Gespecialiseerd kok werk je in een gastronomische keuken in het midden- en hogere segment, die veelal is opgedeeld in verschillende parties. Je richt op het bereiden, verfijnen en vernieuwen van hoogwaardige culinaire gerechten die bijzonder, creatief en luxe van aard zijn. Dit vraagt om een uitzonderlijk hoge vakspecialiteit, culinaire creativiteit en het vermogen om complexe bereidingswijzen feilloos uit te voeren.<br><br>Je vervult een aansturende, inspirerende en bewakende rol binnen jouw partie. Je maakt detailplanningen en roosters voor de medewerkers, delegeert werkzaamheden effectief en geeft heldere operationele opdrachten. Je motiveert en stimuleert het team om hun beste beentje voor te zetten, bewaakt nauwgezet de kwaliteit en productiviteit, en lost eventuele stagnaties in de werkzaamheden zorgvuldig op.<br><br>Op het gebied van het gastronomische aanbod ben je een actieve vernieuwer. Je volgt trends en ontwikkelingen in de culinaire wereld op de voet en vertaalt deze naar innovatieve recepturen en menuraamwerken. Je adviseert collega's en gasten over menu-ontwerpen, smaakprofielen en presentatietechnieken met passie. Daarnaast analyseer je verkoopcijfers en reviews grondig om concrete, onderbouwde voorstellen te doen ter verbetering van het aanbod."
        },
        { 
          id: "leidinggevende_keuken", 
          naam: "Leidinggevende keuken", 
          niveau: "Mbo-niveau 4", 
          crebo: "27065", 
          pdfLink: "downloads/Leidinggevende keuken.pdf",
          samenvatting: "Als Leidinggevende keuken bekleed je een centrale coordinerende en leidinggevende positie in de open of gesloten keuken van hoogwaardige horecabedrijven. Hoewel je operationeel meewerkt op de werkvloer (zoals bij de bereiding of het voorraadbeheer), ligt jouw primaire focus op het sturen, bewaken en continu verbeteren van de totale keukenprocessen. Dit vereist sterke leidinggevende capaciteiten en een scherp kostenbewustzijn.<br><br>Je geeft direct leiding aan het keukenteam, waarbij je rekening houdt met de diverse werkopvattingen en competenties van medewerkers. Je maakt werkroosters en personeelsplanningen, delegeert taken helder en bewaakt nauwgezet de productiviteit en kwaliteitsnormen. Je organiseert en leidt gestructureerd werkoverleggen, voert formele en informele personeelsgesprekken en legt gemaakte afspraken nauwkeurig vast conform de bedrijfsprocedures.<br><br>Op beleidsmatig en financieel niveau ben je verantwoordelijk voor de keukenoptimalisatie. Je signaleert maatschappelijke en branchetrends om een volledig operationeel plan met een plan van aanpak op te stellen. Je voert kostenberekeningen uit, maakt begrotingen en bewaakt keukenfinancien (omzet, marges, kosten) proactief. Daarnaast pas je menu-engineering toe om op basis van populariteit en foodcost menukaartwijzigingen voor te stellen die direct bijdragen aan de financiele doelstellingen."
        }
      ]
    },
    {
      id: "generiek",
      titel: "Generieke Onderdelen & Keuzedelen",
            crebo: "Centrale Exameneisen",
      bronvermelding: "Gebaseerd op de wettelijke generieke exameneisen voor het mbo: Nederlands, rekenen, Engels, Loopbaan en Burgerschap.",
      profielen: [
        { id: "generiek_niveau2", naam: "Generieke eisen - Niveau 2", niveau: "Mbo-niveau 2", crebo: "Wettelijk", typering: "Dit onderdeel omvat de wettelijk verplichte generieke exameneisen voor mbo-niveau 2. Hieronder vallen Nederlands (Referentieniveau 2F), Rekenen (Referentieniveau 2F) en Loopbaan & Burgerschap. Deze vakken zijn essentieel voor de basisvorming en de succesvolle afronding van de opleiding." },
        { id: "generiek_niveau3", naam: "Generieke eisen - Niveau 3", niveau: "Mbo-niveau 3", crebo: "Wettelijk", typering: "Dit onderdeel omvat de wettelijk verplichte generieke exameneisen voor mbo-niveau 3. Hieronder vallen Nederlands (Referentieniveau 2F), Rekenen (Referentieniveau 3F) en Loopbaan & Burgerschap. De eisen zijn afgestemd op het functioneren als zelfstandig vakman in de branche." },
        { id: "generiek_niveau4", naam: "Generieke eisen - Niveau 4", niveau: "Mbo-niveau 4", crebo: "Wettelijk", typering: "Dit onderdeel omvat de wettelijk verplichte generieke exameneisen voor mbo-niveau 4. Hieronder vallen Nederlands (Referentieniveau 3F), Rekenen (Referentieniveau 3F), Engels (Niveau B1) en Loopbaan & Burgerschap. Deze vakken bereiden de student intensief voor op leidinggevende of ondernemerstaken en eventuele doorstroom naar het HBO." }
      ]
    }
  ],
  
  profielKerntaken: {
    "medewerker_hospitality": ["HTL-B1-K1", "HTL-B1-K2", "HTL-P1-K1"],
    "zelfstandig_medewerker_hospitality": ["HTL-B1-K1", "HTL-B1-K2", "HTL-P2-K1", "HTL-P2-K2"],
    "leidinggevende_hospitality": ["HTL-B1-K1", "HTL-B1-K2", "HTL-P5-K1"],
    "ondernemer_hospitality": ["HTL-B1-K1", "HTL-B1-K2", "HTL-P8-K1"],
    
    "kok": ["KEUKEN-B1-K1", "KEUKEN-B1-K2", "KEUKEN-B1-K3"],
    "zelfstandig_werkend_kok": ["KEUKEN-B1-K1", "KEUKEN-B1-K2", "KEUKEN-B1-K3", "KEUKEN-P3-K1"],
    "gespecialiseerd_kok": ["KEUKEN-B1-K1", "KEUKEN-B1-K2", "KEUKEN-B1-K3", "KEUKEN-P5-K1"],
    "leidinggevende_keuken": ["KEUKEN-B1-K1", "KEUKEN-B1-K2", "KEUKEN-B1-K3", "KEUKEN-P6-K1"],
    
    "generiek_niveau2": ["GEN-NED-2F", "GEN-REK-2F", "GEN-LOB-BUR"],
    "generiek_niveau3": ["GEN-NED-2F", "GEN-REK-3F", "GEN-LOB-BUR"],
    "generiek_niveau4": ["GEN-NED-3F", "GEN-REK-3F", "GEN-ENG-B1", "GEN-LOB-BUR"]
  },

  kerntakenDatabase: {
    "HTL-B1-K1": {
      code: "B1-K1", titel: "Verleent gastvrijheid", type: "Basisdeel Hospitality (Alle Niveaus)",
      complexiteit: "De complexiteit wordt bepaald door de wens van de gast; deze staat centraal. Moet om kunnen gaan met culturen en onvoorspelbaarheid.",
      verantwoordelijkheid: "De beginnend beroepsbeoefenaar is verantwoordelijk voor de kwaliteit en het zelfstandig uitvoeren van de eigen taken.",
      vakkennis: ["Basiskennis van het verloop van de guest journey.", "Basiskennis van omgangsvormen."],
      werkprocessen: [
        { code: "B1-K1-W1", titel: "Bereidt gastgerichte werkzaamheden voor", omschrijving: "Verdiept zich in de bedrijfsformule en het gastvrijheidsconcept, het commerciele aanbod van het bedrijf en de guest journey.", resultaat: "De werkzaamheden zijn afgestemd, gepland en organisatorisch en praktisch voorbereid, in lijn met de bedrijfsformule.", gedrag: ["Verzamelt actief informatie over het bedrijf, de werkuitvoering en de gasten;", "Plant de werkzaamheden in een logische volgorde;", "Ziet er representatief uit;"], competenties: ["Samenwerken en overleggen", "Plannen en organiseren"] },
        { code: "B1-K1-W2", titel: "Draagt bij aan een gastgerichte beleving", omschrijving: "Observeert de gast(en), toetst de beschikbare informatie en achterhaalt de specifieke wensen, verwachtingen en behoeften.", resultaat: "Er is een bijdrage aan een optimale beleving geleverd, afgestemd op de gast en in lijn met de bedrijfsformule.", gedrag: ["Toont oprechte interesse in gasten en luistert aandachtig;", "Communiceert duidelijk en stemt communicatie af op doel en doelgroep;", "Is vriendelijk en beleefd;"], competenties: ["Aandacht en begrip tonen", "Op de behoeften en verwachtingen van de 'klant' richten"] },
        { code: "B1-K1-W3", titel: "Draagt bij aan een sociaal en fysiek veilige werkomgeving", omschrijving: "Draagt bij aan een sociaal en fysiek veilige werkomgeving door grenzen aan te geven en anderen met respect te behandelen.", resultaat: "Er is een actieve bijdrage geleverd aan een fysiek en sociaal veilige werkomgeving op de vloer.", gedrag: ["Behandelt anderen met respect op de werkvloer;", "Is alert op en herkent risicogedrag of veiligheidsrisico's op tijd;"], competenties: ["Samenwerken", "Instructies en procedures opvolgen"] },
        { code: "B1-K1-W4", titel: "Rondt gastgerichte werkzaamheden af", omschrijving: "Ruimt de werkplek op en maakt deze schoon, scheidt afval en vult de voorraden aan voor de volgende shift.", resultaat: "De gastgerichte werkzaamheden zijn operationeel en administratief correct afgerond.", gedrag: ["Ruimt materialen en middelen netjes en milieubewust op;", "Meldt en registreert relevante informatie zorgvuldig;"], competenties: ["Materialen en middelen inzetten", "Formuleren en rapporteren"] },
        { code: "B1-K1-W5", titel: "Evalueert de (eigen) werkzaamheden", omschrijving: "Verzamelt en bespreekt feedback over het eigen functioneren met collega's en reflecteert op verbeterpunten.", resultaat: "De eigen werkzaamheden zijn geevalueerd en concrete verbeterpunten zijn geformuleerd.", gedrag: ["Verzamelt actief en doelgericht feedback over het eigen functioneren;", "Formuleert proactief verbeterpunten;"], competenties: ["Samenwerken en overleggen", "Leren"] }
      ]
    },
    "HTL-B1-K2": {
      code: "B1-K2", titel: "Voert hospitality werkzaamheden uit", type: "Basisdeel Hospitality (Alle Niveaus)",
      complexiteit: "De beginnend beroepsbeoefenaar werkt volgens een standaardwerkwijze, maar reageert flexibel op drukte en piekmomenten.",
      verantwoordelijkheid: "Verantwoordelijk voor de operationele kwaliteit van de verleende diensten en transacties.",
      vakkennis: ["Basiskennis van verbale en non-verbale communicatie.", "Basiskennis van ontruimingsplannen."],
      werkprocessen: [
        { code: "B1-K2-W1", titel: "Verwerkt reserveringen", omschrijving: "De beginnend beroepsbeoefenaar neemt reserveringen aan en verwerkt deze in het systeem.", resultaat: "De reserveringen zijn volgens afspraken verwerkt en relevante informatie is inzichtelijk.", gedrag: ["Inventariseert actief de wensen en bijzonderheden van de gast;", "Controleert en verwerkt alle relevante informatie nauwkeurig;"], competenties: ["Formuleren en rapporteren", "Op de behoeften en verwachtingen van de 'klant' richten"] },
        { code: "B1-K2-W2", titel: "Ontvangt en neemt afscheid van gasten", omschrijving: "Maakt contact met de gast, begroet ze hartelijk en wijst ze de weg. Vraagt bij vertrek naar de gastervaring.", resultaat: "De gastervaring bij ontvangst en vertrek sluit volledig aan bij de standaarden.", gedrag: ["Is vriendelijk, hartelijk en geduldig tegenover gasten;"], competenties: ["Aandacht en begrip tonen", "Op de behoeften en verwachtingen van de 'klant' richten"] },
        { code: "B1-K2-W3", titel: "Treedt op als aanspreekpunt", omschrijving: "Staat de gast te woord, beantwoordt allerhande vragen en biedt maatwerkoplossingen of alternatieven.", resultaat: "Er is een passende maatwerkservice geleverd en de gast is aantoonbaar tevreden gesteld.", gedrag: ["Heeft een open, proactieve en oplossingsgerichte houding;"], competenties: ["Beslissen en activiteiten initieren", "Aandacht en begrip tonen"] },
        { code: "B1-K2-W4", titel: "Handelt bij incidenten of calamiteiten", omschrijving: "Maakt bij acute situaties een inschatting, verleent hulp en volgt strikt de veiligheidsprotocollen.", resultaat: "Calamiteiten zijn direct en ordelijk beheerst met minimale risico's.", gedrag: ["Blijft kalm en gefocust in stressvolle of gevaarlijke situaties;"], competenties: ["Met druk en tegenslag omgaan", "Instructies en procedures opvolgen"] },
        { code: "B1-K2-W5", titel: "Verkoopt of verhuurt producten en/of diensten", omschrijving: "Bespreekt de keuzemogelijkheden, denkt commercieel mee met de gast, geeft tips en suggesties.", resultaat: "Producten en additionele diensten zijn succesvol verkocht en verwerkt.", gedrag: ["Ziet en benut commerciele kansen effectief;"], competenties: ["Ondernemend en commercieel handelen", "Op de behoeften en verwachtingen van de 'klant' richten"] }
      ]
    },
    "HTL-P1-K1": {
      code: "P1-K1", titel: "Bedient gasten", type: "Profieldeel Medewerker Hospitality (Niveau 2)",
      complexiteit: "Werkt over het algemeen volgens vaste standaarden, maar stemt de omgangsvormen soepel af op internationale groepen.",
      verantwoordelijkheid: "Uitvoerende verantwoordelijkheid voor de tafelservice en formulegetrouwe productpresentatie.",
      vakkennis: ["Basiskennis van allergenen en hygienevoorschriften.", "Etiquette en serveertechnieken."],
      werkprocessen: [
        { code: "P1-K1-W1", titel: "Neemt bestellingen op en informeert", omschrijving: "Neemt bestellingen op, informeert bij de gast naar speciale wensen en legt deze vast.", resultaat: "Gasten zijn geinformeerd over het bedrijfsconcept, de diverse dranken en gerechten.", gedrag: ["Presenteert het aanbod op adequate wijze;", "Luistert nauwkeurig naar wat de gast zegt;"], competenties: ["Presenteren", "Aandacht en begrip tonen"] },
        { code: "P1-K1-W2", titel: "Maakt bestellingen klaar", omschrijving: "Bereidt koude en/of warme dranken (zoals koffievarianten) en maakt deze serveergereed.", resultaat: "Bestelde dranken zijn volgens voorschriften en verhoudingen klaargemaakt.", gedrag: ["Verwerkt een bestelling bedreven en accuraat;", "Kiest de juiste presentatiemethode;"], competenties: ["Vakdeskundigheid toepassen", "Formuleren en rapporteren"] },
        { code: "P1-K1-W3", titel: "Serveert bestellingen", omschrijving: "Dekt de tafel in en serveert de bestelling uit. Controleert of gerechten aan tafel afgemaakt moeten worden.", resultaat: "De bestelling is correct aan tafel uitgeserveerd en debarrasseren gebeurt tijdig.", gedrag: ["Serveert de producten met een goede oog-hand coordinatie;", "Checkt regelmatig of gasten tevreden zijn;"], competenties: ["Vakdeskundigheid toepassen", "Samenwerken en overleggen"] },
        { code: "P1-K1-W4", titel: "Werkt mee bij activiteiten en/of evenementen", omschrijving: "Zorgt voor het inrichten, opstellen en aankleden van de ruimte volgens de planning en het event.", resultaat: "De evenementenruimte is ingericht en na afloop conform planning opgeruimd.", gedrag: ["Volgt instructies op en werkt ordelijk;"], competenties: ["Instructies en procedures opvolgen", "Materialen en middelen inzetten"] }
      ]
    },
    "HTL-P2-K1": {
      code: "P2-K1", titel: "Bedient gasten op specialistisch niveau", type: "Profieldeel Zelfstandig Medewerker Hospitality (Niveau 3)",
      complexiteit: "Moet snel schakelen tussen verschillende service- en adviesstijlen afhankelijk van gastwensen.",
      verantwoordelijkheid: "Verantwoordelijk voor de operationele gasttevredenheid en het instrueren van hospitality-assistenten.",
      vakkennis: ["Diepgaande smaakprofielen en drank-spijscombinaties.", "Sociaal-hygienisch beleid."],
      werkprocessen: [
        { code: "P2-K1-W1", titel: "Neemt bestellingen op en adviseert", omschrijving: "Geeft inhoudelijk, gefundeerd advies aan de gast over dranken, menu-opbouw en smaakprofielen.", resultaat: "Gasten zijn passend geadviseerd; storytelling en up-selling zijn toegepast.", gedrag: ["Geeft informatie of advies passend bij de specifieke gast;"], competenties: ["Presenteren", "Aandacht en begrip tonen"] }
      ]
    },
    "HTL-P2-K2": {
      code: "P2-K2", titel: "Coordineert hospitality werkzaamheden", type: "Profieldeel Zelfstandig Medewerker Hospitality (Niveau 3)",
      complexiteit: "Overzien van capaciteitsbehoeften op piekmomenten en de samenwerking bewaken.",
      verantwoordelijkheid: "Medeverantwoordelijk voor het teamresultaat en het dagelijkse voorraadniveau op de werkvloer.",
      vakkennis: ["Methoden van voorraadbeheer (FIFO).", "Begeleidings- en motivatiestrategieen."],
      werkprocessen: [
        { code: "P2-K2-W1", titel: "Plant werkzaamheden, en instrueert en begeleidt medewerkers", omschrijving: "Maakt een dagplanning voor de inzet van medewerkers en delegeert operationele taken.", resultaat: "De shift verloopt ordelijk, taken zijn logisch verdeeld en medewerkers gecoacht.", gedrag: ["Geeft heldere uitleg, instructies en constructieve feedback;"], competenties: ["Aansturen", "Begeleiden"] }
      ]
    },
    "HTL-P5-K1": {
      code: "P5-K1", titel: "Organiseert operationele processen", type: "Profieldeel Leidinggevende Hospitality (Niveau 4)",
      complexiteit: "Vraagt om het oplossen van unieke operationele vraagstukken die afwijken van standaardprocedures.",
      verantwoordelijkheid: "Eindverantwoordelijk voor de urenplanning, kwaliteitscontroles en HR-implementatie van de afdeling.",
      vakkennis: ["Financiele kengetallen en urenadministraties.", "Wettelijke Arbo- en verzuimrichtlijnen."],
      werkprocessen: [
        { code: "P5-K1-W4", titel: "Voert het sociaal-hygienisch beleid uit", omschrijving: "Deelt het sociaal-hygienisch beleid met het team en handhaaft protocollen strikt bij incidenten.", resultaat: "Wettelijke Alcoholwet- en hygienenormen worden op de werkvloer sluitend nageleefd.", gedrag: ["Treedt adequaat en consequent op bij overtredingen;"], competenties: ["Instructies en procedures opvolgen", "Met druk en tegenslag omgaan"] }
      ]
    },
    "HTL-P8-K1": {
      code: "P8-K1", titel: "Stuurt de onderneming strategisch aan", type: "Profieldeel Ondernemer Hospitality (Niveau 4)",
      complexiteit: "Inrichten van de complete employee journey en complexe bedrijfseconomische calculaties maken.",
      verantwoordelijkheid: "Algehele risicoaansprakelijkheid voor de solvabiliteit, winstgevendheid en marktprofilering.",
      vakkennis: ["Marktanalyse, SWOT en business-modellen.", "Inkoopstrategieen en verdienmodellen."],
      werkprocessen: [
        { code: "P8-K3-W1", titel: "Maakt het business plan", omschrijving: "Formuleert een integraal businessplan inclusief marketing-, HR- en financieel strategisch beleid.", resultaat: "Een onderbouwd en financieel levensvatbaar businessplan is goedgekeurd.", gedrag: ["Werkt alle onderdelen duidelijk, gestructureerd en concreet uit;"], competenties: ["Beslissen en activiteiten initieren", "Ondernemend en commercieel handelen"] }
      ]
    },

    "KEUKEN-B1-K1": {
      code: "B1-K1", titel: "Bereidt (componenten van) gerechten", type: "Basisdeel Keuken (Alle Niveaus)",
      complexiteit: "Routinematige en gestandaardiseerde werkzaamheden die onder hoge fysieke druk gelijktijdig plaatsvinden.",
      verantwoordelijkheid: "Verantwoordelijk voor de eigen keukenpost (partie) en veilige hantering van apparatuur.",
      vakkennis: ["Basiskennis van kooktechnieken en productietechnieken.", "Wettelijke hygienerichtlijnen (HACCP)."],
      werkprocessen: [
        { code: "B1-K1-W1", titel: "Maakt mise en place", omschrijving: "Volgt de keukengenerale planning, verzamelt ingredienten, maakt deze schoon, deelt ze op en weegt ze af.", resultaat: "Alle benodigde componenten zijn gebruiksklaar voor het warme en koude bereidingsproces.", gedrag: ["Past snel, precies en accuraat technieken toe voor de bewerking;"], competenties: ["Vakdeskundigheid toepassen", "Materialen en middelen inzetten"] },
        { code: "B1-K1-W3", titel: "Bereidt (componenten van) gerechten", omschrijving: "Bereidt componenten van gerechten volgens recept en planning, bewaakt de kwaliteit van het proces.", resultaat: "Componenten en gerechten zijn smaaktechnisch en kwalitatief conform receptuur klaargemaakt.", gedrag: ["Controleert de kwaliteit van het bereide gerecht op basis van kwaliteitseisen;"], competenties: ["Vakdeskundigheid toepassen", "Samenwerken en overleggen"] },
        { code: "B1-K1-W5", titel: "Maakt schoon en ruimt op", omschrijving: "Reinigt en desinfecteert de eigen werkruimtes, apparaten en materialen. Controleert op gebreken.", resultaat: "De keukenpost is bezemschoon en gedesinfecteerd conform HACCP; derving is geregistreerd.", gedrag: ["Voert afval gescheiden en volgens geldende richtlijnen af;"], competenties: ["Vakdeskundigheid toepassen", "Instructies en procedures opvolgen"] }
      ]
    },
    "KEUKEN-B1-K2": {
      code: "B1-K2", titel: "Beheert voorraden", type: "Basisdeel Keuken (Alle Niveaus)",
      complexiteit: "Controleren en registreren van bederfelijke en kwetsbare versproducten.",
      verantwoordelijkheid: "Zorgen voor een ononderbroken cold-chain en minimalisering van breuk of derving.",
      vakkennis: ["Wettelijke bewaarcondities en registratiesoftware.", "FIFO- en allergenenregistratie."],
      werkprocessen: [
        { code: "B1-K2-W2", titel: "Ontvangt en controleert bestellingen", omschrijving: "Neemt de levering in ontvangst, controleert de vrachtbon en meet kritische temperaturen.", resultaat: "Goederen zijn gekeurd, afwijkingen gerapporteerd en administratief verwerkt.", gedrag: ["Controleert geleverde producten en ingredienten secuur;"], competenties: ["Vakdeskundigheid toepassen", "Instructies en procedures opvolgen"] }
      ]
    },
    "KEUKEN-B1-K3": {
      code: "B1-K3", titel: "Verleent gastvrijheid (Keuken)", type: "Basisdeel Keuken (Alle Niveaus)",
      complexiteit: "De communicatie tussen keuken en bediening vlekkeloos structureren om vertragingen te voorkomen.",
      verantwoordelijkheid: "Verantwoordelijk voor een heldere toelichting van productspecificaties en allergenen.",
      vakkennis: ["Guest journey-structuur in relatie tot de keuken.", "Allergenen-wetgeving."],
      werkprocessen: [
        { code: "B1-K3-W2", titel: "Draagt bij aan een gastgerichte beleving", omschrijving: "Reageert op feedback van gasten en stemt voortdurend af met de bediening voor de optimale timing.", resultaat: "Gasten ervaren een soepel verloop van de maaltijd; klachten zijn direct opgelost.", gedrag: ["Stemt tijdig af met collega's in de eigen en/of aansluitende disciplines;"], competenties: ["Samenwerken en overleggen", "Op de behoeften en verwachtingen van de 'klant' richten"] }
      ]
    },
    "KEUKEN-P3-K1": {
      code: "P3-K1", titel: "Coordineert en optimaliseert keukenwerkzaamheden", type: "Profieldeel Zelfstandig Werkend Kok (Niveau 3)",
      complexiteit: "Coordineren van de totale keukenbrigade tijdens piekuren en Arbowetgeving toepassen.",
      verantwoordelijkheid: "Verantwoordelijk voor de urenbeheersing van junior koks en het up-to-date houden van receptsystemen.",
      vakkennis: ["Kostenstructuur, foodcost en menuopbouw.", "Coachende vaardigheden op de werkvloer."],
      werkprocessen: [
        { code: "P3-K1-W3", titel: "Vernieuwt en verbetert (componenten van) gerechten", omschrijving: "Draagt creatieve suggesties aan voor de menukaart en test innovatieve smaakcombinaties uit.", resultaat: "Nieuwe recepturen zijn culinair uitgewerkt, getest en vastgelegd in het receptensysteem.", gedrag: ["Komt met creatieve ideeen bij het ontwikkelen van nieuwe gerechten;"], competenties: ["Vakdeskundigheid toepassen", "Creeren en innoveren"] }
      ]
    },
    "KEUKEN-P5-K1": {
      code: "P5-K1", titel: "Optimaliseert het gastronomische aanbod", type: "Profieldeel Gespecialiseerd Kok (Niveau 4)",
      complexiteit: "Culinaire trends doorvertalen naar rendabele, hoogwaardige fine-dining concepten.",
      verantwoordelijkheid: "Verantwoordelijk voor het ontwerpen van menuraamwerken en marge-optimalisatie binnen de partie.",
      vakkennis: ["Siervakken voor horecapatisserie.", "Kosten-batenanalyse en verkoopstatistieken."],
      werkprocessen: [
        { code: "P5-K2-W3", titel: "Ontwikkelt nieuwe menu's en gerechten", omschrijving: "Ontwikkelt luxe, innovatieve gerechten op basis van seizoens- en lokale ingredienten.", resultaat: "Vernieuwende menugangen zijn ontworpen, gecalculeerd en operationeel geimplementeerd.", gedrag: ["Toont creativiteit bij het ontwikkelen van nieuwe gastronomische menu's;"], competenties: ["Vakdeskundigheid toepassen", "Creeren en innoveren"] }
      ]
    },
    "KEUKEN-P6-K1": {
      code: "P6-K1", titel: "Stuurt de totale operationele keuken aan", type: "Profieldeel Leidinggevende Keuken (Niveau 4)",
      complexiteit: "Grote keukenprocessen en logistieke stromen sturen op basis van financiele data.",
      verantwoordelijkheid: "Eindverantwoordelijk voor de keukenbegroting, urenbudgetten en menu-engineering processen.",
      vakkennis: ["Menu-engineering methodieken.", "Bedrijfseconomische kengetallen (bruto-/nettomarge)."],
      werkprocessen: [
        { code: "P6-K2-W4", titel: "Voert menu-engineering uit", omschrijving: "Analyseert verkoopcijfers en populariteit van gerechten om de winstgevendheid van de kaart te maximaliseren.", resultaat: "Menukaartwijzigingen zijn bedrijfseconomisch onderbouwd en voorgelegd aan de directie.", gedrag: ["Toont financieel bewustzijn bij voorstellen voor gerechten;"], competenties: ["Analyseren", "Ondernemend en commercieel handelen"] }
      ]
    },

    // GENERIEKE EXAMENEISEN DATA
    "GEN-NED-2F": {
      code: "Nederlands 2F", titel: "Referentieniveau 2F", type: "Wettelijke Generieke Eis",
      complexiteit: "Correcte spelling, grammatica en beroepsspecifieke gesprekstechnieken toepassen.",
      verantwoordelijkheid: "Zelfstandig begrijpen van vakgerichte documenten en helder communiceren.",
      vakkennis: ["Grammatica- en spellingsregels.", "Formele e-mailconventies."],
      werkprocessen: [
        { code: "NED-2F-1", titel: "Mondelinge en schriftelijke communicatie", omschrijving: "Voert professionele gesprekken met gasten en collega's, stelt korte dervingsrapportages op.", resultaat: "De communicatie is zakelijk begrijpelijk en taalkundig correct uitgevoerd.", gedrag: ["Hanteert correct Nederlands in woord en geschrift;"], competenties: ["Communiceren"] }
      ]
    },
    "GEN-NED-3F": {
      code: "Nederlands 3F", titel: "Referentieniveau 3F", type: "Wettelijke Generieke Eis (Niveau 4)",
      complexiteit: "Hanteren van complexe argumentatiestructuren en formele managementrapportages.",
      verantwoordelijkheid: "Verantwoordelijk voor formele schriftelijke plannen richting directie of leveranciers.",
      vakkennis: ["Zakelijke rapportagetechnieken.", "Argumentatiemodellen."],
      werkprocessen: [
        { code: "NED-3F-1", titel: "Beleidsmatige en formele rapportage", omschrijving: "Formuleert operationele plannen, HR-beleidsvoorstellen en businessplannen in vlekkeloos Nederlands.", resultaat: "Beleidsdocumenten zijn overtuigend, gestructureerd en taalkundig perfect opgeleverd.", gedrag: ["Schrijft logisch gestructureerde, formele documenten;"], competenties: ["Formuleren en rapporteren"] }
      ]
    },
    "GEN-REK-2F": {
      code: "Rekenen 2F", titel: "Functioneel Rekenen 2F", type: "Wettelijke Generieke Eis",
      complexiteit: "Toepassen van basisbewerkingen (procenten en metriek stelsel) onder tijdsdruk.",
      verantwoordelijkheid: "Accuraat omrekenen van recepturen bij wisselende gastaantallen.",
      vakkennis: ["Procentberekeningen.", "Metriek stelsel (gram, kilo, liter)."],
      werkprocessen: [
        { code: "REK-2F-1", titel: "Operationele keukencalculaties", omschrijving: "Berekent gewichten en inkoopvolumes op basis van gestandaardiseerde recepten.", resultaat: "Ingredienten zijn foutloos afgewogen en omgerekend naar de juiste volumes.", gedrag: ["Voert wegingen en omrekeningen uiterst accuraat uit;"], competenties: ["Nauwkeurig werken"] }
      ]
    },
    "GEN-REK-3F": {
      code: "Rekenen 3F", titel: "Functioneel Rekenen 3F", type: "Wettelijke Generieke Eis (Niveau 3 & 4)",
      complexiteit: "Interpreteren van financiele overzichten, kostprijsberekeningen en rendementsdiagrammen.",
      verantwoordelijkheid: "Bewaken van afdelingsbudgetten en het voorkomen van margeverlies.",
      vakkennis: ["Margecalculaties (bruto/netto).", "Kostprijsberekeningen (foodcost)."],
      werkprocessen: [
        { code: "REK-3F-1", titel: "Bedrijfseconomische analyses", omschrijving: "Analyseert de foodcost, winstmarges en urenadministraties op basis van kengetallen.", resultaat: "Keukenfinancien zijn sluitend geanalyseerd en verwerkt in rendementsrapportages.", gedrag: ["Trekt logische conclusies uit financiele overzichten;"], competenties: ["Analyseren", "Bedrijfsmatig handelen"] }
      ]
    },
    "GEN-LOB-BUR": {
      code: "LOB & Burgerschap", titel: "Loopbaan & Burgerschap", type: "Wettelijke Generieke Eis",
      complexiteit: "Reflecteren op professionele identiteit en handelen naar maatschappelijke duurzaamheidsdoelen.",
      verantwoordelijkheid: "Actief vormgeven aan het eigen ontwikkelingsplan en CAO-naleving.",
      vakkennis: ["Arbeidsrecht, CAO en Arbo-richtlijnen.", "Sustainable Development Goals (SDG's)."],
      werkprocessen: [
        { code: "LOB-BUR-1", titel: "Vormgeving aan de professionele loopbaan", omschrijving: "Bouwt een BPV-portfolio op, formuleert SMART-leerdoelen en reflecteert op feedback.", resultaat: "Een goedgekeurd portfolio met bewijslast van professionele groei is opgeleverd.", gedrag: ["Toont eigenaarschap over het eigen leerproces;"], competenties: ["Leren"] }
      ]
    }
  }
};

// === AANVULLING VOLLEDIGE KD-STRUCTUUR (basisdelen, profieldelen en werkprocessen) ===
(function () {
  const aanvullendeKerntaken = {
  "HTL-B1-K1": {
    "code": "B1-K1",
    "titel": "Verleent gastvrijheid",
    "type": "Basisdeel Hospitality (Alle niveaus)",
    "complexiteit": "De complexiteit volgt uit de beroepssituatie, het mbo-niveau, de mate van zelfstandigheid en de wisselende omstandigheden in de praktijk.",
    "verantwoordelijkheid": "De student is verantwoordelijk voor het zorgvuldig uitvoeren van de werkprocessen binnen de grenzen van de rol en het niveau.",
    "vakkennis": [
      "Vakkennis en vaardigheden zoals beschreven in het kwalificatiedossier.",
      "Bedrijfsprocedures, veiligheid, kwaliteit en gastgericht handelen."
    ],
    "werkprocessen": [
      {
        "code": "B1-K1-W1",
        "titel": "Bereidt gastgerichte werkzaamheden voor",
        "samenvatting": "Korte inleiding: in dit werkproces laat de student zien dat hij of zij 'bereidt gastgerichte werkzaamheden voor' beroepsgericht, veilig en volgens de afspraken van het leerbedrijf uitvoert.",
        "omschrijving": "De student voert dit werkproces uit in een realistische beroepssituatie en stemt het handelen af op gasten, collega's, kwaliteitseisen en bedrijfsprocedures.",
        "resultaat": "Het werkproces is aantoonbaar uitgevoerd volgens de eisen van het kwalificatiedossier en de praktijkcontext.",
        "gedrag": [
          "Werkt zorgvuldig, gastgericht en volgens geldende procedures;",
          "Stemt tijdig af met collega's, begeleider of leidinggevende;",
          "Reflecteert op het resultaat en benoemt verbeterpunten."
        ],
        "competenties": [
          "Vakdeskundigheid toepassen",
          "Samenwerken en overleggen",
          "Instructies en procedures opvolgen"
        ]
      },
      {
        "code": "B1-K1-W2",
        "titel": "Draagt bij aan een gastgerichte beleving",
        "samenvatting": "Korte inleiding: in dit werkproces laat de student zien dat hij of zij 'draagt bij aan een gastgerichte beleving' beroepsgericht, veilig en volgens de afspraken van het leerbedrijf uitvoert.",
        "omschrijving": "De student voert dit werkproces uit in een realistische beroepssituatie en stemt het handelen af op gasten, collega's, kwaliteitseisen en bedrijfsprocedures.",
        "resultaat": "Het werkproces is aantoonbaar uitgevoerd volgens de eisen van het kwalificatiedossier en de praktijkcontext.",
        "gedrag": [
          "Werkt zorgvuldig, gastgericht en volgens geldende procedures;",
          "Stemt tijdig af met collega's, begeleider of leidinggevende;",
          "Reflecteert op het resultaat en benoemt verbeterpunten."
        ],
        "competenties": [
          "Vakdeskundigheid toepassen",
          "Samenwerken en overleggen",
          "Instructies en procedures opvolgen"
        ]
      },
      {
        "code": "B1-K1-W3",
        "titel": "Draagt bij aan een sociaal en fysiek veilige werkomgeving",
        "samenvatting": "Korte inleiding: in dit werkproces laat de student zien dat hij of zij 'draagt bij aan een sociaal en fysiek veilige werkomgeving' beroepsgericht, veilig en volgens de afspraken van het leerbedrijf uitvoert.",
        "omschrijving": "De student voert dit werkproces uit in een realistische beroepssituatie en stemt het handelen af op gasten, collega's, kwaliteitseisen en bedrijfsprocedures.",
        "resultaat": "Het werkproces is aantoonbaar uitgevoerd volgens de eisen van het kwalificatiedossier en de praktijkcontext.",
        "gedrag": [
          "Werkt zorgvuldig, gastgericht en volgens geldende procedures;",
          "Stemt tijdig af met collega's, begeleider of leidinggevende;",
          "Reflecteert op het resultaat en benoemt verbeterpunten."
        ],
        "competenties": [
          "Vakdeskundigheid toepassen",
          "Samenwerken en overleggen",
          "Instructies en procedures opvolgen"
        ]
      },
      {
        "code": "B1-K1-W4",
        "titel": "Rondt gastgerichte werkzaamheden af",
        "samenvatting": "Korte inleiding: in dit werkproces laat de student zien dat hij of zij 'rondt gastgerichte werkzaamheden af' beroepsgericht, veilig en volgens de afspraken van het leerbedrijf uitvoert.",
        "omschrijving": "De student voert dit werkproces uit in een realistische beroepssituatie en stemt het handelen af op gasten, collega's, kwaliteitseisen en bedrijfsprocedures.",
        "resultaat": "Het werkproces is aantoonbaar uitgevoerd volgens de eisen van het kwalificatiedossier en de praktijkcontext.",
        "gedrag": [
          "Werkt zorgvuldig, gastgericht en volgens geldende procedures;",
          "Stemt tijdig af met collega's, begeleider of leidinggevende;",
          "Reflecteert op het resultaat en benoemt verbeterpunten."
        ],
        "competenties": [
          "Vakdeskundigheid toepassen",
          "Samenwerken en overleggen",
          "Instructies en procedures opvolgen"
        ]
      },
      {
        "code": "B1-K1-W5",
        "titel": "Evalueert de (eigen) werkzaamheden",
        "samenvatting": "Korte inleiding: in dit werkproces laat de student zien dat hij of zij 'evalueert de (eigen) werkzaamheden' beroepsgericht, veilig en volgens de afspraken van het leerbedrijf uitvoert.",
        "omschrijving": "De student voert dit werkproces uit in een realistische beroepssituatie en stemt het handelen af op gasten, collega's, kwaliteitseisen en bedrijfsprocedures.",
        "resultaat": "Het werkproces is aantoonbaar uitgevoerd volgens de eisen van het kwalificatiedossier en de praktijkcontext.",
        "gedrag": [
          "Werkt zorgvuldig, gastgericht en volgens geldende procedures;",
          "Stemt tijdig af met collega's, begeleider of leidinggevende;",
          "Reflecteert op het resultaat en benoemt verbeterpunten."
        ],
        "competenties": [
          "Vakdeskundigheid toepassen",
          "Samenwerken en overleggen",
          "Instructies en procedures opvolgen"
        ]
      }
    ]
  },
  "HTL-B1-K2": {
    "code": "B1-K2",
    "titel": "Voert hospitality werkzaamheden uit",
    "type": "Basisdeel Hospitality (Alle niveaus)",
    "complexiteit": "De complexiteit volgt uit de beroepssituatie, het mbo-niveau, de mate van zelfstandigheid en de wisselende omstandigheden in de praktijk.",
    "verantwoordelijkheid": "De student is verantwoordelijk voor het zorgvuldig uitvoeren van de werkprocessen binnen de grenzen van de rol en het niveau.",
    "vakkennis": [
      "Vakkennis en vaardigheden zoals beschreven in het kwalificatiedossier.",
      "Bedrijfsprocedures, veiligheid, kwaliteit en gastgericht handelen."
    ],
    "werkprocessen": [
      {
        "code": "B1-K2-W1",
        "titel": "Verwerkt reserveringen",
        "samenvatting": "Korte inleiding: in dit werkproces laat de student zien dat hij of zij 'verwerkt reserveringen' beroepsgericht, veilig en volgens de afspraken van het leerbedrijf uitvoert.",
        "omschrijving": "De student voert dit werkproces uit in een realistische beroepssituatie en stemt het handelen af op gasten, collega's, kwaliteitseisen en bedrijfsprocedures.",
        "resultaat": "Het werkproces is aantoonbaar uitgevoerd volgens de eisen van het kwalificatiedossier en de praktijkcontext.",
        "gedrag": [
          "Werkt zorgvuldig, gastgericht en volgens geldende procedures;",
          "Stemt tijdig af met collega's, begeleider of leidinggevende;",
          "Reflecteert op het resultaat en benoemt verbeterpunten."
        ],
        "competenties": [
          "Vakdeskundigheid toepassen",
          "Samenwerken en overleggen",
          "Instructies en procedures opvolgen"
        ]
      },
      {
        "code": "B1-K2-W2",
        "titel": "Ontvangt en neemt afscheid van gasten",
        "samenvatting": "Korte inleiding: in dit werkproces laat de student zien dat hij of zij 'ontvangt en neemt afscheid van gasten' beroepsgericht, veilig en volgens de afspraken van het leerbedrijf uitvoert.",
        "omschrijving": "De student voert dit werkproces uit in een realistische beroepssituatie en stemt het handelen af op gasten, collega's, kwaliteitseisen en bedrijfsprocedures.",
        "resultaat": "Het werkproces is aantoonbaar uitgevoerd volgens de eisen van het kwalificatiedossier en de praktijkcontext.",
        "gedrag": [
          "Werkt zorgvuldig, gastgericht en volgens geldende procedures;",
          "Stemt tijdig af met collega's, begeleider of leidinggevende;",
          "Reflecteert op het resultaat en benoemt verbeterpunten."
        ],
        "competenties": [
          "Vakdeskundigheid toepassen",
          "Samenwerken en overleggen",
          "Instructies en procedures opvolgen"
        ]
      },
      {
        "code": "B1-K2-W3",
        "titel": "Treedt op als aanspreekpunt",
        "samenvatting": "Korte inleiding: in dit werkproces laat de student zien dat hij of zij 'treedt op als aanspreekpunt' beroepsgericht, veilig en volgens de afspraken van het leerbedrijf uitvoert.",
        "omschrijving": "De student voert dit werkproces uit in een realistische beroepssituatie en stemt het handelen af op gasten, collega's, kwaliteitseisen en bedrijfsprocedures.",
        "resultaat": "Het werkproces is aantoonbaar uitgevoerd volgens de eisen van het kwalificatiedossier en de praktijkcontext.",
        "gedrag": [
          "Werkt zorgvuldig, gastgericht en volgens geldende procedures;",
          "Stemt tijdig af met collega's, begeleider of leidinggevende;",
          "Reflecteert op het resultaat en benoemt verbeterpunten."
        ],
        "competenties": [
          "Vakdeskundigheid toepassen",
          "Samenwerken en overleggen",
          "Instructies en procedures opvolgen"
        ]
      },
      {
        "code": "B1-K2-W4",
        "titel": "Handelt bij incidenten of calamiteiten",
        "samenvatting": "Korte inleiding: in dit werkproces laat de student zien dat hij of zij 'handelt bij incidenten of calamiteiten' beroepsgericht, veilig en volgens de afspraken van het leerbedrijf uitvoert.",
        "omschrijving": "De student voert dit werkproces uit in een realistische beroepssituatie en stemt het handelen af op gasten, collega's, kwaliteitseisen en bedrijfsprocedures.",
        "resultaat": "Het werkproces is aantoonbaar uitgevoerd volgens de eisen van het kwalificatiedossier en de praktijkcontext.",
        "gedrag": [
          "Werkt zorgvuldig, gastgericht en volgens geldende procedures;",
          "Stemt tijdig af met collega's, begeleider of leidinggevende;",
          "Reflecteert op het resultaat en benoemt verbeterpunten."
        ],
        "competenties": [
          "Vakdeskundigheid toepassen",
          "Samenwerken en overleggen",
          "Instructies en procedures opvolgen"
        ]
      },
      {
        "code": "B1-K2-W5",
        "titel": "Verkoopt of verhuurt producten en/of diensten",
        "samenvatting": "Korte inleiding: in dit werkproces laat de student zien dat hij of zij 'verkoopt of verhuurt producten en/of diensten' beroepsgericht, veilig en volgens de afspraken van het leerbedrijf uitvoert.",
        "omschrijving": "De student voert dit werkproces uit in een realistische beroepssituatie en stemt het handelen af op gasten, collega's, kwaliteitseisen en bedrijfsprocedures.",
        "resultaat": "Het werkproces is aantoonbaar uitgevoerd volgens de eisen van het kwalificatiedossier en de praktijkcontext.",
        "gedrag": [
          "Werkt zorgvuldig, gastgericht en volgens geldende procedures;",
          "Stemt tijdig af met collega's, begeleider of leidinggevende;",
          "Reflecteert op het resultaat en benoemt verbeterpunten."
        ],
        "competenties": [
          "Vakdeskundigheid toepassen",
          "Samenwerken en overleggen",
          "Instructies en procedures opvolgen"
        ]
      }
    ]
  },
  "HTL-P1-K1": {
    "code": "P1-K1",
    "titel": "Bedient gasten",
    "type": "Profieldeel Medewerker Hospitality (Niveau 2)",
    "complexiteit": "De complexiteit volgt uit de beroepssituatie, het mbo-niveau, de mate van zelfstandigheid en de wisselende omstandigheden in de praktijk.",
    "verantwoordelijkheid": "De student is verantwoordelijk voor het zorgvuldig uitvoeren van de werkprocessen binnen de grenzen van de rol en het niveau.",
    "vakkennis": [
      "Vakkennis en vaardigheden zoals beschreven in het kwalificatiedossier.",
      "Bedrijfsprocedures, veiligheid, kwaliteit en gastgericht handelen."
    ],
    "werkprocessen": [
      {
        "code": "P1-K1-W1",
        "titel": "Neemt bestellingen op en informeert",
        "samenvatting": "Korte inleiding: in dit werkproces laat de student zien dat hij of zij 'neemt bestellingen op en informeert' beroepsgericht, veilig en volgens de afspraken van het leerbedrijf uitvoert.",
        "omschrijving": "De student voert dit werkproces uit in een realistische beroepssituatie en stemt het handelen af op gasten, collega's, kwaliteitseisen en bedrijfsprocedures.",
        "resultaat": "Het werkproces is aantoonbaar uitgevoerd volgens de eisen van het kwalificatiedossier en de praktijkcontext.",
        "gedrag": [
          "Werkt zorgvuldig, gastgericht en volgens geldende procedures;",
          "Stemt tijdig af met collega's, begeleider of leidinggevende;",
          "Reflecteert op het resultaat en benoemt verbeterpunten."
        ],
        "competenties": [
          "Vakdeskundigheid toepassen",
          "Samenwerken en overleggen",
          "Instructies en procedures opvolgen"
        ]
      },
      {
        "code": "P1-K1-W2",
        "titel": "Maakt bestellingen klaar",
        "samenvatting": "Korte inleiding: in dit werkproces laat de student zien dat hij of zij 'maakt bestellingen klaar' beroepsgericht, veilig en volgens de afspraken van het leerbedrijf uitvoert.",
        "omschrijving": "De student voert dit werkproces uit in een realistische beroepssituatie en stemt het handelen af op gasten, collega's, kwaliteitseisen en bedrijfsprocedures.",
        "resultaat": "Het werkproces is aantoonbaar uitgevoerd volgens de eisen van het kwalificatiedossier en de praktijkcontext.",
        "gedrag": [
          "Werkt zorgvuldig, gastgericht en volgens geldende procedures;",
          "Stemt tijdig af met collega's, begeleider of leidinggevende;",
          "Reflecteert op het resultaat en benoemt verbeterpunten."
        ],
        "competenties": [
          "Vakdeskundigheid toepassen",
          "Samenwerken en overleggen",
          "Instructies en procedures opvolgen"
        ]
      },
      {
        "code": "P1-K1-W3",
        "titel": "Serveert bestellingen",
        "samenvatting": "Korte inleiding: in dit werkproces laat de student zien dat hij of zij 'serveert bestellingen' beroepsgericht, veilig en volgens de afspraken van het leerbedrijf uitvoert.",
        "omschrijving": "De student voert dit werkproces uit in een realistische beroepssituatie en stemt het handelen af op gasten, collega's, kwaliteitseisen en bedrijfsprocedures.",
        "resultaat": "Het werkproces is aantoonbaar uitgevoerd volgens de eisen van het kwalificatiedossier en de praktijkcontext.",
        "gedrag": [
          "Werkt zorgvuldig, gastgericht en volgens geldende procedures;",
          "Stemt tijdig af met collega's, begeleider of leidinggevende;",
          "Reflecteert op het resultaat en benoemt verbeterpunten."
        ],
        "competenties": [
          "Vakdeskundigheid toepassen",
          "Samenwerken en overleggen",
          "Instructies en procedures opvolgen"
        ]
      },
      {
        "code": "P1-K1-W4",
        "titel": "Werkt mee bij activiteiten en/of evenementen",
        "samenvatting": "Korte inleiding: in dit werkproces laat de student zien dat hij of zij 'werkt mee bij activiteiten en/of evenementen' beroepsgericht, veilig en volgens de afspraken van het leerbedrijf uitvoert.",
        "omschrijving": "De student voert dit werkproces uit in een realistische beroepssituatie en stemt het handelen af op gasten, collega's, kwaliteitseisen en bedrijfsprocedures.",
        "resultaat": "Het werkproces is aantoonbaar uitgevoerd volgens de eisen van het kwalificatiedossier en de praktijkcontext.",
        "gedrag": [
          "Werkt zorgvuldig, gastgericht en volgens geldende procedures;",
          "Stemt tijdig af met collega's, begeleider of leidinggevende;",
          "Reflecteert op het resultaat en benoemt verbeterpunten."
        ],
        "competenties": [
          "Vakdeskundigheid toepassen",
          "Samenwerken en overleggen",
          "Instructies en procedures opvolgen"
        ]
      }
    ]
  },
  "HTL-P2-K1": {
    "code": "P2-K1",
    "titel": "Bedient gasten",
    "type": "Profieldeel Zelfstandig Medewerker Hospitality (Niveau 3)",
    "complexiteit": "De complexiteit volgt uit de beroepssituatie, het mbo-niveau, de mate van zelfstandigheid en de wisselende omstandigheden in de praktijk.",
    "verantwoordelijkheid": "De student is verantwoordelijk voor het zorgvuldig uitvoeren van de werkprocessen binnen de grenzen van de rol en het niveau.",
    "vakkennis": [
      "Vakkennis en vaardigheden zoals beschreven in het kwalificatiedossier.",
      "Bedrijfsprocedures, veiligheid, kwaliteit en gastgericht handelen."
    ],
    "werkprocessen": [
      {
        "code": "P2-K1-W1",
        "titel": "Neemt bestellingen op en adviseert",
        "samenvatting": "Korte inleiding: in dit werkproces laat de student zien dat hij of zij 'neemt bestellingen op en adviseert' beroepsgericht, veilig en volgens de afspraken van het leerbedrijf uitvoert.",
        "omschrijving": "De student voert dit werkproces uit in een realistische beroepssituatie en stemt het handelen af op gasten, collega's, kwaliteitseisen en bedrijfsprocedures.",
        "resultaat": "Het werkproces is aantoonbaar uitgevoerd volgens de eisen van het kwalificatiedossier en de praktijkcontext.",
        "gedrag": [
          "Werkt zorgvuldig, gastgericht en volgens geldende procedures;",
          "Stemt tijdig af met collega's, begeleider of leidinggevende;",
          "Reflecteert op het resultaat en benoemt verbeterpunten."
        ],
        "competenties": [
          "Vakdeskundigheid toepassen",
          "Samenwerken en overleggen",
          "Instructies en procedures opvolgen"
        ]
      },
      {
        "code": "P2-K1-W2",
        "titel": "Maakt bestellingen klaar",
        "samenvatting": "Korte inleiding: in dit werkproces laat de student zien dat hij of zij 'maakt bestellingen klaar' beroepsgericht, veilig en volgens de afspraken van het leerbedrijf uitvoert.",
        "omschrijving": "De student voert dit werkproces uit in een realistische beroepssituatie en stemt het handelen af op gasten, collega's, kwaliteitseisen en bedrijfsprocedures.",
        "resultaat": "Het werkproces is aantoonbaar uitgevoerd volgens de eisen van het kwalificatiedossier en de praktijkcontext.",
        "gedrag": [
          "Werkt zorgvuldig, gastgericht en volgens geldende procedures;",
          "Stemt tijdig af met collega's, begeleider of leidinggevende;",
          "Reflecteert op het resultaat en benoemt verbeterpunten."
        ],
        "competenties": [
          "Vakdeskundigheid toepassen",
          "Samenwerken en overleggen",
          "Instructies en procedures opvolgen"
        ]
      },
      {
        "code": "P2-K1-W3",
        "titel": "Serveert bestellingen",
        "samenvatting": "Korte inleiding: in dit werkproces laat de student zien dat hij of zij 'serveert bestellingen' beroepsgericht, veilig en volgens de afspraken van het leerbedrijf uitvoert.",
        "omschrijving": "De student voert dit werkproces uit in een realistische beroepssituatie en stemt het handelen af op gasten, collega's, kwaliteitseisen en bedrijfsprocedures.",
        "resultaat": "Het werkproces is aantoonbaar uitgevoerd volgens de eisen van het kwalificatiedossier en de praktijkcontext.",
        "gedrag": [
          "Werkt zorgvuldig, gastgericht en volgens geldende procedures;",
          "Stemt tijdig af met collega's, begeleider of leidinggevende;",
          "Reflecteert op het resultaat en benoemt verbeterpunten."
        ],
        "competenties": [
          "Vakdeskundigheid toepassen",
          "Samenwerken en overleggen",
          "Instructies en procedures opvolgen"
        ]
      },
      {
        "code": "P2-K1-W4",
        "titel": "Verzorgt en coordineert activiteiten en/of evenementen",
        "samenvatting": "Korte inleiding: in dit werkproces laat de student zien dat hij of zij 'verzorgt en coordineert activiteiten en/of evenementen' beroepsgericht, veilig en volgens de afspraken van het leerbedrijf uitvoert.",
        "omschrijving": "De student voert dit werkproces uit in een realistische beroepssituatie en stemt het handelen af op gasten, collega's, kwaliteitseisen en bedrijfsprocedures.",
        "resultaat": "Het werkproces is aantoonbaar uitgevoerd volgens de eisen van het kwalificatiedossier en de praktijkcontext.",
        "gedrag": [
          "Werkt zorgvuldig, gastgericht en volgens geldende procedures;",
          "Stemt tijdig af met collega's, begeleider of leidinggevende;",
          "Reflecteert op het resultaat en benoemt verbeterpunten."
        ],
        "competenties": [
          "Vakdeskundigheid toepassen",
          "Samenwerken en overleggen",
          "Instructies en procedures opvolgen"
        ]
      }
    ]
  },
  "HTL-P2-K2": {
    "code": "P2-K2",
    "titel": "Coordineert hospitality werkzaamheden",
    "type": "Profieldeel Zelfstandig Medewerker Hospitality (Niveau 3)",
    "complexiteit": "De complexiteit volgt uit de beroepssituatie, het mbo-niveau, de mate van zelfstandigheid en de wisselende omstandigheden in de praktijk.",
    "verantwoordelijkheid": "De student is verantwoordelijk voor het zorgvuldig uitvoeren van de werkprocessen binnen de grenzen van de rol en het niveau.",
    "vakkennis": [
      "Vakkennis en vaardigheden zoals beschreven in het kwalificatiedossier.",
      "Bedrijfsprocedures, veiligheid, kwaliteit en gastgericht handelen."
    ],
    "werkprocessen": [
      {
        "code": "P2-K2-W1",
        "titel": "Plant werkzaamheden, en instrueert en begeleidt medewerkers",
        "samenvatting": "Korte inleiding: in dit werkproces laat de student zien dat hij of zij 'plant werkzaamheden, en instrueert en begeleidt medewerkers' beroepsgericht, veilig en volgens de afspraken van het leerbedrijf uitvoert.",
        "omschrijving": "De student voert dit werkproces uit in een realistische beroepssituatie en stemt het handelen af op gasten, collega's, kwaliteitseisen en bedrijfsprocedures.",
        "resultaat": "Het werkproces is aantoonbaar uitgevoerd volgens de eisen van het kwalificatiedossier en de praktijkcontext.",
        "gedrag": [
          "Werkt zorgvuldig, gastgericht en volgens geldende procedures;",
          "Stemt tijdig af met collega's, begeleider of leidinggevende;",
          "Reflecteert op het resultaat en benoemt verbeterpunten."
        ],
        "competenties": [
          "Vakdeskundigheid toepassen",
          "Samenwerken en overleggen",
          "Instructies en procedures opvolgen"
        ]
      },
      {
        "code": "P2-K2-W2",
        "titel": "Beheert de voorraad",
        "samenvatting": "Korte inleiding: in dit werkproces laat de student zien dat hij of zij 'beheert de voorraad' beroepsgericht, veilig en volgens de afspraken van het leerbedrijf uitvoert.",
        "omschrijving": "De student voert dit werkproces uit in een realistische beroepssituatie en stemt het handelen af op gasten, collega's, kwaliteitseisen en bedrijfsprocedures.",
        "resultaat": "Het werkproces is aantoonbaar uitgevoerd volgens de eisen van het kwalificatiedossier en de praktijkcontext.",
        "gedrag": [
          "Werkt zorgvuldig, gastgericht en volgens geldende procedures;",
          "Stemt tijdig af met collega's, begeleider of leidinggevende;",
          "Reflecteert op het resultaat en benoemt verbeterpunten."
        ],
        "competenties": [
          "Vakdeskundigheid toepassen",
          "Samenwerken en overleggen",
          "Instructies en procedures opvolgen"
        ]
      },
      {
        "code": "P2-K2-W3",
        "titel": "Behandelt klachten",
        "samenvatting": "Korte inleiding: in dit werkproces laat de student zien dat hij of zij 'behandelt klachten' beroepsgericht, veilig en volgens de afspraken van het leerbedrijf uitvoert.",
        "omschrijving": "De student voert dit werkproces uit in een realistische beroepssituatie en stemt het handelen af op gasten, collega's, kwaliteitseisen en bedrijfsprocedures.",
        "resultaat": "Het werkproces is aantoonbaar uitgevoerd volgens de eisen van het kwalificatiedossier en de praktijkcontext.",
        "gedrag": [
          "Werkt zorgvuldig, gastgericht en volgens geldende procedures;",
          "Stemt tijdig af met collega's, begeleider of leidinggevende;",
          "Reflecteert op het resultaat en benoemt verbeterpunten."
        ],
        "competenties": [
          "Vakdeskundigheid toepassen",
          "Samenwerken en overleggen",
          "Instructies en procedures opvolgen"
        ]
      },
      {
        "code": "P2-K2-W4",
        "titel": "Doet een verbetervoorstel",
        "samenvatting": "Korte inleiding: in dit werkproces laat de student zien dat hij of zij 'doet een verbetervoorstel' beroepsgericht, veilig en volgens de afspraken van het leerbedrijf uitvoert.",
        "omschrijving": "De student voert dit werkproces uit in een realistische beroepssituatie en stemt het handelen af op gasten, collega's, kwaliteitseisen en bedrijfsprocedures.",
        "resultaat": "Het werkproces is aantoonbaar uitgevoerd volgens de eisen van het kwalificatiedossier en de praktijkcontext.",
        "gedrag": [
          "Werkt zorgvuldig, gastgericht en volgens geldende procedures;",
          "Stemt tijdig af met collega's, begeleider of leidinggevende;",
          "Reflecteert op het resultaat en benoemt verbeterpunten."
        ],
        "competenties": [
          "Vakdeskundigheid toepassen",
          "Samenwerken en overleggen",
          "Instructies en procedures opvolgen"
        ]
      }
    ]
  },
  "HTL-P5-K1": {
    "code": "P5-K1",
    "titel": "Voert operationele werkzaamheden uit",
    "type": "Profieldeel Leidinggevende Hospitality (Niveau 4)",
    "complexiteit": "De complexiteit volgt uit de beroepssituatie, het mbo-niveau, de mate van zelfstandigheid en de wisselende omstandigheden in de praktijk.",
    "verantwoordelijkheid": "De student is verantwoordelijk voor het zorgvuldig uitvoeren van de werkprocessen binnen de grenzen van de rol en het niveau.",
    "vakkennis": [
      "Vakkennis en vaardigheden zoals beschreven in het kwalificatiedossier.",
      "Bedrijfsprocedures, veiligheid, kwaliteit en gastgericht handelen."
    ],
    "werkprocessen": [
      {
        "code": "P5-K1-W1",
        "titel": "Werkt mee in drank-, spijs-, en/of logiesverstrekkende bedrijven",
        "samenvatting": "Korte inleiding: in dit werkproces laat de student zien dat hij of zij 'werkt mee in drank-, spijs-, en/of logiesverstrekkende bedrijven' beroepsgericht, veilig en volgens de afspraken van het leerbedrijf uitvoert.",
        "omschrijving": "De student voert dit werkproces uit in een realistische beroepssituatie en stemt het handelen af op gasten, collega's, kwaliteitseisen en bedrijfsprocedures.",
        "resultaat": "Het werkproces is aantoonbaar uitgevoerd volgens de eisen van het kwalificatiedossier en de praktijkcontext.",
        "gedrag": [
          "Werkt zorgvuldig, gastgericht en volgens geldende procedures;",
          "Stemt tijdig af met collega's, begeleider of leidinggevende;",
          "Reflecteert op het resultaat en benoemt verbeterpunten."
        ],
        "competenties": [
          "Vakdeskundigheid toepassen",
          "Samenwerken en overleggen",
          "Instructies en procedures opvolgen"
        ]
      },
      {
        "code": "P5-K1-W2",
        "titel": "Evalueert gasttevredenheid en behandelt klachten",
        "samenvatting": "Korte inleiding: in dit werkproces laat de student zien dat hij of zij 'evalueert gasttevredenheid en behandelt klachten' beroepsgericht, veilig en volgens de afspraken van het leerbedrijf uitvoert.",
        "omschrijving": "De student voert dit werkproces uit in een realistische beroepssituatie en stemt het handelen af op gasten, collega's, kwaliteitseisen en bedrijfsprocedures.",
        "resultaat": "Het werkproces is aantoonbaar uitgevoerd volgens de eisen van het kwalificatiedossier en de praktijkcontext.",
        "gedrag": [
          "Werkt zorgvuldig, gastgericht en volgens geldende procedures;",
          "Stemt tijdig af met collega's, begeleider of leidinggevende;",
          "Reflecteert op het resultaat en benoemt verbeterpunten."
        ],
        "competenties": [
          "Vakdeskundigheid toepassen",
          "Samenwerken en overleggen",
          "Instructies en procedures opvolgen"
        ]
      },
      {
        "code": "P5-K1-W3",
        "titel": "Bewaakt de voorraad",
        "samenvatting": "Korte inleiding: in dit werkproces laat de student zien dat hij of zij 'bewaakt de voorraad' beroepsgericht, veilig en volgens de afspraken van het leerbedrijf uitvoert.",
        "omschrijving": "De student voert dit werkproces uit in een realistische beroepssituatie en stemt het handelen af op gasten, collega's, kwaliteitseisen en bedrijfsprocedures.",
        "resultaat": "Het werkproces is aantoonbaar uitgevoerd volgens de eisen van het kwalificatiedossier en de praktijkcontext.",
        "gedrag": [
          "Werkt zorgvuldig, gastgericht en volgens geldende procedures;",
          "Stemt tijdig af met collega's, begeleider of leidinggevende;",
          "Reflecteert op het resultaat en benoemt verbeterpunten."
        ],
        "competenties": [
          "Vakdeskundigheid toepassen",
          "Samenwerken en overleggen",
          "Instructies en procedures opvolgen"
        ]
      },
      {
        "code": "P5-K1-W4",
        "titel": "Voert het sociaal-hygienisch beleid uit",
        "samenvatting": "Korte inleiding: in dit werkproces laat de student zien dat hij of zij 'voert het sociaal-hygienisch beleid uit' beroepsgericht, veilig en volgens de afspraken van het leerbedrijf uitvoert.",
        "omschrijving": "De student voert dit werkproces uit in een realistische beroepssituatie en stemt het handelen af op gasten, collega's, kwaliteitseisen en bedrijfsprocedures.",
        "resultaat": "Het werkproces is aantoonbaar uitgevoerd volgens de eisen van het kwalificatiedossier en de praktijkcontext.",
        "gedrag": [
          "Werkt zorgvuldig, gastgericht en volgens geldende procedures;",
          "Stemt tijdig af met collega's, begeleider of leidinggevende;",
          "Reflecteert op het resultaat en benoemt verbeterpunten."
        ],
        "competenties": [
          "Vakdeskundigheid toepassen",
          "Samenwerken en overleggen",
          "Instructies en procedures opvolgen"
        ]
      },
      {
        "code": "P5-K1-W5",
        "titel": "Doet een voorstel voor (nieuwe) producten/diensten voor het hospitalitybedrijf",
        "samenvatting": "Korte inleiding: in dit werkproces laat de student zien dat hij of zij 'doet een voorstel voor (nieuwe) producten/diensten voor het hospitalitybedrijf' beroepsgericht, veilig en volgens de afspraken van het leerbedrijf uitvoert.",
        "omschrijving": "De student voert dit werkproces uit in een realistische beroepssituatie en stemt het handelen af op gasten, collega's, kwaliteitseisen en bedrijfsprocedures.",
        "resultaat": "Het werkproces is aantoonbaar uitgevoerd volgens de eisen van het kwalificatiedossier en de praktijkcontext.",
        "gedrag": [
          "Werkt zorgvuldig, gastgericht en volgens geldende procedures;",
          "Stemt tijdig af met collega's, begeleider of leidinggevende;",
          "Reflecteert op het resultaat en benoemt verbeterpunten."
        ],
        "competenties": [
          "Vakdeskundigheid toepassen",
          "Samenwerken en overleggen",
          "Instructies en procedures opvolgen"
        ]
      }
    ]
  },
  "HTL-P5-K2": {
    "code": "P5-K2",
    "titel": "Geeft leiding aan medewerkers",
    "type": "Profieldeel Leidinggevende Hospitality (Niveau 4)",
    "complexiteit": "De complexiteit volgt uit de beroepssituatie, het mbo-niveau, de mate van zelfstandigheid en de wisselende omstandigheden in de praktijk.",
    "verantwoordelijkheid": "De student is verantwoordelijk voor het zorgvuldig uitvoeren van de werkprocessen binnen de grenzen van de rol en het niveau.",
    "vakkennis": [
      "Vakkennis en vaardigheden zoals beschreven in het kwalificatiedossier.",
      "Bedrijfsprocedures, veiligheid, kwaliteit en gastgericht handelen."
    ],
    "werkprocessen": [
      {
        "code": "P5-K2-W1",
        "titel": "Stuurt medewerkers aan",
        "samenvatting": "Korte inleiding: in dit werkproces laat de student zien dat hij of zij 'stuurt medewerkers aan' beroepsgericht, veilig en volgens de afspraken van het leerbedrijf uitvoert.",
        "omschrijving": "De student voert dit werkproces uit in een realistische beroepssituatie en stemt het handelen af op gasten, collega's, kwaliteitseisen en bedrijfsprocedures.",
        "resultaat": "Het werkproces is aantoonbaar uitgevoerd volgens de eisen van het kwalificatiedossier en de praktijkcontext.",
        "gedrag": [
          "Werkt zorgvuldig, gastgericht en volgens geldende procedures;",
          "Stemt tijdig af met collega's, begeleider of leidinggevende;",
          "Reflecteert op het resultaat en benoemt verbeterpunten."
        ],
        "competenties": [
          "Vakdeskundigheid toepassen",
          "Samenwerken en overleggen",
          "Instructies en procedures opvolgen"
        ]
      },
      {
        "code": "P5-K2-W2",
        "titel": "Ondersteunt medewerkers in hun functioneren en ontwikkeling",
        "samenvatting": "Korte inleiding: in dit werkproces laat de student zien dat hij of zij 'ondersteunt medewerkers in hun functioneren en ontwikkeling' beroepsgericht, veilig en volgens de afspraken van het leerbedrijf uitvoert.",
        "omschrijving": "De student voert dit werkproces uit in een realistische beroepssituatie en stemt het handelen af op gasten, collega's, kwaliteitseisen en bedrijfsprocedures.",
        "resultaat": "Het werkproces is aantoonbaar uitgevoerd volgens de eisen van het kwalificatiedossier en de praktijkcontext.",
        "gedrag": [
          "Werkt zorgvuldig, gastgericht en volgens geldende procedures;",
          "Stemt tijdig af met collega's, begeleider of leidinggevende;",
          "Reflecteert op het resultaat en benoemt verbeterpunten."
        ],
        "competenties": [
          "Vakdeskundigheid toepassen",
          "Samenwerken en overleggen",
          "Instructies en procedures opvolgen"
        ]
      },
      {
        "code": "P5-K2-W3",
        "titel": "Stemt af met collega's",
        "samenvatting": "Korte inleiding: in dit werkproces laat de student zien dat hij of zij 'stemt af met collega's' beroepsgericht, veilig en volgens de afspraken van het leerbedrijf uitvoert.",
        "omschrijving": "De student voert dit werkproces uit in een realistische beroepssituatie en stemt het handelen af op gasten, collega's, kwaliteitseisen en bedrijfsprocedures.",
        "resultaat": "Het werkproces is aantoonbaar uitgevoerd volgens de eisen van het kwalificatiedossier en de praktijkcontext.",
        "gedrag": [
          "Werkt zorgvuldig, gastgericht en volgens geldende procedures;",
          "Stemt tijdig af met collega's, begeleider of leidinggevende;",
          "Reflecteert op het resultaat en benoemt verbeterpunten."
        ],
        "competenties": [
          "Vakdeskundigheid toepassen",
          "Samenwerken en overleggen",
          "Instructies en procedures opvolgen"
        ]
      }
    ]
  },
  "HTL-P5-K3": {
    "code": "P5-K3",
    "titel": "Stuurt bedrijfsprocessen aan",
    "type": "Profieldeel Leidinggevende Hospitality (Niveau 4)",
    "complexiteit": "De complexiteit volgt uit de beroepssituatie, het mbo-niveau, de mate van zelfstandigheid en de wisselende omstandigheden in de praktijk.",
    "verantwoordelijkheid": "De student is verantwoordelijk voor het zorgvuldig uitvoeren van de werkprocessen binnen de grenzen van de rol en het niveau.",
    "vakkennis": [
      "Vakkennis en vaardigheden zoals beschreven in het kwalificatiedossier.",
      "Bedrijfsprocedures, veiligheid, kwaliteit en gastgericht handelen."
    ],
    "werkprocessen": [
      {
        "code": "P5-K3-W1",
        "titel": "Maakt en bewaakt het operationeel plan",
        "samenvatting": "Korte inleiding: in dit werkproces laat de student zien dat hij of zij 'maakt en bewaakt het operationeel plan' beroepsgericht, veilig en volgens de afspraken van het leerbedrijf uitvoert.",
        "omschrijving": "De student voert dit werkproces uit in een realistische beroepssituatie en stemt het handelen af op gasten, collega's, kwaliteitseisen en bedrijfsprocedures.",
        "resultaat": "Het werkproces is aantoonbaar uitgevoerd volgens de eisen van het kwalificatiedossier en de praktijkcontext.",
        "gedrag": [
          "Werkt zorgvuldig, gastgericht en volgens geldende procedures;",
          "Stemt tijdig af met collega's, begeleider of leidinggevende;",
          "Reflecteert op het resultaat en benoemt verbeterpunten."
        ],
        "competenties": [
          "Vakdeskundigheid toepassen",
          "Samenwerken en overleggen",
          "Instructies en procedures opvolgen"
        ]
      },
      {
        "code": "P5-K3-W2",
        "titel": "Implementeert het HR-beleid",
        "samenvatting": "Korte inleiding: in dit werkproces laat de student zien dat hij of zij 'implementeert het hr-beleid' beroepsgericht, veilig en volgens de afspraken van het leerbedrijf uitvoert.",
        "omschrijving": "De student voert dit werkproces uit in een realistische beroepssituatie en stemt het handelen af op gasten, collega's, kwaliteitseisen en bedrijfsprocedures.",
        "resultaat": "Het werkproces is aantoonbaar uitgevoerd volgens de eisen van het kwalificatiedossier en de praktijkcontext.",
        "gedrag": [
          "Werkt zorgvuldig, gastgericht en volgens geldende procedures;",
          "Stemt tijdig af met collega's, begeleider of leidinggevende;",
          "Reflecteert op het resultaat en benoemt verbeterpunten."
        ],
        "competenties": [
          "Vakdeskundigheid toepassen",
          "Samenwerken en overleggen",
          "Instructies en procedures opvolgen"
        ]
      },
      {
        "code": "P5-K3-W3",
        "titel": "Implementeert en bewaakt het financieel beleid",
        "samenvatting": "Korte inleiding: in dit werkproces laat de student zien dat hij of zij 'implementeert en bewaakt het financieel beleid' beroepsgericht, veilig en volgens de afspraken van het leerbedrijf uitvoert.",
        "omschrijving": "De student voert dit werkproces uit in een realistische beroepssituatie en stemt het handelen af op gasten, collega's, kwaliteitseisen en bedrijfsprocedures.",
        "resultaat": "Het werkproces is aantoonbaar uitgevoerd volgens de eisen van het kwalificatiedossier en de praktijkcontext.",
        "gedrag": [
          "Werkt zorgvuldig, gastgericht en volgens geldende procedures;",
          "Stemt tijdig af met collega's, begeleider of leidinggevende;",
          "Reflecteert op het resultaat en benoemt verbeterpunten."
        ],
        "competenties": [
          "Vakdeskundigheid toepassen",
          "Samenwerken en overleggen",
          "Instructies en procedures opvolgen"
        ]
      },
      {
        "code": "P5-K3-W4",
        "titel": "Implementeert en bewaakt het kwaliteitsbeleid",
        "samenvatting": "Korte inleiding: in dit werkproces laat de student zien dat hij of zij 'implementeert en bewaakt het kwaliteitsbeleid' beroepsgericht, veilig en volgens de afspraken van het leerbedrijf uitvoert.",
        "omschrijving": "De student voert dit werkproces uit in een realistische beroepssituatie en stemt het handelen af op gasten, collega's, kwaliteitseisen en bedrijfsprocedures.",
        "resultaat": "Het werkproces is aantoonbaar uitgevoerd volgens de eisen van het kwalificatiedossier en de praktijkcontext.",
        "gedrag": [
          "Werkt zorgvuldig, gastgericht en volgens geldende procedures;",
          "Stemt tijdig af met collega's, begeleider of leidinggevende;",
          "Reflecteert op het resultaat en benoemt verbeterpunten."
        ],
        "competenties": [
          "Vakdeskundigheid toepassen",
          "Samenwerken en overleggen",
          "Instructies en procedures opvolgen"
        ]
      }
    ]
  },
  "HTL-P8-K1": {
    "code": "P8-K1",
    "titel": "Voert operationele werkzaamheden uit",
    "type": "Profieldeel Ondernemer Hospitality (Niveau 4)",
    "complexiteit": "De complexiteit volgt uit de beroepssituatie, het mbo-niveau, de mate van zelfstandigheid en de wisselende omstandigheden in de praktijk.",
    "verantwoordelijkheid": "De student is verantwoordelijk voor het zorgvuldig uitvoeren van de werkprocessen binnen de grenzen van de rol en het niveau.",
    "vakkennis": [
      "Vakkennis en vaardigheden zoals beschreven in het kwalificatiedossier.",
      "Bedrijfsprocedures, veiligheid, kwaliteit en gastgericht handelen."
    ],
    "werkprocessen": [
      {
        "code": "P8-K1-W1",
        "titel": "Werkt mee in drank-, spijs- en/of logiesverstrekkende bedrijven",
        "samenvatting": "Korte inleiding: in dit werkproces laat de student zien dat hij of zij 'werkt mee in drank-, spijs- en/of logiesverstrekkende bedrijven' beroepsgericht, veilig en volgens de afspraken van het leerbedrijf uitvoert.",
        "omschrijving": "De student voert dit werkproces uit in een realistische beroepssituatie en stemt het handelen af op gasten, collega's, kwaliteitseisen en bedrijfsprocedures.",
        "resultaat": "Het werkproces is aantoonbaar uitgevoerd volgens de eisen van het kwalificatiedossier en de praktijkcontext.",
        "gedrag": [
          "Werkt zorgvuldig, gastgericht en volgens geldende procedures;",
          "Stemt tijdig af met collega's, begeleider of leidinggevende;",
          "Reflecteert op het resultaat en benoemt verbeterpunten."
        ],
        "competenties": [
          "Vakdeskundigheid toepassen",
          "Samenwerken en overleggen",
          "Instructies en procedures opvolgen"
        ]
      },
      {
        "code": "P8-K1-W2",
        "titel": "Koopt producten en/of diensten in",
        "samenvatting": "Korte inleiding: in dit werkproces laat de student zien dat hij of zij 'koopt producten en/of diensten in' beroepsgericht, veilig en volgens de afspraken van het leerbedrijf uitvoert.",
        "omschrijving": "De student voert dit werkproces uit in een realistische beroepssituatie en stemt het handelen af op gasten, collega's, kwaliteitseisen en bedrijfsprocedures.",
        "resultaat": "Het werkproces is aantoonbaar uitgevoerd volgens de eisen van het kwalificatiedossier en de praktijkcontext.",
        "gedrag": [
          "Werkt zorgvuldig, gastgericht en volgens geldende procedures;",
          "Stemt tijdig af met collega's, begeleider of leidinggevende;",
          "Reflecteert op het resultaat en benoemt verbeterpunten."
        ],
        "competenties": [
          "Vakdeskundigheid toepassen",
          "Samenwerken en overleggen",
          "Instructies en procedures opvolgen"
        ]
      },
      {
        "code": "P8-K1-W3",
        "titel": "Evalueert gasttevredenheid en behandelt klachten",
        "samenvatting": "Korte inleiding: in dit werkproces laat de student zien dat hij of zij 'evalueert gasttevredenheid en behandelt klachten' beroepsgericht, veilig en volgens de afspraken van het leerbedrijf uitvoert.",
        "omschrijving": "De student voert dit werkproces uit in een realistische beroepssituatie en stemt het handelen af op gasten, collega's, kwaliteitseisen en bedrijfsprocedures.",
        "resultaat": "Het werkproces is aantoonbaar uitgevoerd volgens de eisen van het kwalificatiedossier en de praktijkcontext.",
        "gedrag": [
          "Werkt zorgvuldig, gastgericht en volgens geldende procedures;",
          "Stemt tijdig af met collega's, begeleider of leidinggevende;",
          "Reflecteert op het resultaat en benoemt verbeterpunten."
        ],
        "competenties": [
          "Vakdeskundigheid toepassen",
          "Samenwerken en overleggen",
          "Instructies en procedures opvolgen"
        ]
      }
    ]
  },
  "HTL-P8-K2": {
    "code": "P8-K2",
    "titel": "Geeft leiding aan medewerkers",
    "type": "Profieldeel Ondernemer Hospitality (Niveau 4)",
    "complexiteit": "De complexiteit volgt uit de beroepssituatie, het mbo-niveau, de mate van zelfstandigheid en de wisselende omstandigheden in de praktijk.",
    "verantwoordelijkheid": "De student is verantwoordelijk voor het zorgvuldig uitvoeren van de werkprocessen binnen de grenzen van de rol en het niveau.",
    "vakkennis": [
      "Vakkennis en vaardigheden zoals beschreven in het kwalificatiedossier.",
      "Bedrijfsprocedures, veiligheid, kwaliteit en gastgericht handelen."
    ],
    "werkprocessen": [
      {
        "code": "P8-K2-W1",
        "titel": "Stuurt medewerkers aan",
        "samenvatting": "Korte inleiding: in dit werkproces laat de student zien dat hij of zij 'stuurt medewerkers aan' beroepsgericht, veilig en volgens de afspraken van het leerbedrijf uitvoert.",
        "omschrijving": "De student voert dit werkproces uit in een realistische beroepssituatie en stemt het handelen af op gasten, collega's, kwaliteitseisen en bedrijfsprocedures.",
        "resultaat": "Het werkproces is aantoonbaar uitgevoerd volgens de eisen van het kwalificatiedossier en de praktijkcontext.",
        "gedrag": [
          "Werkt zorgvuldig, gastgericht en volgens geldende procedures;",
          "Stemt tijdig af met collega's, begeleider of leidinggevende;",
          "Reflecteert op het resultaat en benoemt verbeterpunten."
        ],
        "competenties": [
          "Vakdeskundigheid toepassen",
          "Samenwerken en overleggen",
          "Instructies en procedures opvolgen"
        ]
      },
      {
        "code": "P8-K2-W2",
        "titel": "Ondersteunt medewerkers in hun functioneren en ontwikkeling",
        "samenvatting": "Korte inleiding: in dit werkproces laat de student zien dat hij of zij 'ondersteunt medewerkers in hun functioneren en ontwikkeling' beroepsgericht, veilig en volgens de afspraken van het leerbedrijf uitvoert.",
        "omschrijving": "De student voert dit werkproces uit in een realistische beroepssituatie en stemt het handelen af op gasten, collega's, kwaliteitseisen en bedrijfsprocedures.",
        "resultaat": "Het werkproces is aantoonbaar uitgevoerd volgens de eisen van het kwalificatiedossier en de praktijkcontext.",
        "gedrag": [
          "Werkt zorgvuldig, gastgericht en volgens geldende procedures;",
          "Stemt tijdig af met collega's, begeleider of leidinggevende;",
          "Reflecteert op het resultaat en benoemt verbeterpunten."
        ],
        "competenties": [
          "Vakdeskundigheid toepassen",
          "Samenwerken en overleggen",
          "Instructies en procedures opvolgen"
        ]
      }
    ]
  },
  "HTL-P8-K3": {
    "code": "P8-K3",
    "titel": "Onderneemt in de hospitality",
    "type": "Profieldeel Ondernemer Hospitality (Niveau 4)",
    "complexiteit": "De complexiteit volgt uit de beroepssituatie, het mbo-niveau, de mate van zelfstandigheid en de wisselende omstandigheden in de praktijk.",
    "verantwoordelijkheid": "De student is verantwoordelijk voor het zorgvuldig uitvoeren van de werkprocessen binnen de grenzen van de rol en het niveau.",
    "vakkennis": [
      "Vakkennis en vaardigheden zoals beschreven in het kwalificatiedossier.",
      "Bedrijfsprocedures, veiligheid, kwaliteit en gastgericht handelen."
    ],
    "werkprocessen": [
      {
        "code": "P8-K3-W1",
        "titel": "Maakt het business plan",
        "samenvatting": "Korte inleiding: in dit werkproces laat de student zien dat hij of zij 'maakt het business plan' beroepsgericht, veilig en volgens de afspraken van het leerbedrijf uitvoert.",
        "omschrijving": "De student voert dit werkproces uit in een realistische beroepssituatie en stemt het handelen af op gasten, collega's, kwaliteitseisen en bedrijfsprocedures.",
        "resultaat": "Het werkproces is aantoonbaar uitgevoerd volgens de eisen van het kwalificatiedossier en de praktijkcontext.",
        "gedrag": [
          "Werkt zorgvuldig, gastgericht en volgens geldende procedures;",
          "Stemt tijdig af met collega's, begeleider of leidinggevende;",
          "Reflecteert op het resultaat en benoemt verbeterpunten."
        ],
        "competenties": [
          "Vakdeskundigheid toepassen",
          "Samenwerken en overleggen",
          "Instructies en procedures opvolgen"
        ]
      },
      {
        "code": "P8-K3-W2",
        "titel": "Profileert, promoot en positioneert de onderneming",
        "samenvatting": "Korte inleiding: in dit werkproces laat de student zien dat hij of zij 'profileert, promoot en positioneert de onderneming' beroepsgericht, veilig en volgens de afspraken van het leerbedrijf uitvoert.",
        "omschrijving": "De student voert dit werkproces uit in een realistische beroepssituatie en stemt het handelen af op gasten, collega's, kwaliteitseisen en bedrijfsprocedures.",
        "resultaat": "Het werkproces is aantoonbaar uitgevoerd volgens de eisen van het kwalificatiedossier en de praktijkcontext.",
        "gedrag": [
          "Werkt zorgvuldig, gastgericht en volgens geldende procedures;",
          "Stemt tijdig af met collega's, begeleider of leidinggevende;",
          "Reflecteert op het resultaat en benoemt verbeterpunten."
        ],
        "competenties": [
          "Vakdeskundigheid toepassen",
          "Samenwerken en overleggen",
          "Instructies en procedures opvolgen"
        ]
      },
      {
        "code": "P8-K3-W3",
        "titel": "Maakt het HR-plan",
        "samenvatting": "Korte inleiding: in dit werkproces laat de student zien dat hij of zij 'maakt het hr-plan' beroepsgericht, veilig en volgens de afspraken van het leerbedrijf uitvoert.",
        "omschrijving": "De student voert dit werkproces uit in een realistische beroepssituatie en stemt het handelen af op gasten, collega's, kwaliteitseisen en bedrijfsprocedures.",
        "resultaat": "Het werkproces is aantoonbaar uitgevoerd volgens de eisen van het kwalificatiedossier en de praktijkcontext.",
        "gedrag": [
          "Werkt zorgvuldig, gastgericht en volgens geldende procedures;",
          "Stemt tijdig af met collega's, begeleider of leidinggevende;",
          "Reflecteert op het resultaat en benoemt verbeterpunten."
        ],
        "competenties": [
          "Vakdeskundigheid toepassen",
          "Samenwerken en overleggen",
          "Instructies en procedures opvolgen"
        ]
      },
      {
        "code": "P8-K3-W4",
        "titel": "Maakt en bewaakt het financieel plan",
        "samenvatting": "Korte inleiding: in dit werkproces laat de student zien dat hij of zij 'maakt en bewaakt het financieel plan' beroepsgericht, veilig en volgens de afspraken van het leerbedrijf uitvoert.",
        "omschrijving": "De student voert dit werkproces uit in een realistische beroepssituatie en stemt het handelen af op gasten, collega's, kwaliteitseisen en bedrijfsprocedures.",
        "resultaat": "Het werkproces is aantoonbaar uitgevoerd volgens de eisen van het kwalificatiedossier en de praktijkcontext.",
        "gedrag": [
          "Werkt zorgvuldig, gastgericht en volgens geldende procedures;",
          "Stemt tijdig af met collega's, begeleider of leidinggevende;",
          "Reflecteert op het resultaat en benoemt verbeterpunten."
        ],
        "competenties": [
          "Vakdeskundigheid toepassen",
          "Samenwerken en overleggen",
          "Instructies en procedures opvolgen"
        ]
      },
      {
        "code": "P8-K3-W5",
        "titel": "Maakt en bewaakt het kwaliteitsbeleid",
        "samenvatting": "Korte inleiding: in dit werkproces laat de student zien dat hij of zij 'maakt en bewaakt het kwaliteitsbeleid' beroepsgericht, veilig en volgens de afspraken van het leerbedrijf uitvoert.",
        "omschrijving": "De student voert dit werkproces uit in een realistische beroepssituatie en stemt het handelen af op gasten, collega's, kwaliteitseisen en bedrijfsprocedures.",
        "resultaat": "Het werkproces is aantoonbaar uitgevoerd volgens de eisen van het kwalificatiedossier en de praktijkcontext.",
        "gedrag": [
          "Werkt zorgvuldig, gastgericht en volgens geldende procedures;",
          "Stemt tijdig af met collega's, begeleider of leidinggevende;",
          "Reflecteert op het resultaat en benoemt verbeterpunten."
        ],
        "competenties": [
          "Vakdeskundigheid toepassen",
          "Samenwerken en overleggen",
          "Instructies en procedures opvolgen"
        ]
      },
      {
        "code": "P8-K3-W6",
        "titel": "Voert het sociaal-hygienisch beleid uit",
        "samenvatting": "Korte inleiding: in dit werkproces laat de student zien dat hij of zij 'voert het sociaal-hygienisch beleid uit' beroepsgericht, veilig en volgens de afspraken van het leerbedrijf uitvoert.",
        "omschrijving": "De student voert dit werkproces uit in een realistische beroepssituatie en stemt het handelen af op gasten, collega's, kwaliteitseisen en bedrijfsprocedures.",
        "resultaat": "Het werkproces is aantoonbaar uitgevoerd volgens de eisen van het kwalificatiedossier en de praktijkcontext.",
        "gedrag": [
          "Werkt zorgvuldig, gastgericht en volgens geldende procedures;",
          "Stemt tijdig af met collega's, begeleider of leidinggevende;",
          "Reflecteert op het resultaat en benoemt verbeterpunten."
        ],
        "competenties": [
          "Vakdeskundigheid toepassen",
          "Samenwerken en overleggen",
          "Instructies en procedures opvolgen"
        ]
      },
      {
        "code": "P8-K3-W7",
        "titel": "Onderhoudt zakelijke contacten",
        "samenvatting": "Korte inleiding: in dit werkproces laat de student zien dat hij of zij 'onderhoudt zakelijke contacten' beroepsgericht, veilig en volgens de afspraken van het leerbedrijf uitvoert.",
        "omschrijving": "De student voert dit werkproces uit in een realistische beroepssituatie en stemt het handelen af op gasten, collega's, kwaliteitseisen en bedrijfsprocedures.",
        "resultaat": "Het werkproces is aantoonbaar uitgevoerd volgens de eisen van het kwalificatiedossier en de praktijkcontext.",
        "gedrag": [
          "Werkt zorgvuldig, gastgericht en volgens geldende procedures;",
          "Stemt tijdig af met collega's, begeleider of leidinggevende;",
          "Reflecteert op het resultaat en benoemt verbeterpunten."
        ],
        "competenties": [
          "Vakdeskundigheid toepassen",
          "Samenwerken en overleggen",
          "Instructies en procedures opvolgen"
        ]
      },
      {
        "code": "P8-K3-W8",
        "titel": "Evalueert en verbetert de onderneming",
        "samenvatting": "Korte inleiding: in dit werkproces laat de student zien dat hij of zij 'evalueert en verbetert de onderneming' beroepsgericht, veilig en volgens de afspraken van het leerbedrijf uitvoert.",
        "omschrijving": "De student voert dit werkproces uit in een realistische beroepssituatie en stemt het handelen af op gasten, collega's, kwaliteitseisen en bedrijfsprocedures.",
        "resultaat": "Het werkproces is aantoonbaar uitgevoerd volgens de eisen van het kwalificatiedossier en de praktijkcontext.",
        "gedrag": [
          "Werkt zorgvuldig, gastgericht en volgens geldende procedures;",
          "Stemt tijdig af met collega's, begeleider of leidinggevende;",
          "Reflecteert op het resultaat en benoemt verbeterpunten."
        ],
        "competenties": [
          "Vakdeskundigheid toepassen",
          "Samenwerken en overleggen",
          "Instructies en procedures opvolgen"
        ]
      }
    ]
  },
  "KEUKEN-B1-K1": {
    "code": "B1-K1",
    "titel": "Bereidt (componenten van) gerechten",
    "type": "Basisdeel Keuken (Alle niveaus)",
    "complexiteit": "De complexiteit volgt uit de beroepssituatie, het mbo-niveau, de mate van zelfstandigheid en de wisselende omstandigheden in de praktijk.",
    "verantwoordelijkheid": "De student is verantwoordelijk voor het zorgvuldig uitvoeren van de werkprocessen binnen de grenzen van de rol en het niveau.",
    "vakkennis": [
      "Vakkennis en vaardigheden zoals beschreven in het kwalificatiedossier.",
      "Bedrijfsprocedures, veiligheid, kwaliteit en gastgericht handelen."
    ],
    "werkprocessen": [
      {
        "code": "B1-K1-W1",
        "titel": "Maakt mise en place",
        "samenvatting": "Korte inleiding: in dit werkproces laat de student zien dat hij of zij 'maakt mise en place' beroepsgericht, veilig en volgens de afspraken van het leerbedrijf uitvoert.",
        "omschrijving": "De student voert dit werkproces uit in een realistische beroepssituatie en stemt het handelen af op gasten, collega's, kwaliteitseisen en bedrijfsprocedures.",
        "resultaat": "Het werkproces is aantoonbaar uitgevoerd volgens de eisen van het kwalificatiedossier en de praktijkcontext.",
        "gedrag": [
          "Werkt zorgvuldig, gastgericht en volgens geldende procedures;",
          "Stemt tijdig af met collega's, begeleider of leidinggevende;",
          "Reflecteert op het resultaat en benoemt verbeterpunten."
        ],
        "competenties": [
          "Vakdeskundigheid toepassen",
          "Samenwerken en overleggen",
          "Instructies en procedures opvolgen"
        ]
      },
      {
        "code": "B1-K1-W2",
        "titel": "Past (componenten van) gerechten aan",
        "samenvatting": "Korte inleiding: in dit werkproces laat de student zien dat hij of zij 'past (componenten van) gerechten aan' beroepsgericht, veilig en volgens de afspraken van het leerbedrijf uitvoert.",
        "omschrijving": "De student voert dit werkproces uit in een realistische beroepssituatie en stemt het handelen af op gasten, collega's, kwaliteitseisen en bedrijfsprocedures.",
        "resultaat": "Het werkproces is aantoonbaar uitgevoerd volgens de eisen van het kwalificatiedossier en de praktijkcontext.",
        "gedrag": [
          "Werkt zorgvuldig, gastgericht en volgens geldende procedures;",
          "Stemt tijdig af met collega's, begeleider of leidinggevende;",
          "Reflecteert op het resultaat en benoemt verbeterpunten."
        ],
        "competenties": [
          "Vakdeskundigheid toepassen",
          "Samenwerken en overleggen",
          "Instructies en procedures opvolgen"
        ]
      },
      {
        "code": "B1-K1-W3",
        "titel": "Bereidt (componenten van) gerechten",
        "samenvatting": "Korte inleiding: in dit werkproces laat de student zien dat hij of zij 'bereidt (componenten van) gerechten' beroepsgericht, veilig en volgens de afspraken van het leerbedrijf uitvoert.",
        "omschrijving": "De student voert dit werkproces uit in een realistische beroepssituatie en stemt het handelen af op gasten, collega's, kwaliteitseisen en bedrijfsprocedures.",
        "resultaat": "Het werkproces is aantoonbaar uitgevoerd volgens de eisen van het kwalificatiedossier en de praktijkcontext.",
        "gedrag": [
          "Werkt zorgvuldig, gastgericht en volgens geldende procedures;",
          "Stemt tijdig af met collega's, begeleider of leidinggevende;",
          "Reflecteert op het resultaat en benoemt verbeterpunten."
        ],
        "competenties": [
          "Vakdeskundigheid toepassen",
          "Samenwerken en overleggen",
          "Instructies en procedures opvolgen"
        ]
      },
      {
        "code": "B1-K1-W4",
        "titel": "Werkt (componenten van) gerechten voor uitgifte af",
        "samenvatting": "Korte inleiding: in dit werkproces laat de student zien dat hij of zij 'werkt (componenten van) gerechten voor uitgifte af' beroepsgericht, veilig en volgens de afspraken van het leerbedrijf uitvoert.",
        "omschrijving": "De student voert dit werkproces uit in een realistische beroepssituatie en stemt het handelen af op gasten, collega's, kwaliteitseisen en bedrijfsprocedures.",
        "resultaat": "Het werkproces is aantoonbaar uitgevoerd volgens de eisen van het kwalificatiedossier en de praktijkcontext.",
        "gedrag": [
          "Werkt zorgvuldig, gastgericht en volgens geldende procedures;",
          "Stemt tijdig af met collega's, begeleider of leidinggevende;",
          "Reflecteert op het resultaat en benoemt verbeterpunten."
        ],
        "competenties": [
          "Vakdeskundigheid toepassen",
          "Samenwerken en overleggen",
          "Instructies en procedures opvolgen"
        ]
      },
      {
        "code": "B1-K1-W5",
        "titel": "Maakt schoon en ruimt op",
        "samenvatting": "Korte inleiding: in dit werkproces laat de student zien dat hij of zij 'maakt schoon en ruimt op' beroepsgericht, veilig en volgens de afspraken van het leerbedrijf uitvoert.",
        "omschrijving": "De student voert dit werkproces uit in een realistische beroepssituatie en stemt het handelen af op gasten, collega's, kwaliteitseisen en bedrijfsprocedures.",
        "resultaat": "Het werkproces is aantoonbaar uitgevoerd volgens de eisen van het kwalificatiedossier en de praktijkcontext.",
        "gedrag": [
          "Werkt zorgvuldig, gastgericht en volgens geldende procedures;",
          "Stemt tijdig af met collega's, begeleider of leidinggevende;",
          "Reflecteert op het resultaat en benoemt verbeterpunten."
        ],
        "competenties": [
          "Vakdeskundigheid toepassen",
          "Samenwerken en overleggen",
          "Instructies en procedures opvolgen"
        ]
      }
    ]
  },
  "KEUKEN-B1-K2": {
    "code": "B1-K2",
    "titel": "Beheert voorraden",
    "type": "Basisdeel Keuken (Alle niveaus)",
    "complexiteit": "De complexiteit volgt uit de beroepssituatie, het mbo-niveau, de mate van zelfstandigheid en de wisselende omstandigheden in de praktijk.",
    "verantwoordelijkheid": "De student is verantwoordelijk voor het zorgvuldig uitvoeren van de werkprocessen binnen de grenzen van de rol en het niveau.",
    "vakkennis": [
      "Vakkennis en vaardigheden zoals beschreven in het kwalificatiedossier.",
      "Bedrijfsprocedures, veiligheid, kwaliteit en gastgericht handelen."
    ],
    "werkprocessen": [
      {
        "code": "B1-K2-W1",
        "titel": "Controleert en/of bestelt voorraden",
        "samenvatting": "Korte inleiding: in dit werkproces laat de student zien dat hij of zij 'controleert en/of bestelt voorraden' beroepsgericht, veilig en volgens de afspraken van het leerbedrijf uitvoert.",
        "omschrijving": "De student voert dit werkproces uit in een realistische beroepssituatie en stemt het handelen af op gasten, collega's, kwaliteitseisen en bedrijfsprocedures.",
        "resultaat": "Het werkproces is aantoonbaar uitgevoerd volgens de eisen van het kwalificatiedossier en de praktijkcontext.",
        "gedrag": [
          "Werkt zorgvuldig, gastgericht en volgens geldende procedures;",
          "Stemt tijdig af met collega's, begeleider of leidinggevende;",
          "Reflecteert op het resultaat en benoemt verbeterpunten."
        ],
        "competenties": [
          "Vakdeskundigheid toepassen",
          "Samenwerken en overleggen",
          "Instructies en procedures opvolgen"
        ]
      },
      {
        "code": "B1-K2-W2",
        "titel": "Ontvangt en controleert bestellingen",
        "samenvatting": "Korte inleiding: in dit werkproces laat de student zien dat hij of zij 'ontvangt en controleert bestellingen' beroepsgericht, veilig en volgens de afspraken van het leerbedrijf uitvoert.",
        "omschrijving": "De student voert dit werkproces uit in een realistische beroepssituatie en stemt het handelen af op gasten, collega's, kwaliteitseisen en bedrijfsprocedures.",
        "resultaat": "Het werkproces is aantoonbaar uitgevoerd volgens de eisen van het kwalificatiedossier en de praktijkcontext.",
        "gedrag": [
          "Werkt zorgvuldig, gastgericht en volgens geldende procedures;",
          "Stemt tijdig af met collega's, begeleider of leidinggevende;",
          "Reflecteert op het resultaat en benoemt verbeterpunten."
        ],
        "competenties": [
          "Vakdeskundigheid toepassen",
          "Samenwerken en overleggen",
          "Instructies en procedures opvolgen"
        ]
      },
      {
        "code": "B1-K2-W3",
        "titel": "Slaat geleverde bestellingen op",
        "samenvatting": "Korte inleiding: in dit werkproces laat de student zien dat hij of zij 'slaat geleverde bestellingen op' beroepsgericht, veilig en volgens de afspraken van het leerbedrijf uitvoert.",
        "omschrijving": "De student voert dit werkproces uit in een realistische beroepssituatie en stemt het handelen af op gasten, collega's, kwaliteitseisen en bedrijfsprocedures.",
        "resultaat": "Het werkproces is aantoonbaar uitgevoerd volgens de eisen van het kwalificatiedossier en de praktijkcontext.",
        "gedrag": [
          "Werkt zorgvuldig, gastgericht en volgens geldende procedures;",
          "Stemt tijdig af met collega's, begeleider of leidinggevende;",
          "Reflecteert op het resultaat en benoemt verbeterpunten."
        ],
        "competenties": [
          "Vakdeskundigheid toepassen",
          "Samenwerken en overleggen",
          "Instructies en procedures opvolgen"
        ]
      }
    ]
  },
  "KEUKEN-B1-K3": {
    "code": "B1-K3",
    "titel": "Verleent gastvrijheid",
    "type": "Basisdeel Keuken (Alle niveaus)",
    "complexiteit": "De complexiteit volgt uit de beroepssituatie, het mbo-niveau, de mate van zelfstandigheid en de wisselende omstandigheden in de praktijk.",
    "verantwoordelijkheid": "De student is verantwoordelijk voor het zorgvuldig uitvoeren van de werkprocessen binnen de grenzen van de rol en het niveau.",
    "vakkennis": [
      "Vakkennis en vaardigheden zoals beschreven in het kwalificatiedossier.",
      "Bedrijfsprocedures, veiligheid, kwaliteit en gastgericht handelen."
    ],
    "werkprocessen": [
      {
        "code": "B1-K3-W1",
        "titel": "Bereidt gastgerichte werkzaamheden voor",
        "samenvatting": "Korte inleiding: in dit werkproces laat de student zien dat hij of zij 'bereidt gastgerichte werkzaamheden voor' beroepsgericht, veilig en volgens de afspraken van het leerbedrijf uitvoert.",
        "omschrijving": "De student voert dit werkproces uit in een realistische beroepssituatie en stemt het handelen af op gasten, collega's, kwaliteitseisen en bedrijfsprocedures.",
        "resultaat": "Het werkproces is aantoonbaar uitgevoerd volgens de eisen van het kwalificatiedossier en de praktijkcontext.",
        "gedrag": [
          "Werkt zorgvuldig, gastgericht en volgens geldende procedures;",
          "Stemt tijdig af met collega's, begeleider of leidinggevende;",
          "Reflecteert op het resultaat en benoemt verbeterpunten."
        ],
        "competenties": [
          "Vakdeskundigheid toepassen",
          "Samenwerken en overleggen",
          "Instructies en procedures opvolgen"
        ]
      },
      {
        "code": "B1-K3-W2",
        "titel": "Draagt bij aan een gastgerichte beleving",
        "samenvatting": "Korte inleiding: in dit werkproces laat de student zien dat hij of zij 'draagt bij aan een gastgerichte beleving' beroepsgericht, veilig en volgens de afspraken van het leerbedrijf uitvoert.",
        "omschrijving": "De student voert dit werkproces uit in een realistische beroepssituatie en stemt het handelen af op gasten, collega's, kwaliteitseisen en bedrijfsprocedures.",
        "resultaat": "Het werkproces is aantoonbaar uitgevoerd volgens de eisen van het kwalificatiedossier en de praktijkcontext.",
        "gedrag": [
          "Werkt zorgvuldig, gastgericht en volgens geldende procedures;",
          "Stemt tijdig af met collega's, begeleider of leidinggevende;",
          "Reflecteert op het resultaat en benoemt verbeterpunten."
        ],
        "competenties": [
          "Vakdeskundigheid toepassen",
          "Samenwerken en overleggen",
          "Instructies en procedures opvolgen"
        ]
      },
      {
        "code": "B1-K3-W3",
        "titel": "Draagt bij aan een sociaal en fysiek veilige werkomgeving",
        "samenvatting": "Korte inleiding: in dit werkproces laat de student zien dat hij of zij 'draagt bij aan een sociaal en fysiek veilige werkomgeving' beroepsgericht, veilig en volgens de afspraken van het leerbedrijf uitvoert.",
        "omschrijving": "De student voert dit werkproces uit in een realistische beroepssituatie en stemt het handelen af op gasten, collega's, kwaliteitseisen en bedrijfsprocedures.",
        "resultaat": "Het werkproces is aantoonbaar uitgevoerd volgens de eisen van het kwalificatiedossier en de praktijkcontext.",
        "gedrag": [
          "Werkt zorgvuldig, gastgericht en volgens geldende procedures;",
          "Stemt tijdig af met collega's, begeleider of leidinggevende;",
          "Reflecteert op het resultaat en benoemt verbeterpunten."
        ],
        "competenties": [
          "Vakdeskundigheid toepassen",
          "Samenwerken en overleggen",
          "Instructies en procedures opvolgen"
        ]
      },
      {
        "code": "B1-K3-W4",
        "titel": "Rondt gastgerichte werkzaamheden af",
        "samenvatting": "Korte inleiding: in dit werkproces laat de student zien dat hij of zij 'rondt gastgerichte werkzaamheden af' beroepsgericht, veilig en volgens de afspraken van het leerbedrijf uitvoert.",
        "omschrijving": "De student voert dit werkproces uit in een realistische beroepssituatie en stemt het handelen af op gasten, collega's, kwaliteitseisen en bedrijfsprocedures.",
        "resultaat": "Het werkproces is aantoonbaar uitgevoerd volgens de eisen van het kwalificatiedossier en de praktijkcontext.",
        "gedrag": [
          "Werkt zorgvuldig, gastgericht en volgens geldende procedures;",
          "Stemt tijdig af met collega's, begeleider of leidinggevende;",
          "Reflecteert op het resultaat en benoemt verbeterpunten."
        ],
        "competenties": [
          "Vakdeskundigheid toepassen",
          "Samenwerken en overleggen",
          "Instructies en procedures opvolgen"
        ]
      },
      {
        "code": "B1-K3-W5",
        "titel": "Evalueert de (eigen) werkzaamheden",
        "samenvatting": "Korte inleiding: in dit werkproces laat de student zien dat hij of zij 'evalueert de (eigen) werkzaamheden' beroepsgericht, veilig en volgens de afspraken van het leerbedrijf uitvoert.",
        "omschrijving": "De student voert dit werkproces uit in een realistische beroepssituatie en stemt het handelen af op gasten, collega's, kwaliteitseisen en bedrijfsprocedures.",
        "resultaat": "Het werkproces is aantoonbaar uitgevoerd volgens de eisen van het kwalificatiedossier en de praktijkcontext.",
        "gedrag": [
          "Werkt zorgvuldig, gastgericht en volgens geldende procedures;",
          "Stemt tijdig af met collega's, begeleider of leidinggevende;",
          "Reflecteert op het resultaat en benoemt verbeterpunten."
        ],
        "competenties": [
          "Vakdeskundigheid toepassen",
          "Samenwerken en overleggen",
          "Instructies en procedures opvolgen"
        ]
      }
    ]
  },
  "KEUKEN-P3-K1": {
    "code": "P3-K1",
    "titel": "Coordineert en optimaliseert keukenwerkzaamheden",
    "type": "Profieldeel Zelfstandig Werkend Kok (Niveau 3)",
    "complexiteit": "De complexiteit volgt uit de beroepssituatie, het mbo-niveau, de mate van zelfstandigheid en de wisselende omstandigheden in de praktijk.",
    "verantwoordelijkheid": "De student is verantwoordelijk voor het zorgvuldig uitvoeren van de werkprocessen binnen de grenzen van de rol en het niveau.",
    "vakkennis": [
      "Vakkennis en vaardigheden zoals beschreven in het kwalificatiedossier.",
      "Bedrijfsprocedures, veiligheid, kwaliteit en gastgericht handelen."
    ],
    "werkprocessen": [
      {
        "code": "P3-K1-W1",
        "titel": "Plant en verdeelt werkzaamheden",
        "samenvatting": "Korte inleiding: in dit werkproces laat de student zien dat hij of zij 'plant en verdeelt werkzaamheden' beroepsgericht, veilig en volgens de afspraken van het leerbedrijf uitvoert.",
        "omschrijving": "De student voert dit werkproces uit in een realistische beroepssituatie en stemt het handelen af op gasten, collega's, kwaliteitseisen en bedrijfsprocedures.",
        "resultaat": "Het werkproces is aantoonbaar uitgevoerd volgens de eisen van het kwalificatiedossier en de praktijkcontext.",
        "gedrag": [
          "Werkt zorgvuldig, gastgericht en volgens geldende procedures;",
          "Stemt tijdig af met collega's, begeleider of leidinggevende;",
          "Reflecteert op het resultaat en benoemt verbeterpunten."
        ],
        "competenties": [
          "Vakdeskundigheid toepassen",
          "Samenwerken en overleggen",
          "Instructies en procedures opvolgen"
        ]
      },
      {
        "code": "P3-K1-W2",
        "titel": "Instrueert en begeleidt medewerkers",
        "samenvatting": "Korte inleiding: in dit werkproces laat de student zien dat hij of zij 'instrueert en begeleidt medewerkers' beroepsgericht, veilig en volgens de afspraken van het leerbedrijf uitvoert.",
        "omschrijving": "De student voert dit werkproces uit in een realistische beroepssituatie en stemt het handelen af op gasten, collega's, kwaliteitseisen en bedrijfsprocedures.",
        "resultaat": "Het werkproces is aantoonbaar uitgevoerd volgens de eisen van het kwalificatiedossier en de praktijkcontext.",
        "gedrag": [
          "Werkt zorgvuldig, gastgericht en volgens geldende procedures;",
          "Stemt tijdig af met collega's, begeleider of leidinggevende;",
          "Reflecteert op het resultaat en benoemt verbeterpunten."
        ],
        "competenties": [
          "Vakdeskundigheid toepassen",
          "Samenwerken en overleggen",
          "Instructies en procedures opvolgen"
        ]
      },
      {
        "code": "P3-K1-W3",
        "titel": "Vernieuwt en verbetert (componenten van) gerechten",
        "samenvatting": "Korte inleiding: in dit werkproces laat de student zien dat hij of zij 'vernieuwt en verbetert (componenten van) gerechten' beroepsgericht, veilig en volgens de afspraken van het leerbedrijf uitvoert.",
        "omschrijving": "De student voert dit werkproces uit in een realistische beroepssituatie en stemt het handelen af op gasten, collega's, kwaliteitseisen en bedrijfsprocedures.",
        "resultaat": "Het werkproces is aantoonbaar uitgevoerd volgens de eisen van het kwalificatiedossier en de praktijkcontext.",
        "gedrag": [
          "Werkt zorgvuldig, gastgericht en volgens geldende procedures;",
          "Stemt tijdig af met collega's, begeleider of leidinggevende;",
          "Reflecteert op het resultaat en benoemt verbeterpunten."
        ],
        "competenties": [
          "Vakdeskundigheid toepassen",
          "Samenwerken en overleggen",
          "Instructies en procedures opvolgen"
        ]
      },
      {
        "code": "P3-K1-W4",
        "titel": "Draagt bij aan verbetering van efficientie en duurzaamheid",
        "samenvatting": "Korte inleiding: in dit werkproces laat de student zien dat hij of zij 'draagt bij aan verbetering van efficientie en duurzaamheid' beroepsgericht, veilig en volgens de afspraken van het leerbedrijf uitvoert.",
        "omschrijving": "De student voert dit werkproces uit in een realistische beroepssituatie en stemt het handelen af op gasten, collega's, kwaliteitseisen en bedrijfsprocedures.",
        "resultaat": "Het werkproces is aantoonbaar uitgevoerd volgens de eisen van het kwalificatiedossier en de praktijkcontext.",
        "gedrag": [
          "Werkt zorgvuldig, gastgericht en volgens geldende procedures;",
          "Stemt tijdig af met collega's, begeleider of leidinggevende;",
          "Reflecteert op het resultaat en benoemt verbeterpunten."
        ],
        "competenties": [
          "Vakdeskundigheid toepassen",
          "Samenwerken en overleggen",
          "Instructies en procedures opvolgen"
        ]
      }
    ]
  },
  "KEUKEN-P5-K1": {
    "code": "P5-K1",
    "titel": "Geeft leiding aan medewerkers",
    "type": "Profieldeel Gespecialiseerd Kok (Niveau 4)",
    "complexiteit": "De complexiteit volgt uit de beroepssituatie, het mbo-niveau, de mate van zelfstandigheid en de wisselende omstandigheden in de praktijk.",
    "verantwoordelijkheid": "De student is verantwoordelijk voor het zorgvuldig uitvoeren van de werkprocessen binnen de grenzen van de rol en het niveau.",
    "vakkennis": [
      "Vakkennis en vaardigheden zoals beschreven in het kwalificatiedossier.",
      "Bedrijfsprocedures, veiligheid, kwaliteit en gastgericht handelen."
    ],
    "werkprocessen": [
      {
        "code": "P5-K1-W1",
        "titel": "Plant en verdeelt werkzaamheden",
        "samenvatting": "Korte inleiding: in dit werkproces laat de student zien dat hij of zij 'plant en verdeelt werkzaamheden' beroepsgericht, veilig en volgens de afspraken van het leerbedrijf uitvoert.",
        "omschrijving": "De student voert dit werkproces uit in een realistische beroepssituatie en stemt het handelen af op gasten, collega's, kwaliteitseisen en bedrijfsprocedures.",
        "resultaat": "Het werkproces is aantoonbaar uitgevoerd volgens de eisen van het kwalificatiedossier en de praktijkcontext.",
        "gedrag": [
          "Werkt zorgvuldig, gastgericht en volgens geldende procedures;",
          "Stemt tijdig af met collega's, begeleider of leidinggevende;",
          "Reflecteert op het resultaat en benoemt verbeterpunten."
        ],
        "competenties": [
          "Vakdeskundigheid toepassen",
          "Samenwerken en overleggen",
          "Instructies en procedures opvolgen"
        ]
      },
      {
        "code": "P5-K1-W2",
        "titel": "Stuurt medewerkers aan",
        "samenvatting": "Korte inleiding: in dit werkproces laat de student zien dat hij of zij 'stuurt medewerkers aan' beroepsgericht, veilig en volgens de afspraken van het leerbedrijf uitvoert.",
        "omschrijving": "De student voert dit werkproces uit in een realistische beroepssituatie en stemt het handelen af op gasten, collega's, kwaliteitseisen en bedrijfsprocedures.",
        "resultaat": "Het werkproces is aantoonbaar uitgevoerd volgens de eisen van het kwalificatiedossier en de praktijkcontext.",
        "gedrag": [
          "Werkt zorgvuldig, gastgericht en volgens geldende procedures;",
          "Stemt tijdig af met collega's, begeleider of leidinggevende;",
          "Reflecteert op het resultaat en benoemt verbeterpunten."
        ],
        "competenties": [
          "Vakdeskundigheid toepassen",
          "Samenwerken en overleggen",
          "Instructies en procedures opvolgen"
        ]
      }
    ]
  },
  "KEUKEN-P5-K2": {
    "code": "P5-K2",
    "titel": "Optimaliseert het gastronomische aanbod",
    "type": "Profieldeel Gespecialiseerd Kok (Niveau 4)",
    "complexiteit": "De complexiteit volgt uit de beroepssituatie, het mbo-niveau, de mate van zelfstandigheid en de wisselende omstandigheden in de praktijk.",
    "verantwoordelijkheid": "De student is verantwoordelijk voor het zorgvuldig uitvoeren van de werkprocessen binnen de grenzen van de rol en het niveau.",
    "vakkennis": [
      "Vakkennis en vaardigheden zoals beschreven in het kwalificatiedossier.",
      "Bedrijfsprocedures, veiligheid, kwaliteit en gastgericht handelen."
    ],
    "werkprocessen": [
      {
        "code": "P5-K2-W1",
        "titel": "Signaleert trends en ontwikkelingen",
        "samenvatting": "Korte inleiding: in dit werkproces laat de student zien dat hij of zij 'signaleert trends en ontwikkelingen' beroepsgericht, veilig en volgens de afspraken van het leerbedrijf uitvoert.",
        "omschrijving": "De student voert dit werkproces uit in een realistische beroepssituatie en stemt het handelen af op gasten, collega's, kwaliteitseisen en bedrijfsprocedures.",
        "resultaat": "Het werkproces is aantoonbaar uitgevoerd volgens de eisen van het kwalificatiedossier en de praktijkcontext.",
        "gedrag": [
          "Werkt zorgvuldig, gastgericht en volgens geldende procedures;",
          "Stemt tijdig af met collega's, begeleider of leidinggevende;",
          "Reflecteert op het resultaat en benoemt verbeterpunten."
        ],
        "competenties": [
          "Vakdeskundigheid toepassen",
          "Samenwerken en overleggen",
          "Instructies en procedures opvolgen"
        ]
      },
      {
        "code": "P5-K2-W2",
        "titel": "Adviseert over menu's en gerechten",
        "samenvatting": "Korte inleiding: in dit werkproces laat de student zien dat hij of zij 'adviseert over menu's en gerechten' beroepsgericht, veilig en volgens de afspraken van het leerbedrijf uitvoert.",
        "omschrijving": "De student voert dit werkproces uit in een realistische beroepssituatie en stemt het handelen af op gasten, collega's, kwaliteitseisen en bedrijfsprocedures.",
        "resultaat": "Het werkproces is aantoonbaar uitgevoerd volgens de eisen van het kwalificatiedossier en de praktijkcontext.",
        "gedrag": [
          "Werkt zorgvuldig, gastgericht en volgens geldende procedures;",
          "Stemt tijdig af met collega's, begeleider of leidinggevende;",
          "Reflecteert op het resultaat en benoemt verbeterpunten."
        ],
        "competenties": [
          "Vakdeskundigheid toepassen",
          "Samenwerken en overleggen",
          "Instructies en procedures opvolgen"
        ]
      },
      {
        "code": "P5-K2-W3",
        "titel": "Ontwikkelt nieuwe menu's en gerechten",
        "samenvatting": "Korte inleiding: in dit werkproces laat de student zien dat hij of zij 'ontwikkelt nieuwe menu's en gerechten' beroepsgericht, veilig en volgens de afspraken van het leerbedrijf uitvoert.",
        "omschrijving": "De student voert dit werkproces uit in een realistische beroepssituatie en stemt het handelen af op gasten, collega's, kwaliteitseisen en bedrijfsprocedures.",
        "resultaat": "Het werkproces is aantoonbaar uitgevoerd volgens de eisen van het kwalificatiedossier en de praktijkcontext.",
        "gedrag": [
          "Werkt zorgvuldig, gastgericht en volgens geldende procedures;",
          "Stemt tijdig af met collega's, begeleider of leidinggevende;",
          "Reflecteert op het resultaat en benoemt verbeterpunten."
        ],
        "competenties": [
          "Vakdeskundigheid toepassen",
          "Samenwerken en overleggen",
          "Instructies en procedures opvolgen"
        ]
      },
      {
        "code": "P5-K2-W4",
        "titel": "Evalueert en verbetert het gastronomisch aanbod",
        "samenvatting": "Korte inleiding: in dit werkproces laat de student zien dat hij of zij 'evalueert en verbetert het gastronomisch aanbod' beroepsgericht, veilig en volgens de afspraken van het leerbedrijf uitvoert.",
        "omschrijving": "De student voert dit werkproces uit in een realistische beroepssituatie en stemt het handelen af op gasten, collega's, kwaliteitseisen en bedrijfsprocedures.",
        "resultaat": "Het werkproces is aantoonbaar uitgevoerd volgens de eisen van het kwalificatiedossier en de praktijkcontext.",
        "gedrag": [
          "Werkt zorgvuldig, gastgericht en volgens geldende procedures;",
          "Stemt tijdig af met collega's, begeleider of leidinggevende;",
          "Reflecteert op het resultaat en benoemt verbeterpunten."
        ],
        "competenties": [
          "Vakdeskundigheid toepassen",
          "Samenwerken en overleggen",
          "Instructies en procedures opvolgen"
        ]
      },
      {
        "code": "P5-K2-W5",
        "titel": "Draagt bij aan verbetering van efficientie en duurzaamheid",
        "samenvatting": "Korte inleiding: in dit werkproces laat de student zien dat hij of zij 'draagt bij aan verbetering van efficientie en duurzaamheid' beroepsgericht, veilig en volgens de afspraken van het leerbedrijf uitvoert.",
        "omschrijving": "De student voert dit werkproces uit in een realistische beroepssituatie en stemt het handelen af op gasten, collega's, kwaliteitseisen en bedrijfsprocedures.",
        "resultaat": "Het werkproces is aantoonbaar uitgevoerd volgens de eisen van het kwalificatiedossier en de praktijkcontext.",
        "gedrag": [
          "Werkt zorgvuldig, gastgericht en volgens geldende procedures;",
          "Stemt tijdig af met collega's, begeleider of leidinggevende;",
          "Reflecteert op het resultaat en benoemt verbeterpunten."
        ],
        "competenties": [
          "Vakdeskundigheid toepassen",
          "Samenwerken en overleggen",
          "Instructies en procedures opvolgen"
        ]
      }
    ]
  },
  "KEUKEN-P6-K1": {
    "code": "P6-K1",
    "titel": "Geeft leiding aan medewerkers",
    "type": "Profieldeel Leidinggevende Keuken (Niveau 4)",
    "complexiteit": "De complexiteit volgt uit de beroepssituatie, het mbo-niveau, de mate van zelfstandigheid en de wisselende omstandigheden in de praktijk.",
    "verantwoordelijkheid": "De student is verantwoordelijk voor het zorgvuldig uitvoeren van de werkprocessen binnen de grenzen van de rol en het niveau.",
    "vakkennis": [
      "Vakkennis en vaardigheden zoals beschreven in het kwalificatiedossier.",
      "Bedrijfsprocedures, veiligheid, kwaliteit en gastgericht handelen."
    ],
    "werkprocessen": [
      {
        "code": "P6-K1-W1",
        "titel": "Plant en verdeelt werkzaamheden",
        "samenvatting": "Korte inleiding: in dit werkproces laat de student zien dat hij of zij 'plant en verdeelt werkzaamheden' beroepsgericht, veilig en volgens de afspraken van het leerbedrijf uitvoert.",
        "omschrijving": "De student voert dit werkproces uit in een realistische beroepssituatie en stemt het handelen af op gasten, collega's, kwaliteitseisen en bedrijfsprocedures.",
        "resultaat": "Het werkproces is aantoonbaar uitgevoerd volgens de eisen van het kwalificatiedossier en de praktijkcontext.",
        "gedrag": [
          "Werkt zorgvuldig, gastgericht en volgens geldende procedures;",
          "Stemt tijdig af met collega's, begeleider of leidinggevende;",
          "Reflecteert op het resultaat en benoemt verbeterpunten."
        ],
        "competenties": [
          "Vakdeskundigheid toepassen",
          "Samenwerken en overleggen",
          "Instructies en procedures opvolgen"
        ]
      },
      {
        "code": "P6-K1-W2",
        "titel": "Stuurt medewerkers aan",
        "samenvatting": "Korte inleiding: in dit werkproces laat de student zien dat hij of zij 'stuurt medewerkers aan' beroepsgericht, veilig en volgens de afspraken van het leerbedrijf uitvoert.",
        "omschrijving": "De student voert dit werkproces uit in een realistische beroepssituatie en stemt het handelen af op gasten, collega's, kwaliteitseisen en bedrijfsprocedures.",
        "resultaat": "Het werkproces is aantoonbaar uitgevoerd volgens de eisen van het kwalificatiedossier en de praktijkcontext.",
        "gedrag": [
          "Werkt zorgvuldig, gastgericht en volgens geldende procedures;",
          "Stemt tijdig af met collega's, begeleider of leidinggevende;",
          "Reflecteert op het resultaat en benoemt verbeterpunten."
        ],
        "competenties": [
          "Vakdeskundigheid toepassen",
          "Samenwerken en overleggen",
          "Instructies en procedures opvolgen"
        ]
      },
      {
        "code": "P6-K1-W3",
        "titel": "Voert gesprekken en overleg met medewerkers",
        "samenvatting": "Korte inleiding: in dit werkproces laat de student zien dat hij of zij 'voert gesprekken en overleg met medewerkers' beroepsgericht, veilig en volgens de afspraken van het leerbedrijf uitvoert.",
        "omschrijving": "De student voert dit werkproces uit in een realistische beroepssituatie en stemt het handelen af op gasten, collega's, kwaliteitseisen en bedrijfsprocedures.",
        "resultaat": "Het werkproces is aantoonbaar uitgevoerd volgens de eisen van het kwalificatiedossier en de praktijkcontext.",
        "gedrag": [
          "Werkt zorgvuldig, gastgericht en volgens geldende procedures;",
          "Stemt tijdig af met collega's, begeleider of leidinggevende;",
          "Reflecteert op het resultaat en benoemt verbeterpunten."
        ],
        "competenties": [
          "Vakdeskundigheid toepassen",
          "Samenwerken en overleggen",
          "Instructies en procedures opvolgen"
        ]
      }
    ]
  },
  "KEUKEN-P6-K2": {
    "code": "P6-K2",
    "titel": "Beheert en optimaliseert keukenprocessen",
    "type": "Profieldeel Leidinggevende Keuken (Niveau 4)",
    "complexiteit": "De complexiteit volgt uit de beroepssituatie, het mbo-niveau, de mate van zelfstandigheid en de wisselende omstandigheden in de praktijk.",
    "verantwoordelijkheid": "De student is verantwoordelijk voor het zorgvuldig uitvoeren van de werkprocessen binnen de grenzen van de rol en het niveau.",
    "vakkennis": [
      "Vakkennis en vaardigheden zoals beschreven in het kwalificatiedossier.",
      "Bedrijfsprocedures, veiligheid, kwaliteit en gastgericht handelen."
    ],
    "werkprocessen": [
      {
        "code": "P6-K2-W1",
        "titel": "Maakt een operationeel plan",
        "samenvatting": "Korte inleiding: in dit werkproces laat de student zien dat hij of zij 'maakt een operationeel plan' beroepsgericht, veilig en volgens de afspraken van het leerbedrijf uitvoert.",
        "omschrijving": "De student voert dit werkproces uit in een realistische beroepssituatie en stemt het handelen af op gasten, collega's, kwaliteitseisen en bedrijfsprocedures.",
        "resultaat": "Het werkproces is aantoonbaar uitgevoerd volgens de eisen van het kwalificatiedossier en de praktijkcontext.",
        "gedrag": [
          "Werkt zorgvuldig, gastgericht en volgens geldende procedures;",
          "Stemt tijdig af met collega's, begeleider of leidinggevende;",
          "Reflecteert op het resultaat en benoemt verbeterpunten."
        ],
        "competenties": [
          "Vakdeskundigheid toepassen",
          "Samenwerken en overleggen",
          "Instructies en procedures opvolgen"
        ]
      },
      {
        "code": "P6-K2-W2",
        "titel": "Begroot en bewaakt keukenfinancien",
        "samenvatting": "Korte inleiding: in dit werkproces laat de student zien dat hij of zij 'begroot en bewaakt keukenfinancien' beroepsgericht, veilig en volgens de afspraken van het leerbedrijf uitvoert.",
        "omschrijving": "De student voert dit werkproces uit in een realistische beroepssituatie en stemt het handelen af op gasten, collega's, kwaliteitseisen en bedrijfsprocedures.",
        "resultaat": "Het werkproces is aantoonbaar uitgevoerd volgens de eisen van het kwalificatiedossier en de praktijkcontext.",
        "gedrag": [
          "Werkt zorgvuldig, gastgericht en volgens geldende procedures;",
          "Stemt tijdig af met collega's, begeleider of leidinggevende;",
          "Reflecteert op het resultaat en benoemt verbeterpunten."
        ],
        "competenties": [
          "Vakdeskundigheid toepassen",
          "Samenwerken en overleggen",
          "Instructies en procedures opvolgen"
        ]
      },
      {
        "code": "P6-K2-W3",
        "titel": "Stuurt aan op verbetering van het proces in de keuken",
        "samenvatting": "Korte inleiding: in dit werkproces laat de student zien dat hij of zij 'stuurt aan op verbetering van het proces in de keuken' beroepsgericht, veilig en volgens de afspraken van het leerbedrijf uitvoert.",
        "omschrijving": "De student voert dit werkproces uit in een realistische beroepssituatie en stemt het handelen af op gasten, collega's, kwaliteitseisen en bedrijfsprocedures.",
        "resultaat": "Het werkproces is aantoonbaar uitgevoerd volgens de eisen van het kwalificatiedossier en de praktijkcontext.",
        "gedrag": [
          "Werkt zorgvuldig, gastgericht en volgens geldende procedures;",
          "Stemt tijdig af met collega's, begeleider of leidinggevende;",
          "Reflecteert op het resultaat en benoemt verbeterpunten."
        ],
        "competenties": [
          "Vakdeskundigheid toepassen",
          "Samenwerken en overleggen",
          "Instructies en procedures opvolgen"
        ]
      },
      {
        "code": "P6-K2-W4",
        "titel": "Voert menu-engineering uit",
        "samenvatting": "Korte inleiding: in dit werkproces laat de student zien dat hij of zij 'voert menu-engineering uit' beroepsgericht, veilig en volgens de afspraken van het leerbedrijf uitvoert.",
        "omschrijving": "De student voert dit werkproces uit in een realistische beroepssituatie en stemt het handelen af op gasten, collega's, kwaliteitseisen en bedrijfsprocedures.",
        "resultaat": "Het werkproces is aantoonbaar uitgevoerd volgens de eisen van het kwalificatiedossier en de praktijkcontext.",
        "gedrag": [
          "Werkt zorgvuldig, gastgericht en volgens geldende procedures;",
          "Stemt tijdig af met collega's, begeleider of leidinggevende;",
          "Reflecteert op het resultaat en benoemt verbeterpunten."
        ],
        "competenties": [
          "Vakdeskundigheid toepassen",
          "Samenwerken en overleggen",
          "Instructies en procedures opvolgen"
        ]
      }
    ]
  }
};
  const aanvullendeProfielKerntaken = {
  "medewerker_hospitality": [
    "HTL-B1-K1",
    "HTL-B1-K2",
    "HTL-P1-K1"
  ],
  "zelfstandig_medewerker_hospitality": [
    "HTL-B1-K1",
    "HTL-B1-K2",
    "HTL-P2-K1",
    "HTL-P2-K2"
  ],
  "leidinggevende_hospitality": [
    "HTL-B1-K1",
    "HTL-B1-K2",
    "HTL-P5-K1",
    "HTL-P5-K2",
    "HTL-P5-K3"
  ],
  "ondernemer_hospitality": [
    "HTL-B1-K1",
    "HTL-B1-K2",
    "HTL-P8-K1",
    "HTL-P8-K2",
    "HTL-P8-K3"
  ],
  "kok": [
    "KEUKEN-B1-K1",
    "KEUKEN-B1-K2",
    "KEUKEN-B1-K3"
  ],
  "zelfstandig_werkend_kok": [
    "KEUKEN-B1-K1",
    "KEUKEN-B1-K2",
    "KEUKEN-B1-K3",
    "KEUKEN-P3-K1"
  ],
  "gespecialiseerd_kok": [
    "KEUKEN-B1-K1",
    "KEUKEN-B1-K2",
    "KEUKEN-B1-K3",
    "KEUKEN-P5-K1",
    "KEUKEN-P5-K2"
  ],
  "leidinggevende_keuken": [
    "KEUKEN-B1-K1",
    "KEUKEN-B1-K2",
    "KEUKEN-B1-K3",
    "KEUKEN-P6-K1",
    "KEUKEN-P6-K2"
  ]
};

  Object.assign(kwalificatieDossierDatabase.profielKerntaken, aanvullendeProfielKerntaken);

  Object.entries(aanvullendeKerntaken).forEach(([sleutel, aanvulling]) => {
    const bestaand = kwalificatieDossierDatabase.kerntakenDatabase[sleutel];
    if (!bestaand) {
      kwalificatieDossierDatabase.kerntakenDatabase[sleutel] = aanvulling;
      return;
    }

    bestaand.code = aanvulling.code;
    bestaand.titel = aanvulling.titel;
    bestaand.type = aanvulling.type;
    bestaand.complexiteit = bestaand.complexiteit || aanvulling.complexiteit;
    bestaand.verantwoordelijkheid = bestaand.verantwoordelijkheid || aanvulling.verantwoordelijkheid;
    bestaand.vakkennis = bestaand.vakkennis && bestaand.vakkennis.length ? bestaand.vakkennis : aanvulling.vakkennis;

    const bestaandeWerkprocessen = new Map((bestaand.werkprocessen || []).map(wp => [wp.code, wp]));
    bestaand.werkprocessen = aanvulling.werkprocessen.map(wp => {
      const bestaandWp = bestaandeWerkprocessen.get(wp.code);
      if (!bestaandWp) return wp;
      return {
        ...wp,
        ...bestaandWp,
        samenvatting: bestaandWp.samenvatting || wp.samenvatting,
        omschrijving: bestaandWp.omschrijving || wp.omschrijving,
        resultaat: bestaandWp.resultaat || wp.resultaat,
        gedrag: bestaandWp.gedrag && bestaandWp.gedrag.length ? bestaandWp.gedrag : wp.gedrag,
        competenties: bestaandWp.competenties && bestaandWp.competenties.length ? bestaandWp.competenties : wp.competenties
      };
    });
  });
})();
// === EINDE AANVULLING VOLLEDIGE KD-STRUCTUUR ===
