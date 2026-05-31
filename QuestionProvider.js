const contributors = [
  { name: "PRAKASH MONDAL", url: "https://www.linkedin.com/in/prakash-mondal-94bb7a22a/" },
  { name: "Om Kumar Sah", url: "https://www.linkedin.com/in/om-kumar-335292220" },
  { name: "Sakhawat Hossain", url: "https://www.linkedin.com/in/sakhawat-hossain-786a3922a" },
  { name: "Ambarish", url: "https://www.linkedin.com/in/ambarish-sarkar-372153214/" },
  { name: "Anshik Chand", url: "https://www.linkedin.com/in/anshik-chand-2b32381b4" },
  { name: "Bishal Modak", url: "https://www.linkedin.com/in/bishal-modak-720364255" },
  { name: "Parthib Halder", url: "https://www.linkedin.com/in/parthib-halder-1a5688248" },
  { name: "Shreya Sarkar", url: "https://www.linkedin.com/in/shreya-sarkar-a788b4225" },
  { name: "Spandan Bhattacharya", url: "https://www.linkedin.com/in/spandan-bhattacharya-02509b227" },
  { name: "Anurup Sil", url: "https://www.linkedin.com/in/anurup-sil-8a916922a" },
  { name: "Indrajeet Tamang", url: "#" },
  { name: "Mannu Kumar Verma", url: "https://www.linkedin.com/in/mannu-kumar-verma-53a700224" },
  { name: "Diptesh Karmakar", url: "https://www.linkedin.com/in/diptesh-karmakar-005452228/" },
  { name: "Mursalim Saha", url: "https://www.linkedin.com/in/mursalim-saha-3a2621254" },
  { name: "Prajwal Lakra", url: "https://www.linkedin.com/in/prajwal-lakra-70a10428b/" },
  { name: "Md Shahil", url: "https://www.linkedin.com/in/md-shahil-96ba1787/" },
  { name: "Gopal Mondal", url: "https://www.linkedin.com/in/gopal-mandal-3a22a8231" },
  { name: "Rajdip Pal", url: "https://www.linkedin.com/in/rajdip-pal/" },
  { name: "Rajdeep Khatik", url: "#" },
  { name: "Subhankar sarkar", url: "#" },
  { name: "Sirajul Haque", url: "https://www.linkedin.com/me?trk=p_mwlite_feed-secondary_nav" },
  { name: "Aditya Das", url: "https://www.linkedin.com/in/adidas101" },
  { name: "Ambika Bag", url: "#" },
  { name: "Writabrata Chakraborti", url: "https://www.linkedin.com/in/writabratacs" },
];

const list = document.getElementById("contributorsList");

// ================= LOADER =================
const loader = document.getElementById("loadingContainer");

// ================= PAGINATION =================
let currentPage = 1;

let loading = false;

let hasMore = true;

const limit = 5;

// ================= CAPITALIZE =================
function capitalizeName(name) {

  return name
    .toLowerCase()
    .split(" ")
    .filter(word => word.trim() !== "")
    .map(word =>
      word.charAt(0).toUpperCase() +
      word.slice(1)
    )
    .join(" ");
}

// ================= REMOVE DUPLICATES =================
function getUniqueContributors(data) {

  const uniqueMap = new Map();

  data.forEach(contributor => {

    const formattedName =
      capitalizeName(contributor.name);

    const formattedUrl =
      contributor.url.trim();

    const key =
      formattedName.toLowerCase() +
      "|" +
      formattedUrl.toLowerCase();

    if (!uniqueMap.has(key)) {

      uniqueMap.set(key, {
        name: formattedName,
        url: formattedUrl
      });
    }
  });

  return [...uniqueMap.values()];
}

// ================= RENDER =================
function renderContributors(newContributors = []) {

  const uniqueContributors =
    getUniqueContributors(newContributors);

  const fragment =
    document.createDocumentFragment();

  uniqueContributors.forEach(contributor => {

    const li = document.createElement("li");

    li.innerHTML = `
      <a
        class="cntlink"
        href="${contributor.url}"
        target="_blank"
      >
        ${contributor.name}
      </a>
    `;

    fragment.appendChild(li);
  });

  list.appendChild(fragment);
}

// ================= INITIAL RENDER =================
renderContributors(contributors);

// ================= FETCH =================
async function loadContributors() {

  if (loading || !hasMore) return;

  loading = true;

  loader.style.display = "block";
  loader.innerText = "Loading...";

  try {

    let response;

    // ================= PRIMARY =================
    try {

      response = await fetch(
        `${backendService.URL1}/api/get-linkdin-profiles?${new URLSearchParams({
          page: currentPage,
          limit
        })}`
      );

    } catch {

      // ================= FALLBACK =================
      try {

        response = await fetch(
          `${backendService.URL2}/api/get-linkdin-profiles?${new URLSearchParams({
            page: currentPage,
            limit
          })}`
        );

      } catch {

        response = await fetch(
          `${backendService.URL3}/api/get-linkdin-profiles?${new URLSearchParams({
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

      return;
    }

    // ================= FORMAT =================
    const newContributors =
      result.data.map(item => ({
        name: item.name,
        url: item.linkedin
      }));

    // ================= SAVE =================
    contributors.push(...newContributors);

    // ================= APPEND =================
    renderContributors(newContributors);

    currentPage++;

    // ================= CHECK MORE =================
    if (result.data.length < limit) {

      hasMore = false;

      loader.innerHTML = "";

    }

  } catch (error) {

    console.log("Server error:", error);
    alert("Oops! An unexpected server error has occurred.");

  } finally {

    loading = false;
  }
}

// ================= Fetch Interval =================

const interval = setInterval(() => {

  if (loading || !hasMore) return;

  loadContributors();

  // stop interval when no more data
  if (!hasMore) {
    clearInterval(interval);
  }

}, 200);

// ================= INITIAL FETCH =================
loadContributors();