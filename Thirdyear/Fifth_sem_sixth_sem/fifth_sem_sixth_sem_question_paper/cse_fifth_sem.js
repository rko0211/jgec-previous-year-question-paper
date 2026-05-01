const data = [
  {
    batch: "20-24",
    paper: "5th Sem",
    link: "5th sem exam questions .pdf"
  },
  {
    batch: "21-25",
    paper: "5th Sem Internal-1",
    link: "5th_sem_6th_sem_pdf/CSE_5TH_SEM_21-25.pdf"
  },
  {
    batch: "21-25",
    paper: "5th Sem",
    link: "5th_sem_6th_sem_pdf/CSE_5th_SEM_21-25.pdf"
  },
  {
    batch: "22-26",
    paper: "5th Sem Internal",
    link: "5th_sem_6th_sem_pdf/22_26_CSE_5th_Sem_Internal-Writabrata Chakraborti.pdf"
  },
  {
    batch: "22-26",
    paper: "5th Sem",
    link: "5th_sem_6th_sem_pdf/22_26_CSE_5th_SEM.pdf"
  },

  {
    batch: "23-27",
    paper: "5th Sem Internal",
    link: "5th_sem_6th_sem_pdf/23_27_CSE_5th_SEM_Internals-1+2 - Aditya Das.pdf"
  },
  {
    batch: "23-27",
    paper: "5th Sem",
    link: "5th_sem_6th_sem_pdf/23_27_CSE_5th_SEM- Aditya Das.pdf"
  },
  {
    batch: "xx-xx",
    paper: "5th Sem Internal-1",
    link: "../../../NotFoundPage.html"
  }
];

const tbody = document.getElementById("cse5thSemTableBody");

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
