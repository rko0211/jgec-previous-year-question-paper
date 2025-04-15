const data = [

  {
    batch: "21-25",
    paper: "3rd Sem",
    link: "cse'25 3rd sem.pdf"
  },
  {
    batch: "21-25",
    paper: "3rd Sem Internal-1",
    link: "3rd sem cse'25 internal.pdf"
  },
  {
    batch: "22-26",
    paper: "3rd Sem",
    link: "3rd_sem_4th_sem pdf/cse3rdsem23-24pyq - Diptesh Karmakar.pdf"
  },
  {
    batch: "ALL",
    paper: "Digital Electronics",
    link: "https://drive.google.com/file/d/1ejs60RJZY_fiYu34xWmzRxdC76m1ZK0P/view"
  },
  {
    batch: "23-27",
    paper: "3rd Sem Internal-2",
    link: "3rd_sem_4th_sem pdf/23_27_CSE_3rd_SEM_Internal_2.pdf"
  },

  {
    batch: "xx-xx",
    paper: "3rd Sem Internal-I",
    link: "../../../NotFoundPage.html"
  }
];

const tbody = document.getElementById("cse3rdSemTableBody");

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
