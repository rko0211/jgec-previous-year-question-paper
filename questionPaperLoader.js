async function loadQuestionPapers({
  tbodyId,
  data,
  params,
  semesterLabel,
  notFoundLink = "../../../NotFoundPage.html"
}) {

  const tbody = document.getElementById(tbodyId);

  // ================= LOADER =================
  const loader = document.getElementById("loadingContainer");


  // ================= PAGINATION =================
  let currentPage = 1;

  let loading = false;

  let hasMore = true;

  const limit = 10;

  // ================= RENDER =================
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

  // ================= INITIAL LOCAL DATA =================
  renderQuestionPapers(data);

  // ================= FETCH =================
  async function fetchQuestionPapers() {

    if (loading || !hasMore) return;

    loading = true;

    loader.style.display = "block";
    loader.innerText = "Loading...";

    try {

      let response;

      // ================= PRIMARY =================
      try {

        response = await fetch(
          `${backendService.URL1}/api/get-question-papers-for-particular-year-semester-department?${new URLSearchParams({
            ...params,
            page: currentPage,
            limit
          })}`
        );

      } catch {

        // ================= FALLBACK =================
        try {

          response = await fetch(
            `${backendService.URL2}/api/get-question-papers-for-particular-year-semester-department?${new URLSearchParams({
              ...params,
              page: currentPage,
              limit
            })}`
          );

        } catch {
          response = await fetch(
            `${backendService.URL3}/api/get-question-papers-for-particular-year-semester-department?${new URLSearchParams({
              ...params,
              page: currentPage,
              limit
            })}`
          );
        }
      }

      const result = await response.json();

      // ================= NO MORE DATA =================
      if (!result.data || result.data.length === 0) {

        hasMore = false;

        loader.innerHTML = "";

        // optional fallback row
        if (currentPage === 1) {

          renderQuestionPapers([
            {
              batch: "xx-xx",
              paper: `${semesterLabel} Sem Internals`,
              link: notFoundLink
            }
          ], true);
        }

        return;
      }

      // ================= FORMAT DATA =================
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

      // ================= SAVE =================
      data.push(...newRows);

      // ================= APPEND =================
      renderQuestionPapers(newRows, true);

      currentPage++;

      // ================= CHECK MORE =================
      if (result.data.length < limit) {

        hasMore = false;

        loader.innerHTML = "";

      } else {

        loader.innerText = "Scroll for more...";
      }

    } catch (error) {

      console.log("Server error:", error);

      loader.innerHTML = "";
      alert("Oops! An unexpected server error has occurred.");
    }

    finally {

      loading = false;
    }
  }

  // ================= WINDOW SCROLL =================

  let scrollTimeout;

  window.addEventListener("scroll", () => {

    clearTimeout(scrollTimeout);

    scrollTimeout = setTimeout(() => {

      if (loading || !hasMore) return;

      fetchQuestionPapers();

    }, 200);
  });
  // ================= INITIAL FETCH =================
  fetchQuestionPapers();
}