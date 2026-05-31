const me7thSemData = [
  {
    batch: "21-25",
    paper: "7th Sem",
    link: "7th_sem_8th_sem_pdf/ME_7th_SEM_21-25.pdf"
  }
];

loadQuestionPapers({
  tbodyId: "me7thSemTableBody",
  data: me7thSemData,
  semesterLabel: "7th",
  params: {
    year: "Fourth Year",
    semester: "Seventh Semester",
    department: "ME"
  }
});
