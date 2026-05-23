let huidigeRol = 'student';
let huidigProfielId = 'medewerker_hospitality';

// Schakelen tussen Student, Praktijkopleider en Docent
function switchRole(role, buttonElement) {
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(btn => btn.classList.remove('active'));
  buttonElement.classList.add('active');

  huidigeRol = role;
  const container = document.getElementById('main-container');
  container.className = role + '-mode';

  updateIntroText(role);
  renderDossierApp();
}

// Update de instructietekst op maat van de doelgroep
function updateIntroText(role) {
  const introText = document.getElementById('intro-text');
  if (role === 'student') {
    introText.innerHTML = `<strong>Jouw Gedrag & Journey</strong><br>Hieronder zie je precies wat je moet doen en laten zien in het hospitalitybedrijf om een top-gastervaring te creëren. Focus op het verwachte gedrag!`;
  } else if (role === 'pleider') {
    introText.innerHTML = `<strong>Resultaat op de Werkvloer</strong><br>Beste praktijkopleider, dit overzicht toont u direct de Kerntaken en het concreet op te leveren <em>Resultaat</em> per werkproces om de student doelgericht te beoordelen.`;
  } else if (role === 'docent') {
    introText.innerHTML = `<strong>Onderwijskundige Structuur & Vakkennis</strong><br>Beste collega, dit is de volledige onderwijskundige structuur van het dossier inclusief de formele complexiteit, verantwoordelijkheid en vereiste vakkennis.`;
  }
}

// Selecteer een ander MBO-uitstroomprofiel
function onProfielChange(selectElement) {
  huidigProfielId = selectElement.value;
  renderDossierApp();
}

// Bouw de dropdown-menu's dynamisch op
function buildProfielDropdown() {
  const filterSection = document.querySelector('.filter-section');
  
  const label = document.createElement('div');
  label.className = 'filter-label';
  label.style.marginTop = '15px';
  label.innerText = 'Kies MBO-Uitstroomprofiel / Niveau:';
  
  const select = document.createElement('select');
  select.id = 'profiel-select';
  select.style.padding = '10px';
  select.style.fontFamily = 'Arial, sans-serif';
  select.style.fontSize = '1rem';
  select.style.border = '2px solid var(--albeda-blue)';
  select.style.borderRadius = '4px';
  select.style.width = '100%';
  select.style.maxWidth = '400px';
  select.style.display = 'block';
  select.onchange = function() { onProfielChange(this); };

  kwalificatieDossier.profielen.forEach(profiel => {
    const option = document.createElement('option');
    option.value = profiel.id;
    option.innerText = `${profiel.naam} (${profiel.niveau})`;
    select.appendChild(option);
  });

  filterSection.appendChild(label);
  filterSection.appendChild(select);
}

// De hoofd-renderfunctie die de kaarten opbouwt op basis van de filters
function renderDossierApp() {
  const profiel = kwalificatieDossier.profielen.find(p => p.id === huidigProfielId);
  
  // Update de meta-informatie in de header
  document.getElementById('dossier-meta-title').innerText = `Kwalificatiedossier: ${kwalificatieDossier.dossierNaam} | Crebo ${profiel.crebo}`;

  const contentDiv = document.getElementById('dynamic-content');
  let htmlOutput = `
    <div style="background: #e2e8f0; padding: 15px; margin-bottom: 20px; border-radius: 4px; font-size: 0.95rem;">
      <strong>Beroepstypering:</strong> ${profiel.typering}
    </div>
  `;

  // Loop alleen door de kerntaken die bij DIT specifieke profiel horen
  profiel.kerntaken.forEach(taakId => {
    const kerntaak = kwalificatieDossier.kerntakenDatabase[taakId];
    if (!kerntaak) return; // Skip als de taak (nog) niet in de database zit

    htmlOutput += `
      <div class="card">
        <div class="card-header">
          <h2>${kerntaak.code}: ${kerntaak.titel}</h2>
          <span class="badge">${kerntaak.type}</span>
        </div>
        <div class="card-body">
          
          <!-- DOCENT VIEW: Complexiteit en Verantwoordelijkheid -->
          <div class="view-section docent-view">
            <div class="docent-meta">
              <strong>Complexiteit:</strong> ${kerntaak.complexiteit}<br><br>
              <strong>Verantwoordelijkheid:</strong> ${kerntaak.verantwoordelijkheid}<br><br>
              <strong>Vereiste Vakkennis & Vaardigheden:</strong>
              <ul style="margin-left: 20px; margin-top: 5px;">
                ${kerntaak.vakkennis ? kerntaak.vakkennis.map(kennis => `<li>${kennis}</li>`).join('') : '<li>Zie algemene basiseisen dossier.</li>'}
              </ul>
            </div>
          </div>

          <!-- Werkprocessen binnen deze kerntaak -->
          ${kerntaak.werkprocessen.map(wp => `
            <div class="wp-block">
              <div class="wp-title"><span>${wp.code}</span> - ${wp.titel}</div>
              
              <!-- DOCENT & PRAKTIJKOPLEIDER VIEW: Omschrijving -->
              <div class="view-section docent-view pleider-view">
                <p style="margin-bottom: 12px; font-size: 0.95rem; color: #555;">${wp.omschrijving}</p>
              </div>

              <!-- PRAKTIJKOPLEIDER VIEW: Resultaat -->
              <div class="view-section pleider-view docent-view" style="margin-bottom: 12px;">
                <strong>Concreet Resultaat op de werkvloer:</strong> 
                <span style="color: var(--albeda-blue); font-weight: bold;">${wp.resultaat}</span>
              </div>

              <!-- STUDENT VIEW: Gedrag -->
              <div class="view-section student-view docent-view">
                <strong style="font-size: 0.95rem; color: var(--albeda-orange);">Hoe laat je dit zien? (Verwacht Gedrag):</strong>
                <ul class="check-list">
                  ${wp.gedrag.map(actie => `<li>${actie}</li>`).join('')}
                </ul>
              </div>

              <!-- Competentie Tags -->
              <div class="tag-container">
                ${wp.competenties.map(comp => `<span class="tag">${comp}</span>`).join('')}
              </div>
            </div>
          `).join('')}

        </div>
      </div>
    `;
  });

  contentDiv.innerHTML = htmlOutput;
}

// Initialisatie bij het laden van de pagina
document.addEventListener('DOMContentLoaded', () => {
  buildProfielDropdown();
  renderDossierApp();
});
