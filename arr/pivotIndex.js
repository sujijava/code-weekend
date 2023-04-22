/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let totalSum = 0;
  let currSum = 0;
  for (let i = 0; i < nums.length; i++) {
    totalSum = totalSum + nums[i];
  }
  for (let i = 0; i < nums.length; i++) {
    if (currSum * 2 === totalSum - nums[i]) {
      return i;
    }
    currSum = currSum + nums[i];
  }
  return -1;
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
