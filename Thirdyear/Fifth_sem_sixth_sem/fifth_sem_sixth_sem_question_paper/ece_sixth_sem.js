const ece6thSemData = [
  {
    batch: "xx-xx",
    paper: "6th Sem",
    link: "../../../NotFoundPage.html"
  }
];

loadQuestionPapers({
  tbodyId: "ece6thSemTableBody",
  data: ece6thSemData,
  semesterLabel: "6th",
  params: {
    year: "Third Year",
    semester: "Sixth Semester",
    department: "ECE"
  }
});
