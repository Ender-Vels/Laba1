/*Створіть файл script.js. Підключіть його в нижню частину файлу index.html.
створіть три діалогових вікна з alert(), prompt(), confirm().*/

alert();
prompt('Hello');
confirm();


/*Запитайте у користувача його вік. Виведіть фразу “Ваш вік ____” */

let Age=+prompt('Скільки вам років?');

document.write(`Ваш вік ${Age} </br>`);

/*Ввести кількість купленого товару, ціну за одиницю. Виведіть суму
покупки*/
let Sum=0;
let Produt=(nameProduct, Amount, Price,)=>
{
Sum=Amount*Price;
document.write(`Name:${nameProduct}\n Amount: ${Amount}\n Price: ${Price}\n Sum:${Sum}`);
};


Produt('Candy',21,2.2);


//Введіть число – визначте чи воно від’ємне.
let Num=+prompt('Write Num:',0)

if(typeof Num=='number')
{
if(Num>=0)
{
alert('+')
}
else
{
    alert('-');
}
}
else
{
    alert('Its not number');
}



//Введіть номер дня тижня, виведіть його назву.

let Week=["Понеділок","Вівторок","Середа","Четвер","Пятниця","Субота","Неділя"];

let NumWeek=+prompt('Write num of Week:',0);
if(typeof NumWeek=='number'&& NumWeek>0)
{
    console.log(Week[NumWeek-1]);
}
else
{
    console.log('Wrong type');
}


//Виведіть таблицю множення числа 6.

for(let i=1;i<=10;i++)
{
    console.log(`6*${i}=${6*i}\n`);
};


/*Задайте одномірний масив n=5. Виведіть квадрат третього числа, суму
першого і останнього елемента суму квадратів від’ємних елементів. */

let massive=[-2,1,4,5,-5];

let QuadSum=((massive[0]*massive[0])+(massive[4]*massive[4]))
console.log('Qued:'+massive[2]*massive[2]);
console.log('Sum:'+massive[0]+massive[4]);
console.log(QuadSum);



/* . Створіть об’єкт машина. Поля: ім’я власника, назва моделі, об’єм двигуна. Створіть масив з кількома об’єктами, виведіть машину з мінімальним
об’ємом двигуна. */


let Car={
    NamePerson:'Ruslan',
    Model:'CX-9',
    Volume: 5,
};


let Cars=[
{
    NamePerson:'Ruslan',
    Model:'CX-9',
    Volume: 5,
},
{
    NamePerson:'Vadim',
    Model:'Subaru',
    Volume: 4,
},

{
    NamePerson:'Diana',
    Model:'Camry',
    Volume: 7,
}

];

for(let i=0; i<Cars.length; i++)
{
    console.log(Math.min(Cars.Volume[i]));
}

/*Введіть 4 числа, Знайти max{min(a, b), min(c, d) */

let First=+prompt('First:');
let Second=+prompt('Second:');
let Third=+prompt('Third:');
let Fourth=+prompt('Fourth:');


let min=(num1,num2)=>
{
    return Math.min(num1,num2);
}

let max=(n,b)=>
{
    console.log(Math.max(n,b));
};


max(min(First,Second),min(Third,Fourth));3




let word=prompt('Write word:');

if(typeof word=='string')
{
    console.log(word.length);
    let mass=word.split(' ');
    mass.reverse();
    mass.join('');
}
else
{
    console.log('Wrong Type');
}
