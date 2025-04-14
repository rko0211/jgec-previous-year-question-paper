const data = [
  {
    batch: "18-22",
    paper: "6th Sem",
    link: "5th_sem_6th_sem_pdf/CE 6TH SEM 18-22.pdf"
  },
  {
    batch: "19-23",
    paper: "6th Sem",
    link: "6th sem(19-23 batch) - Om Kumar Sah.pdf"
  },
  {
    batch: "21-25",
    paper: "6th Sem",
    link: "5th_sem_6th_sem_pdf/CE_6th_SEM_21-25.pdf"
  },
  {
    batch: "xx-xx",
    paper: "6th Sem Internal-I",
    link: "../../../NotFoundPage.html"
  }

];

const tbody = document.getElementById("ce6thSemTableBody");

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
