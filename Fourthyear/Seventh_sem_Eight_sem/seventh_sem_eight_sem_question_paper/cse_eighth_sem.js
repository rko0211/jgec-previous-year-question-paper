const data = [
  {
    batch: "20-24",
    paper: "8th Sem",
    link: "7th_sem_8th_sem_pdf/20_24_CSE_8th_Sem.pdf"
  },
  {
    batch: "21-25",
    paper: "8th Sem Internal-1",
    link: "7th_sem_8th_sem_pdf/21_25_CSE_8th_Sem_Internal1.pdf"
  },
  {
    batch: "21-25",
    paper: "8th Sem Internal-2",
    link: "7th_sem_8th_sem_pdf/21_25_CSE_8th_Sem_Internal2.pdf"
  },
  {
    batch: "xx-xx",
    paper: "8th Sem",
    link: "../../../NotFoundPage.html"
  }
];

const tbody = document.getElementById("cse8thSemTableBody");

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
