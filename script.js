// // Спрашиваем у пользователя количество примеров, максимальное и минимальное значение
// const numberOfExamples = +prompt('Сколько примеров вы хотите решить?');
// const maxValue = +prompt('Введите максимальное значение:');
// const minValue = +prompt('Введите минимальное значение:');

// // Функция генерации случайного числа в заданном диапазоне
// function getRandom(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }


const btn = document.querySelector('.btn')
// // 0 dan 1 gacha random son beradi

// // Проходим циклом по количеству примеров
// for (let i = 0; i < numberOfExamples; i++) {
//     const num1 = getRandom(minValue, maxValue);
//     const num2 = getRandom(minValue, maxValue);
//     const operations = [
//         { symbol: '+', calculate: (a, b) => a + b },
//         { symbol: '-', calculate: (a, b) => a - b },
//         { symbol: '*', calculate: (a, b) => a * b },
//         { symbol: '/', calculate: (a, b) => parseFloat((a / b).toFixed(2)) }
//     ];

//     const operation = operations[getRandom(0, operations.length - 1)];

//     const correctAnswer = operation.calculate(num1, num2);
//     const question = `${num1} ${operation.symbol} ${num2}`;
//     let userAnswered = false;

//     // Таймер для ответа пользователя
//     const timer = setTimeout(() => {
//         if (!userAnswered) {
//             alert(`${question} : Вы опоздали! Правильный ответ: ${correctAnswer}`);
//         }
//     }, 5000); // 5 секунд на ответ

//     // Спрашиваем у пользователя ответ
//     const userAnswer = prompt(`${question}. У вас есть 5 секунд на ответ:`);

//     if (!userAnswered) {
//         userAnswered = true;
//         clearTimeout(timer);

//         if (parseFloat(userAnswer) === correctAnswer) {
//             alert(`${question} : Ваш ответ правильный!`);
//         } else {
//             alert(`${question} : Ваш ответ неверный. Правильный ответ: ${correctAnswer}`);
//         }
//     }
// }


let boshozgaruvchiM = 0
let boshozgaruvchiS = 0
let boshozgaruvchiMin = 0
let interval;
const startbtn = document.getElementById('startBtn')
const stopbtn = document.getElementById('stopBtn')
const resetbtn = document.getElementById('resetBtn')
const milliseconds = document.getElementById('milliseconds')
const minuts = document.getElementById('minutes')
const seconds = document.getElementById('seconds')
const color = document.getElementById('color');

startbtn.addEventListener('click', () => {
    indicator.classList.remove('bg-gray-200');
    indicator.classList.add('bg-green-500',);
})
startbtn.addEventListener('click' , ()=>{
 interval =setInterval(()=> {
    boshozgaruvchiM += 10
    milliseconds.innerHTML = boshozgaruvchiM
    if(boshozgaruvchiM == 1000){
        boshozgaruvchiM = 0
        boshozgaruvchiS += 1
        seconds.innerHTML = boshozgaruvchiS
    } else if(boshozgaruvchiS == 60){
        boshozgaruvchiS = 0
        boshozgaruvchiMin +=1
        minuts.innerHTML = boshozgaruvchiMin
    }
},10)    
} )
stopbtn.addEventListener('click' , ()=>{
    clearInterval(interval);
    indicator.classList.remove('bg-green-500');
    indicator.classList.add('bg-red-500');
})

resetbtn.addEventListener('click', ()=>{
     clearInterval(interval);
    boshozgaruvchiMin = 0;
    boshozgaruvchiS = 0;
    boshozgaruvchiM = 0;
    seconds.innerHTML = boshozgaruvchiS
    minuts.inert = boshozgaruvchiMin
    milliseconds.innerHTML = boshozgaruvchiM
    indicator.classList.remove('bg-red-500', 'bg-green-500');
    indicator.classList.add('bg-gray-200');
})

// tochka raqda start stopni uzgarishi ili git hub

