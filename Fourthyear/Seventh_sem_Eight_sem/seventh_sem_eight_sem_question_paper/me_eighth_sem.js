const data = [
  {
    batch: "21-25",
    paper: "8th Sem Internal",
    link: "7th_sem_8th_sem_pdf/21_25_ME_8th_Sem_Internal.pdf"
  },
  {
    batch: "xx-xx",
    paper: "8th Sem",
    link: "../../../NotFoundPage.html"
  }

];

const tbody = document.getElementById("me8thSemTableBody");

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
