const array = [88, 44, 32, 30, 31, 19, 74];

function average(array, lowValue, highValue) {
    let sum = 0;
    let n = 0;

    for (let i = 0; i < array.length; i++) {
        let num = array[i];
        if (num >= lowValue && num <= highValue) {
            console.log('this number is include:  '+num);
            sum += num;
            n++
        }// End if
    }// End for loop
    console.log('this is sum: '+ sum);
    console.log('this is n: '+ n);
    
    averageOfNums = sum / n;
    return averageOfNums
}// End function

console.log('Average: '+average(array, 30, 35)) // 31
