// Student Name: Henrique Custodio
// Student ID: 101497015
// Date: Friday September 5th 2025

// All excercise questions are included in the following file.
// The questions have been answered as functions, called at the end of the file.

// Exercise 1
function captializeFirst(str) {
    if (str.length === 0) return str;
    const firstChar = str.charAt(0).toUpperCase();
    const restOfString = str.slice(1);
    return firstChar + restOfString;
}

// Exercise 2
function largestOfThree(a, b, c) {
    const largest = Math.max(a, b, c);
    return largest;
}

// Exercise 3
function moveChars(str) {
    if (str.length === 0) return str;
    const lastThree = str.slice(-3);
    const remString = str.slice(0, -3);
    return lastThree + remString;
}

// Exercise 4
function matchAngles(num) {
    if (num < 0 || num > 360) {
        return "Invalid angle";
    } else if (num >= 0 && num < 90) {
        return "Acute Angle";
    } else if (num > 90 && num < 180) {
        return "Obtuse Angle";
    } else if (num === 90) {
        return "Right Angle";
    } else if (num === 180) {
        return "Straight Angle";
    } else {
        return "Angle is not defined in exercise.";
    }
}

// Exercise 5
function largestConsecutiveSum(arr, num) {
    if (arr.length < num || num <= 0) return null;

    let endPointer = num;
    let largestSumFound = arr.slice(0, num).reduce((acc, curr) => acc + curr, 0);

    for (let i = 0; i + num <= arr.length; i++) {
        const sum = arr.slice(i, i + num).reduce((acc, curr) => acc + curr, 0);
        if (sum > largestSumFound) {
            largestSumFound = sum;
        }
    }
    return largestSumFound;
}

// Test cases
console.log("\nExercise 1:");
console.log(captializeFirst("hello"));
console.log(captializeFirst("javaScript"));
console.log(captializeFirst("abc"));

console.log("\nExercise 2:");
console.log(largestOfThree(10, 20, 30));
console.log(largestOfThree(-10, -20, -5));
console.log(largestOfThree(0, 0, 0));

console.log("\nExercise 3:");
console.log(moveChars("abcdef"));
console.log(moveChars("xyzqrs"));
console.log(moveChars("beee"));

console.log("\nExercise 4:");
console.log(matchAngles(45));
console.log(matchAngles(90));
console.log(matchAngles(135));
console.log(matchAngles(180));
console.log(matchAngles(400));

console.log("\nExercise 5:");
console.log(largestConsecutiveSum([1, 2, 3, 4, 5], 2));
console.log(largestConsecutiveSum([10, -1, 2, 3, -4, 5], 3));
console.log(largestConsecutiveSum([5, 5, 9, 5, 8, 5], 4));
console.log(largestConsecutiveSum([1, 2], 3));
