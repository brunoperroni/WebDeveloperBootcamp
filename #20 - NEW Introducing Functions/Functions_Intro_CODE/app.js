function singSong() {
    console.log("DO");
    console.log("RE");
    console.log("MI");
}

function greet(firstName, lastName) {
    console.log(`Hey there, ${firstName} ${lastName[0]}.`)
}

function repeat(str, numTimes) {
    let result = '';
    for (let i = 0; i < numTimes; i++) {
        result += str;
    }
    console.log(result);
}

function add(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        return false;
    }
    return x + y;
}

function printHeart() {
    console.log('<3');
}

function rant(message) {
    console.log(`${message.toUpperCase()}`);
    console.log(`${message.toUpperCase()}`);
    console.log(`${message.toUpperCase()}`);
}

function isSnakeEyes(num1, num2) {
    if (num1 === 1 && num2 === 1) {
        console.log("//Snake Eyes!")
    } else {
        console.log("//Not Snake Eyes!")
    }
}

function multiply(num1, num2) {
    const result = num1 * num2;
    return result;
}

function isShortsWeather(temperature) {
    if (temperature >= 75)
        return true;
    else
        return false;
}

function lastElement(...elements) {
    if (elements.length === 0) {
        return false;
    } else {
        console.log([...elements].pop())
    }
}

function capitalize(text) {
    let firstLetter = text.substring(1, 0)
    let textLast = text.substring(1)
    let fullText = firstLetter.toUpperCase() + textLast

    return fullText;
}

function sunArray(...numbers) {
    let total = 0;
    for (let soma of numbers) {
        total += soma;
    }
    return total;
}

function returnDay(day) {
    let weekDay = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

    if (day === 1) {
        return weekDay[0];
    } if (day === 2) {
        return weekDay[1];
    } if (day === 3) {
        return weekDay[2];
    } if (day === 4) {
        return weekDay[3];
    } if (day === 5) {
        return weekDay[4];
    } if (day === 6) {
        return weekDay[5];
    } if (day === 7) {
        return weekDay[6];
    } if (day === 0) {
        return null;
    } else {
        return false;
    }
}