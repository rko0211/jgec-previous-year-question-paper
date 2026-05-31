const ece5thSemData = [
  {
    batch: "xx-xx",
    paper: "5th Sem",
    link: "../../../NotFoundPage.html"
  }
];

loadQuestionPapers({
  tbodyId: "ece5thSemTableBody",
  data: ece5thSemData,
  semesterLabel: "5th",
  params: {
    year: "Third Year",
    semester: "Fifth Semester",
    department: "ECE"
  }
});
