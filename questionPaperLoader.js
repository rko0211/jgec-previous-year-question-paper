async function loadQuestionPapers({
  tbodyId,
  data,
  params,
  semesterLabel,
  notFoundLink = "../../../NotFoundPage.html"
}) {

  const tbody = document.getElementById(tbodyId);
  const loader = document.createElement("div");
  loader.innerText = "Loading...";

  loader.style.textAlign = "center";
  loader.style.color = "blue";
  loader.style.fontSize = "24px";
  loader.style.fontWeight = "bold";
  loader.style.marginTop = "20px";
  tbody.appendChild(loader);

  function renderQuestionPapers() {
    tbody.removeChild(loader);
    tbody.innerHTML = "";
    data.forEach((item, index) => {

      const tr = document.createElement("tr");

      tr.innerHTML = `
        <th scope="row">${index + 1}</th>
        <td>${item.batch}</td>
        <td>${item.paper}</td>
        <td>
          <a class="dwnld" href="${item.link}" target="_blank">
            Download
          </a>
        </td>
      `;

      tbody.appendChild(tr);
    });
  }

  try {

    // Primary backend
    let response = await fetch(
      `${backendService.URL1}/api/get-question-papers-for-particular-year-semester-department?${new URLSearchParams(params)}`
    );

    // Fallback backend
    if (!response.ok) {

      response = await fetch(
        `${backendService.URL2}/api/get-question-papers-for-particular-year-semester-department?${new URLSearchParams(params)}`
      );

      if (!response.ok) {
        throw new Error("Both servers failed");
      }
    }

    const result = await response.json();

    data.push(
      ...result.data.map(item => ({
        batch: item.batch,
        paper:
          item.type === "Both Internals"
            ? `${semesterLabel} Internals`
            : `${semesterLabel} ${item.type}`,
        link: item.file_url
      }))
    );

    // Extra dummy item
    data.push({
      batch: "xx-xx",
      paper: `${semesterLabel} Internals`,
      link: notFoundLink
    });

  } catch (error) {

    console.log("Server error:", error);

  } finally {

    renderQuestionPapers();
  }
}