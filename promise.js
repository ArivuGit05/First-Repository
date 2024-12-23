function awake(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const wake=true
            if(wake){
                resolve("wake up at 5am")
            }else{
                reject("is not wake up")
            }
        }, 3000);
        
    });
}
function Gym(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const warmup=false
            if(warmup){
                resolve("Go to gym")
            }else{
                reject("should not go to gym")
            }
        }, 1000);
    });
}    
function Office(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const off=true
            if(off){
                resolve("Go to office")
            }else{
                reject("should not go to office")
            }
        },2000);

    })
}
awake().then(value1=>{console.log(value1); return Gym()})
       .catch(value2=>{console.log(value2); return Office()})
       .then(value3=>{console.log(value3); console.log("Achieved")})

        

