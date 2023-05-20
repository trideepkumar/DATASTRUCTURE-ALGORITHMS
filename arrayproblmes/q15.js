// Hercy wants to save money for his first car. He puts money in the Leetcode bank every day.
// He starts by putting in $1 on Monday, the first day. Every day from Tuesday to Sunday, he will put in $1 more than the day before. On every subsequent Monday, he will put in $1 more than the previous Monday.
// Given n, return the total amount of money he will have in the Leetcode bank at the end of the nth day.
// Example 1:
// Input: n = 4
// Output: 10
// Explanation: After the 4th day, the total is 1 + 2 + 3 + 4 = 10.


var totalMoney = function(n) {
    let sum = 0
    /* calculating days and weeks */
    const week = Math.floor(n/7)
    const days = n%7 
    
    /* if we have atleast 1 week then take the sum of weeks */
    if(week > 0) sum = week*(week+1)*7/2 +( week*21)
    
    /* calculating money in remaining days */
    sum += ((week + days)*(week + days + 1)/2) - (week*(week+1)/2) 
    
    return sum 
    };