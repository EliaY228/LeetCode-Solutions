var majorityElement = function(nums) {
  
    var n = parseInt(nums.length/2);
    nums.sort();
    return nums[n]
};