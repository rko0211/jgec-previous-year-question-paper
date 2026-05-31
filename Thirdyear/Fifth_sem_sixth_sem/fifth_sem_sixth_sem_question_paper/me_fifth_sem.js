const me5thSemData = [
  {
    batch: "21-25",
    paper: "5th Sem",
    link: "5th_sem_6th_sem_pdf/ME_5th sem(21-25 batch).pdf"
  }
];

loadQuestionPapers({
  tbodyId: "me5thSemTableBody",
  data: me5thSemData,
  semesterLabel: "5th",
  params: {
    year: "Third Year",
    semester: "Fifth Semester",
    department: "ME"
  }
});
