const data = [

  {
    batch: "21-25",
    paper: "6th Sem",
    link: "5th_sem_6th_sem_pdf/EE_6th_sem(21-25 batch).pdf"
  },
  {
    batch: "xx-xx",
    paper: "6th Sem Internal-I",
    link: "../../../NotFoundPage.html"
  }

];

const tbody = document.getElementById("ee6thSemTableBody");

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
