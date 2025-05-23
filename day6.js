//loop in js

let days =["sun","mon","tue","wed","thur"]

//for loop, while loop, do while , for of,.... we will use for of
//for of is best for array
for(let day of days){
    console.log(day)
}

let information=[{
    name:"manish",
    age:22
},
{
    name:"anish",
    age:23
}

]
for(let info of information){
    console.log(info.name + " age is " + info.age)
}


//function in js
//mathi maa vako parameter(a,b)chai
function addTwoNUmber(a,b){
    console.log(a+b)
}
//tala ko chai argument(5,8) chai
addTwoNUmber(5,8)

let day =["sun","mon","tue","wed","thur"]

function printDays(weeks){
    for(let week of weeks){
        console.log("today is " + week)
    }
}
printDays(day)