/**
 * Takes in two values and returns if they are equal or not
 * @param {*} a - The first element.
 * @param {*} b - The second element.
 * @returns {boolean} - Is a equal to b.
 */

const isEqual = (value1, value2) => value1 === value2 ? true : false

/**
 * Takes in two numbers and returns the larger number
 * The numbers are guaranteed to be unique
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} - The larger number.
 */

const findLarger = (num1, num2) => num1 > num2 ? num1 : num2

/**
 * Takes in two numbers and returns the larger number
 * Returns the string "tie" if both numbers are the same
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number|string } - The larger number or string "tie"
 */
const findLargerOrTie = (num1, num2) => {
  if (num1 === num2) {
    return "tie"
  } else if (num1 > num2) {
    return num1
  } else {
    return num2
  }
}

/**
 * Takes in a number and returns whether that number is positive, negative, or equal to 0.
 * @param {number} a - The number.
 * @returns {string} - "Positive, Negative, "Zero""
 */
const positiveNegativeOrZero = num => {
  if (num === 0) {
    return "Zero"
  } else if (num > 0) {
    return "Positive"
  } else {
    return "Negative"
  }
}

/**
 * Takes in a language (e.g "english", "spanish", "german") and returns "Hello World" in that language.
 * Must work for at least english, spanish, and german.
 * It should default to English if no argument is passed in.
 * Translations: English -> "Hello World"
 *               Spanish -> "Hola Mundo"
 *               German -> "Hallo Welt"
 * @param {string} language - The language.
 * @returns {string} - "Hello World" in the desired language
 */

/*line 69 was an else statement does it really 
return the param set to "english as a default?"*/
const aroundTheWorldGreeting = (language = "english") => {
  if (language === "german") {
    return "Hallo Welt"
  } else if (language === "spanish") {
    return "Hola Mundo"
  } else if (language === "english") {
    return "Hello World"
  } 
}

/**
 * Takes in a language (e.g "english", "spanish", "german") and returns "Hello World" in that language.
 * Must work for at least english, spanish, and german.
 * It should default to English if no argument is passed in.
 * Translations: English -> "Hello World"
 *               Spanish -> "Hola Mundo"
 *               German -> "Hallo Welt"
 * Uses a switch statement in its implementation
 * @param {string} language - The language.
 * @returns {string} - "Hello World" in the desired language
 */

/* this past the test but does it really meet the instrutions? */
const aroundTheWorldGreetingWithSwitch = language => {
  switch (language) {
    case "spanish" :
      return "Hola Mundo"
    case "german" :
      return "Hallo Welt"
    default :
      return "Hello World"
  }
}

/**
 * Takes in a number and returns the letter grade corresponding to that number.
 * Letter grades consist of "A", "B", "C", "D", or "F"
 * 90 and above is an A
 * 80 and above is a B
 * 70 and above is a C
 * 60 and above is a D
 * Anything lower than 60 is an F
 * @param {number} grade - The numeric grade.
 * @returns {string} - The letter grade corresponding to the numeric grade.
 */
const calculateLetterGrade = (grade) => {
  if (grade >= 90) {
    return "A"
  } else if (grade >= 80) {
    return "B"
  } else if (grade >= 70) {
    return "C"
  } else if (grade >= 60) {
    return "D"
  } else {
    return "F"
  }
}

/**
 * Takes in two variables: animal ('cat', 'dog', etc.) and numberOfAnimals.
 * Use an if - else to statement to return the
 * number and animal (in either single or plural form)
 * Exp: "5 cats" or "1 dog"
 * Bonus: Make it handle a few collecting nouns like "sheep" and "geese"
 * @param {string} animal - The type of animal.
 * @param {number} numberOfAnimals - The number of animals.
 * @returns {string} - the number and animal (in either single or plural form)
 */
const animalCounts = () => {}


/**
 * Takes in a number and returns whether that number is even or odd
 * @param {number} a - The number.
 * @returns {string} - "Even or Odd"
 */
const evenOrOdd = () => {}

/**
 * Takes in a number and returns whether that number is even or odd
 * Uses a ternary in its implementation
 * @param {number} a - The number.
 * @returns {string} - "Even or Odd"
 */
const evenOrOddWithTernary = () => {}

/**
 * Takes in two numbers and returns the larger number
 * The numbers are guaranteed to be unique
 * Uses a ternary in its implementation
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} - The larger number.
 */
const findLargerTernary = () => {}



module.exports = {
  isEqual,
  findLarger,
  findLargerOrTie,
  positiveNegativeOrZero,
  aroundTheWorldGreeting,
  aroundTheWorldGreetingWithSwitch,
  calculateLetterGrade,
  animalCounts,
  evenOrOdd,
  evenOrOddWithTernary,
  findLargerTernary,
};
