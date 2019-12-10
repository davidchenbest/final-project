//nmp install express
var express = require('express');

var app = express();
var router = express.Router();

app.set('view engine', 'ejs');

app.use('/styles', express.static('styles'));
app.use('/javascript', express.static('javascript'));

//route
app.get('/', function(req,res){
  res.render('index');
});

router.get('/courses', function(req,res){
  qcode = req.query
  res.render('courses', qcode);
});
app.use('/',router);

//api
app.get('/courses/search', function(req,res){
  qcode = req.query.code;
  qtitle = req.query.title;
  qinstructor = req.query.instructor;
  qday = req.query.day;
  qavailability = req.query.availability;
  qtype = req.query.type;
  let filteredData=data['courses'];
  if(qcode != ''){
    filteredData= filteredData.filter(d => d.code.toLowerCase().includes(qcode));
  }
  if(qtitle != ''){
    filteredData= filteredData.filter(d => d.title.toLowerCase().includes(qtitle));
  }
  if(qinstructor != ''){
    filteredData= filteredData.filter(d => d.instructor.toLowerCase().includes(qinstructor));
  }
  if(qday != ''){
    filteredData= filteredData.filter(d => d.day.toLowerCase().includes(qday));
  }
  if(qavailability != ''){
    filteredData= filteredData.filter(d => d.availability == qavailability);
  }
  if(qtype != ''){
    filteredData= filteredData.filter(d => d.type.toLowerCase().includes(qtype));
  }
  res.json(filteredData);
});


//start server    http://localhost:3000/
app.listen(3000, function(){
  console.log('app listening on port 3000');
})

var data = {
  courses:[
  {
    "code": "CUS 1102",
    "title": "SOFTWARE APPLICATION",
    "instructor": "Felicetti, Robert Alvaro",
    "day": "TF, 1525-1650",
    "availability": 0,
    "type": "Lecture"
  },
  {
    "code": "CUS 1102",
    "title": "SOFTWARE APPLICATION",
    "instructor": "Lieberman, Barry",
    "day": "TF, 1350-1515",
    "availability": 7,
    "type": "Lecture"
  },
  {
    "code": "CUS 1102",
    "title": "SOFTWARE APPLICATION",
    "instructor": "Lieberman, Barry",
    "day": "TF, 1525-1650",
    "availability": 18,
    "type": "Lecture"
  },
  {
    "code": "CUS 1102",
    "title": "SOFTWARE APPLICATION",
    "instructor": "Lander Lugo, Glenda",
    "day": "TF, 1700-1825",
    "availability": 19,
    "type": "Lecture"
  },
  {
    "code": "CUS 1102",
    "title": "SOFTWARE APPLICATION",
    "instructor": "Felicetti, Robert Alvaro",
    "day": "TF, 1215-1340",
    "availability": 0,
    "type": "Lecture"
  },
  {
    "code": "CUS 1115",
    "title": "COMPUTER PROG FUND I",
    "instructor": "DeBello, Joan",
    "day": "MR, 0905-1030",
    "availability": 0,
    "type": "Lecture/Lab"
  },
  {
    "code": "CUS 1115",
    "title": "COMPUTER PROG FUND I",
    "instructor": "Fluture, Simina",
    "day": "W, 1040-1330",
    "availability": 6,
    "type": "Lecture/Lab"
  },
  {
    "code": "CUS 1116",
    "title": "COMPUTER PROG FUND II",
    "instructor": "DeBello, Joan",
    "day": "MR, 1040-1205",
    "availability": 0,
    "type": "Lecture/Lab"
  },
  {
    "code": "CUS 1116",
    "title": "COMPUTER PROG FUND II",
    "instructor": "TBA",
    "day": "TF, 1350-1515",
    "availability": 13,
    "type": "Lecture/Lab"
  },
  {
    "code": "CUS 1116",
    "title": "COMPUTER PROG FUND II",
    "instructor": "TBA",
    "day": "TF, 1215-1340",
    "availability": 1,
    "type": "Lecture/Lab"
  },
  {
    "code": "CUS 1116",
    "title": "COMPUTER PROG FUND II",
    "instructor": "TBA",
    "day": "TF, 1040-1205",
    "availability": 0,
    "type": "Lecture/Lab"
  },
  {
    "code": "CUS 1116",
    "title": "COMPUTER PROG FUND II",
    "instructor": "TBA",
    "day": "TF, 0905-1030",
    "availability": 7,
    "type": "Lecture/Lab"
  },
  {
    "code": "CUS 1116",
    "title": "COMPUTER PROG FUND II",
    "instructor": "MacKellar, Bonnie",
    "day": "MR, 1215-1340",
    "availability": 10,
    "type": "Lecture/Lab"
  },
  {
    "code": "CUS 1126",
    "title": "INTRO TO DATA STRUCTURES",
    "instructor": "TBA",
    "day": "TF, 1350-1515",
    "availability": 17,
    "type": "Lecture/Lab"
  },
  {
    "code": "CUS 1126",
    "title": "INTRO TO DATA STRUCTURES",
    "instructor": "Yadav, Nikhil",
    "day": "MR, 1525-1650",
    "availability": 8,
    "type": "Lecture/Lab"
  },
  {
    "code": "CUS 1150",
    "title": "SYSTEMS PROGRAMMING IN LINUX",
    "instructor": "MacKellar, Bonnie",
    "day": "MR, 1040-1205",
    "availability": 7,
    "type": "Lecture/Lab"
  },
  {
    "code": "CUS 1151",
    "title": "ADVANCED DATA STRUCTURES",
    "instructor": "Keshtkar, Fazel",
    "day": "T, 0905-1030",
    "availability": 0,
    "type": "Hybrid-Classroom & Online"
  },
  {
    "code": "CUS 1156",
    "title": "SOFTWARE DESIGN METHODS",
    "instructor": "MacKellar, Bonnie",
    "day": "W, 1040-1330",
    "availability": 19,
    "type": "Lecture"
  },
  {
    "code": "CUS 1156",
    "title": "SOFTWARE DESIGN METHODS",
    "instructor": "Yadav, Nikhil",
    "day": "R, 1700-1825",
    "availability": 0,
    "type": "Hybrid-Classroom & Online"
  },
  {
    "code": "CUS 1163",
    "title": "OPERATING SYSTEMS",
    "instructor": "TBA",
    "day": "W, 1350-1640",
    "availability": 5,
    "type": "Lecture"
  },
  {
    "code": "CUS 1163",
    "title": "OPERATING SYSTEMS",
    "instructor": "Smith-Thompson, Anne",
    "day": "MR, 0730-0855",
    "availability": 9,
    "type": "Lecture"
  },
  {
    "code": "CUS 1165",
    "title": "DATA BASE MANAGEMENT SYSTEMS",
    "instructor": "Scorce, Richard",
    "day": "MR, 1215-1340",
    "availability": 0,
    "type": "Lecture"
  },
  {
    "code": "CUS 1165",
    "title": "DATA BASE MANAGEMENT SYSTEMS",
    "instructor": "Scorce, Richard",
    "day": "R, 0905-1030",
    "availability": 0,
    "type": "Hybrid-Classroom & Online"
  },
  {
    "code": "CUS 1165",
    "title": "DATA BASE MANAGEMENT SYSTEMS",
    "instructor": "Bukhari, Syed Ahmad Chan",
    "day": "W, 1040-1330",
    "availability": 14,
    "type": "Lecture"
  },
  {
    "code": "CUS 1166",
    "title": "SOFTWARE ENGINEERING",
    "instructor": "TBA",
    "day": "W, 1350-1640",
    "availability": 17,
    "type": "Lecture/Lab"
  },
  {
    "code": "CUS 1166",
    "title": "SOFTWARE ENGINEERING",
    "instructor": "TBA",
    "day": "MR, 1525-1650",
    "availability": 1,
    "type": "Lecture/Lab"
  },
  {
    "code": "CUS 1167",
    "title": "SYSTEMS ANALYSIS",
    "instructor": "Scorce, Richard",
    "day": "M, 0905-1030",
    "availability": 0,
    "type": "Hybrid-Classroom & Online"
  },
  {
    "code": "CUS 1172",
    "title": "WEB PAGE GRAPHICS",
    "instructor": "Christoforou, Christoforos",
    "day": "R, 0730-0855",
    "availability": 0,
    "type": "Hybrid-Classroom & Online"
  },
  {
    "code": "CUS 1174",
    "title": "ARTIFICIAL INTELLIGENCE",
    "instructor": "Sklar, Ronald",
    "day": "T, 1525-1650",
    "availability": 17,
    "type": "Hybrid-Classroom & Online"
  },
  {
    "code": "CUS 1185",
    "title": "DATA SECURITY & CRYPTOGRAPHY",
    "instructor": "Troja, Erald",
    "day": "MR, 1040-1205",
    "availability": 0,
    "type": "Lecture"
  },
  {
    "code": "CUS 1185",
    "title": "DATA SECURITY & CRYPTOGRAPHY",
    "instructor": "Troja, Erald",
    "day": "MR, 0905-1030",
    "availability": 0,
    "type": "Lecture"
  },
  {
    "code": "CUS 1186",
    "title": "THEORY OF COMPUTATION",
    "instructor": "Fechter, Ronald",
    "day": "T, 1700-1950",
    "availability": 12,
    "type": "Lecture"
  },
  {
    "code": "CUS 1188",
    "title": "ANALYSIS OF ALGORITHMS",
    "instructor": "Christoforou, Christoforos",
    "day": "T, 0730-0855",
    "availability": 19,
    "type": "Lecture"
  },
  {
    "code": "CUS 1191",
    "title": "COMPUTER SCIENCE INTERNSHIP",
    "instructor": "Yadav, Nikhil",
    "day": "HRS ARR",
    "availability": 0,
    "type": "Internship"
  },
  {
    "code": "CUS 1192",
    "title": "COMPUTER SCIENCE INTERNSHIP",
    "instructor": "Yadav, Nikhil",
    "day": "HRS ARR",
    "availability": 0,
    "type": "Internship"
  },
  {
      "code": "IT 1011",
      "title": "INFO TECHNOLOGY FOR BUSINESS",
      "instructor": "Dick, Geoffrey",
      "day": "MR, 0905-1030",
      "availability": 13,
      "type": "Lecture/Lab"
    },
    {
      "code": "MTH 1003",
      "title": "INTRO TO COLLEGE MATH I",
      "instructor": "Cerulli, Thomas",
      "day": "TF, 1215-1340",
      "availability": 0,
      "type": "Lecture"
    },
    {
      "code": "MTH 1003",
      "title": "INTRO TO COLLEGE MATH I",
      "instructor": "Achtziger, Joseph",
      "day": "S, 0830-1120",
      "availability": 5,
      "type": "Lecture"
    },
    {
      "code": "MTH 1003",
      "title": "INTRO TO COLLEGE MATH I",
      "instructor": "Holliday, Kathleen",
      "day": "TF, 0905-1030",
      "availability": 1,
      "type": "Lecture"
    },
    {
      "code": "MTH 1003",
      "title": "INTRO TO COLLEGE MATH I",
      "instructor": "Malone, William",
      "day": "TF, 1700-1825",
      "availability": 0,
      "type": "Lecture"
    },
    {
      "code": "MTH 1003",
      "title": "INTRO TO COLLEGE MATH I",
      "instructor": "Achtziger, Joseph",
      "day": "TF, 1215-1340",
      "availability": 2,
      "type": "Lecture"
    },
    {
      "code": "MTH 1003",
      "title": "INTRO TO COLLEGE MATH I",
      "instructor": "Henry, Maureen",
      "day": "W, 1910-2200",
      "availability": 6,
      "type": "Lecture"
    },
    {
      "code": "MTH 1003",
      "title": "INTRO TO COLLEGE MATH I",
      "instructor": "Cerulli, Janet",
      "day": "MR, 0905-1030",
      "availability": 0,
      "type": "Lecture"
    },
    {
      "code": "MTH 1004",
      "title": "INTRO TO COLLEGE MATH II",
      "instructor": "Holliday, Kathleen",
      "day": "TF, 1215-1340",
      "availability": 4,
      "type": "Lecture"
    },
    {
      "code": "MTH 1007",
      "title": "COLLEGE ALGEBRA & TRIGONOMETRY",
      "instructor": "Chakraborty, Hector",
      "day": "R, 1700-1950",
      "availability": 20,
      "type": "Lecture"
    },
    {
      "code": "MTH 1007",
      "title": "COLLEGE ALGEBRA & TRIGONOMETRY",
      "instructor": "Elmrini, Abdel Aziz",
      "day": "M, 1700-1950",
      "availability": 7,
      "type": "Lecture"
    },
    {
      "code": "MTH 1007",
      "title": "COLLEGE ALGEBRA & TRIGONOMETRY",
      "instructor": "Manley, Michael",
      "day": "TF, 1040-1205",
      "availability": 4,
      "type": "Lecture"
    },
    {
      "code": "MTH 1007",
      "title": "COLLEGE ALGEBRA & TRIGONOMETRY",
      "instructor": "Manley, Michael",
      "day": "TF, 0905-1030",
      "availability": 3,
      "type": "Lecture"
    },
    {
      "code": "MTH 1008",
      "title": "MATRIX METHODS",
      "instructor": "Laneri, Peter",
      "day": "TF, 0730-0855",
      "availability": 0,
      "type": "Lecture"
    },
    {
      "code": "MTH 1008",
      "title": "MATRIX METHODS",
      "instructor": "Laneri, Peter",
      "day": "TF, 0905-1030",
      "availability": 0,
      "type": "Lecture"
    },
    {
      "code": "MTH 1009",
      "title": "CALCULUS I",
      "instructor": "Mollo-Holmes, Linda",
      "day": "TF, 1215-1340",
      "availability": 1,
      "type": "Lecture"
    },
    {
      "code": "MTH 1009",
      "title": "CALCULUS I",
      "instructor": "Elmrini, Abdel Aziz",
      "day": "TF, 1525-1650",
      "availability": 0,
      "type": "Lecture"
    },
    {
      "code": "MTH 1009",
      "title": "CALCULUS I",
      "instructor": "Chakraborty, Hector",
      "day": "T, 1700-1950",
      "availability": 1,
      "type": "Lecture"
    },
    {
      "code": "MTH 1009",
      "title": "CALCULUS I",
      "instructor": "Vaisfeld, Michael",
      "day": "TF, 1525-1650",
      "availability": 9,
      "type": "Lecture"
    },
    {
      "code": "MTH 1009",
      "title": "CALCULUS I",
      "instructor": "Mollo-Holmes, Linda",
      "day": "TF, 1350-1515",
      "availability": 1,
      "type": "Lecture"
    },
    {
      "code": "MTH 1010",
      "title": "CALCULUS II",
      "instructor": "Latzman, Gerald",
      "day": "TF, 1040-1205",
      "availability": 1,
      "type": "Lecture"
    },
    {
      "code": "MTH 1011",
      "title": "CALCULUS III",
      "instructor": "Servas, Frank",
      "day": "W, 0730-1020",
      "availability": 6,
      "type": "Lecture"
    },
    {
      "code": "MTH 1013",
      "title": "PROBABILITY AND STATISTICS I",
      "instructor": "Parmar, Davanjit",
      "day": "TF, 1700-1825",
      "availability": 0,
      "type": "Lecture"
    },
    {
      "code": "MTH 1013",
      "title": "PROBABILITY AND STATISTICS I",
      "instructor": "Parmar, Davanjit",
      "day": "W, 1040-1330",
      "availability": 0,
      "type": "Lecture"
    },
    {
      "code": "MTH 1013",
      "title": "PROBABILITY AND STATISTICS I",
      "instructor": "Servas, Frank",
      "day": "T, 0905-1030",
      "availability": 0,
      "type": "Hybrid-Classroom & Online"
    },
    {
      "code": "MTH 1014",
      "title": "PROBABILITY AND STATISTICS II",
      "instructor": "Servas, Frank",
      "day": "T, 1040-1205",
      "availability": 4,
      "type": "Hybrid-Classroom & Online"
    },
    {
      "code": "MTH 1014",
      "title": "PROBABILITY AND STATISTICS II",
      "instructor": "Singh, Satyanand",
      "day": "R, 1700-1950",
      "availability": 0,
      "type": "Lecture"
    },
    {
      "code": "MTH 1017",
      "title": "MATHEMATICAL LOGIC",
      "instructor": "Fechter, Ronald",
      "day": "W, 1700-1825",
      "availability": 0,
      "type": "Hybrid-Classroom & Online"
    },
    {
      "code": "MTH 1021",
      "title": "INTRODUCTION TO STATISTICS",
      "instructor": "McCauley, Marist Brothers, R.",
      "day": "MR, 0730-0855",
      "availability": 4,
      "type": "Lecture"
    },
    {
      "code": "MTH 1021",
      "title": "INTRODUCTION TO STATISTICS",
      "instructor": "McCauley, Marist Brothers, R.",
      "day": "TF, 0730-0855",
      "availability": 12,
      "type": "Lecture"
    },
    {
      "code": "MTH 1022",
      "title": "DISCRETE MATHEMATICS",
      "instructor": "Singh, Satyanand",
      "day": "MR, 1525-1650",
      "availability": 1,
      "type": "Lecture"
    },
    {
      "code": "MTH 1030",
      "title": "MATH FOR ELEMENTARY TEACHER I",
      "instructor": "Cerulli, Jane",
      "day": "TF, 1350-1515",
      "availability": 4,
      "type": "Lecture"
    },
    {
      "code": "NET 1011",
      "title": "INTRODUCTION TO NETWORKS",
      "instructor": "Greenidge, Maxine",
      "day": "W, 0730-1020",
      "availability": 3,
      "type": "Lecture/Lab"
    },
    {
      "code": "NET 1015",
      "title": "ROUTING & SWITCHING ESSENTIALS",
      "instructor": "Rullan, John",
      "day": "S, 0830-1120",
      "availability": 9,
      "type": "Lecture/Lab"
    },
    {
      "code": "NET 1031",
      "title": "WIRELESS NETWORKING",
      "instructor": "Fischman, Felix",
      "day": "S, 1230-1520",
      "availability": 20,
      "type": "Lecture/Lab"
    },
    {
      "code": "NET 1091",
      "title": "NETWORKING INTERNSHIP",
      "instructor": "Yadav, Nikhil",
      "day": "HRS ARR",
      "availability": 0,
      "type": "Internship"
    },
    {
      "code": "HCI 1001",
      "title": "INTRO HEALTHCARE INFORMATICS",
      "instructor": "Bukhari, Syed Ahmad Chan",
      "day": "W, 1040-1330",
      "availability": 16,
      "type": "Lecture"
    },
    {
      "code": "HCI 1021",
      "title": "HEALTHCARE DATABASE MGT SYS",
      "instructor": "MacKellar, Bonnie",
      "day": "W, 1040-1330",
      "availability": 0,
      "type": "Lecture"
    },
    {
      "code": "HCI 1091",
      "title": "HEALTHCARE INFORMATICS INTERN",
      "instructor": "Yadav, Nikhil",
      "day": "HRS ARR",
      "availability": 0,
      "type": "Internship"
    },
    {
      "code": "CSS 1005",
      "title": "FUNDAMENTALS OF CYBER SECURITY",
      "instructor": "Otero, Juan",
      "day": "MR, 1215-1340",
      "availability": 0,
      "type": "Lecture/Lab"
    },
    {
      "code": "CSS 1005",
      "title": "FUNDAMENTALS OF CYBER SECURITY",
      "instructor": "Otero, Juan",
      "day": "M, 1610-1735",
      "availability": 1,
      "type": "Hybrid-Classroom & Online"
    },
    {
      "code": "CSS 1005",
      "title": "FUNDAMENTALS OF CYBER SECURITY",
      "instructor": "Troja, Erald",
      "day": "TF, 1215-1340",
      "availability": 0,
      "type": "Lecture/Lab"
    },
    {
      "code": "CSS 1006",
      "title": "MGT OF INFORMATION SECURITY",
      "instructor": "Dick, Geoffrey",
      "day": "W, 1700-1950",
      "availability": 3,
      "type": "Lecture/Lab"
    },
    {
      "code": "CSS 1008",
      "title": "HEALTHCARE INFO SECURITY",
      "instructor": "Schmeelk, Suzanna",
      "day": "F, 1040-1205",
      "availability": 0,
      "type": "Hybrid-Classroom & Online"
    },
    {
      "code": "CSS 1015",
      "title": "WIRELESS SECURITY",
      "instructor": "Troja, Erald",
      "day": "W, 1350-1640",
      "availability": 0,
      "type": "Lecture/Lab"
    },
    {
      "code": "CSS 1025",
      "title": "INTERMED LINUX & UNIX SECURITY",
      "instructor": "Naseem, Sajed",
      "day": "HRS ARR",
      "availability": 18,
      "type": "Hybrid-Classroom & Online"
    },
    {
      "code": "CSS 1032",
      "title": "CYBER THREATS AND DETECTION",
      "instructor": "Troja, Erald",
      "day": "TF, 1040-1205",
      "availability": 7,
      "type": "Lecture/Lab"
    },
    {
      "code": "CSS 1091",
      "title": "COMP SECURITY SYS INTERNSHIP",
      "instructor": "Yadav, Nikhil",
      "day": "TF, 1040-1205",
      "availability": 0,
      "type": "Internship"
    }
  ]
}
