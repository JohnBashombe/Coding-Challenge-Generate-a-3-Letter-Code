# Coding-Challenge-Generate-a-3-Letter-Code

## Problem Statement:
You are tasked with creating a JavaScript function that takes a string as input and generates a 3-letter code from that string. The code should be generated by taking the following steps:

The first character of the input string is mandatory and should be included in the code.
The second character should be randomly selected from the characters in the input string that appear after the first character. The order of appearance should be maintained, and you cannot select characters that appear before the second character in the input string.
The third character should be randomly selected from the characters in the input string that appear after the first and second characters. The order of appearance should be maintained, and you cannot select characters that appear before the third character in the input string. Additionally, you cannot select the same character position that was chosen for the second character.

## Input:
A string containing letters, spaces, and possibly other characters.
## Output:
A 3-letter code is generated following the rules mentioned above.

## Constraints:
The minimum length of the string is 3 characters
The input string can have a maximum length of 100 characters.
The input string may contain letters (both uppercase and lowercase), spaces, and other characters. However, the code should only be generated from letters, ignoring spaces and other characters.