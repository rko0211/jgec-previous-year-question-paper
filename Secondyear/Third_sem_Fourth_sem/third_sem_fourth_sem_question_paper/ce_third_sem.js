const ce3rdSemData = [
  {
    batch: "19-23",
    paper: "3rd Sem",
    link: "3rd sem(19-23 batch) - Om Kumar Sah.pdf"
  },
  {
    batch: "21-25",
    paper: "3rd Sem",
    link: "3rd sem(21-25 batch) - Om Kumar Sah.pdf"
  },
  {
    batch: "23-27",
    paper: "3rd Sem",
    link: "3rd_sem_4th_sem pdf/23_27_CE_3rd_SEM - Subhankar Sarkar.pdf"
  }
];

loadQuestionPapers({
  tbodyId: "ce3rdSemTableBody",
  data: ce3rdSemData,
  semesterLabel: "3rd",
  params: {
    year: "Second Year",
    semester: "Third Semester",
    department: "CIVIL"
  }
});
