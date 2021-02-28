module.exports = function check(str, bracketsConfig) {
  if (strIsCurrupt(str)) return false;
  
  let arr = convertStrToArr(str);
  while (arr.length) {
    let goodPair = findGoodPairIn(arr);
    if (!goodPair) {
      return false;
    }
    arr.splice(goodPair[0], 2);
  }
  return true;


  function findGoodPairIn(arr) {
    let goodPair = null;
  
    for (let i = 0; i < arr.length - 1; i++) {
      for (config of bracketsConfig) {
        let expr1 = arr[i] == config[0];
        let expr2 = arr[i + 1] == config[1];
        if (expr1 && expr2) goodPair = [i, i + 1];
      }
    }
    return goodPair
  }
  function convertStrToArr(str) {
    let arr = [];
    for (element of str) arr.push(element);
    return arr;
  }

  function strIsCurrupt(str) {
    if (str.length % 2) return true;
    return false;
  }
}
