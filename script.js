// All schedules embedded
const schedules = {
  "MySchedule.json": [ /* My JSON */ ],
  "AnnieSchedule.json": [ /* Annie's JSON */ ],
  "CooperSchedule.json": [ /* Cooper's JSON */ ],
  "LaylaSchedule.json": [ /* Layla's JSON */ ],
  "NickSchedule.json": [ /* Nick's JSON */ ],
  "RemySchedule.json": [ /* Remy's JSON */ ]
};

const scheduleContainer = document.getElementById('scheduleContainer');
const status = document.getElementById('status');

let currentSchedule = "MySchedule.json";

// Function to render a schedule
function renderSchedule(fileName) {
    const data = schedules[fileName];
    if (!data) {
        status.innerHTML = `<div class="alert alert-danger">Schedule not found!</div>`;
        scheduleContainer.innerHTML = "";
        return;
    }

    status.innerHTML = `<div class="alert alert-info">Loading schedule...</div>`;
    scheduleContainer.innerHTML = "";

    // Sort by period
    data.sort((a, b) => a.period - b.period);

    // Render each class as a card
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

    status.innerHTML = ""; // remove loading message
}

// Initial load
renderSchedule(currentSchedule);

// Event: press keys 1-6 to switch schedules
window.addEventListener('keydown', (e) => {
    switch(e.key) {
        case "1": currentSchedule = "MySchedule.json"; break;
        case "2": currentSchedule = "AnnieSchedule.json"; break;
        case "3": currentSchedule = "CooperSchedule.json"; break;
        case "4": currentSchedule = "LaylaSchedule.json"; break;
        case "5": currentSchedule = "NickSchedule.json"; break;
        case "6": currentSchedule = "RemySchedule.json"; break;
        default: return; // ignore other keys
    }
    renderSchedule(currentSchedule);
});
