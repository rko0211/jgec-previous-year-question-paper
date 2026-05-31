const ece4thSemData = [
  {
    batch: "xx-xx",
    paper: "4th Sem",
    link: "../../../NotFoundPage.html"
  }
];

loadQuestionPapers({
  tbodyId: "ece4thSemTableBody",
  data: ece4thSemData,
  semesterLabel: "4th",
  params: {
    year: "Second Year",
    semester: "Fourth Semester",
    department: "ECE"
  }
});
