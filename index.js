const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
    cursor.setAttribute('style', 'top: ' + (e.pageY - 60) + 'px; left: ' + (e.pageX - 60) + 'px;');
});

document.addEventListener('click', (e) => {
    console.log(e.target);
    cursor.classList.add('click');

    setTimeout(() => {
        cursor.classList.remove('click');
    }, 500);
});

// const btn1 = document.querySelector('.btn1');
// const btn2 = document.querySelector('.btn2');
// const btn3 = document.querySelector('.btn3');

// btn1.addEventListener('click', function() {

//     cursor.classList.remove('style2');
//     cursor.classList.remove('style3');
//     cursor.classList.add('style1');
// });

// btn2.addEventListener('click', (e) => {
//     // cursor.classList.remove('style1');
//     // cursor.classList.remove('style3');
//     cursor.classList.add('style2');
// });

// btn3.addEventListener('click', (e) => {
//     cursor.classList.remove('style1');
//     cursor.classList.remove('style2');
//     cursor.classList.add('style3');
// });