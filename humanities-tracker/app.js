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
    { label: "Lattimore Greek lyric poetry collection — UChicago Press", url: "https://press.uchicago.edu/ucp/books/book/chicago/G/bo27941157.html" },
    { label: "Ancient Greek sculpture — gallery", url: "https://ancientgreece.com/gallery/" }
  ] },
{ n: 3, title: "Week 3 — Odyssey II",
  desc: "Wisdom over brute force; Odysseus returns to Ithaca.",
  readings: ["Homer: Odyssey, Books 11–24"],
  music: ["Beethoven: Symphony No. 3 (Eroica)","Beethoven: Symphony No. 5","Beethoven: Symphony No. 9"],
  art: ["Ancient Greek architecture"],
  links: [
    { label: "Ancient Greek architecture — Architectural Digest", url: "https://www.architecturaldigest.com/gallery/greek-architecture-101" }
  ] },
{ n: 4, title: "Week 4 — Confucius",
  desc: "The Analects: conduct, leadership, politics, education.",
  readings: ["Confucius: The Analects (Waley translation)"],
  music: ["The Hugo Masters — Chinese traditional music (Celestial Harmonies, vols. 1–4)"],
  art: ["Ancient Chinese arts and crafts"],
  links: [
    { label: "Arthur Waley's translation — Internet Archive", url: "https://archive.org/details/in.ernet.dli.2015.59196/page/n7/mode/2up" },
    { label: "The Hugo Masters — Celestial Harmonies", url: "https://www.harmonies.com/releases/19901.htm" },
    { label: "▶ YouTube: Hugo Masters, volume one", url: "https://www.youtube.com/watch?v=XLtR2klTQYU&list=OLAK5uy_lqcdA1v6ocUTqEANXvt1f7HNgoDIssqAE" },
    { label: "Ancient Chinese arts and crafts — CoMuseum", url: "https://www.comuseum.com/arts/" }
  ] },
{ n: 5, title: "Week 5 — Aristotle",
  desc: "Virtue ethics + the founding text of cultural criticism.",
  readings: ["Aristotle: Nicomachean Ethics","Aristotle: Poetics"],
  music: ["Bach: Cello Suites"],
  art: ["Gian Lorenzo Bernini — sculpture and architecture"],
  links: [
    { label: "On utilitarian approaches — Honest Broker", url: "https://www.honest-broker.com/p/why-i-ran-away-from-philosophy-because" },
    { label: "Gian Lorenzo Bernini — Villa Borghese highlights", url: "https://www.througheternity.com/en/blog/art/bernini-villa-borghese-highlights.html" }
  ] },
{ n: 6, title: "Week 6 — Love & War",
  desc: "Plato on love; Herodotus on the Persian invasion of Greece.",
  readings: ["Plato: Symposium","Herodotus: Histories, Book 1","Herodotus: Histories, Books 6–8"],
  music: ["Nonesuch Explorer: Japan","Nonesuch Explorer: Tibet","Nonesuch Explorer: Iran","Nonesuch Explorer: Indonesia"],
  art: ["Persian art and architecture"],
  links: [
    { label: "Japan: Shakuhachi — Nonesuch Explorer", url: "https://www.nonesuch.com/albums/japan-shakuhachi-japanese-flute" },
    { label: "Tibet: Ritual Orchestra and Chants — Nonesuch", url: "https://store.nonesuch.com/en/nonesuch/tibetan-buddhism-the-ritual-orchestra-and-chants-digital-mp3-album/603497199761.html" },
    { label: "Central Asia / Iran — Nonesuch Explorer", url: "https://store.nonesuch.com/en/nonesuch/artists/explorer-series-central-asia/" },
    { label: "Bali / Indonesia — Nonesuch Explorer", url: "https://www.nonesuch.com/albums/bali-music-morning-world" },
    { label: "Persian art and architecture — World History", url: "https://www.worldhistory.org/Ancient_Persian_Art_and_Architecture/" }
  ] },
{ n: 7, title: "Week 7 — Gilgamesh & Buddha",
  desc: "Epic before Homer; flood before Noah; 423 verses from the Buddha.",
  readings: ["The Epic of Gilgamesh","Dhammapada"],
  music: ["Stravinsky: The Rite of Spring","Wagner overtures"],
  art: ["Ancient Mesopotamian art"],
  links: [
    { label: "Art of Mesopotamia — Wikipedia", url: "https://en.wikipedia.org/wiki/Art_of_Mesopotamia" }
  ] },
{ n: 8, title: "Week 8 — Egypt",
  desc: "Book of the Dead, mythic texts, love songs predating Sappho.",
  readings: ["Ancient Egyptian hymns, prayers and songs (Hollis collection)"],
  music: ["Nonesuch Explorer: oud music from Southern Egypt","Desert blues (Ali Farka Touré, Tinariwen)","Youssou N'Dour: Egypt"],
  art: ["Ancient Egyptian architecture and art"],
  links: [
    { label: "Susan Tower Hollis collection — Internet Archive", url: "https://archive.org/details/hymnsprayerssong0000unse" },
    { label: "Oud music from Southern Egypt — Nonesuch", url: "https://www.nonesuch.com/albums/nubia-escalay-water-wheel-oud-music" },
    { label: "Ancient Egyptian architecture and art — Brewminate", url: "https://brewminate.com/beyond-hieroglyphs-the-art-and-architecture-of-ancient-egypt/" }
  ] },
{ n: 9, title: "Week 9 — Bible",
  desc: "Foundational scriptural texts.",
  readings: ["The Book of Genesis","Ecclesiastes","The Four Gospels","Epistle to the Romans"],
  music: ["William Byrd choral music + The Byrds: Turn! Turn! Turn!","Thomas Tallis: Lamentations of Jeremiah","Handel: Messiah"],
  art: ["Michelangelo: Sistine Chapel and sculptures"],
  links: [
    { label: "Sistine Chapel virtual tour — Vatican Museums", url: "https://www.museivaticani.va/content/museivaticani/en/collezioni/musei/cappella-sistina/tour-virtuale.html" },
    { label: "▶ YouTube: Tallis — Lamentations of Jeremiah I (Hilliard Ensemble)", url: "https://www.youtube.com/watch?v=NOfcFHtCqgg" }
  ] },
{ n: 10, title: "Week 10 — Tragedy & Comedy",
  desc: "Thebes + selected Aeschylus, Euripides, Aristophanes.",
  readings: ["Sophocles: Oedipus the King","Sophocles: Oedipus at Colonus","Sophocles: Antigone","Aeschylus: Agamemnon","Euripides: The Bacchae","Aristophanes: Lysistrata"],
  music: ["Early blues (Blind Lemon Jefferson, Blind Willie Johnson, Son House, Charley Patton, Mamie Smith, Bessie Smith, Robert Johnson)"],
  art: ["Ancient Greek pottery"],
  links: [
    { label: "Ancient Greek pottery — WikiArt", url: "https://www.wikiart.org/en/ancient-greek-pottery/all-works" }
  ] },
{ n: 11, title: "Week 11 — Stoicism",
  desc: "Emperor and ex-slave on the practical regimen.",
  readings: ["Marcus Aurelius: Meditations","Epictetus: The Enchiridion"],
  music: ["Haydn: Symphony 45 (Farewell)","Haydn: Symphony 94 (Surprise)","Haydn: Symphony 104 (London)"],
  art: ["Ancient Roman art and architecture"],
  links: [
    { label: "Ancient Roman art and architecture — Oxford Art", url: "https://www.oxfordartonline.com/page/1762" }
  ] },
{ n: 12, title: "Week 12 — Decadence",
  desc: "Read about the Caesars — don't emulate them.",
  readings: ["Suetonius: The Twelve Caesars"],
  music: ["Mozart: Symphonies 39–41"],
  art: ["Botticelli","Caravaggio"],
  links: [
    { label: "Botticelli — WikiArt", url: "https://www.wikiart.org/en/sandro-botticelli/all-works" },
    { label: "Caravaggio — catalogue", url: "https://www.caravaggio.org/" }
  ] },
{ n: 13, title: "Week 13 — Koran & Rumi",
  desc: "14 surahs + selected Rumi poems.",
  readings: ["Koran: Surahs 1, 2, 3, 4, 5, 12, 17, 18, 32, 36, 55, 67, 103, 112","Rumi: Selected Poems"],
  music: ["Nusrat Fateh Ali Khan","Folkways: Religious Songs and Cantillations from Tunisia"],
  art: ["Islamic architecture"],
  links: [
    { label: "▶ YouTube playlist: Nusrat Fateh Ali Khan", url: "https://www.youtube.com/playlist?list=PLDIxWXRU4UDqLEPDoVpBuo7EqkwfR1imX" },
    { label: "Religious Songs and Cantillations from Tunisia — Smithsonian Folkways", url: "https://folkways.si.edu/tunisia-vol-2-religious-songs-and-cantillations-from-tunisia/islamica-sacred-world/music/album/smithsonian" },
    { label: "Islamic architecture — Britannica", url: "https://www.britannica.com/story/8-masterpieces-of-islamic-architecture" },
    { label: "Part two of the course — Honest Broker", url: "https://www.honest-broker.com/p/a-12-month-immersive-course-in-humanities-ac2" }
  ] },
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
