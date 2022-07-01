function listenevent(eve){
  switch (eve) {
    case "w":
        var crash= new Audio("sounds/crash.mp3")
        crash.play()
      break;
    case "a":
        var kick=new Audio("sounds/kick-bass.mp3")
        kick.play()
        console.log("a")
      break;
    case "s":
        var snare=new Audio("sounds/snare.mp3")
        snare.play()
      break;
    case "d":
        var tom1=new Audio("sounds/tom-1.mp3")
        tom1.play()
      break;
    case "j":
        var tom2=new Audio("sounds/tom-2.mp3")
        tom2.play()
      break;
    case "k":
        var tom3=new Audio("sounds/tom-3.mp3")
        tom3.play()
      break;
    case "l":
        var tom4=new Audio("sounds/tom-4.mp3")
        tom4.play()
      break;
    default:

  }
}


/*play sound on button click*/
var ele=document.querySelectorAll("button");
for (i=0; i<ele.length; i++){

  ele[i].addEventListener("click",function(inerht){
    var inerht=this.innerHTML;
    listenevent(inerht);
    buttonAnimation(inerht);
  })
}

/*play sound on key press*/

document.addEventListener("keydown",function(ever){
  var set =ever.key;
  listenevent(set)
  buttonAnimation(set);
})


function buttonAnimation(currentkey){
  var test=document.querySelector("."+currentkey);
  test.classList.add("pressed");
  setTimeout(function(){
    test.classList.remove("pressed")
  },200)

}
