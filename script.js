const schedules = {
  "MySchedule.json": [
    {
      "className": "Honors Cybersecurity and Computer programming",
      "teacher": "Christine Rehwinkel",
      "roomNumber": "A234",
      "period": 1,
      "subjectArea": "Computer safety"
    },
    {
      "className": "Honors NJIT IS219 Advanced Website Development WDP",
      "teacher": "Gregory Kilgore",
      "roomNumber": "B111",
      "period": 2,
      "subjectArea": "Web design"
    },
    {
      "className": "Pre Calculus",
      "teacher": "Christopher Ploe",
      "roomNumber": "E215",
      "period": 3,
      "subjectArea": "Mathematics"
    }
  ]
};

const scheduleContainer = document.getElementById('scheduleContainer');
const status = document.getElementById('status');

function renderSchedule(fileName) {
  const data = schedules[fileName];
  if (!data) {
    status.innerHTML = `<div class="alert alert-danger">Schedule not found!</div>`;
    scheduleContainer.innerHTML = "";
    return;
  }

  status.innerHTML = "";
  scheduleContainer.innerHTML = "";

  data.sort((a, b) => a.period - b.period);

  data.forEach(cls => {
    const teacher = cls.teacher || cls.teachers || "TBD";
    const html = `
      <div class="card col-md-4 p-3 mb-3 opacity-1">
        <h5>${cls.className}</h5>
        <p><strong>Teacher:</strong> ${Array.isArray(teacher) ? teacher.join(', ') : teacher}</p>
        <p><strong>Room:</strong> ${cls.roomNumber}</p>
        <p><strong>Period:</strong> ${cls.period}</p>
        <p><strong>Subject:</strong> ${cls.subjectArea}</p>
      </div>
    `;
    scheduleContainer.insertAdjacentHTML('beforeend', html);
  });
}

// Initial load
renderSchedule("MySchedule.json");
