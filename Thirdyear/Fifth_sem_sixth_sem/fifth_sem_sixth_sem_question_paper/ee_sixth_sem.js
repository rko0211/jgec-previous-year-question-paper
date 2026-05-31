const ee6thSemData = [
  {
    batch: "21-25",
    paper: "6th Sem",
    link: "5th_sem_6th_sem_pdf/EE_6th_sem(21-25 batch).pdf"
  }
];

loadQuestionPapers({
  tbodyId: "ee6thSemTableBody",
  data: ee6thSemData,
  semesterLabel: "6th",
  params: {
    year: "Third Year",
    semester: "Sixth Semester",
    department: "EE"
  }
});
