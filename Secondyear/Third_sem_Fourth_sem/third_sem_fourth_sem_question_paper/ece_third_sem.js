const data = [
  {
    batch: "22-26",
    paper: "3rd Sem Internal",
    link: "3rd_sem_4th_sem pdf/22_26_ECE_3rd_Internal - MURSALIM SAHA.pdf"
  },


  {
    batch: "xx-xx",
    paper: "3rd Sem",
    link: "../../../NotFoundPage.html"
  }
];

const tbody = document.getElementById("ece3rdSemTableBody");

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
