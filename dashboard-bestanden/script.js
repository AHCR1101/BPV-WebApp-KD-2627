const items = Array.isArray(window.TOOLBOX_ITEMS) ? window.TOOLBOX_ITEMS : [];
const knowledgeEntries = Array.isArray(window.TOOLBOX_KNOWLEDGE) ? window.TOOLBOX_KNOWLEDGE : [];
const categoryFilter = document.querySelector("#categoryFilter");
const domainFilter = document.querySelector("#domainFilter");
const typeFilter = document.querySelector("#typeFilter");
const searchInput = document.querySelector("#searchInput");
const documentList = document.querySelector("#documentList");
const categoryCards = document.querySelector("#categoryCards");
const activeContext = document.querySelector("#activeContext");
const tableSummary = document.querySelector("#tableSummary");
const recordCount = document.querySelector("#recordCount");
const lastUpdated = document.querySelector("#lastUpdated");
const subfilterBar = document.querySelector("#subfilterBar");
const workflowDocs = document.querySelector("#workflowDocs");
const previewPanel = document.querySelector("#previewPanel");
const accessGate = document.querySelector("#accessGate");
const accessForm = document.querySelector("#accessForm");
const accessCodeInput = document.querySelector("#accessCode");
const accessMessage = document.querySelector("#accessMessage");

const knowledgeModal = document.querySelector("#knowledgeModal");
const openKnowledgeSearch = document.querySelector("#openKnowledgeSearch");
const closeKnowledgeSearch = document.querySelector("#closeKnowledgeSearch");
const knowledgeForm = document.querySelector("#knowledgeForm");
const knowledgeInput = document.querySelector("#knowledgeInput");
const knowledgeResults = document.querySelector("#knowledgeResults");
const knowledgeSynonyms = {
  pok: ["praktijkovereenkomst", "bpv overeenkomst", "bpv-overeenkomst"],
  praktijkovereenkomst: ["pok", "bpv overeenkomst", "bpv-overeenkomst"],
  stage: ["bpv", "beroepspraktijkvorming"],
  stagebedrijf: ["leerbedrijf", "bpv bedrijf", "bpv-bedrijf"],
  werkbegeleider: ["praktijkopleider"],
  stagebezoek: ["bpv bezoek", "bpv-bezoek", "bedrijfsbezoek"],
  bezoek: ["bedrijfsbezoek", "bpv bezoek", "contactmoment"],
  beoordeling: ["meetmoment", "eindbeoordeling", "voortgangsgesprek"],
  stageplek: ["bpv plek", "bpv-plek", "leerbedrijf"],
  logboek: ["bpv logboek", "bpv-logboek"],
  sollicitatiegesprek: ["interview", "kennismakingsgesprek"],
  examenwerk: ["praktijkbeoordelen", "beoordelen"],
  kd: ["kwalificatiedossier", "kwalificatiedossiers", "dossier", "dossiers"],
  kwalificatiedossier: ["kd", "dossier"],
  kwalificatiedossiers: ["kd", "dossiers"],
  student: ["deelnemer"],
  agenda: ["afspraak", "uitnodiging"],
  mail: ["e-mail", "email", "bericht"]
};


function encodeToolboxPath(path) {
  return String(path || "")
    .split("/")
    .map((part) => encodeURIComponent(part))
    .join("/");
}
function normalizeKnowledgeText(value) {
  return String(value || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function knowledgeTokens(query) {
  const baseTokens = normalizeKnowledgeText(query).split(/\s+/).filter((token) => token.length > 1);
  const expanded = new Set(baseTokens);
  baseTokens.forEach((token) => {
    (knowledgeSynonyms[token] || []).forEach((synonym) => normalizeKnowledgeText(synonym).split(/\s+/).forEach((part) => expanded.add(part)));
  });
  return [...expanded].filter((token) => token.length > 1);
}

function searchableKnowledgeText(item) {
  return normalizeKnowledgeText(`${item.title} ${item.fileName} ${item.category} ${item.group} ${item.path} ${item.copyText || ""}`);
}

function knowledgeMatchReasons(item, tokens) {
  const fields = [item.title, item.group, item.category, item.fileName, item.copyText || ""];
  return tokens
    .filter((token) => fields.some((field) => normalizeKnowledgeText(field).includes(token)))
    .slice(0, 5);
}

function scoreKnowledgeItem(item, tokens, query) {
  const title = normalizeKnowledgeText(item.title);
  const group = normalizeKnowledgeText(item.group);
  const category = normalizeKnowledgeText(item.category);
  const fileName = normalizeKnowledgeText(item.fileName);
  const copyText = normalizeKnowledgeText(item.copyText || "");
  const path = normalizeKnowledgeText(item.path);
  const fullText = `${title} ${group} ${category} ${fileName} ${copyText} ${path}`;
  const normalizedQuery = normalizeKnowledgeText(query);
  let score = 0;

  if (normalizedQuery && title.includes(normalizedQuery)) score += 45;
  if (normalizedQuery && fullText.includes(normalizedQuery)) score += 20;

  tokens.forEach((token) => {
    if (title.includes(token)) score += 18;
    if (group.includes(token)) score += 10;
    if (category.includes(token)) score += 8;
    if (fileName.includes(token)) score += 7;
    if (copyText.includes(token)) score += 5;
    if (path.includes(token)) score += 3;
    if (fullText.split(" ").some((word) => word.startsWith(token) || token.startsWith(word))) score += 2;
  });

  return score;
}


function scoreKnowledgeEntry(entry, tokens, query) {
  const title = normalizeKnowledgeText(entry.title);
  const group = normalizeKnowledgeText(entry.group);
  const category = normalizeKnowledgeText(entry.category);
  const fileName = normalizeKnowledgeText(entry.fileName);
  const summary = normalizeKnowledgeText(entry.summary);
  const text = normalizeKnowledgeText(entry.text);
  const path = normalizeKnowledgeText(entry.path);
  const normalizedQuery = normalizeKnowledgeText(query);
  const fullText = `${title} ${group} ${category} ${fileName} ${summary} ${text} ${path}`;
  let score = 0;

  if (normalizedQuery && title.includes(normalizedQuery)) score += 55;
  if (normalizedQuery && summary.includes(normalizedQuery)) score += 35;
  if (normalizedQuery && text.includes(normalizedQuery)) score += 28;
  if (normalizedQuery && fullText.includes(normalizedQuery)) score += 14;

  tokens.forEach((token) => {
    if (title.includes(token)) score += 22;
    if (summary.includes(token)) score += 16;
    if (group.includes(token)) score += 12;
    if (category.includes(token)) score += 9;
    if (fileName.includes(token)) score += 8;
    if (text.includes(token)) score += 6;
    if (path.includes(token)) score += 3;
    if (fullText.split(" ").some((word) => word.startsWith(token) || token.startsWith(word))) score += 2;
  });

  return score;
}

function knowledgeEntryReasons(entry, tokens) {
  const fields = [entry.title, entry.summary, entry.text, entry.group, entry.category, entry.fileName];
  return tokens
    .filter((token) => fields.some((field) => normalizeKnowledgeText(field).includes(token)))
    .slice(0, 6);
}

function knowledgeExcerpt(entry, tokens) {
  const text = String(entry.text || entry.summary || "").replace(/\s+/g, " ").trim();
  if (!text) return "Open de bron om de volledige informatie te bekijken.";
  const normalized = normalizeKnowledgeText(text);
  const firstToken = tokens.find((token) => normalized.includes(token));
  if (!firstToken) return text.slice(0, 260) + (text.length > 260 ? "..." : "");
  const index = normalized.indexOf(firstToken);
  const start = Math.max(0, index - 110);
  const end = Math.min(text.length, index + 230);
  return `${start > 0 ? "..." : ""}${text.slice(start, end).trim()}${end < text.length ? "..." : ""}`;
}
function renderKnowledgeResults(query) {
  const tokens = knowledgeTokens(query);
  if (!query.trim() || !tokens.length) {
    knowledgeResults.innerHTML = `<div class="knowledge-empty"><strong>Stel een vraag</strong><span>Je krijgt maximaal vijf bronresultaten uit documenten en documentinhoud.</span></div>`;
    return;
  }

  const sourceEntries = knowledgeEntries.length
    ? knowledgeEntries
    : items.map((item) => ({
        title: item.title,
        fileName: item.fileName,
        path: item.path,
        category: item.category,
        group: item.group,
        extension: item.extension,
        summary: item.title,
        text: `${item.title} ${item.fileName} ${item.category} ${item.group} ${item.path} ${item.copyText || ""}`,
        hasExtractedContent: Boolean(item.copyText)
      }));

  const bestByDocument = new Map();
  sourceEntries.forEach((entry) => {
    const score = scoreKnowledgeEntry(entry, tokens, query);
    if (score <= 0) return;
    const key = entry.documentId || entry.path;
    const current = bestByDocument.get(key);
    if (!current || score > current.score) {
      bestByDocument.set(key, { entry, score, reasons: knowledgeEntryReasons(entry, tokens) });
    }
  });

  const results = [...bestByDocument.values()]
    .sort((a, b) => b.score - a.score || a.entry.title.localeCompare(b.entry.title, "nl"))
    .slice(0, 5);

  if (!results.length) {
    knowledgeResults.innerHTML = `<div class="knowledge-empty"><strong>Geen betrouwbaar resultaat</strong><span>Ik vind nog geen passend bronresultaat. Probeer een kortere vraag of zoek op woorden zoals POK, leerbedrijf, Examenwerk of BPV-bezoek.</span></div>`;
    return;
  }

  knowledgeResults.innerHTML = results.map(({ entry, reasons }) => {
    const reasonText = reasons.length ? reasons.join(", ") : "document of inhoud";
    const href = encodeToolboxPath(entry.path);
    const excerpt = knowledgeExcerpt(entry, tokens);
    const contentLabel = entry.hasExtractedContent ? "Inhoud gelezen" : "Alleen documentgegevens";
    return `<article class="knowledge-result">
      <h3>${entry.title}</h3>
      <p>${excerpt}</p>
      <p>Gevonden op: ${reasonText}.</p>
      <div class="knowledge-meta"><span>${entry.extension}</span><span>${contentLabel}</span><span>HOOFDMAP: ${displayCategoryName(entry.category)}</span>${entry.group ? `<span>${entry.group}</span>` : ""}</div>
      <div class="knowledge-actions">
        <a href="${href}" target="_blank" rel="noopener" data-knowledge-open="true">Open bron</a>
        <button type="button" data-knowledge-path="${escapeAttribute(entry.path)}">Toon in documenten</button>
      </div>
    </article>`;
  }).join("");
}
function resetKnowledgeSearch() {
  if (knowledgeInput) knowledgeInput.value = "";
  if (knowledgeResults) {
    knowledgeResults.innerHTML = `<div class="knowledge-empty"><strong>Stel een vraag</strong><span>Je krijgt maximaal vijf bronresultaten uit documenten en documentinhoud.</span></div>`;
  }
}

function openKnowledgeModal() {
  if (!knowledgeModal) return;
  knowledgeModal.classList.add("open");
  knowledgeModal.setAttribute("aria-hidden", "false");
  window.setTimeout(() => knowledgeInput && knowledgeInput.focus(), 30);
}

function closeKnowledgeModal() {
  if (!knowledgeModal) return;
  knowledgeModal.classList.remove("open");
  knowledgeModal.setAttribute("aria-hidden", "true");
  resetKnowledgeSearch();
  if (openKnowledgeSearch) openKnowledgeSearch.focus();
}

function showKnowledgeItem(path) {
  const selected = items.find((item) => item.path === path);
  if (!selected) return;
  state.category = selected.category;
  state.domain = "Alle domeinen";
  state.subfilter = "Alles";
  state.file = selected.path;
  state.query = "";
  state.previewPath = selected.path;
  clearWorkflow();
  categoryFilter.value = state.category;
  searchInput.value = "";
  closeKnowledgeModal();
  render();
  document.querySelector(".document-panel").scrollIntoView({ behavior: "smooth", block: "start" });
}

function initKnowledgeSearch() {
  if (!knowledgeModal || !openKnowledgeSearch || !knowledgeForm || !knowledgeInput || !knowledgeResults) return;
  openKnowledgeSearch.addEventListener("click", openKnowledgeModal);
  closeKnowledgeSearch.addEventListener("click", closeKnowledgeModal);
  knowledgeModal.addEventListener("click", (event) => {
    if (event.target === knowledgeModal) closeKnowledgeModal();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && knowledgeModal.classList.contains("open")) closeKnowledgeModal();
  });
  knowledgeForm.addEventListener("submit", (event) => {
    event.preventDefault();
    renderKnowledgeResults(knowledgeInput.value);
  });
  knowledgeInput.addEventListener("input", () => renderKnowledgeResults(knowledgeInput.value));
  document.querySelectorAll(".knowledge-examples button").forEach((button) => {
    button.addEventListener("click", () => {
      knowledgeInput.value = button.dataset.question;
      renderKnowledgeResults(knowledgeInput.value);
      knowledgeInput.focus();
    });
  });
  knowledgeResults.addEventListener("click", (event) => {
    const sourceLink = event.target.closest("[data-knowledge-open]");
    if (sourceLink) {
      window.setTimeout(closeKnowledgeModal, 80);
      return;
    }
    const button = event.target.closest("[data-knowledge-path]");
    if (!button) return;
    showKnowledgeItem(button.dataset.knowledgePath);
  });
}
const ACCESS_CODE_HASH = "cc4907f5ed4bdfe8b8f271a95b05897dba2ca085aa199a4e01d4c09873ab68fc";
const ACCESS_STORAGE_KEY = "bpvToolboxAccessHash";

async function sha256Hex(value) {
  const bytes = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return [...new Uint8Array(digest)].map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

function unlockToolbox() {
  document.body.classList.remove("auth-locked");
  if (accessGate) accessGate.classList.add("is-hidden");
}

function initAccessGate() {
  if (!accessGate || !accessForm || !accessCodeInput) return;
  if (sessionStorage.getItem(ACCESS_STORAGE_KEY) === ACCESS_CODE_HASH) {
    unlockToolbox();
    return;
  }
  accessCodeInput.focus();
  accessForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const enteredHash = await sha256Hex(accessCodeInput.value.trim());
    if (enteredHash === ACCESS_CODE_HASH) {
      sessionStorage.setItem(ACCESS_STORAGE_KEY, ACCESS_CODE_HASH);
      unlockToolbox();
      return;
    }
    accessMessage.textContent = "De toegangscode klopt niet. Probeer het opnieuw.";
    accessCodeInput.value = "";
    accessCodeInput.focus();
  });
}

const rootFolders = [
  "BPV EXAMENWERK",
  "BPV FORMULIEREN & TEMPLATES",
  "BPV HANDLEIDINGEN",
  "BPV INFO STUDENTEN",
  "BPV KWALIFICATIEDOSSIERS",
  "BPV INFO PRAKTIJKOPLEIDERS",
  "BPV OPDRACHTEN",
  "BPV PRESENTATIES",
  "BPV QR & LINKS",
  "BPV STAGE-KALENDERS"
];

const categoryText = {
  "BPV EXAMENWERK": "Handleidingen, inloggegevens en stappenplannen voor Examenwerk en Praktijkbeoordelen.",
  "BPV FORMULIEREN & TEMPLATES": "PDCA-formulieren, mails, agenda's en verslagen.",
  "BPV HANDLEIDINGEN": "Handleidingen voor veelgebruikte BPV-processen.",
  "BPV INFO STUDENTEN": "Informatie, formulieren en hulpmiddelen voor studenten.",
  "BPV KWALIFICATIEDOSSIERS": "Nieuwe en oude dossiers, beroepsbeschrijvingen en verantwoording.",
  "BPV INFO PRAKTIJKOPLEIDERS": "Informatie voor praktijkopleiders en leerbedrijven.",
  "BPV OPDRACHTEN": "BPV-opdrachten per profiel en richting.",
  "BPV PRESENTATIES": "Presentaties en toelichtingen voor BPV-informatie.",
  "BPV QR & LINKS": "QR-codes, Forms-links en tutorials.",
  "BPV STAGE-KALENDERS": "Kalenders voor BBL en BOL stageperiodes."
};

const categoryActions = {
  "BPV EXAMENWERK": "Bekijk Examenwerk",
  "BPV FORMULIEREN & TEMPLATES": "Bekijk formulieren",
  "BPV HANDLEIDINGEN": "Bekijk handleidingen",
  "BPV INFO STUDENTEN": "Bekijk info",
  "BPV KWALIFICATIEDOSSIERS": "Bekijk dossiers",
  "BPV INFO PRAKTIJKOPLEIDERS": "Bekijk info",
  "BPV OPDRACHTEN": "Bekijk opdrachten",
  "BPV PRESENTATIES": "Bekijk presentaties",
  "BPV QR & LINKS": "Open QR & links",
  "BPV STAGE-KALENDERS": "Bekijk kalenders"
};

const workflowSteps = {
  Kennismakingsgesprek: {
    title: "Kennismakingsgesprek",
    documents: [
      "BPV FORMULIER Planning",
      "BPV TEKST Agenda Kennismakingsgesprek",
      "BPV TEKST Reminder Mail Kennismakingsgesprek",
      "BPV FORMULIER Kennismakingsgesprek",
      "BPV TEMPLATE Verslag Kennismakingsgesprek",
      "BPV TEKST Mail Verslag Kennismakingsgesprek"
    ]
  },
  Voortgangsgesprek: {
    title: "Voortgangsgesprek",
    documents: [
      "BPV FORMULIER Planning",
      "BPV TEKST Agenda Voortgangsgesprek",
      "BPV TEKST Reminder Agenda Voortgangsgesprek",
      "BPV FORMULIER Voortgangsgesprek",
      "BPV TEMPLATE Verslag Voortgangsgesprek",
      "BPV TEKST Mail Verslag Voortgangsgesprek"
    ]
  },
  Eindbeoordeling: {
    title: "Eindbeoordeling",
    documents: [
      "BPV FORMULIER Planning",
      "BPV TEKST Mail Eindbeoordeling PO",
      "BPV TEKST Mail Eindbeoordeling ST",
      "BPV TEKST Reminder Mail Eindbeoordeling PO",
      "BPV TEKST Reminder Mail Eindbeoordeling ST",
      "BPV FORMULIER Eindbeoordeling",
      "BPV TEMPLATE Verslag Eindbeoordeling",
      "BPV TEKST Mail Verslag Eindbeoordeling"
    ]
  },
  CheckActie: {
    title: "Check & Actie",
    documents: [
      "BPV FORMULIER Check & Actie"
    ]
  },
  BeeindigenBPV: {
    title: "BeÃ«indigen BPV",
    documents: [
      "BPV HANDLEIDING Beeindigen BPV Student 2"
    ]
  },
  BedrijfsbezoekenAHCR: {
    title: "Bedrijfsbezoeken AHCR",
    documents: [
      "BPV HANDLEIDING Bedrijfsbezoeken AHCR"
    ]
  }
};

const state = {
  category: "Alle onderdelen",
  domain: "Alle domeinen",
  file: "Alle bestanden",
  query: "",
  subfilter: "Alles",
  workflow: "",
  previewPath: ""
};

function unique(values) {
  return [...new Set(values)].sort((a, b) => a.localeCompare(b, "nl"));
}

function setOptions(select, values, selected) {
  select.innerHTML = values.map((entry) => {
    const value = typeof entry === "string" ? entry : entry.value;
    const label = typeof entry === "string" ? entry : entry.label;
    return `<option value="${value}"${value === selected ? " selected" : ""}>${label}</option>`;
  }).join("");
}

function countByCategory(category) {
  return items.filter((item) => item.category === category).length;
}

function formatCategoryLabel(category) {
  return displayCategoryName(category).replace(" & ", " + ");
}

function displayCategoryName(category) {
  return category;
}

function escapeAttribute(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function itemText(item) {
  return `${item.title} ${item.fileName} ${item.category} ${item.group} ${item.path}`.toLowerCase();
}

function matchesText(item, query) {
  return itemText(item).includes(query.toLowerCase());
}

function subfilterOptions(category) {
  if (category === "BPV KWALIFICATIEDOSSIERS") {
    return [
      { label: "Alles", test: () => true },
      { label: "Nieuw KD", test: (item) => item.group.includes("NIEUW") },
      { label: "Oud KD", test: (item) => item.group.includes("OUD") }
    ];
  }
  return [{ label: "Alles", test: () => true }];
}

function supportsDomain(category) {
  return category === "BPV KWALIFICATIEDOSSIERS" || category === "BPV OPDRACHTEN" || category === "BPV FORMULIEREN & TEMPLATES";
}

function domainOptions() {
  if (state.category === "BPV FORMULIEREN & TEMPLATES") {
    return [
      { value: "Alle domeinen", label: "Alle mappen" },
      { value: "BPV PDCA FORMULIEREN", label: "BPV PDCA Formulieren" },
      { value: "BPV TEMPLATES", label: "BPV Templates" },
      { value: "BPV KOPIEERTEKSTEN", label: "BPV Kopieerteksten" }
    ];
  }
  return ["Alle domeinen", "Keuken", "Bediening", "Management"];
}

function matchesDomain(item) {
  if (state.domain === "Alle domeinen") return true;
  if (state.category === "BPV FORMULIEREN & TEMPLATES") return item.group === state.domain;
  return item.group.toLowerCase().includes(state.domain.toLowerCase());
}

function currentSubfilterTest() {
  const option = subfilterOptions(state.category).find((entry) => entry.label === state.subfilter);
  return option ? option.test : () => true;
}

function clearWorkflow() {
  state.workflow = "";
  document.querySelectorAll(".route-list button").forEach((button) => button.classList.remove("active"));
}

function selectCategory(category) {
  state.category = category;
  state.domain = "Alle domeinen";
  state.subfilter = "Alles";
  state.file = "Alle bestanden";
  state.previewPath = "";
  clearWorkflow();
  categoryFilter.value = state.category;
  render();
}

function setQuery(query, workflow = "") {
  state.category = "Alle onderdelen";
  state.domain = "Alle domeinen";
  state.file = "Alle bestanden";
  state.subfilter = "Alles";
  state.query = query;
  state.workflow = workflow;
  state.previewPath = "";
  categoryFilter.value = state.category;
  searchInput.value = state.query;
  render();
  document.querySelector(".document-panel").scrollIntoView({ behavior: "smooth", block: "start" });
}

function setWorkflow(workflow) {
  const workflowStep = workflowSteps[workflow];
  const workflowDoc = workflowStep && workflowStep.documents.length === 1
    ? items.find((item) => item.title === workflowStep.documents[0])
    : null;

  state.category = "Alle onderdelen";
  state.domain = "Alle domeinen";
  state.file = "Alle bestanden";
  state.subfilter = "Alles";
  state.query = "";
  state.workflow = workflow;
  state.previewPath = workflowDoc && workflowDoc.extension === "PDF" ? workflowDoc.path : "";
  categoryFilter.value = state.category;
  searchInput.value = "";
  render();
  if (workflowDoc && workflowDoc.extension === "PDF") {
    document.querySelector(".document-panel").scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function init() {
  setOptions(categoryFilter, ["Alle onderdelen", ...rootFolders], state.category);
  const pdfCount = items.filter((item) => String(item.extension || "").toUpperCase() === "PDF").length;
  const wordCount = items.filter((item) => ["DOC", "DOCX"].includes(String(item.extension || "").toUpperCase())).length;
  const otherCount = items.length - pdfCount - wordCount;
  document.querySelector("#kpiTotal").textContent = items.length;
  document.querySelector("#kpiPdf").textContent = pdfCount;
  document.querySelector("#kpiWord").textContent = wordCount;
  document.querySelector("#kpiOther").textContent = otherCount;
  document.querySelector("#kpiFolders").textContent = rootFolders.length;
  recordCount.textContent = `${items.length} documenten`;
  lastUpdated.textContent = "Bronmap actief";
  const footerYear = document.querySelector("#footer-year");
  if (footerYear) footerYear.textContent = new Date().getFullYear();
  render();
}

function filteredItems() {
  const query = state.query.trim().toLowerCase();
  const subfilterTest = currentSubfilterTest();
  return items.filter((item) => {
    const categoryOk = state.category === "Alle onderdelen" || item.category === state.category;
    const domainOk = matchesDomain(item);
    const fileOk = state.file === "Alle bestanden" || item.path === state.file;
    return categoryOk && domainOk && fileOk && subfilterTest(item) && (!query || matchesText(item, query));
  });
}

function workflowItems() {
  if (!state.workflow || !workflowSteps[state.workflow]) return [];
  return workflowSteps[state.workflow].documents
    .map((title) => items.find((item) => item.title === title))
    .filter(Boolean);
}

function renderCategoryCards() {
  categoryCards.innerHTML = rootFolders.map((category) => {
    const count = countByCategory(category);
    const active = state.category === category ? " active" : "";
    const empty = count === 0 ? " empty" : "";
    const note = count === 0 ? "Nog leeg" : `${count} document${count === 1 ? "" : "en"}`;
    return `<button class="category-card${active}${empty}" type="button" data-category="${category}"><strong>${formatCategoryLabel(category)}</strong><span>${categoryText[category]}</span><small>${note}</small><em>${categoryActions[category]}</em></button>`;
  }).join("");
  categoryCards.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => selectCategory(button.dataset.category));
  });
}

function renderSubfilters() {
  if (state.category === "Alle onderdelen") {
    subfilterBar.innerHTML = "";
    return;
  }
  const options = subfilterOptions(state.category);
  if (options.length <= 1) {
    subfilterBar.innerHTML = "";
    return;
  }
  subfilterBar.innerHTML = `<span>Subfilter</span>${options.map((option) => `<button type="button" class="${state.subfilter === option.label ? "active" : ""}" data-subfilter="${option.label}">${option.label}</button>`).join("")}`;
  subfilterBar.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      state.subfilter = button.dataset.subfilter;
      render();
    });
  });
}

function renderDomainFilter() {
  if (!supportsDomain(state.category)) {
    state.domain = "Alle domeinen";
    domainFilter.disabled = true;
    setOptions(domainFilter, [{ value: "Alle domeinen", label: "Niet actief" }], state.domain);
    return;
  }
  domainFilter.disabled = false;
  setOptions(domainFilter, domainOptions(), state.domain);
}

function renderFileFilter() {
  if (state.category === "Alle onderdelen") {
    state.file = "Alle bestanden";
    typeFilter.disabled = true;
    setOptions(typeFilter, [{ value: "Alle bestanden", label: "Kies eerst een onderdeel" }], state.file);
    return;
  }
  typeFilter.disabled = false;
  const scopedItems = items.filter((item) => (state.category === "Alle onderdelen" || item.category === state.category) && matchesDomain(item));
  const options = [
    { value: "Alle bestanden", label: `Alle bestanden (${scopedItems.length})` },
    ...scopedItems.map((item) => ({ value: item.path, label: item.title }))
  ];
  if (!scopedItems.some((item) => item.path === state.file)) state.file = "Alle bestanden";
  setOptions(typeFilter, options, state.file);
}

function renderWorkflow() {
  document.querySelectorAll(".route-list button").forEach((button) => {
    button.classList.toggle("active", state.workflow === button.dataset.query);
  });
  if (!state.workflow) {
    workflowDocs.innerHTML = `<p>Kies een gespreksmoment om direct de juiste formulieren en templates te zien.</p>`;
    return;
  }
  const docs = workflowItems();
  workflowDocs.innerHTML = `<strong>${workflowSteps[state.workflow].title}</strong>${docs.map(renderMiniDoc).join("")}`;
}

function renderMiniDoc(item) {
  const isCopyText = item.group === "BPV KOPIEERTEKSTEN" || item.title.includes("BPV KOPIEERTEKST") || item.title.includes("BPV TEKST");
  const copyLabel = item.title.includes(" Agenda ") ? "Kopieer agendatekst" : "Kopieer mailtekst";
  const copyButton = item.copyText && isCopyText
    ? `<button type="button" class="copy-text-button" data-copy-text="${escapeAttribute(encodeURIComponent(item.copyText))}">${copyLabel}</button>`
    : "";
  const label = item.extension;
  if (item.title === "BPV HANDLEIDING Bedrijfsbezoeken AHCR") return "";
  return `<div class="workflow-doc-item${isCopyText ? " copy-doc-item" : ""}"><a href="${encodeToolboxPath(item.path)}" download="${escapeAttribute(item.fileName)}"><span>${label}</span>${item.title}</a>${copyButton}</div>`;
}

function renderPreview(docs) {
  const selected = docs.find((item) => item.path === state.previewPath) || (state.file !== "Alle bestanden" ? docs[0] : null);
  if (!selected) {
    previewPanel.innerHTML = "";
    return;
  }
  state.previewPath = selected.path;
  const href = encodeToolboxPath(selected.path);
  const isPdf = selected.extension === "PDF";
  previewPanel.innerHTML = `
    <div class="preview-heading">
      <div>
        <h3>${selected.title}</h3>
        <p>HOOFDMAP: ${displayCategoryName(selected.category)}</p>
      </div>
      <div class="preview-actions">
        <a href="${href}" target="_blank">Open document</a>
        <button type="button" id="closePreview">Preview sluiten</button>
      </div>
    </div>
    ${isPdf
      ? `<iframe title="Preview ${selected.title}" src="${href}"></iframe>`
      : `<div class="preview-empty"><strong>Preview niet beschikbaar</strong><span>Dit bestandstype wordt door de browser niet betrouwbaar inline getoond. Open het document om het te bekijken of te bewerken.</span></div>`}
  `;
  document.querySelector("#closePreview").addEventListener("click", () => {
    state.previewPath = "";
    previewPanel.innerHTML = "";
    documentList.querySelectorAll(".doc-row.active").forEach((row) => row.classList.remove("active"));
  });
}

function renderDocuments() {
  const hasSelection = state.category !== "Alle onderdelen" || state.file !== "Alle bestanden" || state.query.trim() || state.previewPath;
  renderSubfilters();
  if (state.workflow && !hasSelection) {
    tableSummary.textContent = "Selecteer een onderdeel of gebruik de zoekfunctie";
    previewPanel.innerHTML = "";
    documentList.innerHTML = `<div class="empty-state"><strong>Praktijkroute actief</strong><span>Je gebruikt nu de praktijkroute. De benodigde documenten en kopieerteksten staan in het panel hierboven.</span></div>`;
    return;
  }
  if (!hasSelection) {
    tableSummary.textContent = "Selecteer een onderdeel of gebruik de zoekfunctie";
    previewPanel.innerHTML = "";
    documentList.innerHTML = `<div class="empty-state"><strong>Nog geen selectie</strong><span>Kies een toolbox-onderdeel, gebruik de praktijkroute of zoek direct op documentnaam.</span></div>`;
    return;
  }
  const docs = state.workflow ? workflowItems() : filteredItems();
  tableSummary.textContent = `${docs.length} van ${items.length} documenten zichtbaar`;
  if (!docs.length) {
    const handleidingen = state.category === "BPV HANDLEIDINGEN" || state.query.toLowerCase().includes("handleiding");
    previewPanel.innerHTML = "";
    documentList.innerHTML = `<div class="empty-state"><strong>${handleidingen ? "Handleidingen is klaar voor later" : "Geen documenten gevonden"}</strong><span>${handleidingen ? "Dit onderdeel is bewust leeg en kan later worden gevuld." : "Pas je zoekterm of filter aan."}</span></div>`;
    return;
  }
  renderPreview(docs);
  documentList.innerHTML = docs.map((item) => {
    const isWord = ["DOC", "DOCX"].includes(item.extension);
    const badgeClass = isWord ? "badge word" : "badge";
    const active = item.path === state.previewPath ? " active" : "";
    return `<a class="doc-row${active}" href="${encodeToolboxPath(item.path)}" data-preview="${item.path}"><span class="doc-title"><strong>${item.title}</strong><small>HOOFDMAP: ${displayCategoryName(item.category)}</small></span><span class="${badgeClass}">${item.extension}</span></a>`;
  }).join("");
  documentList.querySelectorAll(".doc-row").forEach((row) => {
    row.addEventListener("click", (event) => {
      event.preventDefault();
      state.previewPath = row.dataset.preview;
      render();
      previewPanel.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function copyTextToClipboard(text, button) {
  const done = () => {
    const originalText = button.textContent;
    button.textContent = "Gekopieerd";
    button.classList.add("copied");
    window.setTimeout(() => {
      button.textContent = originalText;
      button.classList.remove("copied");
    }, 1800);
  };

  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(done).catch(() => fallbackCopyText(text, done));
    return;
  }

  fallbackCopyText(text, done);
}

function fallbackCopyText(text, done) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
  done();
}

function renderContext() {
  const chips = [];
  if (state.category !== "Alle onderdelen") chips.push(`<span class="context-label">${displayCategoryName(state.category)}</span>`);
  if (state.domain !== "Alle domeinen") chips.push(`<span class="context-label">Domein: ${state.domain}</span>`);
  if (state.subfilter !== "Alles") chips.push(`<span class="context-label">${state.subfilter}</span>`);
  if (state.file !== "Alle bestanden") {
    const selectedFile = items.find((item) => item.path === state.file);
    chips.push(`<span class="context-label">${selectedFile ? selectedFile.title : "Bestand geselecteerd"}</span>`);
  }
  if (state.query) chips.push(`<span class="context-label attention">Zoeken: ${state.query}</span>`);
  activeContext.innerHTML = chips.join("");
}

function render() {
  renderDomainFilter();
  renderFileFilter();
  renderCategoryCards();
  renderWorkflow();
  renderDocuments();
  renderContext();
}

function initStartTip() {
  const startTip = document.querySelector("#startTip");
  if (!startTip || sessionStorage.getItem("bpvStartTipClosed") === "true") return;
  const closeTip = () => {
    startTip.classList.remove("visible");
    startTip.setAttribute("aria-hidden", "true");
    sessionStorage.setItem("bpvStartTipClosed", "true");
  };
  startTip.querySelectorAll("button").forEach((button) => button.addEventListener("click", closeTip));
  setTimeout(() => {
    if (sessionStorage.getItem("bpvStartTipClosed") === "true") return;
    startTip.classList.add("visible");
    startTip.setAttribute("aria-hidden", "false");
  }, 5000);
}

categoryFilter.addEventListener("change", (event) => selectCategory(event.target.value));
domainFilter.addEventListener("change", (event) => {
  state.domain = event.target.value;
  state.file = "Alle bestanden";
  state.previewPath = "";
  clearWorkflow();
  render();
});
typeFilter.addEventListener("change", (event) => {
  state.file = event.target.value;
  state.previewPath = state.file === "Alle bestanden" ? "" : state.file;
  clearWorkflow();
  render();
  if (state.file !== "Alle bestanden") {
    document.querySelector(".document-panel").scrollIntoView({ behavior: "smooth", block: "start" });
  }
});
searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  state.file = "Alle bestanden";
  state.previewPath = "";
  clearWorkflow();
  render();
});
document.querySelector("#resetFilters").addEventListener("click", () => {
  state.category = "Alle onderdelen";
  state.domain = "Alle domeinen";
  state.file = "Alle bestanden";
  state.query = "";
  state.subfilter = "Alles";
  state.previewPath = "";
  clearWorkflow();
  categoryFilter.value = state.category;
  domainFilter.value = state.domain;
  searchInput.value = "";
  render();
});
document.querySelectorAll(".route-list button").forEach((button) => {
  button.addEventListener("click", () => setWorkflow(button.dataset.query));
});
workflowDocs.addEventListener("click", (event) => {
  const button = event.target.closest(".copy-text-button");
  if (!button) return;
  copyTextToClipboard(decodeURIComponent(button.dataset.copyText), button);
});

initAccessGate();
initKnowledgeSearch();
init();
initStartTip();
