const divideNumbers = (num1, num2) => {
    return new Promise((resolve, reject) => {
        try {
            if (num2 === 0) {
                throw new Error("Cannot divide by zero.");
            }

            resolve(num1 / num2);
        } catch (error) {
            reject(error);
        }
    });
};


const num1 = Number(prompt("Enter the first number:"));
const num2 = Number(prompt("Enter the second number:"));

const calculateDivision = async () => {
    try {
        const result = await divideNumbers(num1, num2);
        console.log("Result:", result);
    } catch (error) {
        console.log("Error:", error.message);
    }
};

calculateDivision();