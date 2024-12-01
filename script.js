// Charts initialization
document.addEventListener('DOMContentLoaded', function () {
    // Food Waste Chart
    new Chart(document.getElementById('wasteChart'), {
        type: 'doughnut',
        data: {
            labels: ['Food Waste', 'Utilized Food'],
            datasets: [{
                data: [68.7, 31.3],
                backgroundColor: ['#2563eb', '#e5e7eb']
            }]
        },
        options: {
            responsive: true,
            cutout: '70%',
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });

    // Funding Chart
    new Chart(document.getElementById('fundingChart'), {
        type: 'doughnut',
        data: {
            labels: ['Underfunded', 'Adequately Funded'],
            datasets: [{
                data: [62, 38],
                backgroundColor: ['#dc2626', '#e5e7eb']
            }]
        },
        options: {
            responsive: true,
            cutout: '70%',
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });

    // Impact Chart
    new Chart(document.getElementById('impactChart'), {
        type: 'doughnut',
        data: {
            labels: ['Potential Meals', 'Current Distribution'],
            datasets: [{
                data: [1.3, 0.7],
                backgroundColor: ['#059669', '#e5e7eb']
            }]
        },
        options: {
            responsive: true,
            cutout: '70%',
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
});
