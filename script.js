"use strict";

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

function moveZerosArr(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] === 0) {
            arr.splice(i, 1);
            count++;
            i--; // нужно на случай нескольких нулей подряд
        }
    }
    for (let i = 0; i < count; ++i) {
        arr.push(0);
    }
    return arr;
}


/*
    Второе решение - подменяет входной массив
*/

function moveZeros(arr) {
    let filteredArr = arr.filter(index => index !== 0);
    let zeroAmount = arr.length - filteredArr.length;
    return filteredArr.concat(new Array(zeroAmount).fill(0));
    /*
        for(let i = 0; i < zeroAmount; ++i){
            filteredArr.push(0);
        }
        return filteredArr;
    */
}


/*
№2
Найдите недостающую букву.
Напишите функцию, которая принимает в качестве параметра массив букв,
расположенных по алфавиту и возвращает массив с недостающей буквой.
Длина входного массива не меньше 2 и он содержит буквы только одного регистра.

Например:
findMissingLetter(['a','b','c','d','f']) --> 'e'
*/

function findMissingLetter(arr) {
    let alphabet = 'abcdefjhijklmnopqrstuvwxyz';
    let indexOfFirstLetter = alphabet.indexOf(arr[0]);
    let checkedPartOfAlphabet = alphabet.substr(indexOfFirstLetter, arr.length + 1);
    return Array.from(checkedPartOfAlphabet).find((item) => !arr.includes(item))

}

function findMissingLetter_2(array) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const partOfAlphabet = alphabet.slice(
        alphabet.indexOf(array[0]),
        alphabet.indexOf(array.at(-1)) + 1
    );
    return Array.from(partOfAlphabet).find(item => !array.includes(item)).toString();
}

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

function likes(arr) {
    if (arr.length == 0) return 'no one likes this';
    else if (arr.length == 1) return `${arr[0]} likes this`;
    else if (arr.length == 2) return `${arr[0]} and ${arr[1]} like this`;
    else if (arr.length == 3) return `${arr[0]}, ${arr[1]} and ${arr[2]} like this`;
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

function findAnagramms(word, arr) {
    function sortWord(str) {
        return str.toLowerCase().split('').sort().join('');
    }
    let arrOfAnogramms = [];
    let sortedWord = sortWord(word);

    for (let key of arr) {
        let sortedKey = sortWord(key);
        if (sortedKey == sortedWord) {
            arrOfAnogramms.push(key);
        }
    }

    return arrOfAnogramms;
}

function anagrams_2(word, array) {
    const getCleanWord = (word) => word.toLowerCase().split('').sort().join('');
    return array.filter(item => getCleanWord(item) === getCleanWord(word));
}


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

function busStop(arr) {
    let passengerIn = 0;
    let passengerOut = 0;
    for (let stop of arr) {
        passengerIn += stop[0];
        passengerOut += stop[1];
    }
    return passengerIn - passengerOut;
}

function busStops(arr) {
    return arr.reduce((current, item) => current + item[0] - item[1], 0);
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

function longest(str1, str2) {
    let set = new Set(Array.from(str1).concat(Array.from(str2)));
    return Array.from(set).sort().join('');
}

function longest_2(str1, str2) {
    return Array.from(new Set(str1 + str2)).sort().join('');
}

/*
№7
Ваша задача написать функцию, которая принимает 
в качестве параметра целое число и возводит в квадрат каждую цифру числа. 
Результат также необходимо вернуть в виде целого числа.

Например:
squareDigits(9119) --> 811181    
*/

function squareDigits(num) {
    let result = '';
    for (let i of String(num)) {
        result += +i * +i;
    }
    return result;
}

function squareDigits_2(num) {
    return +[...String(num)].reduce((current, item) =>
        current + Math.pow(+item, 2), '');
}

function squareDigits_3(num) {
    return +(Array.from(String(num)).map(item => Math.pow(+item, 2).toString()).join(''));
}

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

function maskify(str) {
    let firsrPart = new Array(str.length - 4).fill('#').join('');
    let secondPart = str.slice(-4);
    return firsrPart + secondPart;
}

function muskify_2(str) {
    return '#'.repeat(str.length - 4) + str.slice(-4);
}

/*
№9
Дан массив слов, необходимо определить, 
составлены ли все слова из одних и тех же символов.
 
Например:
["кот", "ток", "кто"] --> true
["кот", "тк", "кТо"] --> false
*/

function checkArrElemOnUniqueLetters(arr) {
    let sortedElemArr = arr.map(item => item
        .toLowerCase()
        .split('')
        .sort()
        .join(''));
    return (new Set(sortedElemArr).size == 1) ? true : false;
}

function isSameLettersInWords(array) {
    return new Set(array.map(item => item.toLowerCase().split('').sort().join())).size > 1 ? false : true;
}

/*
№10

Напишите функцию, которая возвращает сумму таким образом:

Например:
f(1)(2)(3) --> 6

*/

function f(a) {
    let currentSum = a;
    function sum(b) {
        currentSum += b;
        return sum;
    }

    sum.toString = function () {
        return currentSum;
    }

    return sum;
}

/*
    В данном случае вызовы заканчиваются тогда, когда не будет
    аргументов.
*/

function sum(a) {
    let current = a;
    function insideSum(...args) {
        if (args.length) {
            current += args[0];
            return insideSum;
        } else {
            return current;
        }
    }
    return insideSum;
}

/*
№11

Напишите функцию, которая находит наиболее часто используемый элемент массива.

Например:
const array=[7, 'z', 'z', 'z', 3, 7, 'z', 7, 'z', 3, 5, 7]; --> "z"
*/

function oftenElemOfArr(arr) {
    let countOfElem = new Map();
    for (let elem of arr) {
        if (countOfElem.has(elem)) {
            countOfElem.set(elem, 1 + countOfElem.get(elem));
        } else {
            countOfElem.set(elem, 1)
        }
    }
    let arrOfKeys = Array.from(countOfElem.values());
    let mostOftenCount = Math.max.apply(null, arrOfKeys);
    for (let key of countOfElem.keys()) {
        if (countOfElem.get(key) == mostOftenCount) {
            return key;
        }
    }
}

function findMostPopularElement(array) {
    const counter = {};
    for (let item of array) {
        if (item in counter) {
            counter[item]++;
        } else {
            counter[item] = 1;
        }
    }
    for (let item in counter) {
        if (counter[item] == +Math.max(...Object.values(counter))) {
            return item;
        }
    }
}


/*
№12

Напишите функцию `expand(arr)`, которая разворачивает 
вложенный массив любой глубины.

Например:
const arr1 = [1, [2,[3,[4]]]]; --> [1,2,3,4]; 
const arr2 = [1, [2], [3, [[4]]],[5,6]]; --> [1,2,3,4,5,6];
*/

function expand(arr) {
    return arr.flat(Infinity);
}

function expand_2(array) {
    let result = [];
    for (let item of array) {
        if (Array.isArray(item)) {
            result = result.concat(expand(item));
        } else {
            result.push(item);
        }
    }
    return result;
}

/*
№13
Напишите функцию с двумя параметрами, которая создаёт массив элементов, 
представляющих собой сумму соответствующих элементов заданных массивов.

Например:
const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6];

func(array1,array2) // [5,7,9,4,5]
*/

const arraySummator = (arr1, arr2) => {
    const result = []
    for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
        result.push((arr1[i] || 0) + (arr2[i] || 0))
    }
    return result;
};

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

function removeDuplicates(arr) {
    return Array.from(new Set(arr));
}

/*
№15
Напишите функцию colonOdd(num), которая принимает число num в 
качестве аргумента и вставляет двоеточие (:) между двумя нечетными числами. 
Например, если вводится число 55639217, то на выходе должно быть 5:563:921:7
*/
function colonOdd(num) {
    let str = String(num);
    let resultArr = [str[0]];
    for (let i = 1; i < str.length; ++i) {
        function checkOdd(num) {
            return (num % 2) == 1 ? true : false;
        }
        if (checkOdd(str[i - 1]) && (checkOdd([str[i]]))) {
            resultArr.push(':', str[i]);
        } else {
            resultArr.push(str[i]);
        }
    }
    return resultArr.join('');
}

function colonOdd(num) {
    let arrayFromNum = [...num.toString()];
    console.log(arrayFromNum);
    return arrayFromNum.reduce((current, item, index, arr) => {
        if (+item % 2 === 1 && +arr[index + 1] % 2 === 1) {
            return current + item + ':';
        } else {
            return current + item;
        }
    }, '');
}

/*
№16

Напишите функцию `copyArr(arr)`, которая копирует массив, не изменяя оригинал.

Например:
const vegetables = ['Капуста', 'Репа', 'Редиска'];
*/

function copyArr(arr) {
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

String.prototype.endsWith = function (str) {
    return this.slice(-str.length) === str;
}


/*
№18

Напишите функцию `comparison(str1, str2)`, которая сравнивает
строки без учёта регистра символов.

Например:
comparison('string', 'StRiNg') -->  true
comparison('string', 'Redev') -->  false
*/

function comparison(str1, str2) {
    return str1.toLowerCase() == str2.toLowerCase();
}


/*
№19
Напишите функцию `strip(str)`, которая удаляет все лишние пробелы из строки str.

Например:
const str = "    Pasha is a good      boy     ";
strip(str) --> "Pasha is a good boy"
*/

function strip(str) {
    return str.replace(/\s+/g, ' ')
        .replace(/^\s/, '')
        .replace(/\s$/, '');
}

function strip_2(str) {
    return str.trim().replace(/\s+/g, ' ');
}

/*
№20

Напишите функцию `cutString(str, n)`, которая удаляет лишние 
слова из строки str, оставив в ней n слов.

Например:
const str = "Сила тяжести приложена к центру масс тела";`
cutString(str, 5) --> "Сила тяжести приложена к центру"
*/

function cutString(str, n) {
    return str.split(' ').slice(0, n).join(' ');
}

/*
№21

Напишите функцию `alphabetize(str)`, которая возвращает строку,
отсортировав её символы в алфавитном порядке.

Например:
alphabetize("redev") --> "deerv"
*/

function alphabetize(str) {
    return str.split('').sort().join('');
}

/*
№22

Напишите функцию `uniqueLetters(str)`, которая возвращает строку,
оставив в ней только уникальные символы, т.е. встречающиеся в строке один раз.

Например:
uniqueLetters('anaconda'); --> 'ancod'
uniqueLetters('redev'); --> 'redv'
*/

function uniqueLetters(str) {
    return Array.from(new Set(str).keys()).join('');
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

function removeDuplicate(str) {
    let setOfWords = new Set(str.split(', '));
    return Array.from(setOfWords).join(', ');
}

function removeDuplicates_2(str) {
    return Array.from(new Set(str.split(', ')).keys()).join(', ');
}

/*
№24

Напишите функцию `replaceAll(find, replace, str)`, 
которая заменяет в строке str все вхождение подстроки find на подстроку replace.

let str = 'abc def def lom abc abc def';

Например:
replaceAll('abc', 'x', str) --> 'x def def lom x x def'
*/

function replaceAll(find, replace, str) {
    return str.replaceAll(find, replace);
}

/*
№25

Напишите функцию `startsWith()`, которая определяет, начинается ли строка 
символами другой строки, возвращая, соотвественно, true или false.

let str = 'abc def ghi jkl mno pqr stu';

Например:
str.startsWith('abc') --> 
*/
String.prototype.startsWith = function (substr) {
    return this.slice(0, substr.length) == substr;
}

/*
№26

Напишите функцию capitalizeFirstLetter(str), 
которая преобразовывает первый символ строки в верхний регистр.
*/

function capitalizeFirstLetter(str) {
    return str.split('')[0].toUpperCase() + str.slice(1);
}

function capitalizeFirstLetter_1(str) {
    return str[0].toUpperCase() + str.slice(1);
}

/*
№27

Напишите функцию `isUpperCase(str, character)`, которая определяет,
в каком регистре написан символ строки в указанной позиции.
Если он написан в верхнем регистре - возвращать true, если в нижнем – false.

Например:
isUpperCase('tasks JavaScript', 6); --> true
*/

function isUpperCase(str, character) {
    let elem = str.split('')[character];
    return (elem == elem.toUpperCase()) ? true : false;
}

function isUpperCase_1(str, position) {
    return str[position] === str[position].toUpperCase() ? true : false;
}

/*
№29

Представьте, что Вы и Ваши друзья решили создать команду мечты.
У этой команды должно быть крутое секретное имя,
которое содержит зашифрованную информацию о ней.
Например, это могут быть первые буквы имен его членов в верхнем регистре,
отсортированные по алфавиту. 
Ваша задача - написать функцию createDreamTeam (members), 
которая возвращает имя созданной команды (строку) 
на основе имен ее участников (Array). 
Удачи!

Имена участников должны быть строками. 
Значения другого типа следует игнорировать. 
В случае неправильного типа членов функция должна возвращать false.

Например:
createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) --> 'ADMM'
createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) --> 'LOO'

*/

function createDreamTeam(arr) {
    let arrOfCorrectNames = [];
    for (let item of arr) {
        if (typeof item == 'string') {
            arrOfCorrectNames.push(item);
        }
    }
    if (arrOfCorrectNames.length === 0) return false;
    let dreamTeamName = [];
    for (let item of arrOfCorrectNames) {
        dreamTeamName.push(item[0].toUpperCase());
    }
    return dreamTeamName.sort().join('');
}

function createDreamTeam_1(arr) {
    const arrOfStrings = arr.filter(item => typeof item === 'string');
    if (arrOfStrings.length) {
        return arrOfStrings.map((item) => item[0].toUpperCase()).sort().join('');
    } else {
        return false;
    }
}

/*
№30

Напишите функцию, которая находит факториал 5.
*/

function factorial(n) {
    return n <= 1 ? 1 : n * factorial(n - 1);
}


/*
№31

Ваша задача  - посчитать спрятанных на заднем дворе кошек (представленных в двухмерном формате Array)
Кошки хорошо прячутся, но их уши (''^^") видны. 
Ваша задача написать функцию (countCats), которая будет считать кошек. Удачи!

Количество найденых кошек должны быть `number`. 
Если кошек не найдено, функция должна вернуть `0`

Например:
countCats([[0,1,"^^"],[9,"^^",2],["^^",8,7]]) --> 3
*/

function countCats(arr) {
    return arr.flat(1).filter(item => item === '^^').length;
}

function countCats(...args) {
    return args.reduce((current, item) => {
        return item.includes('^^') ? ++current : current;
    }, 0);
}

/*
№32

Напишите функцию, которая проверит, является ли строка палиндромом. 
(Для того, чтобы решить эту задачу, надо загуглить)

*/

function checkPolindrom(str) {
    let clearStr = str.toLowerCase().replace(/[^a-zа-я]+/g, '');
    return (clearStr === clearStr.split('').reverse().join('')) ? true : false;
}

/*
№33

Напишите функцию, которая переделывает строку из camelCase в snake_case.

Например:
solution("redevCourses") -> "redev_courses"
*/

function solution(str) {
    let snake_case = ''
    for (let i = 0; i < str.length; ++i) {
        if (str[i] == str[i].toUpperCase()) {
            snake_case = str.slice(0, i) +
                '_' +
                str[i].toLowerCase() +
                str.slice(i + 1);
            str = snake_case;
        }
    }
    return snake_case
}

function solution_1(str) {
    return str.replace(/([A-Z])/g, item => `_${item.toLowerCase()}`);
}

function toSnakeCase(str) {
    return Array.from(str).reduce((current, item) => {
        if (item === item.toUpperCase()) {
            return current + '_' + item.toLowerCase();
        } else {
            return current + item;
        }
    }, '');
}


/*
№34

Напишите функцию, которая принимает строковый параметр и 
меняет буквы в словах в обратном порядке. 
Все пробелы в строке должны быть сохранены.

Например:
"This is an example!" -> "sihT si na !elpmaxe"
*/

function changeFirstAndLastLettersInWord(str) {
    let arrOfWords = str.split(' ');
    let resultArrOfWords = arrOfWords.map(item =>
        item.split('').reverse().join(''));
    return resultArrOfWords.join(' ');
}

function reverseWords(str) {
    return str
        .split(' ')
        .map(item => [...item].reverse().join(''))
        .join(' ');
}

function reverseWords_2(str) {
    return str
        .split(' ')
        .reduce((current, item) => {
            return current + ' ' + [...item].reverse().join('')
        }, '');
}


/*
№35

Ваша задача - отсортировать заданную строку. 
Каждое слово в строке будет содержать одно число. 
Это число - позиция, которую слово должно занимать в результате.

Примечание: числа могут быть от 1 до 9. 
Таким образом, 1 будет первым словом (не 0).

Если входная строка пуста, вернуть пустую строку. 
Слова во входной строке будут содержать только последовательные числа.

Например:
"is2 Thi1s T4est 3a" -> "Thi1s is2 3a T4est"
*/

function sortStrByNumber(str) {
    if (str.length === 0) return '';
    let arrOfWords = str.split(' ');
    let resultArrOfWords = new Array(arrOfWords.length);
    for (let word of arrOfWords) {
        let pos = word.replace(/[^0-9]/g, '');
        resultArrOfWords[pos - 1] = word;
    }
    return resultArrOfWords.join(' ');
}

function orderWords(str) {
    if (!str.length) {
        return '';
    }
    const cache = {};
    str.split(' ').forEach(item => {
        let number = item.replaceAll(/[A-Za-z]+/g, '');
        cache[number] = item;
    });
    return Array.from(Object.values(cache)).join(' ');
}

/*
№36

Напишите функцию, которая возвращает сумму двух наименьших положительных чисел,
учитывая массив из минимум 4 положительных чисел.

Например:
[12,423,54,1235,3,15,2,52] --> 5
*/

function sumOfTwoMinNumbers(arr) {
    let sortedArr = arr.sort((a, b) => a - b);
    return sortedArr[0] + sortedArr[1];
}

function sumOfTwoMinValues(arr) {
    return arr.sort((a, b) => a - b)
        .slice(0, 2)
        .reduce((cur, item) => cur + item, 0);
}

/*
№37

Напишите функцию, которая принимает число n (n> 0) и 
возвращает строку с обратной последовательностью от n до 1.


Например: если n = 5 на выходе у Вас должно быть "5 4 3 2 1"
*/

function strQueryFromNumbers(num) {
    let resultStr = '';
    if (num < 0) {
        num = prompt('Enter correct num > 0!', '1');
    }
    for (let i = num; i >= 1; --i) {
        if (i == 1) resultStr += i;
        else resultStr += i + ' ';
    }
    return resultStr;

}

function createStrFromNum(n) {
    let result = '';
    for (let i = n; i > 0; --i) {
        result += `${i} `
    }
    return result.trim();
}

/*
№38

В данной задаче Вам нужно удалить из одного массива все элементы второго массива.

Например:
arrayDiff([1,2],[1]) --> [2]
arrayDiff([1,2,2,2,3,4],[2,3]) --> [1,4]
*/

function arrayDifference(arr1, arr2) {
    return arr1.filter(item => !arr2.includes(item));
}

function arrayDifference_2(arr1, arr2) {
    for (let i = 0; i < arr1.length; ++i) {
        if (arr2.includes(arr1[i])) {
            arr1.splice(i, 1);
            i--;
        }
    }
    return arr1;
}
/*
№39

По заданному набору массива чисел вернуть аддитивную инверсию каждого элемента.
Каждый позитив становится негативом, а негатив становится позитивом.

Например:
 invert([-1,-2,-4,-5]) --> [1,2,4,5]
 invert([1,2,4,5]) --> [-1,-2,-4,-5]
 invert([1,-2,4,-5]) --> [-1,2,-4,5]

Вы можете предположить, что все значения являются целыми числами.
Не изменяйте входной массив
*/
function invert(arr) {
    return arr.map(item => -item)
}

/*
№40

Вы можете найти иголку в стоге сена?
Напишите функцию findNeedle, которая принимает массив, полный мусора, 
но содержащий одну иголку.

После того, как ваша функция найдет иголку, 
она должна вернуть сообщение (в виде строки), которое говорит:

"Нашел иголку на позиции" плюс индекс, по которому была найдена иголку

findNeedle(["bla","wekmvever","needle","bntyn"]) --> "Нашел иголку на позиции 2"

*/

function findNeedle(arr) {
    for (let item of arr) {
        if (item === 'needle') {
            return `Нашел иголку на позиции ${arr.indexOf(item)}`;
        }
    }
}

function findNeedle(array) {
    for (let i = 0; i < array.length; ++i) {
        if (array[i] === 'needle') {
            return `Нашел иголку на позиции ${i}`;
        }
    }
}

/*
№41

Функция simple, в качестве параметра принимающая строку слов,
возвращает длину самого короткого слова

Например:
simple("") --> 3
*/

function simple(str) {
    let clearStr = str.replace(/[^a-zа-яё\s]/gi, '').replace('  ', ' ');
    let setOfLength = new Set();
    for (let item of clearStr.split(' ')) {
        setOfLength.add(item.length);
    }
    return Math.min.apply(null, Array.from(setOfLength));
    //return Math.min(...Array.from(setOfLength)) 
}

function getTheShortestWord(str){
    let cleanStr = str.replaceAll(/[^a-zа-яё\s]/gi, '').replace('  ', ' ');
    let length = cleanStr.split(' ')[0].length;
    for(let word of cleanStr.split(' ')){
        if(length > word.length){
            length = word.length;
        }
    }
    return length;
}

function getShortestLength(str){
    let cleanStr = str.replaceAll(/[^a-zа-яё\s]/gi, '').replace('  ', ' ');
    return Math.min(...cleanStr.split(' ').map(item => item.length));
}

/*
№42

Напишите функцию, которая возвращает минимальное и
максимальное значение заданного массива.

Например:
[1, 5, 8, 10, 35, 100] --> [1, 100]
[-5, -7, -2, 5] --> [- 7, 5]
*/

function MinAndMaxNumOfArr(arr) {
    let sortedArr = arr.sort((a, b) => a - b);
    return [sortedArr[0], sortedArr.at(-1)];
}

function getMaxAndMinValues(arr){
    return [Math.min(...arr), Math.max(...arr)];
}

/*
№43

Джейден Смит, сын Уилла Смита, является звездой таких фильмов, 
как «Малыш каратэ» (2010) и «После Земли» (2013). 
Джейден также известен своей философией, которой он делится в Twitter. 
Когда он пишет посты в Твиттере, он пишет каждое слово с заглавной буквы. 
Посмотрите на приведенный ниже пример.

Ваша задача - преобразовать строки в то, как они были 
бы написаны Джейденом Смитом. 
Строки являются реальными цитатами из Jaden Smith, 
но они не написаны с большой буквы так, как он их первоначально напечатал.

Например:
toJadenCase('пишите код - это круто') --> 'Пишите Код - Это Круто'
*/

function toJadenCase(str) {
    let correctStr = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] == ' ') {
            correctStr = str.slice(0, i + 1) +
                         str[i + 1].toUpperCase() +
                         str.slice(i + 2);
            str = correctStr;
        }
    }
    return correctStr[0].toUpperCase() + correctStr.slice(1);
}

function toJadenCase(str){
    return str[0].toUpperCase() + str.slice(1).replaceAll(/\s[a-zа-яё]/g, item => item.toUpperCase());
}
/*
№44

Банкоматы допускают 4 или 6-значные ПИН-коды, 
а ПИН-коды не могут содержать ничего, кроме 4 цифр или 6 цифр.

Если функции передана правильная строка PIN,
верните `true`, иначе верните `false`.

Например:
correctPin('5567') --> true
correctPin('5432567') --> false
*/

function correctPin(str) {
    let correctPin = /^[0-9]+$/.test(str);
    if (correctPin) {
        return (str.length == 4 || str.length == 6) ? true : false;
    } else return false;
}

function isPinCorrect(pin){
    return isFinite(pin) ? [4,6].includes(pin.length) : false;
}

/*
№45

Ваша задача написать функцию, которая принимает 
в качестве параметра строку и увеличивает каждую "букву" строки
на число позиции, которую она занимает.

Например:
accum("abcd") --> "A-Bb-Ccc-Dddd"
accum("RqaEzty") --> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") --> "C-Ww-Aaa-Tttt"
*/

function accum(str) {
    return Array.from(str)
        .reduce((result, item, index) =>
            result
            + '-'
            + item.toUpperCase()
            + item.toLowerCase().repeat(index), '')
        .slice(1)
}

function accum(str){
    return [...str].reduce((current, item, index) => {
        return current + item.toUpperCase() + item.repeat(index) + '-';
    }, '');
}


/*
№46

В этом небольшом задании вам дана строка чисел, 
разделенных пробелами, и Вы должны вернуть самое большое и самое маленькое число.

Например:
list("4 5 29 54 4 0 -123 666 -64 1 -3 6 -6")  --> "666 -123"
*/

function findMaxAndMinFromStr(str) {
    let arrOfNums = str.split(' ').map(item => Number(item));
    return '' + Math.max(...arrOfNums) + ' ' + Math.min(...arrOfNums);
}
function findMaxandMinValues(str){
    return `${Math.max(...str.split(' '))} ${Math.min(...str.split(' '))}`;
}

/*
№47

Тролли атакуют ваш раздел комментариев!

Распространенный способ справиться с этой ситуацией - убрать 
все гласные из комментариев троллей, нейтрализуя угрозу.
Ваша задача - написать функцию, которая принимает строку 
и возвращает новую строку со всеми удаленными гласными.

Например: "Этот сайт для лузеров ЛОЛ!" --> "тт сйт дл лзрв ЛЛ!"
*/

function blockTrolling(str) {
    return str.replace(/[аеёиоуэюяы]/gi, '');
}


/*
№48

Допустим, Вы знакомы с понятием "идеальный квадрат". (Например: 12 * 12 = 144). 
А как найти следующий по очереди идеальный квадрат?

**Напишите функцию findNextSquare**, которая находит 
следующий целочисленный идеальный квадрат после того, 
как он передан в качестве параметра. 
Напомним, что целочисленный идеальный квадрат - это такое 
целое число n, sqrt (n) которого тоже является целым числом.

Если параметр сам по себе не является идеальным квадратом, то 
должно быть возвращено -1.

Например:
findNextSquare(9); --> 16
findNextSquare(16); --> 25
findNextSquare(64); --> 81
*/

function findNextSquare(num) {
    return (Number.isInteger(Math.sqrt(num))) ? Math.pow((Math.sqrt(num) + 1), 2) : -1;
}

/*
№49

Напишите функцию так, чтобы она разбивала оболочку camelCase,
используя пробел между словами.

Например:
"camelCasing"  -->  "camel Casing"

"identifier"  -->  "identifier"

"" -->  ""
*/

function destroyCamelCase(str){
    return str[0] + str.slice(1).replaceAll(/([A-Z])/g, item => ` ${item}`);
}

/*
№50

Создайте функцию с именем divisors, которая принимает
целое число n > 1 и возвращает массив со всеми делителями 
целого числа (кроме 1 и самого числа), от наименьшего до наибольшего.
Если число простое, верните строку '(integer) is prime'
*/

function findAllDivisors(num) {
    let result = [];
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            result.push(i);
        }
    }
    return result.length === 0 ? `${num} is prime` : result;
}

function divisors(num){
    let result = [];
    for(let i = 1; i <= num; i++){
        if(num % i === 0){
            result.push(i);
        }
    }
    return result.length === 2 ? `${num} is prime` : result;
}


/*
№51

Нарциссическое число - это число длины n, в котором
сумма цифр в степени n равна исходному числу.

Например:
isNarcissistic(153) --> true;
isNarcissistic(435) --> false;
isNarcissistic(370) --> true;
isNarcissistic(1032) --> false;
*/

function isNarcissistic(num) {
    let arrFromNum = String(num).split('');
    return num === arrFromNum
        .reduce((sum, item) =>
            sum + Math.pow(item, arrFromNum.length), 0) ? true : false;
}

/*
№52

Если мы перечислим все натуральные числа ниже 10, 
которые кратны 3 или 5, мы получим 3, 5, 6 и 9. Сумма этих кратных 23.
Завершите решение так, чтобы оно возвращало 
сумму всех кратных 3 или 5 числам ниже переданного числа.

Например:
solution(10) --> 23 3 5 6 9 
solution(12) --> 33
solution(23) --> 119
*/

function checkDeliver3And5(num) {
    let rangeArr = [];
    let arrOfMatchNums = [];
    for (let i = 1; i < num; i++) rangeArr.push(i);
    for (let item of rangeArr) {
        if (item % 3 == 0 || item % 5 == 0) arrOfMatchNums.push(item);
    }
    return arrOfMatchNums.reduce((sum, item) => sum + item, 0);
}

function find3and5Devisors(num){
    let result = [];
    for(let i = 1; i < num; i++){
        if(i % 3 === 0 || i % 5 === 0){
            result.push(i);
        }
    }
    return result.reduce((sum, item) => sum + item, 0);
}

/*
№53

Вам предоставляется массив (который будет иметь длину не менее 3, 
но может быть очень большим),
содержащий целые числа. Массив либо полностью состоит из нечетных целых чисел,
либо полностью состоит из четных целых чисел,
за исключением одного целого числа N.
Напишите метод, который принимает массив в качестве аргумента и возвращает
этот «выброс» N.

Например:
findOutlier([0, 1, 2]) --> 1
findOutlier([1, 2, 3]) --> 2
findOutlier([2,6,8,10,3]) --> 3
findOutlier([1,1,0,1,1]) --> 0
*/

function findOutlier(arr) {
    let countEven = 0;
    let countOdd = 0;
    for (let i = 0; i < 3; i++) {
        if (arr[i] % 2 == 0) countEven++;
        if (arr[i] % 2 == 1) countOdd++;
    }
    return countEven > countOdd ?
        arr.find(item => item % 2 == 1) :
        arr.find(item => item % 2 == 0);
}

function findOutlier(arr){
    const oddArrLength = arr.filter(item => item % 2 !== 0).length;
    return oddArrLength - 1 
            ? arr.find(item => item % 2 === 0) 
            : arr.find(item => item % 2 !== 0);
}

/*
№54

Переместите первую букву каждого слова в его конец,
затем добавьте «ау» в конец слова. Не трогайте знаки препинания.

Например:
pigIt('Pig latin is cool') --> 'igPay atinlay siay oolcay'
pigIt('This is my string') --> 'hisTay siay ymay tringsay'
*/

function pigIt(str) {
    return str
        .split(' ')
        .map(item => item.slice(1) + item[0] + 'ay')
        .join(' ');
}


/*
№55

Напишите функцию, которая принимает строку круглых скобок и определяет,
допустим ли порядок скобок.
Функция должна возвращать истину, если строка действительна,
и ложь, если она недействительна.

Например:
validParentheses(')(()))') --> false
validParentheses('()') --> true
validParentheses('()()') --> true
validParentheses('()((()') --> false
*/

function validParentheses(str) {
    return str.replaceAll('()', '').length === 0 ? true : false;
}

function isValidParentheses_1(str){
    return !str.replaceAll('()', '').length;
}

/*
№56

Маркетинговая команда тратит слишком много времени на ввод хэштегов.
Давайте поможем им с нашим собственным генератором хештегов!
Он должен начинаться с хэштега (#).
Все слова должны начинаться с заглавной буквы.
Если окончательный результат длиннее 140 символов, он должен вернуть false.
Если ввод или результат - пустая строка, он должен вернуть false.

Например:
" Hello there thanks for trying my Kata"  -->  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "   -->  "#HelloWorld"
""  -->  false
*/

function putHashtagInTheBeginning(str) {
    if (str.trim().length === 0) {
        return false;
    }
    str = str.trim();
    for (let symbol of str) {
        if (symbol === ' ') {
            let position = str.indexOf(' ');
            str = str.slice(0, position)
                + str[position + 1].toUpperCase()
                + str.slice(position + 2);
        }
    }
    let result = '#' + str[0].toUpperCase() + str.slice(1);
    return result.length > 140 ? false : result;
}

function hashName(str){
    const result = '#' + str.trim()
                            .replaceAll(/\s+[a-zа-яё]/ig, item => item.toUpperCase().trim());
    return result.length > 140 || !str.length ? false : result;
}

/*
№57

Дан массив целых чисел, найдите тот, который встречается нечетное количество раз.
Всегда будет только одно целое число, которое встречается нечетное количество раз.

Например:
func([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]) --> 5
func([1,1,2,-2,5,2,4,4,-1,-2,5]) --> -1
func([20,1,1,2,2,3,3,5,5,4,20,4,5]) --> 5
*/

function countOdd(arr) {
    let map = new Map();
    for (let item of arr) {
        if (map.has(item)) map.set(item, 1 + map.get(item));
        else map.set(item, 1);
    }
    for (let key of map.keys()) {
        if (map.get(key) % 2 == 1) return key;
    }
}

function findOddAppearanced(arr){
    let counter = {};
    for(let item of arr){
        if(item in counter){
            counter[item]++;
        } else {
            counter[item] = 1;
        }
    }
    for(let [key, value] of Object.entries(counter)){
        if(value % 2 !== 0){
            return key;
        }
    }
}

/*
№58

Реализуйте функцию unique_in_order, которая принимает в качестве аргумента
последовательность и возвращает список элементов
без каких-либо элементов с одинаковым значением рядом
друг с другом и с сохранением исходного порядка элементов.

Например:
uniqueInOrder('AAAABBBCCDAABBB') --> ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         --> ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       --> [1,2,3]
*/

function uniqueInOrder(obj) {
    let result = [obj[0]];
    for (let i = 0; i < obj.length - 1; i++) {
        if (obj[i + 1] === obj[i]) continue;
        if (obj[i + 1] !== obj[i]) result.push(obj[i + 1]);
    }
    return result;
}
//alert(uniqueInOrder('AAAABBBCCDAABBB'))
/*
№59

Для данного n возьмите сумму цифр n. 
Если это значение имеет более одной цифры, 
продолжайте уменьшать таким образом, пока
не будет получено однозначное число. 
Входными данными будет неотрицательное целое число.

Например:
digital_root(16)  -->  1 + 6 = 7
digital_root(942)  --> 9 + 4 + 2 = 15  -->  1 + 5 = 6
digital_root(132189) -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
digital_root(493193)  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
*/

function digitalRoot(num) {
    while (num.toString().length !== 1) {
        num = num
            .toString()
            .split('')
            .reduce((sum, item) => +sum + +item, 0)
    }
    return num;
}

function digital_root(num){
    if(String(num).length === 1) {
        return num;
    } else {
        let currentNum = [...String(num)].reduce((sum, item) => sum + +item, 0);
        return digital_root(currentNum);
    }
}


