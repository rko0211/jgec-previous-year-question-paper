const ee2ndSemData = [
  {
    batch: "21-25",
    paper: "2nd Sem",
    link: "1st_sem_2nd_sem_pdf/21_25_EE_2nd_sem.pdf"
  },
  {
    batch: "22-26",
    paper: "2nd Sem",
    link: "1st_sem_2nd_sem_pdf/22_26_EE_2nd_sem.pdf"
  }
];


loadQuestionPapers({
  tbodyId: "ee2ndSemTableBody",
  data: ee2ndSemData,
  semesterLabel: "1st Sem",
  params: {
    year: "First Year",
    semester: "Second Semester",
    department: "EE"
  }
});