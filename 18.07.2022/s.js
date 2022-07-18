function invalidParanthesis(string){
    let map ={
        "{":"}",
        "[":"]",
        "(":")",
    };
    let stack=[];
    for(let i=0;i<string.length;i++){
        if(string[i]=="["||string[i]=="{"||string[i]=="("){
            stack.push(string[i]);
        }else{
            let closingBracket = string[i];
            let openingBracket = stack.pop();
            if(closingBracket!=map[openingBracket]){
                return false
            }
        }
    }
if(stack.length!=0){
    return false
}return true
}
console.log(invalidParanthesis("{[]}()"))