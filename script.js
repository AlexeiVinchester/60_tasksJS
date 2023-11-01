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
№24

Напишите функцию `replaceAll(find, replace, str)`, 
которая заменяет в строке str все вхождение подстроки find на подстроку replace.

let str = 'abc def def lom abc abc def';

Например:
replaceAll('abc', 'x', str) --> 'x def def lom x x def'
*/

function replaceAll(find, replace, str){
    return str.replaceAll(find, replace);
}
//let str = 'abc def def lom abc abc def';
//alert(replaceAll('abc', 'x', str));


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

function createDreamTeam(arr){
    let arrOfCorrectNames = [];
    for(let item of arr){
        if(typeof item == 'string'){
            arrOfCorrectNames.push(item);
        }
    }
    if(arrOfCorrectNames.length === 0) return false;
    let dreamTeamName = [];
    for(let item of arrOfCorrectNames){
        dreamTeamName.push(item[0].toUpperCase());
    }
    return dreamTeamName.sort().join('');
}

//alert(createDreamTeam([1, 1111, true, true, null]));
/*
№30

Напишите функцию, которая находит факториал 5.
*/

function factorial(n){
    return n <= 1 ? 1 : n * factorial(n-1);
}

//alert(factorial(8))

/*
№32

Напишите функцию, которая проверит, является ли строка палиндромом. 
(Для того, чтобы решить эту задачу, надо загуглить)

*/

function checkPolindrom(str){
    let clearStr = str.toLowerCase().replace(/[^a-zа-я]+/g, '');
    return (clearStr === clearStr.split('').reverse().join('')) ? true : false;
}

//alert(checkPolindrom('Сел в озере березов лес'))
/*
№33

Напишите функцию, которая переделывает строку из camelCase в snake_case.

Например:
solution("redevCourses") -> "redev_courses"
*/

function solution(str){
    let snake_case = ''
    for(let i = 0; i < str.length; ++i){
        if(str[i] == str[i].toUpperCase()){
            snake_case = str.slice(0, i) + 
                         '_' + 
                         str[i].toLowerCase() + 
                         str.slice(i+1);
            str = snake_case;
        }
    }
    return snake_case
}

function solution_1(str){
    return str.replace(/([A-Z])/g, item => `_${item.toLowerCase()}`);
}
/*
alert(solution("redevCoursesRTffRRR"))
alert(solution("redevCoursesRTffRRR") == solution_1("redevCoursesRTffRRR"));
*/

/*
№34

Напишите функцию, которая принимает строковый параметр и 
меняет буквы в словах в обратном порядке. 
Все пробелы в строке должны быть сохранены.

Например:
"This is an example!" -> "sihT si na !elpmaxe"
*/

function changeFirstAndLastLettersInWord(str){
    let arrOfWords = str.split(' ');
    let resultArrOfWords = arrOfWords.map(item =>
        item.split('').reverse().join(''));
    return resultArrOfWords.join(' ');
}

//alert(changeFirstAndLastLettersInWord("This is an example!"))

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

function sortStrByNumber(str){
    if(str.length === 0) return '';
    let arrOfWords = str.split(' ');
    let resultArrOfWords = new Array(arrOfWords.length);
    for(let word of arrOfWords){
        let pos = word.replace(/[^0-9]/g,'');
        resultArrOfWords[pos-1] = word;
    }
    return resultArrOfWords.join(' ');
}
//alert(sortStrByNumber("2is Thi1s T4est 3a"));

/*
№36

Напишите функцию, которая возвращает сумму двух наименьших положительных чисел,
учитывая массив из минимум 4 положительных чисел.

Например:
[12,423,54,1235,3,15,2,52] --> 5
*/

function sumOfTwoMinNumbers(arr){
    let sortedArr = arr.sort((a,b) => a-b);
    return sortedArr[0] + sortedArr[1];
}

//alert(sumOfTwoMinNumbers([12,423,54,1235,3,15,2,52]))

/*
№37

Напишите функцию, которая принимает число n (n> 0) и 
возвращает строку с обратной последовательностью от n до 1.


Например: если n = 5 на выходе у Вас должно быть "5 4 3 2 1"
*/

function strQueryFromNumbers(num){
    let resultStr = '';
    if(num < 0){
        num = prompt('Enter correct num > 0!', '1');
    } 
    for(let i = num; i >= 1; --i){
        if(i == 1) resultStr += i;
        else resultStr += i + ' ';
    }
    return resultStr;
    
}

//alert(strQueryFromNumbers(5).length)

/*
№38

В данной задаче Вам нужно удалить из одного массива все элементы второго массива.

Например:
arrayDiff([1,2],[1]) --> [2]
arrayDiff([1,2,2,2,3,4],[2,3]) --> [1,4]
*/

function arrayDiff(arr1, arr2){
    let result = [];
    for(let item of arr1){
        if(!arr2.includes(item)){
            result.push(item)
        }
    }
    return result;
}
//alert(arrayDiff([1,2,2,2,3,4],[2,3]))
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
function invert(arr){
    return arr.map(item => -item)
}
//alert(invert([1,-2,4,-5]))

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

function findNeedle(arr){
    for(let item of arr){
        if(item === 'needle'){
            return `Нашел иголку на позиции ${arr.indexOf(item)}`;
        }
    }
}

//alert(findNeedle(["bla","needle","wekmvever","bntyn"]))

/*
№41

Функция simple, в качестве параметра принимающая строку слов,
возвращает длину самого короткого слова

Например:
simple("") --> 3
*/

function simple(str){
    let clearStr = str.replace(/[^a-zа-яё\s]/gi, '').replace('  ', ' ');
    alert(clearStr);
    let setOfLength = new Set();
    for(let item of clearStr.split(' ')){
        setOfLength.add(item.length);
    }
    return Math.min.apply(null, Array.from(setOfLength));
    //return Math.min(...Array.from(setOfLength)) 
}
//alert(simple("Функция simple качестве параметра принимающая строку слов, возвращает длину самого короткого слова"))

/*
№42

Напишите функцию, которая возвращает минимальное и
максимальное значение заданного массива.

Например:
[1, 5, 8, 10, 35, 100] --> [1, 100]
[-5, -7, -2, 5] --> [- 7, 5]
*/

function MinAndMaxNumOfArr(arr){
    let sortedArr = arr.sort((a,b) => a-b);
    return [sortedArr[0], sortedArr.at(-1)];
}
//alert(MinAndMaxNumOfArr([-5, -7, -2, 5]))

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

function toJadenCase(str){
    let correctStr = '';
    for(let i = 0; i < str.length; i++){
        if(str[i] == ' '){
            correctStr = str.slice(0, i+1) + 
                         str[i+1].toUpperCase() +
                         str.slice(i+2);
            str = correctStr;                
        }
    }
    return correctStr[0].toUpperCase() + correctStr.slice(1);
}
//alert(toJadenCase('но они не написаны с большой - буквы так, как он их первоначально напечатал'))

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

function correctPin(str){
    let correctPin = /^[0-9]+$/.test(str);
    if(correctPin){
        return (str.length == 4 || str.length == 6) ? true : false;
    } else return false;
}
//alert(correctPin('5588867'))

/*
№46

В этом небольшом задании вам дана строка чисел, 
разделенных пробелами, и Вы должны вернуть самое большое и самое маленькое число.

Например:
list("4 5 29 54 4 0 -123 666 -64 1 -3 6 -6")  --> "666 -123"
*/

function findMaxAndMinFromStr(str){
    let arrOfNums = str.split(' ').map(item => Number(item));
    return '' + Math.max(...arrOfNums) + ' ' + Math.min(...arrOfNums);
}
//alert(findMaxAndMinFromStr("4 5 29 54 4 0 -123 666 -64 1 -3 6 -6"))