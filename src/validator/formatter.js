const trim = function(){
    let name = "   Amit Kadam     "
    name = name.trim()
    console.log(name)
}

const changeToUpperCase = function() {
    let upperCaseString = "amit kadam"
    upperCaseString = upperCaseString.toUpperCase()
    console.log(upperCaseString)
}

const changetoLowerCase = function() {
    let lowerCaseString = "AMIT KADAM"
    lowerCaseString = lowerCaseString.toLowerCase()
    console.log(lowerCaseString)
}

module.exports.trimMyString = trim
module.exports.getUpperCaseString = changeToUpperCase
module.exports.changetoLowerCase = changetoLowerCase