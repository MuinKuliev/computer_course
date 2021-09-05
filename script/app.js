const header = document.querySelector('.main_header'),
    main = document.querySelector('.course_inner');

setInterval(() => {
    if (window.scrollY >= main.scrollHeight) {
        header.classList.add('fix_header');
        header.classList.remove('nofix_header');
    }
    else {
        header.classList.remove('fix_header');
        header.classList.add('nofix_header');
    }
}, 1000)
