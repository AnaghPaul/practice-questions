const invert = function (f) {
  return function (...args) {
    return !f(...args);
  };
};

const incrementIfTrue = function (predicate, step) {
  return function (count, element) {
    if (predicate(element)) {
      return count + step;
    }

    return count;
  };
};

const add = function (op1, op2) {
  return op1 + op2;
};

const multiply = function (op1, op2) {
  return op1 * op2;
};

const concat = function (element1, element2) {
  return element1.concat(element2);
};

const isEven = function (number) {
  return (number & 1) === 0;
};

const isNegative = function (number) {
  return number < 0;
};

const isLonger = function (element1, element2) {
  return element1.length > element2.length;
};

const isVowel = function (char) {
  const VOWELS = "aeiouAEIOU";

  return VOWELS.includes(char);
};

const selectElementBasedOn = function (predicate) {
  return function (element1, element2) {
    return predicate(element1, element2) ? element1 : element2;
  };
};

// =========================== Common Functions End ============================

// sumOf([1, 2, 3, 4]) => 10
const sumOf = function (numbers) {
  return numbers.reduce(add, 0);
};

// console.log(sumOf([1, 2, 3, 4]));

// productOf([1, 2, 3, 4]) => 24
const productOf = function (numbers) {
  return numbers.reduce(multiply, 1);
};

// console.log(productOf([1, 2, 3, 4]));

// averageOf([1, 2, 3, 4, 5]) => 3
const averageOf = function (numbers) {
  return numbers.reduce(add, 0) / numbers.length;
};

// console.log(averageOf([1, 2, 3, 4]));

// minOf([3, 1, 4, 1, 5, 9, 2]) => 1
const minOf = function (numbers) {
  return numbers.reduce((num1, num2) => (num1 < num2 ? num1 : num2), Infinity);
};

// console.log(minOf([3, 27, 4, 10, 5, 9, 2]));

// maxOf([3, 1, 4, 1, 5, 9, 2]) => 9
const maxOf = function (numbers) {
  return numbers.reduce((num1, num2) => (num1 > num2 ? num1 : num2), -Infinity);
};

// console.log(maxOf([3, 27, 4, 10, s5, 9, 2]));

// sumPositiveNumbers([1, -2, 3, -4]) => 4
const sumPositiveNumbers = function (numbers) {
  const positiveNumbers = numbers.filter((number) => number > 0);

  return positiveNumbers.reduce(add, 0);
};

// console.log(sumPositiveNumbers([1, -2, 3, -4]));

// sumOfSquares([1, 2, 3, 4]) => 30
const sumOfSquares = function (numbers) {
  const squares = numbers.map((number) => number * number);
  return squares.reduce(add, 0);
};

// console.log(sumOfSquares([1, 2, 3, 4]));

// sumOfOddNumbers([1, 2, 3, 4, 5]) => 9
const sumOfOddNumbers = function (numbers) {
  const isOdd = invert(isEven);
  const oddNumbers = numbers.filter(isOdd);

  return oddNumbers.reduce(add, 0);
};

// console.log(sumOfOddNumbers([1, 2, 3, 4, 5]));

// countNegativeNumbers([1, -2, 3, -4]) => 2
const countNegativeNumbers = function (numbers) {
  const incrementIfNegative = incrementIfTrue(isNegative, 1);

  return numbers.reduce(incrementIfNegative, 0);
};

// console.log(countNegativeNumbers([1, -2, 3, -4]));

// findSumOfEvenSquares([1, 2, 3, 4]) => 20
const findSumOfEvenSquares = function (numbers) {
  const evens = numbers.filter(isEven);
  const evenSquares = evens.map((number) => number * number);

  return evenSquares.reduce(add, 0);
};

// console.log(findSumOfEvenSquares([1, 2, 3, 4]));

// concatenateWords(["hello", "world"]) => "helloworld"
const concatenateWords = function (words) {
  return words.reduce(concat, "");
};

// console.log(concatenateWords(["hello", "world"]));

// longestWord(["apple", "banana", "cherry", "kiwi"]) => "banana"
// const longer = function (element1, element2) {
//   return element2.length > element1.length ? element2 : element1;
// };

const longestWord = function (words) {
  const getLonger = selectElementBasedOn(isLonger);

  return words.reduce(getLonger);
};

// console.log(longestWord(["apple", "banana", "cherry", "kiwi"]));

// shortestWord(["apple", "banana", "cherry", "kiwi"]) => "kiwi"
const shortestWord = function (words) {
  const getShorter = selectElementBasedOn(invert(isLonger));

  return words.reduce(getShorter);
};

// console.log(shortestWord(["apple", "banana", "cherry", "kiwi"]));

// joinWithComma(["apple", "banana", "cherry"]) => "apple,banana,cherry"
const joinWithComma = function (words) {
  return words.reduce((element1, element2) => concat(element1, "," + element2));
};

// console.log(joinWithComma(["apple", "banana", "cherry"]));

// reverseWords(["hello", "world"]) => "world hello"
const reverseWords = function (words) {
  return words.reduce((element1, element2) => concat(element2, " " + element1));
};

// console.log(reverseWords(["hello", "world"]));

// joinWordsWithSpace(["apple", "banana", "cherry"]) => "apple banana cherry"
const joinWordsWithSpace = function (words) {
  return words.reduce((element1, element2) => concat(element1, " " + element2));
};

// console.log(joinWordsWithSpace(["apple", "banana", "cherry"]));

// concatenateNames(["John", "Jane", "Doe"]) => "JohnJaneDoe"
const concatenateNames = function (names) {
  return names.reduce(concat, "");
};

// console.log(concatenateNames(["John", "Jane", "Doe"]));

// countVowelsInWords(["hello", "world"]) => "eoo"
const filterVowels = function (word) {
  return [...word].filter(isVowel).join("");
};

const countVowelsInWords = function (words) {
  const vowels = words.map(filterVowels);

  return vowels.reduce(concat, "");
};

// console.log(countVowelsInWords(["hello", "world"]));

// makeCamelCase(["hello", "world", "how", "are", "you"]) => "helloWorldHowAreYou"
const camelCase = function (str1, str2) {
  const str2FirstChar = str2[0];
  const str2Capitalized = str2FirstChar.toUpperCase() + str2.slice(1);

  return str1 + str2Capitalized;
};

const makeCamelCase = function (words) {
  return words.reduce(camelCase);
};

// console.log(makeCamelCase(["hello", "world", "how", "are", "you"]));

// reverseString(["apple", "banana", "cherry"]) => "elppaananabyrrehc"
const reverseString = function (words) {
  const reverseWords = words.map((word) => [...word].reverse().join(""));

  return reverseWords.reduce(concat);
};

// console.log(reverseString(["apple", "banana", "cherry"]));

// duplicateNumbers([1, 2, 3]) => [1, 1, 2, 2, 3, 3]
const duplicateNumbers = function (numbers) {
  const duplicates = numbers.map((number) => [number, number]);

  return duplicates.reduce(concat, []);
};

// console.log(duplicateNumbers([1, 2, 3]));

// concatenateArrays([[[1, 45], 2], [3, 4], [5, 6]]) => [[1, 45], 2, 3, 4, 5, 6]
const concatenateArrays = function (arrays) {
  return arrays.reduce(concat, []);
};

// console.log(concatenateArrays([[[1, 45], 2], [3, 4], [5, 6]]));

// flattenArray([[1, 45], 2], [3, 4], [5, 6]]) => [1, 45, 2, 3, 4, 5, 6]
const flattenArray = function (arrays) {};

// uniqueNumbers([1, 2, 2, 3, 4, 4, 5]) => [1, 2, 3, 4, 5]
const pushUniqueElements = function (list, element) {
  if (!list.includes(element)) {
    list.push(element);
  }
  return list;
};

const uniqueNumbers = function (numbers) {
  return numbers.reduce(pushUniqueElements, []);
};

console.log(uniqueNumbers([1, 2, 2, 3, 4, 4, 5]));

// groupByLength(["apple", "banana", "cherry", "date"]) => { 5: ["apple", "cherry"], 6: ["banana"], 4: ["date"] }
const groupByLength = function (strings) {};

// countOccurrences(["apple", "banana", "cherry", "banana"]) => { apple: 1, banana: 2, cherry: 1 }
const countOccurrences = function (strings) {};

// mergeObjects([{ a: 1, b: 2 }, { b: 3, c: 4 }, { a: 5 }]) => { a: 6, b: 5, c: 4 }
const mergeObjects = function (objects) {};

// zip(["a", "b", "c"], [1, 2, 3]) => { "a": 1, "b": 2, "c": 3 }
const zip = function (keys, values) {};

// makeObject(["city", "country"], ["Paris", "France"]) => { "city": "Paris", "country": "France" }
const makeObject = function (keys, values) {};

// invertObject({ "a": 1, "b": 2, "c": 3 }) => { 1: "a", 2: "b", 3: "c" }
const invertObject = function (obj) {};

// mergeArrays([["a", 1], ["b", 2]], [["c", 3], ["d", 4]]) => { "a": 1, "b": 2, "c": 3, "d": 4 }
const mergeArrays = function (arr1, arr2) {};

// groupByProperty([{name: "John", age: 25}, {name: "Jane", age: 30}]) => { 25: [{name: "John", age: 25}], 30: [{name: "Jane", age: 30}] }
const groupByProperty = function (objects) {};

// ascendingGroups([1,2,3,4,3,4,5,10,6,7,8,9]) => [[1,2,3,4],[3,4,5],[10],[6,7,8,9]]
const ascendingGroups = function (numbers) {};

// flattenToObject([['a', 1], ['b', 2], ['c', 3]]) => { a: 1, b: 2, c: 3 }
const flattenToObject = function (pairs) {};

// longestString(["apple", "banana", "cherry", "dates"]) => "banana"
const longestString = function (strings) {};

// mergeIntervals([[1,3], [2,4], [5,7]]) => [[1, 4], [5, 7]]
const mergeIntervals = function (intervals) {};

// sumAndCount([1, 2, 3, 4]) => { sum: 10, count: 4 }
const sumAndCount = function (numbers) {};

// deepFlatten([[1,2], [3,4, [5,6]], 7]) => [1,2,3,4,5,6,7]
const deepFlatten = function (arr) {};

// findMax([1, 2, 3, 4, 5]) => 5
const findMax = function (numbers) {};

// cumulativeSum([1,2,3,4]) => [1, 3, 6, 10]
const cumulativeSum = function (numbers) {};

// equalChunksOfAtLeast([1, 1, 1, 2, 2, 5, 1, 1]) => [[1,1,1], [2,2], [1,1]]
const equalChunksOfAtLeast = function (numbers) {};

// groupByType([1, 'a', 2, 'b', 3, 'c', 4]) => { number: [1, 2, 3, 4], string: ['a', 'b', 'c'] }
const groupByType = function (array) {};

// runningAverages([1, 2, 3, 4]) => [1, 1.5, 2, 2.5]
const runningAverages = function (numbers) {};

// flattenObject({a: {b: {c: 1}}, d: {e: 2}}) => { 'a.b.c': 1, 'd.e': 2 }
const flattenObject = function (obj) {};

// splitIntoSubarrays([1,2,3,4,5,6,7], 3) => [[1,2,3], [4,5,6], [7]]
const splitIntoSubarrays = function (arr, size) {};

// groupByFirstLetter(["apple", "banana", "cherry", "date"]) => { a: ["apple"], b: ["banana"], c: ["cherry"], d: ["date"] }
const groupByFirstLetter = function (words) {};

// findFirstNonRepeated([1,2,3,4,2,1,5]) => 3
const findFirstNonRepeated = function (numbers) {};

// countVowels(["apple", "banana", "grape"]) => { a: 6, e: 3, i: 0, o: 0, u: 0 }
const countVowels = function (words) {};

// mergeConsecutiveDuplicates([1,1,1,2,3,3,4]) => [1,2,3,4]
const mergeConsecutiveDuplicates = function (array) {};

// longestConsecutiveSubsequence([1, 2, 0, 1, 3, 4, 5]) => [0, 1, 2, 3, 4, 5]
const longestConsecutiveSubsequence = function (numbers) {};

// topKFrequent([1,1,1,2,2,3], 2) => [1, 2]
const topKFrequent = function (numbers, k) {};

// nestedAverage([[[1, 2]], [3, 4], [5, [6, 7]]]) => 4
const nestedAverage = function (nestedNumbers) {};

// cartesianProduct([1, 2], ['a', 'b']) => [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
const cartesianProduct = function (arr1, arr2) {};

// groupByDate([{ date: '2024-01-01', value: 10 }, { date: '2024-01-01', value: 20 }, { date: '2024-01-02', value: 30 }]) => { '2024-01-01': [10, 20], '2024-01-02': [30] }
const groupByDate = function (records) {};

// findMinMax([1, 2, 3, 4, 5]) => { min: 1, max: 5 }
const findMinMax = function (numbers) {};

// sumByCategory([{ category: 'A', value: 10 }, { category: 'B', value: 20 }, { category: 'A', value: 30 }]) => { A: 40, B: 20 }
const sumByCategory = function (items) {};
