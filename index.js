
let boxes = document.querySelectorAll(".box");
let resets = document.querySelector("#reset");
let newgamebtn= document.querySelector("#newbtn")
let msgconatiner = document.querySelector(".msg-container");
let msg= document.querySelector("#msg");

let turno =true;

const winpattern =[
        [0, 1, 2],
        [0, 3, 6],
        [0, 4, 8],
        [1 ,4, 7],
        [2, 5, 8],
        [2, 4, 6],
        [3, 4, 5],
        [6, 7, 8],
];

resetGame =() =>{
        turno= true;
        enableboxes();
        msgconatiner.classList.add("hide");
}
boxes.forEach((box) =>{
        box.addEventListener("click", ()=>{
                console.log("box was clicked");
                if(turno){
                        box.innerText ="O";
                        turno =false;
                }
                else{
                        box.innerText="X";
                        turno=true;
                }
                box.disabled=true;

                checkwinner();
        });
});


  const disableboxes = () =>{
                for(let box of boxes){
                        box.disabled= true;
                }
        }

        const enableboxes =()=>{
                for(let box of boxes){
                        box.disabled=false;
                        box.innerText="";                }
        }

const showwinner = (winner) =>{
        msg.innerText =`congratulation, winner is ${winner}`;
        msgconatiner.classList.remove("hide");
        disableboxes();
   
}


  const checkwinner = () =>{
        for (let pattern of  winpattern) {
               let posival1 =  boxes[pattern[0]].innerText;
               let posival2 =  boxes[pattern[1]].innerText;
               let posival3 =  boxes[pattern[2]].innerText;

               if( posival1!="" && posival2!="" && posival3!=""){

                if(posival1=== posival2&& posival2=== posival3){
                        console.log("winner", posival1);
                        showwinner(posival1);
                }
               }
        }
  }

  newgamebtn.addEventListener("click",resetGame);
 resets.addEventListener("click",resetGame);