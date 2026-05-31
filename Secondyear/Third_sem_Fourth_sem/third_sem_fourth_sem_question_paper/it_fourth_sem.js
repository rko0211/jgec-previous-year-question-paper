const it4thSemData = [
  {
    batch: "20-24",
    paper: "4th Sem",
    link: "4th Sem IT'24 .pdf"
  }
];

loadQuestionPapers({
  tbodyId: "it4thSemTableBody",
  data: it4thSemData,
  semesterLabel: "4th",
  params: {
    year: "Second Year",
    semester: "Fourth Semester",
    department: "IT"
  }
});
