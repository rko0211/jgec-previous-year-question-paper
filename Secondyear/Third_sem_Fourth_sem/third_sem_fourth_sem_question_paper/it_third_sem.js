const it3rdSemData = [

  {
    batch: "21-25",
    paper: "3rd Sem",
    link: "3rd Sem Questions.pdf"
  }
];

loadQuestionPapers({
  tbodyId: "it3rdSemTableBody",
  data: it3rdSemData,
  semesterLabel: "3rd",
  params: {
    year: "Second Year",
    semester: "Third Semester",
    department: "IT"
  }
});
