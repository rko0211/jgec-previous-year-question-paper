const it5thSemData = [
  {
    batch: "xx-xx",
    paper: "5th Sem",
    link: "../../../NotFoundPage.html"
  }
];

loadQuestionPapers({
  tbodyId: "it5thSemTableBody",
  data: it5thSemData,
  semesterLabel: "5th",
  params: {
    year: "Third Year",
    semester: "Fifth Semester",
    department: "IT"
  }
});
