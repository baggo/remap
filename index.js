module.exports = (chars) => (value) => {
  var result = ''
  var i = value.length
  while (i--) {
    var oldChar = value[i]
    var newChar = chars[oldChar]
    if (!newChar)
      newChar = oldChar
    result = newChar + result
  }
  return result
}
