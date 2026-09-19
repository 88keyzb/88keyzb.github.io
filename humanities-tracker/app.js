const WEEKS = [
{ n: 1, title: "Week 1 — Plato: Socrates & The Republic",
  desc: "The Final Days of Socrates + Republic Books I, VII. Justice and the Allegory of the Cave.",
  readings: ["Euthyphro","Apology","Crito","Phaedo","Republic, Book I","Republic, Book VII"],
  music: ["Bach: Well-Tempered Clavier, Book 1","Bach: Goldberg Variations"],
  art: ["Jacques-Louis David paintings (incl. The Death of Socrates, 1787)"],
  links: [
    { label: "Complete Works of Plato (Grube, Hackett)", url: "https://hackettpublishing.com/complete-works" },
    { label: "Reading notes for Plato — Honest Broker", url: "https://www.honest-broker.com/p/how-to-read-plato" },
    { label: "Paintings by Jacques-Louis David — WikiArt", url: "https://www.wikiart.org/en/jacques-louis-david/all-works" },
    { label: "The Death of Socrates — Wikipedia", url: "https://en.wikipedia.org/wiki/The_Death_of_Socrates" }
  ] },
{ n: 2, title: "Week 2 — Lyric Poetry & Odyssey I",
  desc: "First songs of the self; begin Odysseus' journey.",
  readings: ["Sappho and other Greek lyric poets (Lattimore collection)","Homer: Odyssey, Books 1–10"],
  music: ["Schubert: Winterreise","Joni Mitchell: Blue"],
  art: ["Ancient Greek sculpture"],
  links: [
    { label: "Reading notes for Sappho — Honest Broker", url: "https://www.honest-broker.com/p/why-love-songs-are-badass" },
    { label: "Lattimore Greek lyric poetry collection — UChicago Press", url: "https://press.uchicago.edu/ucp/books/book/chicago/G/bo27941157.html" }
  ] },
{ n: 3, title: "Week 3 — Odyssey II",
  desc: "Wisdom over brute force; Odysseus returns to Ithaca.",
  readings: ["Homer: Odyssey, Books 11–24"],
  music: ["Beethoven: Symphony No. 3 (Eroica)","Beethoven: Symphony No. 5","Beethoven: Symphony No. 9"],
  art: ["Ancient Greek architecture"] },
{ n: 4, title: "Week 4 — Confucius",
  desc: "The Analects: conduct, leadership, politics, education.",
  readings: ["Confucius: The Analects (Waley translation)"],
  music: ["The Hugo Masters — Chinese traditional music (Celestial Harmonies, vols. 1–4)"],
  art: ["Ancient Chinese arts and crafts"] },
{ n: 5, title: "Week 5 — Aristotle",
  desc: "Virtue ethics + the founding text of cultural criticism.",
  readings: ["Aristotle: Nicomachean Ethics","Aristotle: Poetics"],
  music: ["Bach: Cello Suites"],
  art: ["Gian Lorenzo Bernini — sculpture and architecture"] },
{ n: 6, title: "Week 6 — Love & War",
  desc: "Plato on love; Herodotus on the Persian invasion of Greece.",
  readings: ["Plato: Symposium","Herodotus: Histories, Book 1","Herodotus: Histories, Books 6–8"],
  music: ["Nonesuch Explorer: Japan","Nonesuch Explorer: Tibet","Nonesuch Explorer: Iran","Nonesuch Explorer: Indonesia"],
  art: ["Persian art and architecture"] },
{ n: 7, title: "Week 7 — Gilgamesh & Buddha",
  desc: "Epic before Homer; flood before Noah; 423 verses from the Buddha.",
  readings: ["The Epic of Gilgamesh","Dhammapada"],
  music: ["Stravinsky: The Rite of Spring","Wagner overtures"],
  art: ["Ancient Mesopotamian art"] },
{ n: 8, title: "Week 8 — Egypt",
  desc: "Book of the Dead, mythic texts, love songs predating Sappho.",
  readings: ["Ancient Egyptian hymns, prayers and songs (Hollis collection)"],
  music: ["Nonesuch Explorer: oud music from Southern Egypt","Desert blues (Ali Farka Touré, Tinariwen)","Youssou N'Dour: Egypt"],
  art: ["Ancient Egyptian architecture and art"] },
{ n: 9, title: "Week 9 — Bible",
  desc: "Foundational scriptural texts.",
  readings: ["The Book of Genesis","Ecclesiastes","The Four Gospels","Epistle to the Romans"],
  music: ["William Byrd choral music + The Byrds: Turn! Turn! Turn!","Thomas Tallis: Lamentations of Jeremiah","Handel: Messiah"],
  art: ["Michelangelo: Sistine Chapel and sculptures"] },
{ n: 10, title: "Week 10 — Tragedy & Comedy",
  desc: "Thebes + selected Aeschylus, Euripides, Aristophanes.",
  readings: ["Sophocles: Oedipus the King","Sophocles: Oedipus at Colonus","Sophocles: Antigone","Aeschylus: Agamemnon","Euripides: The Bacchae","Aristophanes: Lysistrata"],
  music: ["Early blues (Blind Lemon Jefferson, Blind Willie Johnson, Son House, Charley Patton, Mamie Smith, Bessie Smith, Robert Johnson)"],
  art: ["Ancient Greek pottery"] },
{ n: 11, title: "Week 11 — Stoicism",
  desc: "Emperor and ex-slave on the practical regimen.",
  readings: ["Marcus Aurelius: Meditations","Epictetus: The Enchiridion"],
  music: ["Haydn: Symphony 45 (Farewell)","Haydn: Symphony 94 (Surprise)","Haydn: Symphony 104 (London)"],
  art: ["Ancient Roman art and architecture"] },
{ n: 12, title: "Week 12 — Decadence",
  desc: "Read about the Caesars — don't emulate them.",
  readings: ["Suetonius: The Twelve Caesars"],
  music: ["Mozart: Symphonies 39–41"],
  art: ["Botticelli","Caravaggio"] },
{ n: 13, title: "Week 13 — Koran & Rumi",
  desc: "14 surahs + selected Rumi poems.",
  readings: ["Koran: Surahs 1, 2, 3, 4, 5, 12, 17, 18, 32, 36, 55, 67, 103, 112","Rumi: Selected Poems"],
  music: ["Nusrat Fateh Ali Khan","Folkways: Religious Songs and Cantillations from Tunisia"],
  art: ["Islamic architecture"] },
];

const KEY = "humanities-tracker-v1";
let state = { checked: {} };
try {
  const raw = localStorage.getItem(KEY);
  if (raw) state = JSON.parse(raw);
} catch (e) { state = { checked: {} }; }

function save() { localStorage.setItem(KEY, JSON.stringify(state)); }
function itemId(w, c, i) { return `w${w}-${c}${i}`; }
function allItems() {
  const out = [];
  WEEKS.forEach(w => {
    ["readings","music","art"].forEach(c => {
      w[c].forEach((label, i) => out.push({ id: itemId(w.n, c, i), label }));
    });
  });
  return out;
}

function render() {
  const root = document.getElementById("weeks");
  root.innerHTML = "";
  WEEKS.forEach((w, idx) => {
    const det = document.createElement("details");
    det.className = "week";
    det.open = idx === 0;
    const sum = document.createElement("summary");
    const weekIds = [];
    ["readings","music","art"].forEach(c => w[c].forEach((_, i) => weekIds.push(itemId(w.n, c, i))));
    const done = weekIds.filter(id => state.checked[id]).length;
    const pct = weekIds.length ? Math.round(done / weekIds.length * 100) : 0;
    sum.innerHTML = `<span>${w.title}</span><span class="week-progress">${done}/${weekIds.length} · ${pct}%</span>`;
    det.appendChild(sum);
    const bar = document.createElement("div");
    bar.className = "mini-bar";
    bar.innerHTML = `<div class="mini-fill" style="width:${pct}%"></div>`;
    det.appendChild(bar);
    const body = document.createElement("div");
    body.className = "week-body";
    body.innerHTML = `<p class="desc">${w.desc}</p>`;
    if (w.links && w.links.length) {
      const h = document.createElement("h3");
      h.textContent = "Links";
      body.appendChild(h);
      const ul = document.createElement("ul");
      ul.className = "links-list";
      w.links.forEach(l => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = l.url;
        a.textContent = l.label;
        a.target = "_blank";
        a.rel = "noopener";
        li.appendChild(a);
        ul.appendChild(li);
      });
      body.appendChild(ul);
    }
    [["readings","Readings"],["music","Music"],["art","Art"]].forEach(([cat, heading]) => {
      const h = document.createElement("h3");
      h.textContent = heading;
      body.appendChild(h);
      w[cat].forEach((label, i) => {
        const id = itemId(w.n, cat, i);
        const lab = document.createElement("label");
        lab.className = "item" + (state.checked[id] ? " done" : "");
        const cb = document.createElement("input");
        cb.type = "checkbox";
        cb.checked = !!state.checked[id];
        cb.addEventListener("change", () => {
          state.checked[id] = cb.checked;
          save();
          render();
        });
        const sp = document.createElement("span");
        sp.textContent = label;
        lab.appendChild(cb);
        lab.appendChild(sp);
        body.appendChild(lab);
      });
    });
    det.appendChild(body);
    root.appendChild(det);
  });
  const items = allItems();
  const done = items.filter(it => state.checked[it.id]).length;
  const pct = items.length ? Math.round(done / items.length * 100) : 0;
  document.getElementById("overall-fill").style.width = pct + "%";
  document.getElementById("overall-text").textContent = `${done}/${items.length} items · ${pct}% complete`;
}

document.getElementById("export-btn").addEventListener("click", () => {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "humanities-tracker-progress.json";
  a.click();
  URL.revokeObjectURL(a.href);
});
document.getElementById("import-input").addEventListener("change", (e) => {
  const f = e.target.files[0];
  if (!f) return;
  const r = new FileReader();
  r.onload = () => {
    try {
      const parsed = JSON.parse(r.result);
      if (parsed && typeof parsed.checked === "object") {
        state = parsed;
        save();
        render();
      } else { alert("Invalid file: missing 'checked' object."); }
    } catch { alert("Invalid JSON file."); }
  };
  r.readAsText(f);
  e.target.value = "";
});
document.getElementById("reset-btn").addEventListener("click", () => {
  if (confirm("Clear all progress?")) { state = { checked: {} }; save(); render(); }
});

render();
