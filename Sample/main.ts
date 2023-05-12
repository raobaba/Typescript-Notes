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
//************************************************************* */

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
//*************************************************************** */
//assigning union('something'|'something')

// enum RESULT_TYPES {
//   AS_NUMBER = 'as-number',
//   AS_TEXT = 'as-text'
// }

// const combine=(number1:number|string,number2:number|string,resultType:RESULT_TYPES)=>{
//     let result;
//      if(typeof number1 === 'number' && typeof number2 === 'number'){
//       result = number1+number2;
//      }else{
//       result = number1.toString()+number2.toString();
//      }
//      if(resultType===RESULT_TYPES.AS_NUMBER){
//         return +result;
//      }else{
//       return result.toString();
//      }
// }
// const result = combine(1,2,RESULT_TYPES.AS_TEXT);
// console.log(result);
// console.log(combine(1,2,RESULT_TYPES.AS_NUMBER));

//*************************************************************** */

// function add(number1:number,number2:number):number {
//   return number1 + number2;
// }

// function printResult(value:number):void{
//   console.log('Result ', value)
// }
// let combineValue:(a:number,b:number)=>number;
// combineValue = add;
// console.log(combineValue(1,2));

//************************************************************* */
//Uknown and never type in typescript
//no problem assigning like this but
// let userInput:any
// let userName:string
// userInput = 4;
// userInput = "Rajan";
// userName=userInput;

// let userInput:unknown
// let userName:string
// userInput = 4;
// userInput = "Rajan";
// //so write like this here
// if(typeof userInput==='string'){
//   userName=userInput;
// }


// function generateError(message:string,code:number):void{
//    throw {message,code};
// }
// let result = generateError('invalid page',500);
// console.log(result);
// console.log('watch is running')


class Department {
    protected employees:string[]=[];
    protected reports:string[]=[];
    constructor(private readonly id:string,public name:string){

    }
    get mostRecentReport(){
        if(!this.reports){
            throw new Error("No Reports Found");
        }
        return this.reports[this.reports.length-1];
    }

    set mostRecentReport(value:string){
         if(!value){
            throw new Error("Report cannot be inserted");
         }
         this.addEmployee(value);
    }

    addEmployee(employee:string){
        this.employees.push(employee);
    }
    printEmployee(){
        console.log(this.employees.length);
        console.log(this.employees)
    }
    describe(this:Department){
        console.log(`department with id ${this.id} ` ,this.name);
    }
}
let department = new Department('dI','Accounting');
// department.describe();
// console.log(department);

// let departmentCopy = {name:'rajan',describe:department.describe};
// console.log(departmentCopy);
// departmentCopy.describe();

// department.addEmployee('rajan');
// department.addEmployee("shashi");
// department.printEmployee();
// department.describe();

class ItDepartment extends Department{
     constructor(id:string,admins:string[]){
        super(id,'department');
     }
}

class AccountingDepartment extends Department{
    constructor(id:string,public report:string[]){
        super(id,'Accounting');
    }
    addEmployee(employee: string) {
        if(employee==='rajan'){
            return;
        }
        this.employees.push(employee)
    }
    addReport(report:string){
        this.reports.push(report);
    }
    printReport(){
        console.log(this.reports);
    }
}


let it = new ItDepartment('di',['rajan']);
it.addEmployee('rajan');
console.log(it);

let accounting = new AccountingDepartment('ID',[]);
accounting.addEmployee('shashi');
accounting.addReport("something wrong");
accounting.addReport("something went wrong");

console.log(accounting.mostRecentReport);
accounting.mostRecentReport = 'Recent Report'
accounting.printReport();


