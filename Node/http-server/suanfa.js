var twoSum = function(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];

};
var lengthOfLongestSubstring = function(s) {
    const map = new Map();
    let left = 0;
    let maxLength = 0;
    for (let right = 0; right < s.length; right++) {
        if (map.has(s[right])) {
            left = Math.max(left, map.get(s[right]) + 1);
        }
        map.set(s[right], right);
        maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength;
};

console.log(twoSum([3,2,4],6))

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    const map = new Map();
    for (let i = 0; i < t.length; i++) {
        map.set(t[i], (map.get(t[i]) || 0) + 1);
    }
    let left = 0;
    let right = 0;
    let minLength = Infinity;
    let minWindow = "";
    while (right < s.length) {
        if (map.has(s[right])) {
            map.set(s[right], map.get(s[right]) - 1);
            if (map.get(s[right]) === 0) {
                map.delete(s[right]);
            }
        }
        while (map.size === 0) {
            if (right - left + 1 < minLength) {
                minLength = right - left + 1;
                minWindow = s.slice(left, right + 1);
            }
            if (map.has(s[left])) {
                map.set(s[left], map.get(s[left]) + 1);
            }
            left++;
        }
        right++;
    }
    return minWindow;
};