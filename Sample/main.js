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
function getCountAndDescribe(element) {
    let text = 'Got No Element';
    if (element.length === 1) {
        text = 'Got 1 Element';
    }
    if (element.length > 1) {
        text = `Got ${element.length} Elements`;
    }
    return [element, text];
}
console.log(getCountAndDescribe(['rajan', 'dhanjee']));
function extractFromObject(obj, key) {
    return obj[key];
}
extractFromObject({ name: 'rajan', age: 26 }, 'age');
class dataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItem() {
        return [...this.data];
    }
}
const stringStorage = new dataStorage();
stringStorage.addItem("rajan");
stringStorage.addItem("shashi");
console.log(stringStorage.getItem());
stringStorage.removeItem('shashi');
console.log(stringStorage.getItem());
