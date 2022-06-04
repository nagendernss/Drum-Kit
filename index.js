
// document.querySelector(".drum").addEventListener("click", handlecilck);

// function handlecilck(){
//     // alert("I got clicked");
//     var sound=new Audio("tom-1.mp3");
//     sound.play();
// }
var k=document.querySelectorAll(".drum").length;
for(var i=0; i<k; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        var buttonInnerHtml=this.innerHTML;
        playSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
        // this.style.color="white";
    });
}

document.addEventListener("keydown", function(event){
    console.log(event);
    playSound(event.key);
    buttonAnimation(event.key);
});

function playSound(check) {

    switch (check) {
        case "w":
            var sound=new Audio("tom-1.mp3");
            sound.play();
            break;
    
        case "a":
            var sound=new Audio("tom-2.mp3");
            sound.play();
            break;
    
        case "s":
            var sound=new Audio("tom-3.mp3");
            sound.play();
            break;
    
        case "d":
            var sound=new Audio("tom-4.mp3");
            sound.play();
            break;
    
        case "j":
            var sound=new Audio("snare.mp3");
            sound.play();
            break;
    
        case "k":
            var sound=new Audio("crash.mp3");
            sound.play();
            break;
            
        case "l":
            var sound=new Audio("kick-bass.mp3");
            sound.play();
            break;

        default:
            console.log(buttonInnerHtml);
            break;
    }
}

function buttonAnimation(currentKey){
    var activeButton=document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}