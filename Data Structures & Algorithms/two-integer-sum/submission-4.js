class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let difference = 0
        let hashMap = new Map()

        for (let i = 0; i < nums.length; i++) {
            difference = target - nums[i] // 10 -5 = 5 , 
             if (hashMap.has(difference)){
                 return [hashMap.get(difference), i];
             }
             hashMap.set(nums[i], i); // 5 1
        }

        return [-1, -1];
    }
}
