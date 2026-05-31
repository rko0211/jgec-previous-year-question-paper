const ce1stSemData = [
  {
    batch: "23-27",
    paper: "1st Semester",
    link: "1st_sem_2nd_sem_pdf/23_27_CE_1st_sem- Rajdeep Khatik.pdf"
  },
  {
    batch: "24-28",
    paper: "1st Semester",
    link: "1st_sem_2nd_sem_pdf/24_28_CE_1st_Sem- AMBIKA BAG.pdf"
  }
];

loadQuestionPapers({
  tbodyId: "ce1stSemTableBody",
  data: ce1stSemData,
  semesterLabel: "1st",
  params: {
    year: "First Year",
    semester: "First Semester",
    department: "CIVIL"
  }
});
