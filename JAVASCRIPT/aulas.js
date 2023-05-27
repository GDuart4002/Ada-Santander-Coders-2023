//primeira aula
console.log('Hello, World!!!')

//segunda aula variáveis
let idade = 19
console.log(idade)

//terceira aula
let numero1 = 19
let numero2 = 19
const soma = numero1 + numero2
console.log('Soma = ', soma)

function funcao(array) {
    let acc = 0;
  
    for (let elemento of array) {
      acc += elemento;
    }
  
    return (acc / array.length);
  }
  
  console.log(funcao([4, 6, 4, 2]));