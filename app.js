/**
 * Albeda Horecacollege - Kwalificatie App Core Engine
 */

let actiefDomeinId = '';
let actiefProfielId = '';
let actieveRol = 'student';
let matrixIsOpen = false;

function openDomeinDashboard(domeinId) {
  actiefDomeinId = domeinId;
  matrixIsOpen = false;
  
  const searchBox = document.getElementById('live-search-box');
  if (searchBox) searchBox.value = '';
  
  const matrixPanel = document.getElementById('matrix-panel');
  if (matrixPanel) matrixPanel.style.display = 'none';
  
  const matrixBtn = document.getElementById('matrix-toggle-btn');
  if (matrixBtn) matrixBtn.innerText = 'Open Vergelijkingsmatrix';

  document.getElementById('landing-layer').style.display = 'none';
  document.getElementById('dashboard-layer').style.display = 'block';

  // Zoek domein in de database
  const domeinData = kwalificatieDossierDatabase.domeinen.find(d => d.id === domeinId);
  if (!domeinData) return;

  const selectDropdown = document.getElementById('dropdown-profielen');
  selectDropdown.innerHTML = ''; 

  domeinData.profielen.forEach(profiel => {
    const optie = document.createElement('option');
    optie.value = profiel.id;
    
    // Specifieke Albeda weergavenamen koppelen aan het hospitality-domein
    let weergaveNaam = `${profiel.naam} (${profiel.niveau})`;
    
    if (profiel.id === 'medewerker_hospitality') {
      weergaveNaam = `${profiel.naam} (${profiel.niveau}) | Gastvrijheidstalent`;
    } else if (profiel.id === 'zelfstandig_medewerker_hospitality') {
      weergaveNaam = `${profiel.naam} (${profiel.niveau}) | Hospitality Medewerker`;
    } else if (profiel.id === 'leidinggevende_hospitality') {
      weergaveNaam = `${profiel.naam} (${profiel.niveau}) | Hospitality Manager`;
    }
    
    optie.innerText = weergaveNaam;
    selectDropdown.appendChild(optie);
  });

  actiefProfielId = domeinData.profielen[0].id;
  document.body.className = 'student-mode';
  resetRolKnoppen();
  renderDossierContent();
}

/**
 * Navigatieknop: Sluit het actieve dashboard en keert terug naar het hoofdmenu.
 * Herstelt tevens de oorspronkelijke subtitel op de landingspagina.
 */
function sluitDashboardEnTerug() {
  document.getElementById('landing-layer').style.display = 'block';
  document.getElementById('dashboard-layer').style.display = 'none';
  
  // Herstel de subtitel naar de beginwaarde van het portaal
  document.getElementById('app-subtitle').innerText = 'Dossier- & BPV-Kompas Portaal';
}

function resetRolKnoppen() {
  const knoppen = document.querySelectorAll('.role-btn');
  knoppen.forEach(k => k.classList.remove('active'));
  const studentBtn = document.getElementById('btn-student');
  if (studentBtn) studentBtn.classList.add('active');
  actieveRol = 'student';
  updateRolInstructieTekst('student');
}

function switchProfiel(profielId) {
  actiefProfielId = profielId;
  renderDossierContent();
}

function switchRoleView(rol, knopElement) {
  const knoppen = document.querySelectorAll('.role-btn');
  knoppen.forEach(k => k.classList.remove('active'));
  if (knopElement) knopElement.classList.add('active');
  actieveRol = rol;
  document.body.className = rol + '-mode';
  updateRolInstructieTekst(rol);
}

function updateRolInstructieTekst(rol) {
  const introBox = document.getElementById('role-intro-text');
  if (!introBox) return;
  if (rol === 'student') {
    introBox.innerHTML = `<strong>Jouw Gedrag & Journey</strong><br>Hieronder zie je precies wat je moet doen en laten zien in het hospitalitybedrijf om een top-gastervaring te creëren. Focus op het verwachte gedrag!`;
  } else if (rol === 'pleider') {
    introBox.innerHTML = `<strong>Resultaat op de Werkvloer</strong><br>Beste praktijkopleider, dit overzicht toont u direct de Kerntaken net het concreet op te leveren <em>Resultaat</em> per werkproces om de student doelgericht te begeleiden.`;
  } else if (rol === 'docent') {
    introBox.innerHTML = `<strong>Onderwijskundige Structuur & Vakkennis</strong><br>Beste collega, dit is de volledige onderwijskundige structuur van het dossier inclusief de complexiteit, verantwoordelijkheid en vereiste vakkennis.`;
  }
}

function executeLiveSearch() {
  const trefwoord = document.getElementById('live-search-box').value.toLowerCase();
  const werkprocessen = document.querySelectorAll('.wp-block');
  const kaarten = document.querySelectorAll('.card');

  werkprocessen.forEach(wp => {
    const inhoud = wp.innerText.toLowerCase();
    wp.style.display = inhoud.includes(trefwoord) ? 'block' : 'none';
  });

  kaarten.forEach(kaart => {
    const totaleProcessen = kaart.querySelectorAll('.wp-block');
    const zichtbareProcessen = Array.from(totaleProcessen).filter(wp => wp.style.display !== 'none');
    if (totaleProcessen.length > 0 && zichtbareProcessen.length === 0 && trefwoord !== '') {
      kaart.style.display = 'none';
    } else {
      kaart.style.display = 'block';
    }
  });
}

function toggleMatrixView() {
  const paneel = document.getElementById('matrix-panel');
  const knop = document.getElementById('matrix-toggle-btn');
  if (!matrixIsOpen) {
    if (paneel) paneel.style.display = 'block';
    if (knop) knop.innerText = 'Sluit Vergelijkingsmatrix';
    generereMatrixTabel();
    matrixIsOpen = true;
  } else {
    if (paneel) paneel.style.display = 'none';
    if (knop) knop.innerText = 'Open Vergelijkingsmatrix';
    matrixIsOpen = false;
  }
}

function generereMatrixTabel() {
  const target = document.getElementById('matrix-table-render-target');
  if (!target) return;
  const domein = kwalificatieDossierDatabase.domeinen.find(d => d.id === actiefDomeinId);
  
  let tabelHtml = `<table class="matrix-table"><thead><tr><th>MBO Uitstroomprofiel</th><th>Complexiteitsniveau (KD)</th><th>Verantwoordelijkheidsgrens</th></tr></thead><tbody>`;
  domein.profielen.forEach(p => {
    const kerntaakSleutels = kwalificatieDossierDatabase.profielKerntaken[p.id] || [];
    const eersteSleutel = kerntaakSleutels[0];
    const taakData = kwalificatieDossierDatabase.kerntakenDatabase[eersteSleutel];
    const complexiteit = taakData ? taakData.complexiteit : "In afwachting van validatie.";
    const verantwoordelijkheid = taakData ? taakData.verantwoordelijkheid : "In afwachting van verwerking.";
    tabelHtml += `<tr><td><strong>${p.naam}</strong><br><small>${p.niveau} (Crebo ${p.crebo})</small></td><td>${complexiteit}</td><td>${verantwoordelijkheid}</td></tr>`;
  });
  tabelHtml += `</tbody></table>`;
  target.innerHTML = tabelHtml;
}

function toggleAccordion(clickedHeader) {
  const currentItem = clickedHeader.parentElement;
  const allItems = currentItem.parentElement.querySelectorAll('.accordion-item');
  const isAlreadyActive = currentItem.classList.contains('active');
  
  allItems.forEach(item => item.classList.remove('active'));
  
  if (!isAlreadyActive) {
    currentItem.classList.add('active');
  }
}

function renderDossierContent() {
  const domein = kwalificatieDossierDatabase.domeinen.find(d => d.id === actiefDomeinId);
  const profiel = domein.profielen.find(p => p.id === actiefProfielId);
  const targetZone = document.getElementById('cards-render-target');
  if (!targetZone || !domein || !profiel) return;

  // Dynamische subtitel aanpassing op basis van het gekozen dossier
  document.getElementById('app-subtitle').innerHTML = `Domein: ${domein.titel} | Crebo Dossier ${domein.crebo}`;

  let htmlOutput = '';

  // Alleen accordions tonen als het GEEN generieke eisen betreft
  if (actiefDomeinId !== 'generiek') {
    htmlOutput += `
      <div class="accordion-container">
        <div class="accordion-item active">
          <button class="accordion-header" onclick="toggleAccordion(this)">
            Typering van het beroep
            <span class="accordion-icon">▼</span>
          </button>
          <div class="accordion-content">
            <p>${profiel.typering}</p>
          </div>
        </div>
        <div class="accordion-item">
          <button class="accordion-header" onclick="toggleAccordion(this)">
            Beroepscontext (Beroepengroep)
            <span class="accordion-icon">▼</span>
          </button>
          <div class="accordion-content">
            <p>${profiel.context || 'De beginnend beroepsbeoefenaar werkt in de gastvrijheidsbranche bij bedrijven gericht op dag- of verblijfsrecreatie, horeca en hospitality.'}</p>
          </div>
        </div>
        <div class="accordion-item">
          <button class="accordion-header" onclick="toggleAccordion(this)">
            Typerende beroepshouding
            <span class="accordion-icon">▼</span>
          </button>
          <div class="accordion-content">
            <p>${profiel.houding || 'Heeft een open, proactieve en servicegerichte houding, is representatief, flexibel en kan uitstekend samenwerken.'}</p>
          </div>
        </div>
        <div class="accordion-item">
          <button class="accordion-header" onclick="toggleAccordion(this)">
            Beoogd resultaat van de beroepengroep
            <span class="accordion-icon">▼</span>
          </button>
          <div class="accordion-content">
            <p>${profiel.resultaat || 'Een optimale ervaring van gasten en een positief commercieel resultaat voor de organisatie.'}</p>
          </div>
        </div>
        <div class="accordion-item">
          <button class="accordion-header" onclick="toggleAccordion(this)">
            Formele Complexiteit (KD Structuur)
            <span class="accordion-icon">▼</span>
          </button>
          <div class="accordion-content">
            <p>${profiel.complexiteit || 'De complexiteit wordt bepaald door de wens van de gast; deze staat centraal. Combineert diverse standaardtaken.'}</p>
          </div>
        </div>
        <div class="accordion-item">
          <button class="accordion-header" onclick="toggleAccordion(this)">
            Verantwoordelijkheid en Zelfstandigheid
            <span class="accordion-icon">▼</span>
          </button>
          <div class="accordion-content">
            <p>${profiel.verantwoordelijkheid || 'Verantwoordelijk voor de kwaliteit en het zelfstandig en veilig uitvoeren van de eigen werkzaamheden.'}</p>
          </div>
        </div>
        <div class="accordion-item">
          <button class="accordion-header" onclick="toggleAccordion(this)">
            Gevalideerde Core Vakkennis & Vaardigheden
            <span class="accordion-icon">▼</span>
          </button>
          <div class="accordion-content">
            <ul class="check-list" style="margin-top:5px;">
              ${profiel.vakkennis ? profiel.vakkennis.map(item => `<li>${item}</li>`).join('') : '<li>Basiskennis van processen en procedures;</li><li>Basiskennis van de guest journey;</li><li>HACCP en hygiënerichtlijnen;</li>'}
            </ul>
          </div>
        </div>
      </div>
    `;
  } else {
    // Voor generieke vakken tonen we een strakke, simpele introductiebox
    htmlOutput += `
      <div style="background: var(--white); padding: 20px; margin-bottom: 25px; border-radius: 4px; font-size: 0.95rem; border: 1px solid var(--albeda-gray); border-left: 6px solid var(--albeda-blue); box-shadow: 0 2px 5px rgba(0,0,0,0.01);">
        <strong style="color: var(--albeda-blue); text-transform: uppercase; font-size: 0.8rem; display: block; margin-bottom: 5px;">Wettelijke Toelichting:</strong>
        <span style="color: #4a5568; line-height: 1.5;">${profiel.typering}</span>
      </div>
    `;
  }

  // DOWNLOAD KNOP CHECK: download attribute is eruit gehaald, target="_blank" opent de PDF nu lokaal/online foutloos
  if (actiefDomeinId !== 'generiek' && profiel.pdfLink && profiel.pdfLink !== "") {
    htmlOutput += `
      <div class="download-wrapper">
        <a href="${profiel.pdfLink}" target="_blank" class="download-pdf-btn">
          📥 Open / Download Dossier (PDF)
        </a>
      </div>
    `;
  }

  const kerntaakSleutels = kwalificatieDossierDatabase.profielKerntaken[profiel.id] || [];
  if (kerntaakSleutels.length === 0) {
    htmlOutput += `<p style="padding:20px; background: var(--white); border:1px solid var(--albeda-gray);">Data volgt.</p>`;
  } else {
    kerntaakSleutels.forEach(sleutel => {
      const kerntaak = kwalificatieDossierDatabase.kerntakenDatabase[sleutel];
      if (!kerntaak) return;

      htmlOutput += `
        <div class="card">
          <div class="card-header">
            <h3>${kerntaak.code}: ${kerntaak.titel}</h3>
            <span class="badge">${kerntaak.type}</span>
          </div>
          <div class="card-body">
            <div class="view-section docent-view">
              <div class="meta-vlak-docent">
                <p style="margin-bottom: 10px;"><strong>Complexiteitsanalyse:</strong> ${kerntaak.complexiteit}</p>
                <p style="margin-bottom: 10px;"><strong>Verantwoordelijkheid:</strong> ${kerntaak.verantwoordelijkheid}</p>
                <strong>Gevalideerde Onderwijskundige Vakkennis:</strong>
                <ul style="margin-left: 15px; margin-top: 5px;">
                  ${kerntaak.vakkennis ? kerntaak.vakkennis.map(kennis => `<li>${kennis}</li>`).join('') : '<li>Informatie volgt.</li>'}
                </ul>
              </div>
            </div>
            ${kerntaak.werkprocessen.map(wp => `
              <div class="wp-block">
                <div class="wp-title">${wp.code} - ${wp.titel}</div>
                <div class="view-section docent-view pleider-view">
                  <p style="margin-bottom: 12px; font-size: 0.95rem; color: #4a5568; font-style: italic;">${wp.omschrijving}</p>
                </div>
                <div class="view-section pleider-view docent-view" style="margin-bottom: 15px; background: #f0f9ff; padding: 12px; border-radius: 4px; border: 1px solid #bae6fd;">
                  <strong style="color: #0369a1; font-size: 0.85rem; text-transform: uppercase; display: block; margin-bottom: 2px;">Concreet op te leveren resultaat op de werkvloer:</strong>
                  <span style="color: var(--albeda-dark); font-weight: bold; font-size: 0.95rem;">${wp.resultaat}</span>
                </div>
                <div class="view-section student-view docent-view">
                  <strong style="font-size: 0.9rem; color: var(--albeda-blue); display: block; margin-bottom: 4px;">Verwacht gedrag (Hoe laat je dit zien op stage?):</strong>
                  <ul class="check-list">
                    ${wp.gedrag.map(gedragItem => `<li>${gedragItem}</li>`).join('')}
                  </ul>
                </div>
                <div class="tag-container">
                  ${wp.competenties.map(comp => `<span class="tag">${comp}</span>`).join('')}
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    });
  }
  targetZone.innerHTML = htmlOutput;
  executeLiveSearch();
}