const ece7thSemData = [
  {
    batch: "xx-xx",
    paper: "7th Sem",
    link: "../../../NotFoundPage.html"
  }
];

loadQuestionPapers({
  tbodyId: "ece7thSemTableBody",
  data: ece7thSemData,
  semesterLabel: "7th",
  params: {
    year: "Fourth Year",
    semester: "Seventh Semester",
    department: "ECE"
  }
});
