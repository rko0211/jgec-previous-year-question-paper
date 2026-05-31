const ee5thSemData = [
  {
    batch: "21-25",
    paper: "5th Sem",
    link: "5th_sem_6th_sem_pdf/EE_5th_SEM(21-25 Batch).pdf"
  }
];

loadQuestionPapers({
  tbodyId: "ee5thSemTableBody",
  data: ee5thSemData,
  semesterLabel: "5th",
  params: {
    year: "Third Year",
    semester: "Fifth Semester",
    department: "EE"
  }
});
