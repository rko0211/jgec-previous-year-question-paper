
const data = [
  {
    batch: "20-24",
    paper: "4th Sem Internal",
    link: "4th Sem CSE'24 Internal.pdf"
  },
  {
    batch: "20-24",
    paper: "4th Sem",
    link: "4th Sem CSE'24 Updated.pdf"
  },
  {
    batch: "21-25",
    paper: "4th Sem",
    link: "CSE'25 4th sem.pdf"
  },
  {
    batch: "22-26",
    paper: "4th Sem",
    link: "3rd_sem_4th_sem pdf/22_26_CSE_4th_Sem - Prajwal Lakra.pdf"
  },

  {
    batch: "xx-xx",
    paper: "4th Sem Internal-I",
    link: "../../../NotFoundPage.html"
  }
];

const tbody = document.getElementById("cse4thSemTableBody");

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
