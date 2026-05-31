const me6thSemData = [
  {
    batch: "xx-xx",
    paper: "6th Sem",
    link: "../../../NotFoundPage.html"
  }
];

loadQuestionPapers({
  tbodyId: "me6thSemTableBody",
  data: me6thSemData,
  semesterLabel: "6th",
  params: {
    year: "Third Year",
    semester: "Sixth Semester",
    department: "ME"
  }
});
