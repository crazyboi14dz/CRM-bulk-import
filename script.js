document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.getElementById('sidebar');
    const searchMenuInput = document.getElementById('search-menu-input');
    const toggleButton = document.getElementById('collapse-arrow');

    toggleButton.addEventListener('click', function () {
        sidebar.classList.toggle('collapsed');
        searchMenuInput.classList.toggle('collapsed');
        document.body.classList.toggle('sidebar-collapsed'); // Add this line
        const svg = toggleButton.querySelector('svg');
        if (sidebar.classList.contains('collapsed')) {
            svg.style.transform = 'rotate(180deg)';
        } else {
            svg.style.transform = 'rotate(0deg)';
        }
    });
});