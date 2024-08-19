const calendarDays = document.getElementById('calendarDays');
const monthYear = document.getElementById('monthYear');
let currentYear = new Date().getFullYear();
let currentMonth = new Date().getMonth();

function renderCalendar(year, month) {
    // Set the month and year in the header
    monthYear.textContent = `${monthNames[month]} ${year}`;
    
    // Clear the calendar days
    calendarDays.innerHTML = '';

    // Get the first day of the month and the number of days in the month
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    // Fill in the blank days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
        const blankDay = document.createElement('div');
        calendarDays.appendChild(blankDay);
    }

    // Fill in the days of the month
    for (let day = 1; day <= daysInMonth; day++) {
        const dayCell = document.createElement('div');
        dayCell.textContent = day;
        calendarDays.appendChild(dayCell);
    }
}

function prevMonth() {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    renderCalendar(currentYear, currentMonth);
}

function nextMonth() {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    renderCalendar(currentYear, currentMonth);
}

const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 
    'August', 'September', 'October', 'November', 'December'
];

// Initial render
renderCalendar(currentYear, currentMonth);
