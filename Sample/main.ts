// var input1:Element | null = document.querySelector('#number1') as HTMLInputElement;
// var input2:Element | null = document.querySelector('#number2') as HTMLIFrameElement;
// var button = document.querySelector('#button');
// const addition = (number1:number,number2:number)=>{
//     return number1+number2
// }
// button?.addEventListener('click',()=> {
//    console.log(add(+input1.value,+input2.value));
// });

const add = (number1:number,number2:number)=>{
    return number1+number2
}
//It is ok if you are assigning like this
//Variable 'n1' implicitly has an 'any' type,
// but a better type may be inferred from usage.ts(7043)
let n1;
n1 = 10;
n1 = 'rajan';

//but not ok if you are assigning like this
let n2 = 10;
//n2 = 'str'
let result = add(n1,n2);
console.log(result);
