const data = [
  {
    batch: "19-23",
    paper: "3rd Sem",
    link: "3rd sem(19-23 batch) - Om Kumar Sah.pdf"
  },
  {
    batch: "21-25",
    paper: "3rd Sem",
    link: "3rd sem(21-25 batch) - Om Kumar Sah.pdf"
  },

  {
    batch: "xx-xx",
    paper: "3rd Sem Internal-I",
    link: "../../../NotFoundPage.html"
  }
];

const tbody = document.getElementById("ce3rdSemTableBody");

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
