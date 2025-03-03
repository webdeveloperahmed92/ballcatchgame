

let mainDiv = document.getElementById("main")
let basket = document.getElementById("basket")
let scoreShow = document.getElementById("score")


let score = 0;
let missed = 0;
let basketPosition = 15;


document.addEventListener("keydown",(event)=>{
    if (event.key === "ArrowLeft" && basketPosition>5){
        basketPosition-= 10
    } else if (event.key === "ArrowRight" && basketPosition<475){
        basketPosition+=10
    }
    basket.style.left = basketPosition + "px";
})


function ball(){
    let ball = document.createElement("div")
    ball.classList.add("ball");
    ball.style.left = Math.random()*380 + "px"
    mainDiv.appendChild(ball);

    let drop =0;
    let fall = setInterval(()=>{
        if(drop>=475){
            clearInterval(fall);
            mainDiv.removeChild(ball);
            missed++;
            updateScore()
            
        }else{
            drop +=5
            ball.style.top = drop + "px";

            if(drop>= 460 && Math.abs(parseInt(ball.style.left)-basketPosition)<60){
                clearInterval(fall);
                mainDiv.removeChild(ball);
                score++;
                updateScore()
            }
        }
    },30)
}
function updateScore() {
    scoreShow.innerText = `Score: ${score} | Missed: ${missed}`;
}



setInterval(ball, 1800);