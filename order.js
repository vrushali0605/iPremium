function filterOrders() {
    const filterValue = document.getElementById('order-status-filter').value;
    const orderRows = document.querySelectorAll('.order-row');

    orderRows.forEach(row => {
        const orderStatus = row.getAttribute('data-status');
        if (filterValue === 'all' || filterValue === orderStatus) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

function updateOrderStatus(button) {
    const row = button.closest('.order-row');
    const currentStatus = row.getAttribute('data-status');
    let newStatus;

    switch (currentStatus) {
        case 'pending':
            newStatus = 'shipped';
            break;
        case 'shipped':
            newStatus = 'delivered';
            break;
        case 'delivered':
            newStatus = 'cancelled';
            break;
        case 'cancelled':
            newStatus = 'pending';
            break;
        default:
            newStatus = 'pending';
    }

    row.setAttribute('data-status', newStatus);
    row.querySelector('td:nth-child(4)').textContent = newStatus.charAt(0).toUpperCase() + newStatus.slice(1);
}
