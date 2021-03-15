function twoNumberSum(array, targetSum) {
  const nums = {};
  for (let num of array) {
    let potentialMatch = targetSum - num;
    if (potentialMatch in nums) {
      return [num, potentialMatch];
    } else {
      nums[num] = "whatever";
    }
  }
  return [];
}
