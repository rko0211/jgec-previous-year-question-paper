const data = [
  {
    batch: "21-25",
    paper: "2nd Sem",
    link: "2nd sem(21-25 batch) - Om Kumar Sah.pdf"
  },
  {
    batch: "23-27",
    paper: "2nd Sem",
    link: "1st_sem_2nd_sem_pdf/23_27_CE_2nd_SEM.pdf"
  },
  {
    batch: "xx-xx",
    paper: "2nd Sem Internal-I",
    link: "../../../NotFoundPage.html"
  }
];

const tbody = document.getElementById("ce2ndSemTableBody");

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