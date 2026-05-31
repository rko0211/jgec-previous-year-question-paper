const ce5thSemData = [
  {
    batch: "20-24",
    paper: "5th Sem",
    link: "5th sem (20-24 batch) - Om Kumar Sah.pdf"
  }
];

loadQuestionPapers({
  tbodyId: "ce5thSemTableBody",
  data: ce5thSemData,
  semesterLabel: "5th",
  params: {
    year: "Third Year",
    semester: "Fifth Semester",
    department: "CE"
  }
});
