let btnE1 = document.querySelectorAll("button");

let inputE1 = document.getElementById("result");
for(let i =0 ; i<btnE1.length; i++){
        btnE1[i].addEventListener("click" ,() =>{
                const btnvalue = (btnE1[i].textContent);
                if(btnvalue=== "C"){
                        clearResult();
                }
                else if(btnvalue === "="){
                        calculateResult()
                }
                else{
                        appendvalue(btnvalue);
                }


        });
}

function clearResult(){
        inputE1.value= "";
}

function calculateResult(){
        inputE1.value = eval(inputE1.value)
}

function appendvalue(btnvalue){
        inputE1.value += btnvalue;

}
