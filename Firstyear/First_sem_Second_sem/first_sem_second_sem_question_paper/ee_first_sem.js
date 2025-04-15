const data = [
  {
    batch: "22-26",
    paper: "1st Sem",
    link: "1st_sem_2nd_sem_pdf/22_26_EE_1st_sem.pdf"
  },

  {
    batch: "xx-xx",
    paper: "1st Sem Internal-I",
    link: "../../../NotFoundPage.html"
  }
];

const tbody = document.getElementById("ee1stSemTableBody");

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