const cse6thSemData = [
  {
    batch: "19-23",
    paper: "6th Sem",
    link: "5th_sem_6th_sem_pdf/2019_2023_6th Sem CSE Question Papers.pdf"
  },
  {
    batch: "20-24",
    paper: "6th Sem Internal",
    link: "6th sem exam questions .pdf"
  },
  {
    batch: "20-24",
    paper: "6th Sem",
    link: "6th sem exam questions .pdf"
  },
  {
    batch: "ALL",
    paper: "Data Mining <br> & <br> Data Warehouse",
    link: "https://drive.google.com/drive/folders/1Ev5mArq7aUd0sAxu8ARU_qrOlwOUKTYb"
  },
  {
    batch: "21-25",
    paper: "6th Sem Internal-1",
    link: "5th_sem_6th_sem_pdf/6th_sem_21_25_internal-1.pdf"
  },
  {
    batch: "21-25",
    paper: "6th Sem Internal-2",
    link: "5th_sem_6th_sem_pdf/6th_sem_21_25_internal-2.pdf"
  },
  {
    batch: "21-25",
    paper: "6th Sem",
    link: "5th_sem_6th_sem_pdf/21_25_CSE_6th_SEM.pdf"
  },
  {
    batch: "22-26",
    paper: "6th Sem Internal",
    link: "5th_sem_6th_sem_pdf/22_26_CSE_6th_Sem_Internal-Writabrata Chakraborti.pdf"
  },
  {
    batch: "22-26",
    paper: "6th Sem",
    link: "5th_sem_6th_sem_pdf/22_26_CSE_6th_Sem-Writabrata Chakraborti.pdf"
  }
];

loadQuestionPapers({
  tbodyId: "cse6thSemTableBody",
  data: cse6thSemData,
  semesterLabel: "6th",
  params: {
    year: "Third Year",
    semester: "Sixth Semester",
    department: "CSE"
  }
});
