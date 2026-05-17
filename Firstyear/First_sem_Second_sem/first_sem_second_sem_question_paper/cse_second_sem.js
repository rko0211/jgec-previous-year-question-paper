const cse2ndSemData = [
  {
    batch: "21-25",
    paper: "2nd Sem",
    link: "1st_sem_2nd_sem_pdf/21_25_CSE_2nd_sem.pdf"
  }
];


loadQuestionPapers({
  tbodyId: "cse2ndSemTableBody",
  data: cse2ndSemData,
  semesterLabel: "1st Sem",
  params: {
    year: "First Year",
    semester: "Second Semester",
    department: "CSE"
  }
});