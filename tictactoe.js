let boxes =document.querySelectorAll(".box");
let resetGameBtn=document.querySelector("#reset-btn");
let newGameBtn =document.querySelector("#new-btn");
let msgContainer =document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO=true; //playerX,playerO

//winning possiblity
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
];

//fuction of reset game
const resetGame = () =>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");

}


//alternate play
boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        
        if(turnO){
            box.innerText ="O";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;//ek box do baar click na ho isliye
        checkWinner();
    });
});


//disable boxes after the winner declared
const disableBoxes =() =>{
    for(let box of boxes){
        box.disabled =true;
    }
}

//enable boxes after reset button or new game
const enableBoxes =() =>{
    for(let box of boxes){
        box.disabled =false;
        box.innerText="";

    }
}


//Show winner on top
const showWinner =(winner) =>{
    msg.innerText=`congo,winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}


//check winnner using index
const checkWinner =() =>{
    for (pattern of winPatterns){
        //console.log(
          //  boxes[pattern[0]].innerText,
            //boxes[pattern[1]].innerText,
           // boxes[pattern[2]].innerText);

            let pos1Val= boxes[pattern[0]].innerText;
            let pos2Val= boxes[pattern[1]].innerText;
            let pos3Val= boxes[pattern[2]].innerText;

            if(pos1Val !=""&& pos2Val !=""&&pos3Val !=""){
                if(pos1Val===pos2Val && pos2Val===pos3Val){
                    
                    
                    showWinner(pos1Val);

                }
            }
    }
};

//adding events on reset and new button
newGameBtn.addEventListener("click",resetGame);
resetGameBtn.addEventListener("click",resetGame);