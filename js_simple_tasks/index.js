/**
 * Задача 1
Вы должны реализовать функцию, которая возвращает разницу между наибольшим и наименьшим значением в списке ,
полученном в качестве аргумента функции. Массив, который получает функция в качестве аргумента, может содержать
положительные и отрицательные числа. Если массив пуст или имеет одно значение, верните ноль. 
Изначально, массив будет подан в неотсортированном виде.
Пример: 
arr([1, 2, 3, -4]); // вернет 7, потому что: 3 - (-4) == 7
arr([16]) => 0

 */
function arr(arr){
	const sorted = arr.sort((a,b) => a - b)
	if(arr.length <= 1){
		return null
	} else{
		return sorted[sorted.length-1] - sorted[0]
	}
}

// console.log('Task1',arr([1, 2, 3, 4]))

/**
 * Задачка 2
Напишите функцию, которая принимает в себя строку и число. Верните, в виде массива, только те слова, длинна которых превышает число.
 */

function word(...params){
	const wordsArr = []
	let lengthOfWord;
	params.filter((elem) => {
		if(typeof elem === 'number'){
			lengthOfWord = elem
		} else {
			wordsArr.push(elem)
		}
	})

	const result = wordsArr.filter((word => word.length > lengthOfWord))
	return result
}

// console.log(word('foo', 'f0000','1', 2));

/**
 * Задача 3
В нашем неотсортированном массиве, где находятся числа от 0 до 9, потерялась одна цифра. Мы не знаем какая и нам нужно её найти.
Пример:
getMissingElement( [0,5,1,3,2,9,7,6,4]) => 8
getMissingElement( [9,2,4,5,7,0,8,6,1]) => 3

 */
function getMissingElement(arr){
	const fullArray = []
	for(let i = 0; i <= 9; i++ ){
		fullArray.push(i)
	}

	const result = fullArray.filter(el => !arr.includes(el))
	return result[0]
}

// console.log(getMissingElement( [9,2,4,5,7,0,8,6,1]));

/**
 * Задача 4
Напишите функцию, которая возвращает true, если первый переданный аргумент (строка) заканчивается вторым аргументом (также строкой).
Пример:
solution('abc', 'bc') => true
solution('abc', 'd') => false

 */
function solution(arg1, arg2){
	if(arg1.lastIndexOf(arg2) === 0 && arg1.length === arg2.length){
		return true
	} else if(arg1.lastIndexOf(arg2) > 0){
		return true
	} else {
		return false
	}
}

// console.log(solution('abcsdsd', 'abc'));

/**Задача 5
Напишите функцию, который получает массив целых чисел и возвращает массив средних значений каждого целого числа и его последователя, если он есть.
Пример:
averages([2, -2, 2, -2, 2]), [0, 0, 0, 0]
averages([1, 3, 5, 1, -10]), [2, 4, 3, -4.5]
 */

function averages(arr){
	let averageArr = []
	averageArr = arr.map((item, indx, array) => {
		if(array[indx + 1] !== undefined){
			return (item + array[indx + 1]) / 2
		}
	})

	return averageArr.filter(item => item !== undefined)
}

// console.log(averages([2, -2, 2, -2, 2]));

/**
 * Задача 6
Напишите функцию, которая принимает в себя любое неотрицательное число, а возвращает максимальн возможное значение из цифр этого числа.
Пример:
function(123456789) => 987654321
function(42145) => 54421

 */

function maxValue(num){
	const arrNum = Array.from(num.toString(), Number);
	const sortedArr = arrNum.sort((a,b) => b - a)
	return +sortedArr.join('')
}

// console.log(maxValue(42145));

/**
 * Задача 7
Создайте функцию, которая принимает строку имени и проверяет, насколько хорошо данное имя. 
Предварительно загруженный словарь оценок алфавита доступен на вкладке «Код». Сложите буквы своего имени, чтобы получить общий балл.
Исходные данные:
const scores = {"A": 100, "B": 14, "C": 9, "D": 28, "E": 145, "F": 12, "G": 3,"H": 10, "I": 200, "J": 100, 
"K": 114, "L": 100, "M": 25,"N": 450, "O": 80, "P": 2, "Q": 12, "R": 400, "S": 113,"T": 405, "U": 11, "V": 10, "W": 10, "X": 3, "Y": 210, "Z": 23}

score <= 60: "NOT TOO GOOD"
61 <= score <= 300: "PRETTY GOOD"
301 <= score <= 599: "VERY GOOD"
score >= 600: "THE BEST"

Пример:
nameScore("MUBASHIR") ➞ "THE BEST"
nameScore("YOU") ➞ "VERY GOOD"
nameScore("MATT") ➞ "THE BEST"
nameScore("PUBG") ➞ "NOT TOO GOOD"

 */

function nameScore(str){
	const arrStr = [...str]
	let score = 0
	const scores = {
		"A": 100, 
		"B": 14, 
		"C": 9,
		"D": 28,
		"E": 145,
		"F": 12,
		"G": 3,
		"H": 10, 
		"I": 200,
		"J": 100, 
		"K": 114,
		"L": 100,
		"M": 25,
		"N": 450,
		"O": 80, 
		"P": 2,
		"Q": 12,
		"R": 400,
		"S": 113,
		"T": 405,
		"U": 11,
		"V": 10,
		"W": 10,
		"X": 3,
		"Y": 210,
		"Z": 23
	}

	for (let key in scores){
		if(arrStr.includes(key)){
			score += scores[key]
		}
	}

	if(score <= 60){
		return "NOT TOO GOOD"
	} else if(61 <= score && score <= 300){
		return "PRETTY GOOD"
	} else if(301 <= score && score <= 599){
		return "VERY GOOD"
	} else if(score >= 600){
		return "THE BEST"
	}
}

// console.log(nameScore("MUBASHIR"));

/**
 * Задача 8
Создайте функцию, которая принимает строку и возвращает количество (количество) гласных, содержащихся в ней.
Пример:
countVowels("Celebration") ➞ 5
countVowels("Palm") ➞ 1
 */

function countVowels(str){
	let counter = 0
	const vowels = ['a', 'e', 'i', 'o', 'u', 'y', 'w' ];
	[...str].forEach(letter => {
		if(vowels.includes(letter)) counter++
	})

	return counter
}
// console.log(countVowels("Palm"));

/**
 * Задача 9	
Создайте функцию, которая удалит буквы «a», «b» и «c» из данной строки и вернет измененную версию. Если данная строка не содержит «a», «b» или «c», вернуть null.
Пример:
removeABC("This might be a bit hard") ➞ "This might e  it hrd"
removeABC("hello world!") ➞ null

 */

function removeABC(str){
	const toRemove = ['a', 'b', 'c']
	let counter = 0
	let res = ''
	for(let i = 0; i < [...str].length; i++){
		if(toRemove.includes([...str][i])){
			counter++	
			if(counter > 1) continue;
			res = [...str].filter(item => !toRemove.includes(item))
			return	res.join('')
		} else {
			return null
		}
	}
}

// console.log(removeABC("hello world!"));

/**
 * Задача 10	
Напишите функцию JavaScript для поиска уникальных элементов из двух массивов.
Пример:
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
["1", "2", "3", "10", "100"]

 */

function difference(arr1, arr2){
	const set = new Set(arr1.concat(arr2))
	return [...set]
}

// console.log(difference([1, 2, 3], [100, 2, 1, 10]));

/**
 * Задача 11
Напишите функцию, чтобы получить копию объекта, где ключи стали значениями, а значения - ключами.
Пример:
Вход - {red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}  
выход - {"#FF0000":"red","#00FF00":"green","#FFFFFF":"white"}

 */

function reverseObj(obj){
	const newObj = {}
	for(let value in obj){
		newObj[`'${obj[value]}'`] = value
	}
	return newObj
}

// console.log(reverseObj({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"} ));

/**
 * Задача 12
Ивана Иванова обокрали. Но его вещи были застрахованы на определенную сумму. Учитывая украденные вещи и ограничение страховки,
верните разницу между общей стоимостью этих вещей и пределом политики.
Пример:
calculateDifference({ "baseball bat": 20 }, 5) ➞ 15
calculateDifference({ skate: 10, painting: 20 }, 19) ➞ 11
calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400) ➞ 1
Ограничения:Объект всегда должен содержать элементы, сумма предметов всегда должна быть больше страховки.

 */

function calculateDifference(obj, insrc){
	let sumOfProp = 0
	for(let value in obj){
		sumOfProp += obj[value]
	}

	if(sumOfProp > insrc){
		return sumOfProp - insrc
	} else {
		throw new Error('сумма предметов всегда должна быть больше страховки')
	}
}

// console.log(calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400));

/**
 * Задача 13
Создайте функцию вращения влево и вправо, которая возвращает все вращения строки влево и вправо.
Пример:
leftRotations("abc") ➞ ["abc", "bca", "cab"]
rightRotations("abc") ➞ ["abc", "cab", "bca"]
 */


function leftRotations(str){
	let leftRotation = []
	for(let i = 0; i < str.length; i++){
		leftRotation.push(str.substring(i, str.length) + str.substring(0, i) )
	}
    return leftRotation
}

// console.log(leftRotations('abc'));

function rightRotations(str){
	let rightRotation = []
	for(let i = 0; i < str.length; i++){
		rightRotation.push(str.substring(str.length - i, str.length) + str.substring(0, str.length - i))
	}
    return rightRotation
}

// console.log(rightRotations('abc'));

/**
 * Задача 14
Напишите функцию, которая принимает три измерения кирпича: высоту (a), ширину (b) и глубину (c) и возвращает истину,
если этот кирпич может поместиться в отверстие с шириной (w) и высотой (h).
Пример:
doesBrickFit(1, 1, 1, 1, 1) ➞ true
doesBrickFit(1, 2, 1, 1, 1) ➞ true
doesBrickFit(1, 2, 2, 1, 1) ➞ false
Ограничения: 
Кирпич можно повернуть любой стороной к отверстию.
Мы предполагаем, что кирпич подходит, если его размеры равны размерам отверстия (т.е. размер кирпича должен быть меньше или равен размеру отверстия, не строго меньше).
Кирпич нельзя класть под неортогональным углом.

 */

function doesBrickFit(a,b,c,w,h){
	if(a <= w && c <= h){
		return true
	} else {
		return false
	}
	
}
// console.log(doesBrickFit(1, 1, 1, 1, 1) );
// console.log(doesBrickFit(1, 2, 1, 1, 1) );
// console.log(doesBrickFit(1, 2, 2, 1, 1) );

