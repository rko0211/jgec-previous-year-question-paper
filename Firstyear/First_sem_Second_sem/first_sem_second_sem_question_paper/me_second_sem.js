const me2ndSemData = [
  {
    batch: "22-26",
    paper: "2nd Sem",
    link: "1st_sem_2nd_sem_pdf/22_26_ME_2nd_sem.pdf"
  }
];


loadQuestionPapers({
  tbodyId: "me2ndSemTableBody",
  data: me2ndSemData,
  semesterLabel: "1st Sem",
  params: {
    year: "First Year",
    semester: "Second Semester",
    department: "ME"
  }
});