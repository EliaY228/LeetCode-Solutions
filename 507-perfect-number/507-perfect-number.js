var checkPerfectNumber = function(num) {
    if (num <= 1) return false;
            
    var sum = 1;
    var start = 2, end = num/2;
        
    while (start <= end) {
      if (num % start == 0) {
        sum += start;
        sum += num/start;
        end = num/start -1;
        }
            start ++;
        }
        return sum == num;
};