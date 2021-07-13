/**
 * 
 * @param {String} str 
 * @returns the longest word in the string.
 */
function longestWord(str) {
   let arrStr = str.split(" ")
   let arrNums = []
   arrStr.forEach(word => {
      arrNums.push(word.length)
   })
   let numPos = arrNums.indexOf(Math.max(...arrNums))
   console.log(arrStr[numPos])
   return arrStr[numPos]
}