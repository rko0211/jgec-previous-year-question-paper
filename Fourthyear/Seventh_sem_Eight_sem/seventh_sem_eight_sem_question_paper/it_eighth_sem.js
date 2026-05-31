const it8thSemData = [
  {
    batch: "xx-xx",
    paper: "8th Sem",
    link: "../../../NotFoundPage.html"
  }
];

loadQuestionPapers({
  tbodyId: "it8thSemTableBody",
  data: it8thSemData,
  semesterLabel: "8th",
  params: {
    year: "Fourth Year",
    semester: "Eighth Semester",
    department: "IT"
  }
});

