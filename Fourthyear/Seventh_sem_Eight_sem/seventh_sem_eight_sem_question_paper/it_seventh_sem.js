const it7thSemData = [
  {
    batch: "21-25",
    paper: "7th Sem",
    link: "7th_sem_8th_sem_pdf/21_25_IT_7th_Sem.pdf"
  }
];

loadQuestionPapers({
  tbodyId: "it7thSemTableBody",
  data: it7thSemData,
  semesterLabel: "7th",
  params: {
    year: "Fourth Year",
    semester: "Seventh Semester",
    department: "IT"
  }
});
