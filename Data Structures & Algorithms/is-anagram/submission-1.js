class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length != t.length) {
            return false;
        }
        let hashMap = new Map();

        for (let i in s) {
            hashMap.set(s[i], (hashMap.get(s[i]) || 0) + 1);
            // if (!hashMap.has(s[i])) {
            //     hashMap.set(s[i], 1);
            // } else {
            //     hashMap.set(s[i], hashMap.get(s[i]) + 1 || 1);
            // }
        }
        for (let i in t) {
            //  console.log(hashMap.has(t[i]))
            // if (!hashMap.has(t[i])) {
            //     return false;
            // } else if (hashMap.get(t[i]) === 0) {
            //     return false;
            // }
            if (!hashMap.has(t[i]) || hashMap.get(t[i]) === 0) {
                return false;
            } else if (hashMap.get(t[i])) {
                hashMap.set(t[i], hashMap.get(t[i]) - 1);
            }
        }

        console.log(hashMap);

        return true;
    }
}
