const data = JSON.parse(localStorage.getItem("etalaseData") || "[]");
const container = document.getElementById("etalase");

function render() {
  container.innerHTML = "";
  data.forEach((item, i) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${item.image}" alt="${item.title}">
      <h3>${i + 1}. ${item.title}</h3>
      <p>${item.desc}</p>
      <a href="${item.link}" target="_blank">Lihat Detail</a>
    `;
    container.appendChild(card);
  });
}

render();