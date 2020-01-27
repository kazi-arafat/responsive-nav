document.querySelector('.toggle-button').addEventListener('click', e => {
    document.querySelector('.navbar-links').classList.toggle('active');  
    e.preventDefault();
});
