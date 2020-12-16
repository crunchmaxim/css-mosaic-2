var numberToPrice = function (number) {
    if (typeof(number) !== 'number') return 'NaN';
  
    number = number.toString().split('.');

    let result = '';
    let mainPart = '';
    let centsPart = '';

    number[0].split('').reverse().forEach((item, index) => {
        if ((index + 1) % 3 === 0) {
            mainPart += item + ',';
        } else {
            mainPart += item;
        }
    })
    mainPart = mainPart.split('').reverse().join('');
    mainPart = mainPart;

    if (number[1] && number[1].substring(0, 2).length === 1) {
        centsPart = number[1].substring(0, 2)+'0';
    } else if (number[1]) {
        centsPart = number[1].substring(0, 2)
    } else {
        centsPart = '00';
    }

    result = mainPart + '.' + centsPart;
    return result;
}

console.log(numberToPrice(13253.5123));

// var price = numberToPrice(13253.5123);
// console.log(price); // 13,253.51