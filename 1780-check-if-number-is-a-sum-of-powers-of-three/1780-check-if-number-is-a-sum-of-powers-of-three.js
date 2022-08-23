var checkPowersOfThree = function(n) {
        
  while(n){
    if(n % 3 == 1 || n % 3 == 0){
        n = parseInt(n / 3);
    } else {
        return false;
    }
}
return true;
    
};