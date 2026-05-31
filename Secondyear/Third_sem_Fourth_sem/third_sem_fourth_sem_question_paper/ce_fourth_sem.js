// CE 4TH SEM INTERNAL + SEMESTER SECTION
const ce4thSemData = [
  {
    batch: "20-24",
    paper: "4th Sem",
    link: "4th sem(20-24 batch) - Om Kumar Sah.pdf"
  },
  {
    batch: "21-25",
    paper: "4th Sem",
    link: "4th sem(21-25 batch) - Om Kumar Sah.pdf"
  },
  {
    batch: "23-27",
    paper: "4th Sem Internal-I",
    link: "./3rd_sem_4th_sem pdf/23-27_CE_4th_Sem_Internal - Rajdeep Khatik.pdf"
  },
  {
    batch: "23-27",
    paper: "4th Sem",
    link: "./3rd_sem_4th_sem pdf/23_27_CE_4th_Sem - Rajdeep Khatik.pdf"
  }
];

loadQuestionPapers({
  tbodyId: "ce4thSemTableBody",
  data: ce4thSemData,
  semesterLabel: "4th",
  params: {
    year: "Second Year",
    semester: "Fourth Semester",
    department: "CIVIL"
  }
});
