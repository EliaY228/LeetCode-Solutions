var searchInsert = function(nums, target) {
    var output = 0;
    if (nums.includes(target)) {
        return nums.indexOf(target)
    } else {
        for (let i=0; nums[i]<target;i++){
            output+=1;
        }
        return output;
    }
};