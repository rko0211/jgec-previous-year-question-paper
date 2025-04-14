const data = [
  {
    batch: "20-24",
    paper: "4th Sem",
    link: "4th sem(20-24 batch) - Om Kumar Sah.pdf"
  },
  {
    batch: "21-25",
    paper: "4th Sem",
    link: "4th sem(21-25 batch) - Om Kumar Sah.pdf"
  },

  {
    batch: "xx-xx",
    paper: "4th Sem Internal-I",
    link: "../../../NotFoundPage.html"
  }
];

const tbody = document.getElementById("ce4thSemTableBody");

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
