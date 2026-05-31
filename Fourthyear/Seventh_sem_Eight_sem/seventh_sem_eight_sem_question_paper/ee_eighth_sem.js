const ee8thSemData = [
  {
    batch: "xx-xx",
    paper: "8th Sem",
    link: "../../../NotFoundPage.html"
  }
];

loadQuestionPapers({
  tbodyId: "ee8thSemTableBody",
  data: ee8thSemData,
  semesterLabel: "8th",
  params: {
    year: "Fourth Year",
    semester: "Eighth Semester",
    department: "EE"
  }
});
