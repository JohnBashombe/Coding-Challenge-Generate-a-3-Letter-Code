/**
 * Generates a 3-character code representation of a given string.
 * @param {string} inputStr - The input string (3 ≤ |inputStr| ≤ 100)
 * @returns {string} - The generated 3-character code
 */
const generateCode = (inputStr) => {
    // Ensuring the input string meets the required constraints
    if (!inputStr || inputStr.length < 3 || inputStr.length > 100) {
        throw new Error('Invalid input string. Ensure its length is between 3 and 100.');
    }

    // First character of the code is always the first character of the input string
    const firstChar = inputStr[0];

    // Getting a random index for the second character, which should be in the range [1, inputStr.length - 2]
    const secondCharIndex = getRandomInt(1, inputStr.length - 1);
    const secondChar = inputStr[secondCharIndex];

    // Getting a random index for the third character, which should come after the second character's position
    const thirdCharIndex = getRandomInt(secondCharIndex + 1, inputStr.length);
    const thirdChar = inputStr[thirdCharIndex];

    // Constructing the final code using the obtained characters
    return `${firstChar}${secondChar}${thirdChar}`;
};

/**
 * Utility function to get a random integer between min (inclusive) and max (inclusive).
 * @param {number} min - Minimum integer value (inclusive)
 * @param {number} max - Maximum integer value (inclusive)
 * @returns {number} - A random integer between min and max
 */
const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Example usage:
// const code = generateCode('challenge');
// console.log(code); // could output "cae", "clg", "cne", etc.
