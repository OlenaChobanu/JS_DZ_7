// 1. Создать функцию с замыканием (пример каунтера), из которой вернуть массив чисел [1,2,3,4,5,6,7];
// 2. Написать рекурсивную функцию, которая будет принимать как аргумент массив и индекс
// (индекс не должен быть больше, чем кол-во элементов массива, проверки пока упускаем)
// 3. Функция должна считать сумму чисел элементов массива, началом будет индекс переданный как аргумент в данную функцию.
// То есть, если мы передали индекс 4 то мы должны рекурсивно сложить 5 +4+3+2+1

const arrayCalculate = () => {
  const arr = [];


  function getData(massage) {
    return prompt(massage);
  }
  
  function showPopup(massage) {
    return alert(massage);
  }
  
  function counter(){
    let count = 0;
    return function(){
      arr[count] = count+1;
      count++;
      return arr;
    }
  }
  
  function arrayReturn(arrayLength) {
    let counter1 = counter();
    for(let i = 0; i < arrayLength; i++) {
      counter1();
    }
  }
  
  const arrayLength = +getData('Enter array length:');
  
  arrayReturn(arrayLength);
  
  const index = +getData('Enter index (less than an array length):');
  
  const isIndexValid = index < arrayLength;

  if(!isIndexValid) {
    showPopup('Please reload the page and enter valid index\n(index should be less than an array length)');
    return;
  }

  let sum = 0;
  let i = 0; 

  function rec(arr){
    sum += arr[i];
    i++;
    if(i === index + 1) return;
    rec(arr);
  }
  
  rec(arr);

  console.log(`Array Length: ${arrayLength}`)
  console.log('Array: ', arr);
  console.log(`Index: ${index}`)
  console.log(`Sum: ${sum}`);
}

arrayCalculate();



let sum = 0;
let i = 0; 

function recSum(arr, index){
    sum += arr[i];
    i++;
    if(i === index + 1) return;
    rec(arr, index);
    return sum;
}
recSum([1,2,3,4,5,6,7],5);
console.log('sum: ', sum)
