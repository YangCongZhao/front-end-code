// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// var isValid = function(s) {
//     const map = {
//         '(':')',
//         "{":"}",
//         "[":"]"
//     }
//     let isAll = false
//     for(let i  = 0 ;i<s.length;i++){
//         let currentStr = s[i];
//         if(currentStr!==undefined && map[currentStr]!==undefined){
//             if(i+1!==s.length){
//                 for(let j  = i+1 ;j<s.length;j++){
//                     let findStr = s[j];
//                     if(findStr!==undefined && map[currentStr]===findStr){
//                         isAll = true
//                     }
//                 }
//             }else{
//                 isAll = false
//             }
//         }
      
//     }
//     return isAll
// };

// console.log(isValid("([)]"))


/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const map = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    for (let char of s) {
        if (map[char]) {
            stack.push(map[char]);
        } else if (stack.length === 0 || stack.pop() !== char) {
            return false;
        }
    }

    return stack.length === 0;
}

console.log(isValid("([)]"))