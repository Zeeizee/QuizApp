const correctAnswers = ['A', 'A', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const specific = document.querySelector('.specific');
const displayScore = document.querySelector('.student-score');

console.log(displayScore);
studentAnswers = [];
form.addEventListener('submit', e => {


    e.preventDefault();
    let score = 0;
    studentAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
    console.log(correctAnswers);
    console.log(studentAnswers);
    studentAnswers.forEach((element, index) => {
        if (element === correctAnswers[index]) {
            score = score + 25
        }


    });
    scrollTo(0, 0);

    displayScore.classList.remove('d-none');
    specific.classList.remove('d-none');
    let i = 0
    const timer = setInterval(() => {
        console.log(i)
        displayScore.querySelector('span').textContent = `${i}%`;
        if (i === score) {

            clearInterval(timer);
        }
        else {
            i = i + 1;
        }

    }, 10)



})
specific.addEventListener('click', e => {
    specific.classList.add('d-none')
    displayScore.classList.add('d-none');

})
// setTimeout(() => {



// }, 3000);
// let i = 0
// const timer = setInterval(() => {
//     console.log(i)
//     if (i === 5) {

//         clearInterval(timer);
//     }
//     else {
//         i = i + 1;
//     }

// }, 10)


