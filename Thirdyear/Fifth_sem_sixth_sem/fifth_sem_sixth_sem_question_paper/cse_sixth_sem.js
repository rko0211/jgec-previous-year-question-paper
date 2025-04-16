const data = [
  {
    batch: "19-23",
    paper: "6th Sem",
    link: "5th_sem_6th_sem_pdf/2019_2023_6th Sem CSE Question Papers.pdf"
  },
  {
    batch: "20-24",
    paper: "6th Sem Internal",
    link: "6th sem exam questions .pdf"
  },
  {
    batch: "20-24",
    paper: "6th Sem",
    link: "6th sem exam questions .pdf"
  },
  {
    batch: "ALL",
    paper: "Data Mining <br> & <br> Data Warehouse",
    link: "https://drive.google.com/drive/folders/1Ev5mArq7aUd0sAxu8ARU_qrOlwOUKTYb"
  },
  {
    batch: "2016 & 2019",
    paper: "Image <br> Processing",
    link: "../../../NotFoundPage.html"
  },
  {
    batch: "21-25",
    paper: "6th Sem Internal-1",
    link: "5th_sem_6th_sem_pdf/6th_sem_21_25_internal-1.pdf"
  },
  {
    batch: "21-25",
    paper: "6th Sem Internal-2",
    link: "5th_sem_6th_sem_pdf/6th_sem_21_25_internal-2.pdf"
  },
  {
    batch: "21-25",
    paper: "6th Sem",
    link: "5th_sem_6th_sem_pdf/21_25_CSE_6th_SEM.pdf"
  },
  {
    batch: "xx-xx",
    paper: "6th Sem",
    link: "../../../NotFoundPage.html"
  }
];

const tbody = document.getElementById("cse6thSemTableBody");

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
