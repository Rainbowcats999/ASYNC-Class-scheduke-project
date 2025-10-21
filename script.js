// All schedules fixed with consistent keys
const schedules = {
  "MySchedule.json": [
    { "className": "Honors Cybersecurity and Computer programming", "teacher": "Christine Rehwinkel", "roomNumber": "A234", "period": 1, "subjectArea": "Computer safety" },
    { "className": "Honors NJIT IS219 Advanced Website Development WDP", "teacher": "Gregory Kilgore", "roomNumber": "B111", "period": 2, "subjectArea": "Web design" },
    { "className": "Pre Calculus", "teacher": "Christopher Ploe", "roomNumber": "E215", "period": 3, "subjectArea": "Mathematics" },
    { "className": "BCC ENG121 The Writing Process", "teacher": "Matthew Sauter", "roomNumber": "E111", "period": 4, "subjectArea": "English" },
    { "className": "AP Computer Science A", "teacher": "Christine Rehwinkel", "roomNumber": "A234", "period": 5, "subjectArea": "Computer Science" },
    { "className": "Financial Literacy", "teacher": "Kevin Morgan", "roomNumber": "A132", "period": 6, "subjectArea": "Finance" },
    { "className": "Physical Education", "teacher": "Diana Keil", "roomNumber": "Main Gym", "period": 7, "subjectArea": "Gym" }
  ],

  "AnnieSchedule.json": [
    { "className": "English 4", "teacher": "Mrs. Fontanilla", "roomNumber": "E123", "period": 1, "subjectArea": "English" },
    { "className": "Honors NJIT IS219 Advanced Website Development WDP", "teacher": "Mr. Kilgore", "roomNumber": "B111", "period": 2, "subjectArea": "Technology" },
    { "className": "Pre-Calculus", "teacher": "Mr. Ploe", "roomNumber": "E215", "period": 3, "subjectArea": "Math" },
    { "className": "Public Speaking", "teacher": "Ms. Bender", "roomNumber": "A127", "period": 4, "subjectArea": "English" },
    { "className": "AP Computer Science Principles", "teacher": "Mrs. Leonard", "roomNumber": "B110", "period": 5, "subjectArea": "Technology" },
    { "className": "Physical Education", "teacher": "Mrs. Keil", "roomNumber": "GYM", "period": 6, "subjectArea": "Physical Education" },
    { "className": "Applied Art 1", "teacher": "Mrs. Fraser", "roomNumber": "D101", "period": 7, "subjectArea": "Visual Arts" }
  ],

  "CooperSchedule.json": [
    { "className": "English 4", "teacher": "Fontanilla", "roomNumber": "E123", "period": 1, "subjectArea": "English" },
    { "className": "Honors NJIT IS219 Advanced Website Development WDP", "teacher": "Kilgore", "roomNumber": "B111", "period": 2, "subjectArea": "Comp Science" },
    { "className": "Advanced Algebra & Trig", "teacher": "Daley", "roomNumber": "A223", "period": 3, "subjectArea": "Math" },
    { "className": "Gym", "teacher": "Levi", "roomNumber": "Gym", "period": 4, "subjectArea": "Gym" },
    { "className": "Video Editing & Media Prod 1", "teacher": "Werntz", "roomNumber": "B106", "period": 5, "subjectArea": "Comp Science" },
    { "className": "Applied Art 1", "teacher": "Rucci", "roomNumber": "D103", "period": 6, "subjectArea": "Art" },
    { "className": "Popular Music 1", "teacher": "Ippolito", "roomNumber": "C103", "period": 7, "subjectArea": "Music" }
  ],

  "LaylaSchedule.json": [
    { "className": "AP US Government and Politics", "teacher": "Mr. Yang", "roomNumber": "A121", "period": 1, "subjectArea": "Government" },
    { "className": "Level 3 Advanced Web Design", "teacher": "Mr. Kilgore", "roomNumber": "B111", "period": 2, "subjectArea": "Computer Science" },
    { "className": "English 4", "teacher": "Mr. Murphy", "roomNumber": "E113", "period": 3, "subjectArea": "English" },
    { "className": "Health 12", "teacher": "Mrs. Scollo", "roomNumber": "C130", "period": 4, "subjectArea": "Health" },
    { "className": "Applied Art 1", "teacher": "Ms. Rucci", "roomNumber": "D101", "period": 5, "subjectArea": "Art" },
    { "className": "Criminology and Law", "teacher": "Mrs. Quinn", "roomNumber": "A107", "period": 6, "subjectArea": "Social Sciences" },
    { "className": "Statistics", "teacher": "Ms. Altillio", "roomNumber": "A213", "period": 7, "subjectArea": "Math" }
  ],

  "NickSchedule.json": [
    { "className": "Statistics", "teacher": "Mr. Juska", "roomNumber":"A213", "period": 1, "subjectArea":"Math" },
    { "className": "Honors NJIT IS219 Advanced Website Development WDP", "teacher": "Mr. Kilgore", "roomNumber":"B111", "period": 2, "subjectArea":"Computer Science" },
    { "className": "Physical Ed", "teacher": "Mrs. Preston", "roomNumber":"Gym", "period": 3, "subjectArea":"Physical Ed" },
    { "className": "English IV", "teacher": "Mr. Murphy", "roomNumber":"E113", "period": 4, "subjectArea":"English" },
    { "className": "Honors Italian IV", "teacher": "Mrs. Raineri", "roomNumber":"A205", "period": 5, "subjectArea":"Italian" },
    { "className": "Sociology", "teacher": "Mr. Wisniewski", "roomNumber":"A105", "period": 6, "subjectArea":"Social Studies" },
    { "className": "Financial Literacy", "teacher": "Mr. Morgan", "roomNumber":"A132", "period": 7, "subjectArea":"Financial Literacy" }
  ],

  "RemySchedule.json": [
    { "className": "English 4", "teacher": "Ms. Weksler", "roomNumber": "E100", "period": 1, "subjectArea": "English" },
    { "className": "Honors NJIT IS219 Advanced Website Development", "teacher": "Mr. Kilgore", "roomNumber": "B111", "period": 2, "subjectArea": "Web Design" },
    { "className": "AP Calculus AB", "teacher": "Mr. Sandoval", "roomNumber": "A219", "period": 3, "subjectArea": "Calculus" },
    { "className": "Applied Art 1", "teacher": "Ms. Zeller", "roomNumber": "D105", "period": 4, "subjectArea": "Art" },
    { "className": "Health 4", "teacher": "Mr. Sininsky", "roomNumber": "C130", "period": 5, "subjectArea": "Health" },
    { "className": "Italian 4", "teacher": "Sra. Raineri", "roomNumber": "A205", "period": 6, "subjectArea": "Italian" },
    { "className": "Financial Literacy", "teacher": "Mr. Morgan", "roomNumber": "A132", "period": 7, "subjectArea": "Financial Literacy" }
  ]
};

const scheduleContainer = document.getElementById('scheduleContainer');
const status = document.getElementById('status');
const selector = document.getElementById('friendSelector');

function renderSchedule(fileName) {
  const data = schedules[fileName];
  if (!data) {
    status.innerHTML = `<div class="alert alert-danger">Schedule not found!</div>`;
    scheduleContainer.innerHTML = "";
    return;
  }

  status.innerHTML = "";
  scheduleContainer.innerHTML = "";

  // Sort by period
  data.sort((a,b)=> a.period - b.period);

  data.forEach(cls => {
    const html = `
      <div class="card col-md-3 p-3 mb-3 opacity-1">
        <h5>${cls.className}</h5>
        <p><strong>Teacher:</strong> ${Array.isArray(cls.teacher) ? cls.teacher.join(', ') : cls.teacher}</p>
        <p><strong>Room:</strong> ${cls.roomNumber}</p>
        <p><strong>Period:</strong> ${cls.period}</p>
        <p><strong>Subject:</strong> ${cls.subjectArea}</p>
      </div>
    `;
    scheduleContainer.insertAdjacentHTML('beforeend', html);
  });
}

// Load initial schedule
renderSchedule(selector.value);

// Dropdown event
selector.addEventListener('change', () => {
  renderSchedule(selector.value);
});

