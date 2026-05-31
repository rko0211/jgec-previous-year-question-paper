const ece3rdSemData = [
  {
    batch: "22-26",
    paper: "3rd Sem Internal",
    link: "3rd_sem_4th_sem pdf/22_26_ECE_3rd_Internal - MURSALIM SAHA.pdf"
  }
];

loadQuestionPapers({
  tbodyId: "ece3rdSemTableBody",
  data: ece3rdSemData,
  semesterLabel: "3rd",
  params: {
    year: "Second Year",
    semester: "Third Semester",
    department: "ECE"
  }
});
