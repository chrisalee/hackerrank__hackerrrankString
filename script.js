/*
 * Complete the 'hackerrankInString' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function hackerrankInString(s) {
    const hackerrank = 'hackerrank';
    let hackerIdx = 0;
    for(let i = 0; i < s.length; i++) {
      if(hackerrank[hackerIdx] === s[i]) {
        hackerIdx++;
      }
    }
    if(hackerIdx === hackerrank.length) {
      return 'YES';
    } else {
      return 'NO';
    }
}
