class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        //    nums = [1, 2, 3, 3]
        let value = new Set();

        for (let i = 0; i < nums.length; i++) {
            if (value.has(nums[i])) {
                return true;
            }

            value.add(nums[i]);
        }

        return false;
    }
}
