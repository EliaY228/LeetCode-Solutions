var maximumWealth = function(accounts) {
    let output = 0;
    let sum =0;
    for (let x=0; x< accounts.length ; x++){
        for (let y=0; y< accounts[x].length; y++){
            sum += accounts[x][y];
            
        }
        if (sum > output) { output = sum}
        sum = 0;
    }  
    
    return output;
};