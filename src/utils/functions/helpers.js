// Function that helps reading population number by
// adding "," between hundreds, thousands, ...

export function beautyfiedNumber(bigNumber) {
  let bigNumberArray = bigNumber.toString().split("")
  let beautyfiedBigNumber = []
  let counter = 0
  const separator = ","

  for (let i = bigNumberArray.length; i >= 0; i--) {
    beautyfiedBigNumber.unshift(bigNumberArray[i])
    if (counter === 3 && i !== 0) {
      counter = 0
      beautyfiedBigNumber.unshift(separator)
    }
    counter += 1
  }
  return beautyfiedBigNumber.join("")
}

export function getLanguages(object) {
  const languagesArray = Object.values(object)
  return languagesArray.join(", ")
}

export function getNativeName(object) {
  for (const [key, value] of Object.entries(object)) {
    if (key !== "eng") {
      for (const [key2, value2] of Object.entries(value))
        if (key2 === "common") {
          return value2
        }
    }
  }
}
export function getCurrencies(object) {
  for (const value of Object.values(object)) {
    return value.name
  }
}
export function getBorders(countries, border) {
  let borderName = countries.filter((country) => country.cca3 === border)
  return borderName[0].name.common
}
