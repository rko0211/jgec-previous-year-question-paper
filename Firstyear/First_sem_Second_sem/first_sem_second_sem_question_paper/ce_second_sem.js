const ce2ndSemData = [
  {
    batch: "21-25",
    paper: "2nd Semester",
    link: "2nd sem(21-25 batch) - Om Kumar Sah.pdf"
  },
  {
    batch: "23-27",
    paper: "2nd Semester",
    link: "1st_sem_2nd_sem_pdf/23_27_CE_2nd_SEM.pdf"
  },
  {
    batch: "24-28",
    paper: "2nd Semester",
    link: "1st_sem_2nd_sem_pdf/24_28_CE_2nd_Sem- Ambika Bag.pdf"
  }
];


loadQuestionPapers({
  tbodyId: "ce2ndSemTableBody",
  data: ce2ndSemData,
  semesterLabel: "2nd",
  params: {
    year: "First Year",
    semester: "Second Semester",
    department: "CE"
  }
});