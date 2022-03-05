let allBut = document.querySelectorAll(".but").length;
for (i = 0; i < allBut; i++) {
  document.querySelectorAll(".but")[i].addEventListener("click", function(){
    let buttonInner = this.innerHTML;
    sound(buttonInner);
    animationPressed(buttonInner);
    })
}

document.addEventListener("keydown", function(event) {
    sound(event.key);
    animationPressed(event.key);
});

function sound(key) {
    switch (key) {
        case "z":
            let noteDo = new Audio('sound/do.mp3');
            noteDo.play();
            break;
        case "s":
            let noteDoDiez = new Audio('sound/doDiez.wav');
            noteDoDiez.play();
            break;
        case "x":
            let noteRe = new Audio('sound/re.mp3');
            noteRe.play();
            break;
        case "d":
            let noteReDiez = new Audio('sound/reDiez.wav');
            noteReDiez.play();
            break;
        case "c":
            let noteMi = new Audio('sound/mi.mp3');
            noteMi.play();
            break;
        case "v":
            let noteFa = new Audio('sound/fa.mp3');
            noteFa.play();
            break;
        case "g":
            let noteFaDiez = new Audio('sound/faDiez.wav');
            noteFaDiez.play();
            break;
        case "b":
            let noteSol = new Audio('sound/sol.mp3');
            noteSol.play();
            break;
        case "h":
            let noteSolDiez = new Audio('sound/solDiez.wav');
            noteSolDiez.play();
            break;
        case "n":
            let noteLya = new Audio('sound/lya.mp3');
            noteLya.play();
            break;
        case "j":
            let noteLyaDiez = new Audio('sound/lyaDiez.wav');
            noteLyaDiez.play();
            break;
        case "m":
            let noteSi = new Audio('sound/si.mp3');
            noteSi.play();
            break;
        default:
            console.log(key);
    }
}

function animationPressed(key){
    let activeButton = document.querySelector("." + key);
    if ( activeButton === ".s" | 
         activeButton === ".d" | 
         activeButton === ".g" | 
         activeButton === ".h" | 
         activeButton === ".j") {
        activeButton.classList.add("bPressed");
        setTimeout(function(){ activeButton.classList.remove("bPressed") }, 100);
    } else {
        activeButton.classList.add("wPressed");
        setTimeout(function(){ activeButton.classList.remove("wPressed") }, 100);
    }
}

let currentYear = new Date().getFullYear();
document.getElementById("year").innerHTML = currentYear;