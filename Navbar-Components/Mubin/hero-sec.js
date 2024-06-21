document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    const openBtn = document.getElementById('open-btn');
    const closeBtn = document.getElementById('close-btn');
    const content = document.querySelector('.content');

    openBtn.addEventListener('click', function() {
        sidebar.style.width = '250px';
        content.style.marginLeft = '0px';
    });

    closeBtn.addEventListener('click', function() {
        sidebar.style.width = '0';
        content.style.marginLeft = '0';
    });
});
