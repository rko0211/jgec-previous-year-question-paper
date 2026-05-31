const me4thSemData = [
  {
    batch: "21-25",
    paper: "4th Sem",
    link: "3rd_sem_4th_sem pdf/ME_4th sem(21-25 batch).pdf"
  }
];

loadQuestionPapers({
  tbodyId: "me4thSemTableBody",
  data: me4thSemData,
  semesterLabel: "4th",
  params: {
    year: "Second Year",
    semester: "Fourth Semester",
    department: "ME"
  }
});
