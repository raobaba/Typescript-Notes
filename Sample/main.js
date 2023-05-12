"use strict";
// var input1:Element | null = document.querySelector('#number1') as HTMLInputElement;
// var input2:Element | null = document.querySelector('#number2') as HTMLIFrameElement;
// var button = document.querySelector('#button');
// const addition = (number1:number,number2:number)=>{
//     return number1+number2
// }
// button?.addEventListener('click',()=> {
//    console.log(add(+input1.value,+input2.value));
// });
let emp = {
    name: 'rajan',
    roles: ['admin'],
    startDate: new Date()
};
function getAdd(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInfo(emp) {
    console.log('name: ', emp.name);
    if ('roles' in emp) {
        console.log('roles', +emp.roles);
    }
    if ('startDate' in emp) {
        console.log('start Date', +emp.startDate);
    }
}
printEmployeeInfo(emp);
class Car {
    driver() {
        console.log('Car driving...');
    }
}
class Truck {
    driver() {
        console.log('Truck driving...');
    }
    loadingCargo(amount) {
        console.log('Loading Cargo', +amount);
    }
}
function useVehicle(veh) {
    veh.driver();
    if ('loadingCargo' in veh) {
        veh.loadingCargo(49);
    }
}
let v1 = new Car();
let v2 = new Truck();
useVehicle(v1);
useVehicle(v2);
function checkSpeedOfAnimal(animal) {
    let speed = 0;
    switch (animal.type) {
        case 'bird':
            speed: animal.flyingSpeed;
            break;
        case 'snake':
            speed: animal.crowlingSpeed;
            break;
        case 'horse':
            speed: animal.runningSpeed;
            break;
    }
    console.log('speed of animal is', speed);
}
const snake = {
    crowlingSpeed: 30,
    type: 'snake'
};
const bird = {
    flyingSpeed: 50,
    type: 'bird'
};
checkSpeedOfAnimal(bird);
checkSpeedOfAnimal(snake);
