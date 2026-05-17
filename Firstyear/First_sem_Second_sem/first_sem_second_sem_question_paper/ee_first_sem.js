const ee1stSemData = [
  {
    batch: "22-26",
    paper: "1st Sem",
    link: "1st_sem_2nd_sem_pdf/22_26_EE_1st_sem.pdf"
  }
];

loadQuestionPapers({
  tbodyId: "ee1stSemTableBody",
  data: ee1stSemData,
  semesterLabel: "1st Sem",
  params: {
    year: "First Year",
    semester: "First Semester",
    department: "EE"
  }
});