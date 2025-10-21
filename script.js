// Schedule files
const scheduleContainer = document.getElementById('scheduleContainer');
const status = document.getElementById('status');
const selector = document.getElementById('friendSelector');

// Load schedule on page load
window.addEventListener('DOMContentLoaded', () => {
    loadSchedule(selector.value);
});

// Listen for dropdown change to switch schedules
selector.addEventListener('change', () => {
    loadSchedule(selector.value);
});

// Async function to fetch and render schedule
async function loadSchedule(fileName) {
    // Show loading message
    status.innerHTML = `<div class="alert alert-info">Loading schedule...</div>`;
    scheduleContainer.innerHTML = "";

    try {
        const response = await fetch(`./json/${fileName}`);
        if (!response.ok) throw new Error('Failed to fetch JSON file');
        let data = await response.json();

        // Sort by period for extra credit
        data.sort((a, b) => a.period - b.period);

        data.forEach(cls => {
            const teacher = cls.teacher || cls.teachers; // handle different keys
            const subjectClass = `subject-${cls.subjectArea.split(' ')[0]}`; // first word for class
            const html = `
            <div class="card ${subjectClass} p-3 opacity-0">
                <h5>${cls.className}</h5>
                <p><strong>Teacher:</strong> ${Array.isArray(teacher) ? teacher.join(', ') : teacher}</p>
                <p><strong>Room:</strong> ${cls.roomNumber}</p>
                <p><strong>Period:</strong> ${cls.period}</p>
                <p><strong>Subject:</strong> ${cls.subjectArea}</p>
            </div>
            `;
            scheduleContainer.insertAdjacentHTML('beforeend', html);
        });

        // Fade-in animation
        const cards = document.querySelectorAll('.card');
        cards.forEach((card, i) => {
            setTimeout(() => {
                card.classList.add('opacity-1');
                card.style.opacity = 1;
            }, i * 100);
        });

        status.innerHTML = ""; // remove loading
    } catch (err) {
        status.innerHTML = `<div class="alert alert-danger">Error loading schedule. Please try again.</div>`;
        console.error(err);
    }
}
