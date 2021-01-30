/**
 * Takes in color and returns whether or not the color is a primary color.
 * The primary colors are "Red", "Yellow", and "Blue"
 * @param {string} color - The color.
 * @returns {boolean} - Whether the color is a primary color
 */

const isPrimaryColor = color => {
  switch (color) {
    case "red" :
      return true;
    case "blue" :
      return true;
    case "yellow" :
      return true;
    default :
      return false;
  }
}

/**
 * Takes in color and returns whether or not the color is a primary color.
 * Uses exactly one if statement in its definition
 * @param {string} color - The color.
 * @returns {boolean} - If primary color or not
 */

const isPrimaryColorOneIf = color => {
  if (color === "red".toLowerCase() || color === "yellow".toLowerCase() || color === "blue".toLowerCase()) {
    return true
  } else {
    return false
  }
}

/**
 * Takes in two words and returns the word that comes first in lexicographical order.
 * @param {string} word1 - The first word.
 * @param {string} word2 - The second word.
 * @returns {string} - The word that is smaller in lexicographical order
 */

const lexicographicalOrder = (word1, word2) => word1 < word2 ? word1 : word2;

/**
 * Takes in a word and returns "large" if its length is 5 character or more.
 * Otherwise returns "small"
 * @param {string} word
 * @returns {string} - "large" or "small"
 */

const largeOrSmall = word => word >= 5 ? "large" : "small";

/**
 * Takes in two words and returns the longer word.
 * @param {string} word1 - The first word.
 * @param {string} word2 - The second word.
 * @returns {string} - The longer word
 */

const longerWord = (word1, word2) => word1.length < word2.length ? word2 : word1;

/**
 * Takes in three words and returns the shortest word.
 * @param {string} word1 - The first word.
 * @param {string} word2 - The second word.
 * @param {string} word3 - The second word.
 * @returns {string} - The shortest word
 */

const shortestWord = (word1, word2) => {}

module.exports = {
  isPrimaryColor,
  isPrimaryColorOneIf,
  lexicographicalOrder,
  largeOrSmall,
  longerWord,
  shortestWord,
};
