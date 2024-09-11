function calculateFinalScore(obj) {
    // Check if the input is an object
    if (typeof obj !== 'object' || obj === null) {
        return "Invalid Input";
    }

    // Destructure properties from the input object
    const { name, testScore, schoolGrade, isFFamily } = obj;

    // Validate properties
    if (typeof name !== 'string' || typeof testScore !== 'number' || typeof schoolGrade !== 'number' || typeof isFFamily !== 'boolean') {
        return "Invalid Input";
    }

    // Validate ranges
    if (testScore < 0 || testScore > 50 || schoolGrade < 0 || schoolGrade > 30) {
        return "Invalid Input";
    }

    // Calculate the final score
    let finalScore = testScore + schoolGrade;
    if (isFFamily) {
        finalScore += 20;
    }

    // Check if the final score meets the admission criteria
    return finalScore >= 80;
}

// Example usage with obj parameter
const obj = { name: "Rajib", testScore: 15, schoolGrade: 25, isFFamily: true };
console.log(calculateFinalScore(obj)); // Output: false
