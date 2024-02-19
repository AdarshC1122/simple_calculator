writeExp=(e)=>{
    display.value+=e.target.id
}

getResult=()=>{

 if(display.value==""){
    alert("Enter an expression")
 }

else{
    try{
        display.value=eval(display.value)
    }
    catch{
        alert("Enter valid Expression")
        display.value=""
    }

}
}

allClear=()=>{
    display.value=""
}

Delete=()=>{
    display.value=display.value.slice(0,-1)
}
