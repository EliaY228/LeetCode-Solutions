var singleNumber = function(nums) {
    let j = 0;
    for (let i =0 ; i< nums.length; i++) {
        j ^= nums[i];
    }
    return j;
};