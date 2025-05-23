//array ko methods (slice,splice,split)
//propert(length) property maa bracket hudaina
//methods --num.pop() num.length last maa bracket xa vani method
let num=[1,2,3,4,5,6,7,8]
let names =["anish","kumar","shrees","gulmi","butwal","tamghas"]
// console.log(num.length)

//slice --> bich ko bumber dekhauney katna matra milyo
const sliceNumber=num.slice(2,5)
const sliceNames=names.slice(2,4)
console.log(sliceNumber)
console.log(sliceNames)
 let evennum=[2,4,6,8,10]
const evenNumber= evennum.slice(3,5)
console.log(evenNumber)

//splice --> katera thapna pani milyo kati katney ho tesko value paxadi ani thapni last maa
let data=[1,2,3,4,5,6]
// const spliceData=data.splice(1,3," ")
data.splice(1,3,"anish","shrees","kumar")

console.log(data)

//split
let message="i am from butwal"
const spliMessage=message.split("a")
console.log(spliMessage)