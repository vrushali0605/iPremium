function filterLogins() {
    const filterValue = document.getElementById('login-status-filter').value;
    const loginRows = document.querySelectorAll('.login-row');

    loginRows.forEach(row => {
        const loginStatus = row.getAttribute('data-status');
        if (filterValue === 'all' || filterValue === loginStatus) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

function updateLoginStatus(button) {
    const row = button.closest('.login-row');
    const currentStatus = row.getAttribute('data-status');
    let newStatus;

    switch (currentStatus) {
        case 'active':
            newStatus = 'inactive';
            break;
        case 'inactive':
            newStatus = 'banned';
            break;
        case 'banned':
            newStatus = 'active';
            break;
        default:
            newStatus = 'inactive';
    }

    row.setAttribute('data-status', newStatus);
    row.querySelector('td:nth-child(4)').textContent = newStatus.charAt(0).toUpperCase() + newStatus.slice(1);
}
