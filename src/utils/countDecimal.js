function countDecimal(number) {
    // Convert the number to a string
    const numberString = number.toString();

    // Check if the number is a floating-point number
    if (numberString.includes('.')) {
        // Find the index of the decimal point
        const decimalIndex = numberString.indexOf('.');

        // Count the characters after the decimal point
        const decimalPlaces = numberString.length - decimalIndex - 1;

        return decimalPlaces;
    } else {
        // If the number is an integer, return 0
        return 0;
    }
}


export default countDecimal