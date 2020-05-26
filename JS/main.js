const age = 31;
const name = 'Filip';

console.log(`Siema nazywam się ${name} i mam ${age} lata`);



function greet(age, name){
    console.log(`Cześć internauto, mam na imię ${name} i mam ${age} lat(a)`);
  
      
}

greet(age, name)


function createContent(querySelectorContent, content){
const element = document.querySelector(querySelectorContent);
element.innerHTML = content;
}

createContent('.section__about-me--js', 'coś o tej ferajnie')


function calculateMultiplication(number, number1){
    const multiplication = number * number1;
    calculate = multiplication;
    console.log(multiplication);
}

calculateMultiplication(3,2);

