// var obj={
//     name:"Peter",
//     age:14,
//     std:"9th"
// }

// obj.std="8th"
// obj.age=13

// console.log(obj)

//nested array

let stuDetails=[
    {
        name:"Groot",
        age:15,
    },

    {
        name:"Tony",
        age:14
    },

    {
        name:"Parker",
        age:13
    },

    {
        name:"Eddie",
        age:12
    }
];

console.log(stuDetails[2])

const{name,age}=stuDetails[1]
console.log(name,age);