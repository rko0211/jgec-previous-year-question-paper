const it6thSemData = [
  {
    batch: "xx-xx",
    paper: "6th Sem",
    link: "../../../NotFoundPage.html"
  }
];

loadQuestionPapers({
  tbodyId: "it6thSemTableBody",
  data: it6thSemData,
  semesterLabel: "6th",
  params: {
    year: "Third Year",
    semester: "Sixth Semester",
    department: "IT"
  }
});
