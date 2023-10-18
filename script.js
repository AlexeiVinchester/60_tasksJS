"use strict"


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
