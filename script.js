let btn=document.querySelectorAll('button');
let strin="";
Array.from(btn).forEach((button)=>{
    button.addEventListener(("click"),(e)=>{
        if(e.target.innerHTML == '='){
            let result=eval(strin);
            document.getElementById('input').value=result;
        }
        else if(e.target.innerHTML == 'C'){
            strin="";
            document.getElementById('input').value=strin;
        }
        else if(e.target.innerHTML == 'Del'){
            strin=strin.slice(0,strin.length-1);
            
            document.getElementById('input').value=strin;
        }
        else{
            strin=strin+e.target.innerHTML;
            document.getElementById('input').value=strin;
        }
    })
})