const ee3rdSemData = [
  {
    batch: "21-25",
    paper: "3rd Sem",
    link: "EE 3rd sem 25.pdf"
  }
];

loadQuestionPapers({
  tbodyId: "ee3rdSemTableBody",
  data: ee3rdSemData,
  semesterLabel: "3rd",
  params: {
    year: "Second Year",
    semester: "Third Semester",
    department: "EE"
  }
});
