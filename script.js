"use strict"

/*
№1
Напишите функцию, которая принимает массив и переносит все 0 в конец,
не изменяя порядок остальных элементов массива.

Например:
moveZeros([false,1,0,1,2,0,1,3,"a"]) --> [false,1,1,2,1,3,"a",0,0]
*/ 

/*
    Первое решение - изменяет сам входной массив
*/

function moveZerosArr(arr){
    let count = 0;
    for(let i = 0; i < arr.length; ++i){
        if(arr[i] === 0){
           arr.splice(i, 1);
           count++;
           i--; // нужно на случай нескольких нулей подряд
        }
    }
    for(let i = 0; i < count; ++i){
        arr.push(0);
    }
    return arr;
}


/*
    Второе решение - подменяет входной массив
*/
function moveZeros(arr){
    let filteredArr = arr.filter(index => index !== 0);
    let zeroAmount = arr.length - filteredArr.length;
    return filteredArr.concat(new Array(zeroAmount).fill(0));
    /*
        или вот так

        for(let i = 0; i < zeroAmount; ++i){
            filteredArr.push(0);
        }
        return filteredArr;
    */
}
//alert(moveZeros([false,1,0,1,0,0,0,2,0,0,5,6,9,true,1,3,"a"]));
/*
№3

Вы, наверное, знаете систему «лайков» по Facebook и другим страницам. 
Люди могут "лайкать" сообщения в блогах,изображения или другие предметы. 
Мы хотим создать текст, который должен отображаться рядом с таким элементом.
Реализуйте функцию likes :: [String] -> String, которая 
должна принимать входной массив, содержащий имена людей,которым нравится элемент. 
Он должен возвращать отображаемый текст, как показано в примерах:

Например:
likes([]) --> 'no one likes this'
likes(['Peter']) --> 'Peter likes this'
likes(['Jacob', 'Alex']) --> 'Jacob and Alex like this'
likes(['Max', 'John', 'Mark']) --> 'Max, John and Mark like this')
likes(['Alex', 'Jacob', 'Mark', 'Max']) --> 'Alex, Jacob and 2 others like this'
*/

function likes(arr){
    if (arr.length == 0) return 'no one likes this';
    else if(arr.length == 1) return `${arr[0]} likes this`;
    else if(arr.length == 2) return `${arr[0]} and ${arr[1]} like this`;
    else if(arr.length == 3) return `${arr[0]}, ${arr[1]} and ${arr[2]} like this`;
    else return `${arr[0]}, ${arr[1]} and ${arr.length - 2} others like this`;
}

/*
№4

Что такое анаграмма?

Два слова являются анаграммами между собой,если
они оба содержат одинаковые буквы. 

Например: 'abba' & 'baab' == true

Напишите функцию, которая находит все анаграммы слова из списка. 
В качестве параметра даны слово и массив слов. 
Функция должна возвращать массив всех анаграмм или пустой массив,
если анаграмм не обнаружено.

*/ 

function findAnagramms(word, arr){
    function sortWord(str){
        return str.toLowerCase().split('').sort().join('');
    }
    let arrOfAnogramms = [];
    let sortedWord = sortWord(word);
    
    for (let key of arr) {
        let sortedKey = sortWord(key);
        if(sortedKey == sortedWord){
            arrOfAnogramms.push(key);
        }
    }

    return arrOfAnogramms;
}

//alert(findAnagramms('abba', ['aabb', 'abcd', 'bbaa', 'dada']));


/*
№5
Представим автобус, забирающий и высаживающий людей на каждой остановке. 
Дан массив массивов, первый элемент которых равен числу пассажиров,
вошедших в автобус на остановке, а второй - числу пассажиров,
вышедших на остановке.

Ваша Задача написать функцию, которая возвращает число людей,
оставшихся в автобусе после последней остановки (массива).
Хоть это и последняя остановка,
в автобусе все еще находятся люди (они, наверное, уснули :D ).

Помните, что число оставшихся людей в автобусе всегда >= 0
Значение второго числа первого элемента массива = 0, 
потому что автобус пустой на первой остановке.

Например:
busStops([[3, 0], [9, 1], [4, 10], [12, 2], [6, 1], [7, 10]]) --> 17
*/

function busStop(arr){
    let passengerIn = 0;
    let passengerOut = 0;
    for(let stop of arr){
        passengerIn += stop[0];
        passengerOut += stop[1];
    }
    return passengerIn - passengerOut;
}

//alert(busStop([[3, 0], [9, 1], [4, 10], [12, 2], [6, 1], [7, 10]]))
/*
№6

Даны две строки, которые содержат только буквы от a - z.
Ваша задача написать функцию, которая возвращает
новую отсортированную (по порядку) строку,
которая содержит буквы двух строк, повторяющихся только один раз.

Например:
longest("xyaabbbccccdefww", "xxxxyyyyabklmopq") --> "abcdefklmopqxy"
*/

function longest(str1, str2){
    let set = new Set(Array.from(str1).concat(Array.from(str2)));
    return Array.from(set).sort().join('');
}
//alert(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq"));

/*
№7
Ваша задача написать функцию, которая принимает 
в качестве параметра целое число и возводит в квадрат каждую цифру числа. 
Результат также необходимо вернуть в виде целого числа.

Например:
squareDigits(9119) --> 811181    
*/

function squareDigits(num){
    let result = '';
    for(let i of String(num)){
        result += +i * +i;
    }
    return result;
}
//alert(squareDigits(578009));

/*
№8
Для того, чтобы обеспечить безопасность данных при оплате онлайн,
нам необходимо замаскировать все цифры банковского счета, кроме последних четырех. 

Ваша задача написать функцию, которая принимает в качестве 
параметра строку, состоящую из цифр, заменяет все элементы на  '#', 
кроме последних четырех и возвращает ее.

Например:
maskify("4556364607935616") --> "############5616"
*/

function maskify(str){
    let firsrPart = new Array(str.length - 4).fill('#').join('');
    let secondPart = str.slice(-4);
    return firsrPart + secondPart;
}
//alert(maskify("4556364607935616"));

/*
№9
Дан массив слов, необходимо определить, 
составлены ли все слова из одних и тех же символов.
 
Например:
["кот", "ток", "кто"] --> true
["кот", "тк", "кТо"] --> false
*/

function checkArrElemOnUniqueLetters(arr){
    let sortedElemArr = arr.map(item => item
                                        .toLowerCase()
                                        .split('')
                                        .sort()
                                        .join(''));
    return (new Set(sortedElemArr).size == 1) ? true : false;
}

//alert(checkArrElemOnUniqueLetters(["кот", "ток", "кто"]));

/*
№11

Напишите функцию, которая находит наиболее часто используемый элемент массива.

Например:
const array=[7, 'z', 'z', 'z', 3, 7, 'z', 7, 'z', 3, 5, 7]; --> "z"
*/

function oftenElemOfArr(arr){
    let countOfElem = new Map();
    for(let elem of arr){
        if(countOfElem.has(elem)){
            countOfElem.set(elem, 1 + countOfElem.get(elem));
        } else{
            countOfElem.set(elem, 1)
        }    
    }
    let arrOfKeys = Array.from(countOfElem.values());
    let mostOftenCount = Math.max.apply(null, arrOfKeys);
    for(let key of countOfElem.keys()){
        if(countOfElem.get(key) == mostOftenCount){
            return key;
        }
    }
}
/*let array = [7, 'z', 'z', 'z', 3, 7, 'z', 7, 'z', 3, 5, 7];
alert(oftenElemOfArr(array));*/


/*
№13
Напишите функцию с двумя параметрами, которая создаёт массив элементов, 
представляющих собой сумму соответствующих элементов заданных массивов.

Например:
const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6];

func(array1,array2) // [5,7,9,4,5]
*/

function sumSameArrElements(arr1, arr2){
    function worker(maxArr, minArr){
        let result = [];
        for(let i = 0; i < minArr.length; ++i){
            result[i] = maxArr[i] + minArr[i];
        }
        return result.concat(maxArr.splice(minArr.length, (maxArr.length - minArr.length)));
    }
    if(arr1.length > arr2.length){
       return worker(arr1, arr2);
    } else{
        return worker(arr2, arr1);
    }
    
}

//alert(sumSameArrElements( [1, 2, 3, 4, 5], [4, 5, 6] ))

/*
№14
Напишите функцию `removeDuplicates(arr)`, которая возвращает массив,
в котором удалены повторяющиеся элементы из массива arr.

Например:
let arr = ["php", "php", "css", "css",
  "script", "script", "html", "html", "java"
];

removeDuplicates(arr); --> ["php","css","script","html","java"]
*/

function removeDuplicates(arr){
    return Array.from(new Set(arr));
}
//alert(removeDuplicates(["php", "php", "css", "css","script", "script", "html", "html", "java"]));

/*
№15
Напишите функцию colonOdd(num), которая принимает число num в 
качестве аргумента и вставляет двоеточие (:) между двумя нечетными числами. 
Например, если вводится число 55639217, то на выходе должно быть 5:563:921:7
*/
function colonOdd(num){
    let str = String(num);
    let resultArr = [str[0]];
    for(let i = 1; i < str.length; ++i){
        function checkOdd(num){
            return (num % 2) == 1 ? true : false;
        }
        if(checkOdd(str[i-1]) && (checkOdd([str[i]]))){
            resultArr.push(':', str[i]);
        } else{
            resultArr.push(str[i]);
        }
    }
    return resultArr.join('');
}

//alert(colonOdd(3355998999999))

/*
№16

Напишите функцию `copyArr(arr)`, которая копирует массив, не изменяя оригинал.

Например:
const vegetables = ['Капуста', 'Репа', 'Редиска'];
*/

function copyArr(arr){
    return arr.slice();
}

/*
№17

Создайте метод объекта `String endsWith()`, который сравнивает 
подстроку str1 с окончанием исходной строки str и определяет, 
заканчивается ли строка символами подстроки.

Например:
const str = "Каждый охотник желает знать"; 
const str1 = "скрипт";
const str2 = "знать";

String.prototype.endsWith = function(substring) {};

str.endsWith(str1)) -->  false
str.endsWith(str2)) -->  true
*/

String.prototype.endsWith = function(str){
    if(this.slice(-str.length) == str) return true;
    else return false;
}
//const str = "Каждый охотник желает знать"; 
//const str1 = " желает знать";
//const str2 = "знать";
//alert(str.endsWith(str1));
//alert(str.endsWith(str2));

/*
№18

Напишите функцию `comparison(str1, str2)`, которая сравнивает
строки без учёта регистра символов.

Например:
comparison('string', 'StRiNg') -->  true
comparison('string', 'Redev') -->  false
*/

function comparison(str1, str2){
    return str1.toLowerCase() == str2.toLowerCase();
}
//alert(comparison('STRING', 'StRiNg'));
//alert(comparison('redddev', 'Redev'));

/*
№19
Напишите функцию `strip(str)`, которая удаляет все лишние пробелы из строки str.

Например:
const str = "    Pasha is a good      boy     ";
strip(str) --> "Pasha is a good boy"
*/

function strip(str){
    return str.replace(/\s+/g, ' ')
              .replace(/^\s/, '')
              .replace(/\s$/, '');
}

//alert(strip('    Max is a good      boy     '))
/*
№20

Напишите функцию `cutString(str, n)`, которая удаляет лишние 
слова из строки str, оставив в ней n слов.

Например:
const str = "Сила тяжести приложена к центру масс тела";`
cutString(str, 5) --> "Сила тяжести приложена к центру"
*/

function cutString(str, n){
    return str.split(' ').slice(0, n).join(' ');
}

//const str = "Сила тяжести приложена к центру масс тела";
//alert(cutString(str, 5));

/*
№21

Напишите функцию `alphabetize(str)`, которая возвращает строку,
отсортировав её символы в алфавитном порядке.

Например:
alphabetize("redev") --> "deerv"
*/

function alphabetize(str){
    return str.split('').sort().join('');
}
//alert(alphabetize("redev"));

/*
№22

Напишите функцию `uniqueLetters(str)`, которая возвращает строку,
оставив в ней только уникальные символы, т.е. встречающиеся в строке один раз.

Например:
uniqueLetters('anaconda'); --> 'ancod'
uniqueLetters('redev'); --> 'redv'
*/

function uniqueLetters(str){
    return Array.from(new Set(str)).join('');
}

//alert(uniqueLetters('redev'));

/*
№23

Напишите функцию `removeDuplicate(str)`, которая возвращает строку,
очищенную от слов-дупликатов, т.е. 
каждое слово должно повторяться не более одного раза.

const str = "вишня, груша, слива, груша";

Например:
removeDuplicate(str) --> "вишня, груша, слива"
*/

function removeDuplicate(str){
    let setOfWords = new Set(str.split(', '));
    return Array.from(setOfWords).join(', ');
}

//alert(removeDuplicate("вишня, груша, слива, груша, груша, вишня, вишня, орех, орех"))

/*
№25

Напишите функцию `startsWith()`, которая определяет, начинается ли строка 
символами другой строки, возвращая, соотвественно, true или false.

let str = 'abc def ghi jkl mno pqr stu';

Например:
str.startsWith('abc') --> 
*/
String.prototype.startsWith = function(substr){
    return this.slice(0, substr.length) == substr ? true : false;
}

/*let str = 'abc def ghi jkl mno pqr stu';
alert(str.startsWith('abc def hi '));*/


/*
№26

Напишите функцию capitalizeFirstLetter(str), 
которая преобразовывает первый символ строки в верхний регистр.
*/

function capitalizeFirstLetter(str){
    return str.split('')[0].toUpperCase() + str.slice(1);
}

//alert(capitalizeFirstLetter('kjshffksjd'))

/*
№27

Напишите функцию `isUpperCase(str, character)`, которая определяет,
в каком регистре написан символ строки в указанной позиции.
Если он написан в верхнем регистре - возвращать true, если в нижнем – false.

Например:
isUpperCase('tasks JavaScript', 6); --> true
*/

function isUpperCase(str, character){
    let elem = str.split('')[character];
    return (elem == elem.toUpperCase()) ? true : false;
}

//alert(isUpperCase('tasks JavaScript', 10));