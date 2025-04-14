const data = [
  {
    batch: "18-22",
    paper: "7th Sem",
    link: "DWDM Prev year qns.pdf"
  },
  {
    batch: "21-25",
    paper: "7th Sem Internal-I",
    link: "7th_sem_8th_sem_pdf/21_25_CSE_7th_Sem_Internal1.pdf"
  },
  {
    batch: "21-25",
    paper: "7th Sem Internal-II",
    link: "7th_sem_8th_sem_pdf/21_25_CSE_7th_Sem_Internal2.pdf"
  },
  {
    batch: "21-25",
    paper: "7th Sem",
    link: "7th_sem_8th_sem_pdf/21-25_CSE_7th_SEM.pdf"
  },
  {
    batch: "xx-xx",
    paper: "7th Sem",
    link: "../../../NotFoundPage.html"
  }
];

const tbody = document.getElementById("cse7thSemTableBody");

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
