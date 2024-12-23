// function first(){
//     console.log("Hi Js how r u");
    
// }

// function second(a){
//     console.log("Hi class how r u");
//     a()

    
// }

// second(first)

function first(a){
    setTimeout(()=>{
        console.log("Task1");
         a()
    },3000)
}
function second(b){
    setTimeout(()=>{
        console.log("Task2"); 
        b() 
    },4000)  
}
function third(c){
    setTimeout(()=>{
        console.log("Task3");
        c()
    },2000)
}
function fourth(d){
    setTimeout(()=>{
        console.log("Task4");
    },1000)
}
first(()=>{
    second(()=>{
        third(fourth)
    })
})

    