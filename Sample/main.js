// var input1:Element | null = document.querySelector('#number1') as HTMLInputElement;
// var input2:Element | null = document.querySelector('#number2') as HTMLIFrameElement;
// var button = document.querySelector('#button');
// const addition = (number1:number,number2:number)=>{
//     return number1+number2
// }
// button?.addEventListener('click',()=> {
//    console.log(add(+input1.value,+input2.value));
// });
var add = function (number1, number2) {
    return number1 + number2;
};
//It is ok if you are assigning like this
var n1;
n1 = 10;
n1 = 'rajan';
//but not ok if you are assigning like this
var n2 = 10;
//n2 = 'str'
var result = add(n1, n2);
console.log(result);
