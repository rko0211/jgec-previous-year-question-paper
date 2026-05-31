const cse4thSemData = [
  {
    batch: "20-24",
    paper: "4th Sem Internal",
    link: "4th Sem CSE'24 Internal.pdf"
  },
  {
    batch: "20-24",
    paper: "4th Sem",
    link: "4th Sem CSE'24 Updated.pdf"
  },
  {
    batch: "21-25",
    paper: "4th Sem",
    link: "CSE'25 4th sem.pdf"
  },
  {
    batch: "22-26",
    paper: "4th Sem",
    link: "3rd_sem_4th_sem pdf/22_26_CSE_4th_Sem - Prajwal Lakra.pdf"
  },
  {
    batch: "23-27",
    paper: "4th Sem Internal-1+2",
    link: "3rd_sem_4th_sem pdf/23_27_CSE_4th_Sem_Internal_1+2.pdf"
  }
];

loadQuestionPapers({
  tbodyId: "cse4thSemTableBody",
  data: cse4thSemData,
  semesterLabel: "4th",
  params: {
    year: "Second Year",
    semester: "Fourth Semester",
    department: "CSE"
  }
});
