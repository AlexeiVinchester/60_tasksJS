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
alert(moveZeros([false,1,0,1,0,0,0,2,0,0,5,6,9,true,1,3,"a"]));
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
