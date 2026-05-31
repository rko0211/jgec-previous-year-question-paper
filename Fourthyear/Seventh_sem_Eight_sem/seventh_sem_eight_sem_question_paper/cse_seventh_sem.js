const cse7thSemData = [
  {
    batch: "18-22",
    paper: "7th Sem",
    link: "DWDM Prev year qns.pdf"
  },
  {
    batch: "21-25",
    paper: "7th Sem Internal-1",
    link: "7th_sem_8th_sem_pdf/21_25_CSE_7th_Sem_Internal1.pdf"
  },
  {
    batch: "21-25",
    paper: "7th Sem Internal-2",
    link: "7th_sem_8th_sem_pdf/21_25_CSE_7th_Sem_Internal2.pdf"
  },
  {
    batch: "21-25",
    paper: "7th Sem",
    link: "7th_sem_8th_sem_pdf/21-25_CSE_7th_SEM.pdf"
  },
  {
    batch: "22-26",
    paper: "7th Sem Internal",
    link: "7th_sem_8th_sem_pdf/22_26_CSE_7th_Sem_Internal-Writabrata Chakraborti.pdf"
  },
  {
    batch: "22-26",
    paper: "7th Sem",
    link: "7th_sem_8th_sem_pdf/22_26_CSE_7th_Sem-Writabrata Chakraborti.pdf"
  }
];

loadQuestionPapers({
  tbodyId: "cse7thSemTableBody",
  data: cse7thSemData,
  semesterLabel: "7th",
  params: {
    year: "Fourth Year",
    semester: "Seventh Semester",
    department: "CSE"
  }
});
