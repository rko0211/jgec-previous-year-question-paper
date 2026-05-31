const cse8thSemData = [
  {
    batch: "20-24",
    paper: "8th Sem",
    link: "7th_sem_8th_sem_pdf/20_24_CSE_8th_Sem.pdf"
  },
  {
    batch: "21-25",
    paper: "8th Sem Internal-1",
    link: "7th_sem_8th_sem_pdf/21_25_CSE_8th_Sem_Internal1.pdf"
  },
  {
    batch: "21-25",
    paper: "8th Sem Internal-2",
    link: "7th_sem_8th_sem_pdf/21_25_CSE_8th_Sem_Internal2.pdf"
  }
];

loadQuestionPapers({
  tbodyId: "cse8thSemTableBody",
  data: cse8thSemData,
  semesterLabel: "8th",
  params: {
    year: "Fourth Year",
    semester: "Eighth Semester",
    department: "CSE"
  }
});
