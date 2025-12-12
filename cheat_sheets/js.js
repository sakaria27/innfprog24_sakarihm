//Lager ansattkort
function lagAnsattkort(i) {
  const e = ansatte[i];
  if (!e) return "Ansatt ikke funnet";
   
  //Denne la denne linjen så
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