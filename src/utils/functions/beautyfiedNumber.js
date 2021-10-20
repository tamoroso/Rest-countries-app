// Function that helps reading population number by
// adding "," between hundreds, thousands, ...

export function beautyfiedNumber(bigNumber) {
  let bigNumberArray = bigNumber.toString().split("")
    let beautyfiedBigNumber = []
    let counter = 0
    const separator = ","

    for (let i = bigNumberArray.length; i >= 0; i--){
        beautyfiedBigNumber.unshift(bigNumberArray[i])
        if (counter === 3 && i!==0) {
            counter = 0
            beautyfiedBigNumber.unshift(separator)
        }
        counter += 1
    }
    return beautyfiedBigNumber.join('')
}
