// storage.js

export function loadAppointments() {
    return JSON.parse(localStorage.getItem('consultasMedicas')) || [];
}

export function saveAppointments(appointments) {
    localStorage.setItem('consultasMedicas', JSON.stringify(appointments));
}
