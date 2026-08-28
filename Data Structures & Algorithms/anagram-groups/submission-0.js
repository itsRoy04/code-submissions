class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */

    getSignatureWord(str) {
        const sortedWord = str.split("").sort();
        let hashMap = new Map();

        for (let i of sortedWord) {
            hashMap.set(i, hashMap.get(i) + 1 || 1);
        }

        let signature = ""
        for(let [char,count] of  hashMap.entries()){
            signature += `${char}`+`${count}`
        }

        // console.log(signature);

        return signature
    }

    groupAnagrams(strs) {
        let hashMap = new Map();

        for (let i of strs) {
            let signature = this.getSignatureWord(i);
            

             if (!hashMap.has(signature)) {
                hashMap.set(signature, []);
            }

            hashMap.get(signature).push(i);

                
        }

      console.log(hashMap)

  


        return Array.from(hashMap.values())
    }
}
