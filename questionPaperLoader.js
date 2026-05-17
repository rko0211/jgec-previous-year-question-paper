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

  tbody.parentElement.appendChild(loader);

  // pagination state
  let currentPage = 1;

  let loading = false;

  let hasMore = true;

  // optimized rendering
  function renderQuestionPapers(rows, append = false) {

    if (!append) {
      tbody.innerHTML = "";
    }

    const fragment = document.createDocumentFragment();

    rows.forEach((item, index) => {

      const tr = document.createElement("tr");

      tr.innerHTML = `
        <th scope="row">
          ${append ? tbody.children.length + index + 1 : index + 1}
        </th>

        <td>${item.batch}</td>

        <td>${item.paper}</td>

        <td>
          <a
            class="dwnld"
            href="${item.link}"
            target="_blank"
          >
            Download
          </a>
        </td>
      `;

      fragment.appendChild(tr);
    });

    tbody.appendChild(fragment);
  }

  // render hardcoded data first
  renderQuestionPapers(data);

  async function fetchQuestionPapers() {

    if (loading || !hasMore) return;

    loading = true;

    try {

      // Primary backend
      let response = await fetch(
        `http://localhost:5000/api/get-question-papers-for-particular-year-semester-department?${new URLSearchParams({
          ...params,
          page: currentPage,
          limit: 20
        })}`
      );

      // Fallback backend
      if (!response.ok) {

        response = await fetch(
          `${backendService.URL2}/api/get-question-papers-for-particular-year-semester-department?${new URLSearchParams({
            ...params,
            page: currentPage,
            limit: 20
          })}`
        );

        if (!response.ok) {
          throw new Error("Both servers failed");
        }
      }

      const result = await response.json();

      // stop if no more data
      if (result.data.length === 0) {

        hasMore = false;

        loader.innerHTML = "";
        tbody.parentElement.removeChild(loader);
        renderQuestionPapers([
          {
            batch: "xx-xx",
            paper: `${semesterLabel} Sem Internals`,
            link: notFoundLink
          }
        ], true);

        return;
      }

      const newRows = result.data.map(item => ({

        batch: item.batch,

        paper:
          item.type === "Both Internals"
            ? `${semesterLabel} Sem Internals`
            : item.type === "Semester"
              ? `${semesterLabel} ${item.type}`
              : `${semesterLabel} Sem ${item.type}`,

        link: item.file_url
      }));

      // keep your existing architecture
      data.push(...newRows);

      // append only new rows
      renderQuestionPapers(newRows, true);

      currentPage++;

    } catch (error) {

      console.log("Server error:", error);

      loader.innerText = "Server Error";

    } finally {
      loading = false;
    }
  }

  // lazy loading
  const observer = new IntersectionObserver(entries => {

    if (entries[0].isIntersecting) {
      fetchQuestionPapers();
    }

  });

  observer.observe(loader);

  // initial fetch
  fetchQuestionPapers();
}