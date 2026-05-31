const ee7thSemData = [
  {
    batch: "xx-xx",
    paper: "7th Sem",
    link: "../../../NotFoundPage.html"
  }
];

loadQuestionPapers({
  tbodyId: "ee7thSemTableBody",
  data: ee7thSemData,
  semesterLabel: "7th",
  params: {
    year: "Fourth Year",
    semester: "Seventh Semester",
    department: "EE"
  }
});
