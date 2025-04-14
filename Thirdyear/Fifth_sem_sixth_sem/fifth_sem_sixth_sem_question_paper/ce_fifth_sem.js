const data = [
  {
    batch: "20-24",
    paper: "5th Sem",
    link: "5th sem (20-24 batch) - Om Kumar Sah.pdf"
  },

  {
    batch: "xx-xx",
    paper: "5th Sem Internal-I",
    link: "../../../NotFoundPage.html"
  }
];

const tbody = document.getElementById("ce5thSemTableBody");

data.forEach((item, index) => {
  const tr = document.createElement("tr");

  tr.innerHTML = `
        <th scope="row">${index + 1}</th>
        <td>${item.batch}</td>
        <td>${item.paper}</td>
        <td><a class="dwnld" href="${item.link}" target="_blank">Download</a></td>
    `;

  tbody.appendChild(tr);
});
