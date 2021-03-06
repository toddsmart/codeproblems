var Misc = (function () {
    /**
     * Question: write a palindrone function
     */
    var palindrone = function (text) {
        var textArray,
            firstHalf,
            secondHalf,
            halfLength;

        textArray = text.split('');

        /* remove center character if odd char count */
        if (text.length % 2 === 1) {
            textArray.splice((textArray.length - 1) / 2, 1);
        }

        halfLength = textArray.length / 2;

        firstHalf = textArray.slice(0, halfLength);
        secondHalf = textArray.slice(halfLength);

        firstHalf.reverse();

        return firstHalf.toString() === secondHalf.toString();
    };

    /**
     * Write a loop that makes seven calls to console.log to output the following triangle:
     #
     ##
     ###
     ####
     #####
     ######
     #######
     */
    var logTreePounds = function () {
        for (var pounds = '#'; pounds < '########'; pounds += '#') {
            console.log(pounds);
        }
    }

    /**
     * Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers
     * divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
     * When you have that working, modify your program to print "FizzBuzz", for numbers that are divisible by both
     * 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
     */
    var logFizzBuzz = function () {
        var fizzBuzz = '';
        for (var i = 1; i < 101; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
                console.log('FizzBuzz');
            } else if (i % 3 === 0 && i % 5 !== 0) {
                console.log('Fizz');
            } else if (i % 5 === 0 && i % 3 !== 0) {
                console.log('Buzz');
            } else {
                console.log(i);
            }
        }
    }

    /**
     * Write a program that creates a string that represents an 8�8 grid, using newline characters to separate lines.
     * At each position of the grid there is either a space or a �#� character. The characters should form a chess board.
     *
     */
    var logCheckerBoard = function () {
        var size = 8,
            fullString = '',
            rowString = '';
        for (var y = 0; y < size; y++) {
            for (var x = 0; x < size; x++) {
                if (y % 2) {
                    rowString += '# ';
                } else {
                    rowString += ' #';
                }
            }
            fullString += (rowString + '\n');
            rowString = '';
        }
        console.log(fullString);
    }

    /**
     * Write a function min that takes two arguments and returns their minimum.
     */
    var min = function (val1, val2) {
        var min;

        if (val1 < val2) {
            min = val1;
        } else {
            min = val2;
        }
        return min;
    }
    // console.log(min(0, 10));
    // ? 0
    // console.log(min(0, -10));
    // ? -10

    /**
     * We�ve seen that % (the remainder operator) can be used to test whether a number is even or odd by using % 2
     * to check whether it�s divisible by two. Here�s another way to define whether a positive whole number is even or odd:
     * Zero is even. One is odd. For any other number N, its evenness is the same as N - 2.
     *
     * Define a recursive function isEven corresponding to this description. The function should accept a number parameter and return a Boolean.
     *
     * Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?
     */
    var isEven = function (num) {
        if (num === 0) {
            return true;
        } else {
            if (num > 0) {
                return isEven(num - 2)
            } else {
                return false;
            }
        }
    };
    // console.log(isEven(50));
    // ? true
    // console.log(isEven(75));
    // ? false
    // console.log(isEven(-1));
    // ? false

    /**
     * You can get the Nth character, or letter, from a string by writing "string".charAt(N), similar to how you get its
     * length with "s".length. The returned value will be a string containing only one character (for example, "b").
     * The first character has position zero, which causes the last one to be found at position string.length - 1.
     * In other words, a two-character string has length 2, and its characters have positions 0 and 1.
     *
     * Write a function countBs that takes a string as its only argument and returns a number that indicates how many
     * uppercase �B� characters are in the string.
     * Next, write a function called countChar that behaves like countBs, except it takes a second argument that
     * indicates the character that is to be counted (rather than counting only uppercase �B� characters).
     * Rewrite countBs to make use of this new function.
     */
    var countChar = function (text, character) {
        var count = 0,
            index;
        for (index = 0; index < text.length; index++) {
            if (text.charAt(index) === character) {
                count++;
            }
        }
        return count;
    }
    // console.log(countChar("kakkerlak", "k"));
    // ? 4

    /**
     * Write a range function that takes two arguments, start and end, and returns an array containing all the numbers
     * from start up to (and including) end.
     *
     * @param {Number} start The starting range number
     * @param {Number} end The ending range number
     * @returns {Array} an array containing the range of numbers
     */
    var range = function (start, end) {
        var range = [],
            index;
        for (index = start; index < range; index++) {
            range.push(index);
        }
        return range;
    }

    /**
     * Write a sum function that takes an array of numbers and returns the sum of these numbers.
     */

    return {
        palindrome : palindrone,
        isEven : isEven,
        countChar : countChar,
        range : range
    }
}());

/* exports if node is in use */
if (module) {
    module.exports.Misc = Misc;
}