const data = [

  {
    batch: "21-25",
    paper: "4th Sem",
    link: "3rd_sem_4th_sem pdf/EE_4th_sem_2021-2025_semester.pdf"
  },

  {
    batch: "xx-xx",
    paper: "4th Sem Internal-I",
    link: "../../../NotFoundPage.html"
  }
];

const tbody = document.getElementById("ee4thSemTableBody");

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
