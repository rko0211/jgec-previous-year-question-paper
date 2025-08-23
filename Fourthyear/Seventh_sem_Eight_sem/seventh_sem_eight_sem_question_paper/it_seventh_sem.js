const data = [
  {
    batch: "21-25",
    paper: "7th Sem",
    link: "7th_sem_8th_sem_pdf/21_25_IT_7th_Sem.pdf"
  },

  {
    batch: "xx-xx",
    paper: "7th Sem Internal-I",
    link: "../../../NotFoundPage.html"
  }
];

const tbody = document.getElementById("it7thSemTableBody");

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
