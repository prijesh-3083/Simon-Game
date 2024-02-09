let highScore = 0;
let playgame = function () {
    // let playgamecall = document.querySelector(".play");
    let gameSeq = [];
    let userSeq = [];
    let h2 = document.querySelector("h2");
    let btns = ["yellow", "red", "purple", "green"];
    let play = document.querySelector(".play");

    let started = false;
    let level = 0;
    // let highsc = [];

    play.addEventListener("click", function () {
        if (started == false) {
            console.log("game is started");
            setTimeout(()=>{
                play.style.opacity = "0";
            },500);
            started = true;
            levelup();
        }
    });

    function gameFlash(btn) {
        btn.classList.add("flash");
        setTimeout(function () {
            btn.classList.remove("flash");
        }, 250);
    }

    function userFlash(btn) {
        btn.classList.add("userflash");
        setTimeout(function () {
            btn.classList.remove("userflash");
        }, 250);
    }

    function levelup() {
        userSeq = [];
        level++;
        h2.innerText = `level ${level}`;

        let rndx = Math.floor(Math.random() * 3);
        let rncolor = btns[rndx];
        let rnbtn = document.querySelector(`.${rncolor}`);
        gameFlash(rnbtn);

        gameSeq.push(rncolor);
        console.log(gameSeq);

        // console.log(rndx);
        // console.log(rncolor);
        // console.log(rnbtn);
    }

    function checkAns(idx) {
        // let idx = level - 1;

        if (userSeq[idx] === gameSeq[idx]) {
            if (userSeq.length == gameSeq.length) {
                setTimeout(levelup, 1300);
                highSc();
            }
        } else {
            document.querySelector("body").style.backgroundColor = "red";
            setTimeout(function () {
                document.querySelector("body").style.backgroundColor = "white";
            }, 150);
            highSc();
            h2.innerHTML = `Game Over!! Your score is <b>${level}</b> <br>High Score is ${highScore}`;
            setTimeout(()=>{
                play.style.opacity = "1";
                play.innerText = "Restart";
            },500);
            reset();
        }
    }

    function btnpress() {
        // console.log(this);
        let btn = this;
        userFlash(btn);

        userColor = btn.getAttribute("id");
        userSeq.push(userColor);

        checkAns(userSeq.length - 1);
    }

    let allBtns = document.querySelectorAll(".btn");
    for (btn of allBtns) {
        btn.addEventListener("click", btnpress);
    }

    function reset() {
        gameSeq = [];
        userSeq = [];
        level = 0;
        started = false;
    }
    function highSc() {
        if(highScore < level){
            highScore = level;
            h2.innerHTML = `High Score is ${highScore}`;
        }else{
            h2.innerHTML = `High Score is ${highScore}`;
        }
    }
    // playgamecall.addEventListener("click",playgame);
}
playgame();