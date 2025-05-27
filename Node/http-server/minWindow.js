/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    // 初始化哈希表，统计 t 中每个字符的频率
    const tCount = new Map();
    for (let char of t) {
        tCount.set(char, (tCount.get(char) || 0) + 1);
    }
    
    // 初始化滑动窗口
    let left = 0, right = 0;
    let required = tCount.size; // t 中独特字符的数量
    let formed = 0; // 当前窗口中满足 t 需求的字符数
    let windowCounts = new Map(); // 窗口中字符的频率
    let minLength = Infinity, minWindow = "";
    
    // 外循环：扩展窗口
    while (right < s.length) {
        // 将 right 指向的字符加入窗口
        let char = s[right];
        windowCounts.set(char, (windowCounts.get(char) || 0) + 1);
        
        // 如果当前字符是 t 需要的，且频率匹配，增加 formed
        if (tCount.has(char) && windowCounts.get(char) === tCount.get(char)) {
            formed++;
        }
        
        // 内循环：当窗口满足条件时，尝试收缩
        while (formed === required && left <= right) {
            // 更新最小窗口
            if (right - left + 1 < minLength) {
                minLength = right - left + 1;
                minWindow = s.slice(left, right + 1);
            }
            
            // 移除 left 指向的字符
            let leftChar = s[left];
            windowCounts.set(leftChar, windowCounts.get(leftChar) - 1);
            
            // 如果移除的字符是 t 需要的，且频率低于要求，减少 formed
            if (tCount.has(leftChar) && windowCounts.get(leftChar) < tCount.get(leftChar)) {
                formed--;
            }
            
            left++; // 收缩窗口
        }
        
        right++; // 扩展窗口
    }
    
    // 如果未找到有效窗口，返回空字符串
    return minLength === Infinity ? "" : minWindow;
};