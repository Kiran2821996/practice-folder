let display = document.getElementById("display");
let buttons =Array.from(document.getElementsByClassName("button"))
buttons.map((btn)=>{
btn.addEventListener("click",(e)=>{
let key= e.target.innerText;

if(key=="A/C"){
    display.innerText="";
}else if(key=="del"){
    if(display.innerText=="infinity"){
        display.innerText="";
    }
    display.innerText=display.innerText.slice(0,-1);
}else if(key=="="){
    if(display.innerText){
        display.innerText=eval(display.innerText)
    }
   
}else{
    display.innerText+=key;
}
})
})