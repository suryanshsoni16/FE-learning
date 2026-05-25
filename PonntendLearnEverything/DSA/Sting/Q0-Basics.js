// JAVASCRIPT STRING BASICS FOR DSA

// 1. Create String
let str = "hello";

// 2. Access Characters
console.log(str[0]); // h
console.log(str[1]); // e

// 3. Length
console.log(str.length); // 5

// 4. Traverse String

// normal loop
for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
}

// for...of loop
for (let ch of str) {
  console.log(ch);
}

// 5. Strings are Immutable
// str[0] = 'H'; ❌ not allowed

// 6. String -> Array
let arr = str.split("");
console.log(arr);

// ['h','e','l','l','o']

// 7. Array -> String
let newStr = arr.join("");
console.log(newStr);

// 8. Reverse String
let reversed = str.split("").reverse().join("");
console.log(reversed);

// olleh

// 9. Lowercase / Uppercase
console.log(str.toLowerCase());
console.log(str.toUpperCase());

// 10. includes()
let lang = "javascript";

console.log(lang.includes("script"));
// true

// 11. slice()
console.log(lang.slice(0, 4));
// java

// 12. replace()
let text = "hello world";

console.log(text.replace("world", "JS"));
// hello JS

// 13. trim()
let msg = "   hello   ";

console.log(msg.trim());
// hello
