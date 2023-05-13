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


// class Department {
//     protected employees:string[]=[];
//     protected reports:string[]=[];
//     static financialYear = '2020'
//     constructor(private readonly id:string,public name:string){

//     }
//     describe(){
//         console.log(`Accounting department with id ${this.id}`)
//     }
//     get mostRecentReport(){
//         if(!this.reports){
//             throw new Error("No Reports Found");
//         }
//         return this.reports[this.reports.length-1];
//     }

//     set mostRecentReport(value:string){
//          if(!value){
//             throw new Error("Report cannot be inserted");
//          }
//          this.addEmployee(value);
//     }

//     addEmployee(employee:string){
//         this.employees.push(employee);
//     }
//     static createEmployee(name:string){
//         return {name:name};
//     }
//     printEmployee(){
//         console.log(this.employees.length);
//         console.log(this.employees)
//     }
//     // describe(this:Department){
//     //     console.log(`department with id ${this.id} ` ,this.name);
//     // }
// }
//let department = new Department('dI','Accounting');
// department.describe();
// console.log(department);

// let departmentCopy = {name:'rajan',describe:department.describe};
// console.log(departmentCopy);
// departmentCopy.describe();

// department.addEmployee('rajan');
// department.addEmployee("shashi");
// department.printEmployee();
// department.describe();

// class ItDepartment extends Department{
//      constructor(id:string,admins:string[]){
//         super(id,'department');
//      }
// }

// class AccountingDepartment extends Department{
//     constructor(id:string,public report:string[]){
//         super(id,'Accounting');
//     }
//     addEmployee(employee: string) {
//         if(employee==='rajan'){
//             return;
//         }
//         this.employees.push(employee)
//     }
//     addReport(report:string){
//         this.reports.push(report);
//     }
//     printReport(){
//         console.log(this.reports);
//     }
// }


// let it = new ItDepartment('di',['rajan']);
// it.addEmployee('rajan');
// console.log(it);
// console.log(Department.createEmployee('Rajan'),Department.financialYear)
// let accounting = new AccountingDepartment('ID',[]);
// accounting.addEmployee('shashi');
// accounting.addReport("something wrong");
// accounting.addReport("something went wrong");

// console.log(accounting.mostRecentReport);
// accounting.mostRecentReport = 'Recent Report'
// accounting.printReport();
// accounting.describe()

// interface person{
//     name:string,
//     age:number,
//     hello(phrase:string):void
// }

// let rajanPerson:person={
//     name:'Rajan',
//     age:24,
//     hello(phrase:string){
//        console.log(`The age of ${this.name} is ${this.age}`);
//     }
// }

// let dhanjeePerson:person={
//     name:'dhanjee',
//     age:24,
//     hello(phrase:string){
//         console.log(`The age of ${this.name} is ${this.age}`);
//     }
// }


//type addFun = (a:number,b:number)=>number
// interface addFun {
//     (a:number,b:number):number
// }
// var add:addFun;
// add = (x:number,y:number)=>{
//     return x+y;
// }

// interface IPerson{  //type IPerson={}
//     name:string,
//     age:number,
//     hello(phrase:string):void
//     greet():void//need here for dhanjee
// }
// class Person implements IPerson {
//      constructor(public name:string,public age:number){
//      }
//      hello(phrase:string){
//         console.log(phrase+this.name);
//      }
//      greet(){
//         console.log("Hello Everyone");
//      }
// }
// let rajan:Person = new Person('rajan',20);
// let dhanjee:IPerson = new Person('dhanjee',30);

// rajan.hello("Hello ");
// rajan.greet()
// dhanjee.greet();
// dhanjee.hello("Hello ");



// type admin= {
//     name:string,
//     roles:string[]
// }
// type employee={
//     name:string,
//     startDate:Date
// }

// // type superEmployee = admin & employee;
// interface superEmployee extends admin,employee {}
// let emp:superEmployee={
//    name:'rajan',
//    roles:['admin'],
//    startDate:new Date()
// }

// type combinable = string | number;
// type numeric = string | boolean;

// type universal = numeric|combinable;

// function getAdd(a:combinable,b:combinable){
//     if(typeof a === 'string' || typeof b === 'string'){
//         return a.toString()+b.toString();
//     }
//     return a+b;
// }

// type unknownEmployee = admin | employee;

// function printEmployeeInfo(emp:unknownEmployee){
//      console.log('name: ',emp.name);
//      if('roles' in emp){
//         console.log('roles', + emp.roles)
//      }
//      if('startDate' in emp){
//         console.log('start Date', + emp.startDate)
//      }
// }
// printEmployeeInfo(emp)

// class Car{
//     driver(){
//        console.log('Car driving...');
//     }
// }

// class Truck{
//     driver(){
//         console.log('Truck driving...');
//     }
//     loadingCargo(amount:number){
//         console.log('Loading Cargo',+ amount);
//     }
// }

// type vehicle = Car | Truck;

// function useVehicle(veh:vehicle){
//      veh.driver();
//      if('loadingCargo' in veh){
//         veh.loadingCargo(49)
//      }
// }

// let v1 = new Car();
// let v2 = new Truck();
// useVehicle(v1);
// useVehicle(v2);

// interface Bird {
//     type:'bird',
//     flyingSpeed:number
// }
// interface Snake {
//     type:'snake',
//     crowlingSpeed:number
// }
// interface Horse {
//     type:'horse',
//     runningSpeed:number
// }

// type Animal = Bird | Snake | Horse;

// function checkSpeedOfAnimal(animal:Animal){
//      let speed = 0;
//      switch(animal.type){
//         case 'bird':
//             speed:animal.flyingSpeed;
//             break;
//         case 'snake':
//             speed:animal.crowlingSpeed;
//             break;
//         case 'horse':
//             speed:animal.runningSpeed;
//             break;
//      }
//      console.log('speed of animal is', speed);
// }

// const snake:Snake = {
//      crowlingSpeed:30,
//      type:'snake'
// }
// const bird:Bird={
//     flyingSpeed:50,
//     type:'bird'
// }
// checkSpeedOfAnimal(bird);
// checkSpeedOfAnimal(snake);

interface length {
    length:number
}

function getCountAndDescribe<T extends length>(element:T){
    let text = 'Got No Element';
    if(element.length===1){
        text = 'Got 1 Element';
    }
    if(element.length>1){
        text = `Got ${element.length} Elements`;
    }
    return [element,text];
}
console.log(getCountAndDescribe(['rajan','dhanjee']))

function extractFromObject<T extends object, U extends keyof T>(obj:T,key:U){
     return obj[key];
}
extractFromObject({name:'rajan',age:26},'age');


class dataStorage {
    public data:Array<string> = [];
    addItem(item:string){
       this.data.push(item)
    }
    removeItem(item:string){
        this.data.splice(this.data.indexOf(item),1);
    }
    getItem(){
        return [...this.data];
    }
}
const stringStorage = new dataStorage();
stringStorage.addItem("rajan");
stringStorage.addItem("shashi");
console.log(stringStorage.getItem());
stringStorage.removeItem('shashi');
console.log(stringStorage.getItem());

