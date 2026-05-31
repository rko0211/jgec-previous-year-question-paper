const me8thSemData = [
  {
    batch: "21-25",
    paper: "8th Sem Internal",
    link: "7th_sem_8th_sem_pdf/21_25_ME_8th_Sem_Internal.pdf"
  }

];

loadQuestionPapers({
  tbodyId: "me8thSemTableBody",
  data: me8thSemData,
  semesterLabel: "8th",
  params: {
    year: "Fourth Year",
    semester: "Eighth Semester",
    department: "ME"
  }
});
