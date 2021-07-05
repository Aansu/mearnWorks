function check() {
    let ag= age.value;
    if(ag<18){
     result.innerHTML=`<p style=color:red>Not Eligible</p>`
    }else{
        result.innerHTML=`<p style=color:green>Not Eligible</p>`
    }
}