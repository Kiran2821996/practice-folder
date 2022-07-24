let arr = [
    {firstName:"Kiran",lastName:"Kumar",age:26},
    {firstName:"Deepak",lastName:"Kumar",age:23},
    {firstName:"Sushil",lastName:"Kumar",age:26},
    {firstName:"Forest",lastName:"Kumar",age:40}
    
]

const output= arr.map(x=>x.firstName+" "+x.lastName)
console.log(output)