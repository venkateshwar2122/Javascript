let s = "hello to all"

console.log(s.replace("to","@"))

//replace only one occurence use replace()
console.log(s.replace("ll","@"))

//replace all occurences use replaceAll()
console.log(s.replaceAll("ll","@"))

//delete any substring replace with empty string
console.log(s.replaceAll("ll",""))
