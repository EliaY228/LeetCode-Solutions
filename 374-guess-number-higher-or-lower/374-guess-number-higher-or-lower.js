var guessNumber = function(n) {
    
    var left=0;
    var right= n;
    
    while(left<=right) {
        let mid = Math.floor((left+right) / 2);
        let guessNum = guess(mid)
        if(guessNum === 0) return mid;
        else if(guessNum === -1) right= mid-1;
        else left= mid+1
    }
	return 0;
};