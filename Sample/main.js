// var input1:Element | null = document.querySelector('#number1') as HTMLInputElement;
// var input2:Element | null = document.querySelector('#number2') as HTMLIFrameElement;
// var button = document.querySelector('#button');
// const addition = (number1:number,number2:number)=>{
//     return number1+number2
// }
// button?.addEventListener('click',()=> {
//    console.log(add(+input1.value,+input2.value));
// });
// const add = (number1:number,number2:number)=>{
//     return number1+number2
// }
// //It is ok if you are assigning like this
// //Variable 'n1' implicitly has an 'any' type,
// // but a better type may be inferred from usage.ts(7043)
// let n1;
// n1 = 10;
// n1 = 'rajan';
// //but not ok if you are assigning like this
// let n2 = 10;
// //n2 = 'str'
// let result = add(n1,n2);
// console.log(result);
// enum ROLES {
//   ADMIN,
//   AUTHOR,
//   GUEST
// }
// const person:{name:string,age:number,hobbies:string[],role:number}={
//     name:"Rajan Kumar",
//     age:26,
//     hobbies:['singing','acting'],
//     role:ROLES.ADMIN
// }
// // console.log(person.name);
// if(person.role===ROLES.ADMIN){
//     console.log('User is Admin');
// }
// let favorite:any[];//or Either you can leave empty without any[]
// favorite = ['wondering',1];
// for(let hobby of person.hobbies){
//     console.log(hobby.toLocaleUpperCase());
// }
//assigning any[]
// let array:any[]=[];
// array.push('rajan');
// array.push(1)
// console.log(array);
//assigning union('something'|'something')
var RESULT_TYPES;
(function (RESULT_TYPES) {
    RESULT_TYPES["AS_NUMBER"] = "as-number";
    RESULT_TYPES["AS_TEXT"] = "as-text";
})(RESULT_TYPES || (RESULT_TYPES = {}));
var combine = function (number1, number2, resultType) {
    var result;
    if (typeof number1 === 'number' && typeof number2 === 'number') {
        result = number1 + number2;
    }
    else {
        result = number1.toString() + number2.toString();
    }
    if (resultType === RESULT_TYPES.AS_NUMBER) {
        return +result;
    }
    else {
        return result.toString();
    }
};
var result = combine(1, 2, RESULT_TYPES.AS_TEXT);
console.log(result);
console.log(combine(1, 2, RESULT_TYPES.AS_NUMBER));
