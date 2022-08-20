var selfDividingNumbers = function(left, right) {
    const result = [];
    const selfDividingNumberTest = (num) => {
        return num.toString().split('').every((letter) => {
            if(Number(letter) === 0 || num % Number(letter) !== 0){
               return false; 
            }
            return true;
        })
    }
    for(let i = left; i <= right; i++){
        if(selfDividingNumberTest(i)){
            result.push(i);
        }
    }
    return result;
};