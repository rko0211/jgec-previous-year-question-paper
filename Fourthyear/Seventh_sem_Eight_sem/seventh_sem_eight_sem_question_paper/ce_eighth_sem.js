const data = [
  {
    batch: "19-23",
    paper: "8th Sem",
    link: "7th_sem_8th_sem_pdf/19_23_CE_8th_sem.pdf"
  },

  {
    batch: "xx-xx",
    paper: "8th Sem Internal-I",
    link: "../../../NotFoundPage.html"
  }
];

const tbody = document.getElementById("ce8thSemTableBody");

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
