var plusOne = function(digits) {
    let arr= BigInt(digits.join('')) +1n;
    let output = arr.toString().split('');
    return output.map(item => {
        return (Number(item))
    })
};