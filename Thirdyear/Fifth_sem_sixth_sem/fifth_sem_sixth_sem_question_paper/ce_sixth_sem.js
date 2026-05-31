const ce6thSemData = [
  {
    batch: "18-22",
    paper: "6th Sem",
    link: "5th_sem_6th_sem_pdf/CE 6TH SEM 18-22.pdf"
  },
  {
    batch: "19-23",
    paper: "6th Sem",
    link: "6th sem(19-23 batch) - Om Kumar Sah.pdf"
  },
  {
    batch: "21-25",
    paper: "6th Sem",
    link: "5th_sem_6th_sem_pdf/CE_6th_SEM_21-25.pdf"
  }

];

loadQuestionPapers({
  tbodyId: "ce6thSemTableBody",
  data: ce6thSemData,
  semesterLabel: "6th",
  params: {
    year: "Third Year",
    semester: "Sixth Semester",
    department: "CE"
  }
});