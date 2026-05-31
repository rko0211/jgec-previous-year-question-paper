const ee4thSemData = [
  {
    batch: "21-25",
    paper: "4th Sem",
    link: "3rd_sem_4th_sem pdf/EE_4th_sem_2021-2025_semester.pdf"
  }
];

loadQuestionPapers({
  tbodyId: "ee4thSemTableBody",
  data: ee4thSemData,
  semesterLabel: "4th",
  params: {
    year: "Second Year",
    semester: "Fourth Semester",
    department: "EE"
  }
});
