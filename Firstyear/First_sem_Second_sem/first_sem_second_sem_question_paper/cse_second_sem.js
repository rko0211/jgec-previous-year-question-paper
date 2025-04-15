const data = [
  {
    batch: "21-25",
    paper: "2nd Sem",
    link: "1st_sem_2nd_sem_pdf/21_25_CSE_2nd_sem.pdf"
  },

  {
    batch: "xx-xx",
    paper: "2nd Sem Internal-I",
    link: "../../../NotFoundPage.html"
  }
];

const tbody = document.getElementById("cse2ndSemTableBody");

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