let data = JSON.parse(localStorage.getItem("etalaseData") || "[]");
const container = document.getElementById("etalase");
const form = document.getElementById("form");

function saveData() {
  localStorage.setItem("etalaseData", JSON.stringify(data));
}

function render() {
  container.innerHTML = "";
  data.forEach((item, i) => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <img src="${item.image}" alt="${item.title}">
      <h3>${i + 1}. ${item.title}</h3>
      <p>${item.desc}</p>
      <a href="${item.link}" target="_blank">Lihat</a><br>
      <button onclick="edit(${i})">✏️ Edit</button>
      <button onclick="hapus(${i})">🗑️ Hapus</button>
    `;
    container.appendChild(div);
  });
}

form.addEventListener("submit", function(e) {
  e.preventDefault();
  const newItem = {
    title: form.title.value,
    image: form.image.value,
    desc: form.desc.value,
    link: form.link.value
  };
  data.push(newItem);
  saveData();
  form.reset();
  render();
});

function edit(i) {
  const item = data[i];
  const t = prompt("Edit Judul:", item.title);
  if (t === null) return;
  const img = prompt("Edit Gambar:", item.image);
  if (img === null) return;
  const d = prompt("Edit Deskripsi:", item.desc);
  if (d === null) return;
  const l = prompt("Edit Link:", item.link);
  if (l === null) return;
  data[i] = { title: t, image: img, desc: d, link: l };
  saveData();
  render();
}

function hapus(i) {
  if (confirm("Yakin hapus barang ini?")) {
    data.splice(i, 1);
    saveData();
    render();
  }
}

render();