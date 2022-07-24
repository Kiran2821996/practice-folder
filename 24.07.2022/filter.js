let arr = [
    {firstName:"Kiran",lastName:"Kumar",age:26},
    {firstName:"Deepak",lastName:"Kumar",age:33},
    {firstName:"Sushil",lastName:"Kumar",age:26},
    {firstName:"Forest",lastName:"Kumar",age:40}
    
  ]
  
  const output= arr.filter(x=>x.age>30).map(x=>x.firstName)
  console.log(output)
  