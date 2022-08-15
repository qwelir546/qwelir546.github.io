"use strict"

let sum = 0, a, b, c, d, e;
console.log(sum)
let tipe = prompt("Какого типа сайт вам нужен?    (укажите букву)    [1] информационный сайт    [2] корпоративный сайт    [3] интернет-магазин    [4] сайт-визитка   [5] персональный проект");
console.log(tipe);
if(tipe == 1 || 2){
    sum += 3000;
}
else if(tipe == 3 || 5){
    sum += 5000;
}
else {
    sum += 2000;
}
console.log(sum)

let design = prompt("В каком дизайне сайт вы хотитет?    (укажите букву)    [1] уникальный    [2] шаблонный");
console.log(design);
if(design == 1){
    sum += 4000;
}
else if(design == 2){
    sum += 3000;
}
console.log(sum)

let adapt = prompt("адаптивность сайта    (укажите букву)    [1] адаптианвый    [2] не адаптивный");
console.log(adapt);
if(design == 1){
    sum += 4000;
}
else if(design == 2){
    sum += 2000;
}
console.log(sum)

confirm("Приблизительная стоимость: " + sum);


/*

let aGe = 20;
let name1 = `Age: ${aGe}`;
console.log(name1);



 
function funk() {
    console.log("Hi, world!");
    console.log(name1);
}
funk();




let book = {
    name: "Web 2.0",
    author: "A. Gusev"
}
console.log(book);




let name = 1000;
name = String(name);
console.log(name);



function Age(aGe, more, less){
    if(aGe >= 18){
        more();
    }
    else{
        less();
    }
}

function more(){
    console.log("https://xvideos.com");
}

function less(){
    console.log("нельзя, маленький  еще)");
}

Age(17, more, less)



let container = {
    name: "Js",
    age: "25.03.1987",
};


console.log(container)
*/