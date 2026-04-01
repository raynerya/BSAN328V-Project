const specialists = [
  {
    name: 'Mia Reyes, PT, DPT',
    department: 'Sports Rehabilitation',
    availability: 'Mon, Wed, Fri',
    scheduleLink: 'schedule.html'
  },
  {
    name: 'Jordan Kim, PT',
    department: 'Orthopedic Recovery',
    availability: 'Tue, Thu',
    scheduleLink: 'schedule.html'
  },
  {
    name: 'Avery Patel, PT',
    department: 'Pediatric Therapy',
    availability: 'Mon-Fri',
    scheduleLink: 'schedule.html'
  },
  {
    name: 'Lina Torres, PT, OCS',
    department: 'Manual Therapy',
    availability: 'Wed, Thu',
    scheduleLink: 'schedule.html'
  }
];

function renderSpecialists(rows) {
  const tbody = document.querySelector('#specialistsTable tbody');
  tbody.innerHTML = '';

  rows.forEach((specialist) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${specialist.name}</td>
      <td>${specialist.department}</td>
      <td>${specialist.availability}</td>
      <td><a href="${specialist.scheduleLink}">Schedule</a></td>
    `;
    tbody.appendChild(row);
  });
}

function filterSpecialists(query) {
  const normalized = query.trim().toLowerCase();
  if (!normalized) {
    return specialists;
  }
  return specialists.filter((specialist) =>
    specialist.name.toLowerCase().includes(normalized) ||
    specialist.department.toLowerCase().includes(normalized)
  );
}

function setupSearch() {
  const searchButton = document.getElementById('searchButton');
  const searchInput = document.getElementById('searchInput');

  if (!searchButton || !searchInput) {
    return;
  }

  searchButton.addEventListener('click', () => {
    const results = filterSpecialists(searchInput.value);
    renderSpecialists(results);
  });

  searchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const results = filterSpecialists(searchInput.value);
      renderSpecialists(results);
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    renderSpecialists(specialists);
    setupSearch();
  });
} else {
  renderSpecialists(specialists);
  setupSearch();
}
