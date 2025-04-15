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

];

const list = document.getElementById("contributorsList");

contributors.forEach((contributor) => {
  const li = document.createElement("li");
  li.innerHTML = `<a class="cntlink" href="${contributor.url}" target="_blank">${contributor.name}</a>`;
  list.appendChild(li);
});