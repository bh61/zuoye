/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const frequency = {}
    // 统计s中每个字符串出现的次数，以键值对的形式存在一个对象中
    for (const ch of s) {
        frequency[ch] = (frequency[ch] || 0) +1
    }
    for (let i = 0; i < s.length; i++) {
        if (frequency[s[i]] === 1) {
            return i
        }
    }
    return -1
};
