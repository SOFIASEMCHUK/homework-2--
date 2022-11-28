const firstOperand = prompt('Ввведіть перше число');
const secondOperand = prompt('Ввведіть друге число');

let result = `${Number(firstOperand) + Number(secondOperand)}`;
let result2 = `${Number(firstOperand) - Number(secondOperand)}`;
let result3 = `${Number(firstOperand) * Number(secondOperand)}`;
let result4 = `${Number(firstOperand) / Number(secondOperand)}`;

alert(`${firstOperand} + ${secondOperand} = ${result} \n${firstOperand} - ${secondOperand} = ${result2} \n${firstOperand} * ${secondOperand} = ${result3} \n${firstOperand} / ${secondOperand} = ${result4}`);