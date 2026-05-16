const data = [
  {
    batch: "23-27",
    paper: "1st Semester",
    link: "1st_sem_2nd_sem_pdf/23_27_CE_1st_sem- Rajdeep Khatik.pdf"
  },
  {
    batch: "24-28",
    paper: "1st Semester",
    link: "1st_sem_2nd_sem_pdf/24_28_CE_1st_Sem- AMBIKA BAG.pdf"
  }
];

const tbody = document.getElementById("ce1stSemTableBody");

function renderQuestionPapers() {

  tbody.innerHTML = "";

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

}

// Initial render
renderQuestionPapers();


async function loadQuestionPapers() {
  const params = new URLSearchParams({
    year: "First Year",
    semester: "First Semester",
    department: "CE",
  });

  try {

    // primary backend
    const response = await fetch(`${backendService.URL1}/api/get-question-papers-for-particular-year-semester-department?${params}`);

    if (!response.ok) {
      throw new Error("Server 1 failed");
    }

    const result = await response.json();

    data.push(
      ...result.data.map(item => ({
        batch: item.batch,
        paper: item.type === "Both Internals" ? "1st Sem Internals" : `1st ${item.type}`,
        link: item.file_url
      }))
    );
    data.push({
      batch: "xx-xx",
      paper: "1st Sem Internal-I",
      link: "../../../NotFoundPage.html"
    });

  } catch (err1) {

    try {

      // fallback backend
      const response = await fetch(`${backendService.URL2}/api/get-question-papers-for-particular-year-semester-department?${params}`);

      if (!response.ok) {
        throw new Error("Server 2 failed");
      }

      const result = await response.json();

      data.push(
        ...result.data.map(item => ({
          batch: item.batch,
          paper: item.type === "Both Internals" ? "1st Sem Internals" : item.type,
          link: item.file_url
        }))
      );
      data.push({
        batch: "xx-xx",
        paper: "1st Sem Internal-I",
        link: "../../../NotFoundPage.html"
      });
    } catch (err2) {
      console.log("Server error: ", err2);
    }

  } finally {

    renderQuestionPapers();
  }
}


loadQuestionPapers();