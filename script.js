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