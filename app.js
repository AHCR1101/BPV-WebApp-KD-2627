let huidigeRol = 'student';
let huidigProfielId = 'medewerker_hospitality';

// Regelt de knoppen van de doelgroepen (Rollen)
function switchRole(role, buttonElement) {
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(btn => btn.classList.remove('active'));
  buttonElement.classList.add('active');

  huidigeRol = role;
  const container = document.getElementById('main-container');
  container.className = role + '-mode';

  const introText = document.getElementById('intro-text');
  if (role === 'student') {
    introText.innerHTML = `<strong>Jouw Gedrag & Journey</strong><br>Hieronder zie je precies wat je moet doen en laten zien in het leerwerkbedrijf. Focus op het gedrag!`;
  } else if (role === 'pleider') {
    introText.innerHTML = `<strong>Resultaat op de Werkvloer</strong><br>Beste praktijkopleider, dit overzicht toont u direct de Kerntaken en het concreet op te leveren <em>Resultaat</em> per werkprocessen.`;
  } else if (role === 'docent') {
    introText.innerHTML = `<strong>Onderwijskundige Structuur & Vakkennis</strong><br>Beste collega, dit is de volledige onderwijskundige structuur van het dossier inclusief de complexiteit, verantwoordelijkheid en vakkennis.`;
  }
}

// Wordt geactiveerd wanneer de dropdown verandert
function onProfielChange(selectElement) {
  huidigProfielId = selectElement.value;
  renderDossierApp();
}

// Bouwt de dropdown-lijst op basis van de profielen in data.js
function initDropdown() {
  const select = document.getElementById('profiel-select');
  select.innerHTML = ''; // Maak leeg

  kwalificatieDossier.profielen.forEach(profiel => {
    const option = document.createElement('option');
    option.value = profiel.id;
    option.innerText = `${profiel.naam} (${profiel.niveau})`;
    select.appendChild(option);
  });
}

// Het hoofdproces dat de kaarten op het scherm tekent
function renderDossierApp() {
  const profiel = kwalificatieDossier.profielen.find(p => p.id === huidigProfielId);
  if (!profiel) return;

  // Update de subtitel in de header met formele crebo-info[cite: 1, 5]
  document.getElementById('dossier-meta-title').innerText = `Kwalificatiedossier: ${kwalificatieDossier.dossierNaam} | Crebo ${profiel.crebo}`;

  const contentDiv = document.getElementById('dynamic-content');
  let htmlOutput = `
    <div style="background: #e2e8f0; padding: 15px; margin-bottom: 20px; border-radius: 4px; font-size: 0.95rem; border-left: 4px solid var(--albeda-blue);">
      <strong>Beroepstypering:</strong> ${profiel.typering}
    </div>
  `;

  // Loop door de specifieke kerntaken van het gekozen profiel[cite: 1, 5]
  profiel.kerntaken.forEach(taakId => {
    const kerntaak = kwalificatieDossier.kerntakenDatabase[taakId];
    if (!kerntaak) return;

    htmlOutput += `
      <div class="card">
        <div class="card-header">
          <h2>${kerntaak.code}: ${kerntaak.titel}</h2>
          <span class="badge">${kerntaak.type}</span>
        </div>
        <div class="card-body">
          
          <!-- DOCENT VIEW[cite: 1, 5] -->
          <div class="view-section docent-view">
            <div class="docent-meta">
              <strong>Complexiteit:</strong> ${kerntaak.complexiteit}<br><br>
              <strong>Verantwoordelijkheid:</strong> ${kerntaak.verantwoordelijkheid}<br><br>
              <strong>Vereiste Vakkennis:</strong>
              <ul style="margin-left: 20px; margin-top: 5px;">
                ${kerntaak.vakkennis.map(kennis => `<li>${kennis}</li>`).join('')}
              </ul>
            </div>
          </div>

          <!-- Lus door de werkprocessen[cite: 1, 5] -->
          ${kerntaak.werkprocessen.map(wp => `
            <div class="wp-block">
              <div class="wp-title">${wp.code} - ${wp.titel}</div>
              
              <!-- DOCENT & PRAKTIJKOPLEIDER VIEW[cite: 1, 5] -->
              <div class="view-section docent-view pleider-view">
                <p style="margin-bottom: 12px; font-size: 0.95rem; color: #555;">${wp.omschrijving}</p>
              </div>

              <!-- PRAKTIJKOPLEIDER VIEW[cite: 1, 5] -->
              <div class="view-section pleider-view docent-view" style="margin-bottom: 12px;">
                <strong>Verwacht Resultaat op de werkvloer:</strong> 
                <span style="color: var(--albeda-blue); font-weight: bold;">${wp.resultaat}</span>
              </div>

              <!-- STUDENT VIEW[cite: 1, 5] -->
              <div class="view-section student-view docent-view">
                <strong style="font-size: 0.95rem; color: var(--albeda-orange);">Hoe laat je dit zien? (Gedrag):</strong>
                <ul class="check-list">
                  ${wp.gedrag.map(actie => `<li>${actie}</li>`).join('')}
                </ul>
              </div>

              <!-- Competentie Tags[cite: 1, 5] -->
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

// Start alles op zodra de DOM geladen is
document.addEventListener('DOMContentLoaded', () => {
  initDropdown();
  renderDossierApp();
});
