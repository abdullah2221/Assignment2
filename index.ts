// Assignment for this week is:
//  - Write a program to convert the temperature from Celsius to Fahrenheit and vice verse.


//celsius to fahrenheit
const temperatureConversion = (celsius: number) => {

    let fahrenheit = (celsius * 9 / 5) + 32;
    console.log(`The conversion from C To F is ${fahrenheit}`);
}
temperatureConversion(19)

// Fahrenheit to celsius
const tempFtoC = (fahrenheit: number) => {
    let celcius = ((fahrenheit - 32) * 5) / 9;
    console.log(`The conversion from F To C is ${Math.floor(celcius)}`);

}
tempFtoC(-60);



//  - Write a program that calculates the percentage.
const calculatePercentage = (obtain: number, total: number) => {
    const result = (100 * obtain) / total;
    console.log(`The Percentage is ${result}`);
}
calculatePercentage(350,500)
//  - Write a program that converts given number of days in to weeks and days such as 17 days = 2 weeks and 3 days.

const convertDaysToweeks = (days: number) => {
    let weeks = days / 7;
    weeks = Math.floor(weeks)
    let remainingDays = days % 7;
    console.log(`You provide ${days} days which conver to ${weeks} weeks and  ${remainingDays} days`);

}
convertDaysToweeks(48);


//  - Write a program that calculates the discount for a product based on its price. If the price is above $100, apply a 10% discount; otherwise, apply a 5% discount.


// using Ternory Operator
const calculateDiscount = (price: number) => {
    let discount = price > 100 ? 0.1 : 0.05;
    let discount_amount = price * discount;
    let actual_amount = price - discount_amount;

    console.log(`THe actual value of product after discount is ${actual_amount} and the Discount Amount is ${discount_amount}`)

}

calculateDiscount(6044);


//using If else condition

const calculateDiscountUsingIFelse = (price: number) => {
    let discount;

    if (price > 100) {
        discount = 0.1; // 10% discount
    } else {
        discount = 0.05; // 5% discount
    }

    let discount_amount = price * discount;
    let actual_amount = price - discount_amount;
    console.log(`THe actual value of product after discount is ${actual_amount} and the Discount Amount is ${discount_amount}`)
}

calculateDiscountUsingIFelse(60);

//  - Create a program that determines the category of a user-provided age. If the age is between 0 and 12, print "Child." If it's between 13 and 19, print "Teenager." Otherwise, print "Adult."

// By using Ternery Operator
const determineAgeCategory1 = (age: number) => {
    let member = age < 0 ? 'Enter the wrong age' : (age >= 0 && age <= 12) ? "CHild" : (age >= 13 && age <= 19) ? "Teenage" : "Adult";
    console.log(member)
}
determineAgeCategory1(2);


// using if else Condition
const determineAgeCategory2 = (age: number) => {
    let member;

    if (age < 0) {
        member = 'Enter the wrong age';
    } else if (age >= 0 && age <= 12) {
        member = "Child";
    } else if (age >= 13 && age <= 19) {
        member = "Teenager";
    } else {
        member = "Adult";
    }

    console.log(member);
};

determineAgeCategory2(21);


//  - Write a program that takes temperature and check it. If it is cold then suggest the user to wear warm clothes and so on according to the weather.
//By Switch Statment
const suggestClothing = (temperature: number) => {
    let suggestion: string;

    switch (true) {
        case (temperature <= 0):
            suggestion = "It's very cold. Wear heavy winter clothing.";
            break;
        case (temperature <= 30):
            suggestion = "It's warm. You can wear a t-shirt and shorts.";
            break;
        default:
            suggestion = "It's hot outside. Wear light and breathable clothing.";
    }

    console.log(suggestion);
};

// Test the temperature suggestions
const currentTemperature = 15;
suggestClothing(currentTemperature);



//  - Write a program that checks if the given number is  divisible by 3 or 5 or both or not divisible by anyone show output accordingly.
const checkNumber = (num: number) => {
    if (num % 3 == 0 || num % 5 == 0) {
        console.log(`The number is ${num} is divisible  by 3 or 5`)
    } else {
        console.log(
            `The number is ${num}, it is neither divisible`
        )
    }

}
checkNumber(24)

//  - Write a program that checks if the given year is leap year or not.
const leapYear = (year: number) => {
    if (year % 4 == 0) {
        console.log(`The Year ${year} is a Leap year`)
    }
    else {
        console.log(`${year} is Not a Leap Year`);
    }

}
leapYear(2011)
//  - Develop a program that determines the day of the week. Ask the user for a number (1-7) and use nested if statements to print the corresponding day's name.
const determineDayOfWeek = (dayNumber: number) => {
    let dayName: string;

    if (dayNumber === 1) {
        dayName = "Sunday";
    } else if (dayNumber === 2) {
        dayName = "Monday";
    } else if (dayNumber === 3) {
        dayName = "Tuesday";
    } else if (dayNumber === 4) {
        dayName = "Wednesday";
    } else if (dayNumber === 5) {
        dayName = "Thursday";
    } else if (dayNumber === 6) {
        dayName = "Friday";
    } else if (dayNumber === 7) {
        dayName = "Saturday";
    } else {
        dayName = "Invalid day number. Please enter a number between 1 and 7.";
    }

    console.log(`The number ${dayNumber} is equal to  ${dayName}`);
};


const userDayNumber = 3; // Change this to the desired day number
determineDayOfWeek(userDayNumber);

//  - Write a program that takes the number of units consumed by a user if it is greater than 100 then add 10% tax if greater than 200 then add 15% of tax so on up to if greater than 500 then add 25% of tax
// Where the tax amount will be calculated by the amount of bill.

const calculateBill = (unitConsumed: number, unitPrice: number) => {
    let totalAmount: number;
    if (unitConsumed <= 100) {
        totalAmount = unitConsumed * unitPrice;
    }
    else if (unitConsumed <= 200) {
        totalAmount = unitConsumed * unitPrice + (unitConsumed * unitPrice * 0.1)
    } else if (unitConsumed <= 500) {
        totalAmount = unitConsumed * unitPrice + (unitConsumed * unitPrice * 0.15)
    }
    else {
        totalAmount = unitConsumed * unitPrice + (unitConsumed * unitPrice * 0.25)
    }
    console.log(`Total bill including tax: Rs${totalAmount}`);
}
const consumedUnits = 500;
const PriceUnit = 1
// Change this to the number of units consumed
calculateBill(consumedUnits, PriceUnit);