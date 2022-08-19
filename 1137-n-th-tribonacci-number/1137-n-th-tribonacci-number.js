var tribonacci = function(n) {
    if (n ==0) return n
    else if (n==1 || n==2) return 1
    else {
        let result = [0,1,1]
    
    for(let i = 3; i<=n; i++) {
        result[i] = result[i-1] + result[i-2] + result[i-3]
    }
    
    return result[n]
    }
};

