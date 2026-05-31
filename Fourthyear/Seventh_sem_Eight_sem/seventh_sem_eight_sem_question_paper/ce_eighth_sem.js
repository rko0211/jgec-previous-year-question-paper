const ce8thSemData = [
  {
    batch: "19-23",
    paper: "8th Sem",
    link: "7th_sem_8th_sem_pdf/19_23_CE_8th_sem.pdf"
  }

];

loadQuestionPapers({
  tbodyId: "ce8thSemTableBody",
  data: ce8thSemData,
  semesterLabel: "8th",
  params: {
    year: "Fourth Year",
    semester: "Eighth Semester",
    department: "CIVIL"
  }
});
