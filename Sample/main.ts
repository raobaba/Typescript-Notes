// var input1:Element | null = document.querySelector('#number1') as HTMLInputElement;
// var input2:Element | null = document.querySelector('#number2') as HTMLIFrameElement;
// var button = document.querySelector('#button');
// const add = (number1:number,number2:number)=>{
//     return number1+number2
// }
// button?.addEventListener('click',()=> {
//    console.log(add(+input1.value,+input2.value));
// });

const add = (number1:number,number2:number)=>{
    return number1+number2
}

const n1=1.3;
const n2=4;
const result = add(n1,n2);
console.log(result);
