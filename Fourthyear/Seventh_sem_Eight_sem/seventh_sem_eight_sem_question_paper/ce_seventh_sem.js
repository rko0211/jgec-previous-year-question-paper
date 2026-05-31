const ce7thSemData = [
  {
    batch: "19-23",
    paper: "7th Sem",
    link: "7th_sem_8th_sem_pdf/19_23_CE_7th_sem.pdf"
  }
];

loadQuestionPapers({
  tbodyId: "ce7thSemTableBody",
  data: ce7thSemData,
  semesterLabel: "7th",
  params: {
    year: "Fourth Year",
    semester: "Seventh Semester",
    department: "CIVIL"
  }
});
