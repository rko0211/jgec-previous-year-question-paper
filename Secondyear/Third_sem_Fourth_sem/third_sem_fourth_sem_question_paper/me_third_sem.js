const me3rdSemData = [
  {
    batch: "xx-xx",
    paper: "3rd Sem",
    link: "../../../NotFoundPage.html"
  }
];

loadQuestionPapers({
  tbodyId: "me3rdSemTableBody",
  data: me3rdSemData,
  semesterLabel: "3rd",
  params: {
    year: "Second Year",
    semester: "Third Semester",
    department: "ME"
  }
});
