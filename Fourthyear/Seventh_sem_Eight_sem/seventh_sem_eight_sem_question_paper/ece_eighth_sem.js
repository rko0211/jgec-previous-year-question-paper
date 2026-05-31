const ece8thSemData = [
  {
    batch: "xx-xx",
    paper: "8th Sem",
    link: "../../../NotFoundPage.html"
  }
];

loadQuestionPapers({
  tbodyId: "ece8thSemTableBody",
  data: ece8thSemData,
  semesterLabel: "8th",
  params: {
    year: "Fourth Year",
    semester: "Eighth Semester",
    department: "ECE"
  }
});
