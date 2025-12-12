// 1) Ansattkort
function lagAnsattkort(i) {
  const e = ansatte[i];
  if (!e) return "Ansatt ikke funnet";
// #OPPD3denne la jeg til for at at begge html har med kurs i nettsiden
  const KursListe = e.KursListe || [];

  const kurs = KursListe.length
    ? "<ul>" + KursListe.map(k => `<li>${k}</li>`).join("") + "</ul>"
    : "Ingen kursansvar";

  return `
    <article>
      <h3>${e.firstname} ${e.lastname}</h3>
      <p>Stilling: ${positions[e.position]}</p>
      <p>Kontor: ${e.office}</p>
      <p>E-post: ${e.email}</p>
      ${kurs}
    </article>
  `;
}

// 2) Vis alle ansatte
function listAllEmployees() {
  return ansatte.map((_, i) => lagAnsattkort(i)).join("");
}

// 3) Filtrer etter stilling
function filterByPosition(stillingsNavn) {
  const idx = positions.indexOf(stillingsNavn);
  return ansatte.map((e, i) =>
    e.position === idx ? lagAnsattkort(i) : ""
  ).join("");
}

// 4) Hent alle kurs
function getAllCourses() {
  return [...new Set(ansatte.flatMap(e => e.KursListe || []))];
}

function showAllCourses() {
  const kurs = ansatte.flatMap(a => a.KursListe || []);
  const unike = [...new Set(kurs)];

  const html = `
    <h2>Kursoversikt</h2>
    <ul>
      ${unike.map(k => `<li>${k}</li>`).join("")}
    </ul>
  `;

  document.getElementById("kurs").innerHTML = html;
}

// 6 Dette er funksjonene til slett og legg til ansatte
function VisAnsatte() {
  output.innerHTML = ansatte
    .map((a, i) => `
      <article>
        <h3>${a.firstname} ${a.lastname}</h3>
        <p>Stilling: ${positions[a.position]}</p>
        <p>Kontor: ${a.office}</p>
        <p>E-post: ${a.email}</p>

        
        <p>Kurs: ${(a.KursListe || []).join(", ") || "Ingen"}</p>

        <button class="del" data-i="${i}">Slett ansatt</button>
      </article>
    `)
    .join("");
}
 // 7 Denne funksjonen legger til ansatte
function leggTilAnsatt(e) {
  e.preventDefault();

  
  const kursTekst = document.getElementById("kurs").value.trim();
  const KursListe = kursTekst
    ? kursTekst.split(",").map(k => k.trim()).filter(Boolean)
    : [];

  ansatte.push({
    firstname: Fornavn.value,
    lastname: Etternavn.value,
    email: email.value,
    office: kontor.value,
    position: Number(stilling.value),

    
    KursListe: KursListe
  });

  addForm.reset();
  VisAnsatte();
}
// 8 sletter ansatte
    function slettAnsatt(i) {
    ansatte.splice(i, 1);
    VisAnsatte();
    }


document.addEventListener("DOMContentLoaded", () => {
  stilling.innerHTML = positions.map((p, i) => `<option value="${i}">${p}</option>`).join("");

  addForm.onsubmit = leggTilAnsatt;

  output.addEventListener("click", e => {
    if (e.target.classList.contains("del")) {
      slettAnsatt(Number(e.target.dataset.i));
    }
  });

  VisAnsatte();
});