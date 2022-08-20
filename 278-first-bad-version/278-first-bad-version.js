var solution = function(isBadVersion) {
    return function(n) {
        let ceiling = n
        let floor = 1
        let firstBadVersion = -1
        
        while (floor <= ceiling) {
            const middle = Math.floor((ceiling + floor) / 2)
            
            if (isBadVersion(middle)) {
                
                firstBadVersion = middle
                ceiling = middle - 1
            } else  {                
                floor = middle + 1
            }
        }
        
        return firstBadVersion
    };
};