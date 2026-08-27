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


for (let i=0; i<5; i++) {
    const num1 = Number(prompt(`Test Case ${i+1} -> Enter First Number`));
    const num2 = Number(prompt(`Test Case ${i+1} -> Enter Second Number`));
    
    divideNumbers(num1, num2)
    .then((result) => {
        console.log(`Test Case ${i+1} : dividing ${num1} by ${num2}\nResult:`, result);
    })
    .catch((error) => {
        console.log(`Test Case ${i+1} : dividing ${num1} by ${num2}\nError:`, error.message);
    });
}
