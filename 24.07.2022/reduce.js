let arr = [
    {firstName:"Kiran",lastName:"Kumar",age:26},
    {firstName:"Deepak",lastName:"Kumar",age:23},
    {firstName:"Sushil",lastName:"Kumar",age:26},
    {firstName:"Forest",lastName:"Kumar",age:40}
    
  ]
  
  const output= arr.reduce((accu,curr)=>{
    if(accu[curr.age]){
      accu[curr.age]=++accu[curr.age]
    }else{
      accu[curr.age]=1
    }
    return accu
  },{})
  console.log(output)
  