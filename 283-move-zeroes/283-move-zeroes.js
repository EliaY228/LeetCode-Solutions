var moveZeroes = function(nums) {
     let left = 0
    for(let i = 0; i < nums.length; i++) {
        if(nums[i]) {
            [nums[left], nums[i]] = [nums[i], nums[left]]
            left++
        }
    }
};