// let name ="anish"
// let age =23
// let address ="butwal"

let me={
    name:"anish",
    age:23,
    address:"butwal"
}
me.college="CCT"
// console.log(Object.keys(me)) //used to show keys
console.log(Object.values(me)) //used to show values of keys


//freeze method is used to make sure not add any data after
let myInformation=Object.freeze({
    name:"anish",
    age:23,
    address:"butwal"
})
myInformation.college="CCT" //this is not added
console.log(myInformation)

let myInfo={
    name:"anish shrees",
    age:23,
    address:"gulmi"
}

//destructure
let{name,age}=myInfo
console.log(name,age)

//conditional statement
let isRaining =true
if(isRaining){console.log("carry umbrella")}
else{
    console.log("don't carry umbrella")
}

//ternary operator condition 

isRaining ? console.log("carry umbrella") : console.log("don't carry")
   


let ages=7
if(ages>=20){
    console.log("you can vote")
}
else{
    console.log("you cannot vote")
}


let temp=31
if(temp>30){
    console.log("it is hot")
}
else if(temp>=20){
    console.log("it is not hot")
}
else{
    console.log("it is cold")
}