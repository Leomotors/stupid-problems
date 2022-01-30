const questions = {
  aplusb: "A + B [EN]",
  calculus_wtf: "Calculus WTF [TH]",
  cancel_1112: "ยกเลิก 1112 [TH]",
  nikkori_cafe: "จอมเวทแห่งคาเฟ่รอยยิ้ม (เวอร์ชั่นง่าย) [TH]",
  wtf: "WTF [EN]",
};

const iframe = document.querySelector(".pdf-viewer > iframe");
const qToken = window.location.search.split("=");
const question = qToken[1];

if (qToken.length >= 2) {
  if (questions[question]) {
    iframe.src = `./pdf/${question}.pdf`;
  } else {
    document.querySelector(".not-found").className += " activate";
  }
}

// * Default
iframe.src ||= "./pdf/aplusb.pdf";

document.querySelector(".pdf-viewer").className += " loaded";

const ul = document.querySelector(".problems-list");

for (const [short, full] of Object.entries(questions)) {
  const li = document.createElement("li");
  li.innerHTML = `<a href="?=${short}">${short} | ${full}</a>`;
  ul.appendChild(li);
}
