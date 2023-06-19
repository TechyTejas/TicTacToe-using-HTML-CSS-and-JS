console.log("welcoem to game")

let audioturn=new Audio("tkkk.mp3")
let turn="X"

//Function to change turn
const changeTurn = () =>{
    return turn === "X" ? "0" : "X"
}

//Function to check Win
const checkWin = () =>{

}

//Main logic start here
let boxes=document.getElementsByClassName("box")
Array.from(boxes).forEach(element=>{
    let boxtext = element.querySelector('.boxtext')
    element.addEventListener('click',()=>{
        if(boxtext.innerText===''){
            boxtext.innerText = turn;
            changeTurn();
            audioturn.play();
            checkWin();
            document.getElementsByClassName("info")[0].innerText = "Turn For "+turn;
        }
    })
})