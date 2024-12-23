//var x=""








//constructor

function bike(name,model,year){

    this.bikename=name
    this.bikemodel=model
    this.bikeyear=year
}
const details=new bike("Apache","RTR",2021)
console.log(details);

const details2=new bike("Hunter",350,2022)
console.log(details2)

//task

function office(idNo,employeeName,BloodGroup,DOB,Code){

    this.idCard_no=idNo
    this.idName=employeeName
    this.idGroup=BloodGroup
    this.idDOB=DOB
    this.idCode=Code
}
const empDetails=new office(12345,"Leo Das","A+","01-02-2000",202401)
console.log(empDetails)

const empDetails2=new office(112233,"Antony Das","O+","03-04-1999",202402)
console.log(empDetails2)

const empDetails3=new office(151515,"Harold Das","B+","05-06-1998",202403)
console.log(empDetails3)