for(var i=0;i<document.querySelectorAll(".drum").length;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){ 
      var buttonInnerHtml=this.innerHTML;
      makeSound(buttonInnerHtml)

    buttonAnimation(buttonInnerHtml)
       //document.querySelectorAll(".drum")[i].eventListner("click",function(){alert("I got clicked!");})
      //console.log(this.innerHtml)
      //console.log(this)
      // var audio=new Audio('sound/tom-1.mp3');
      // audio.play();});
 
  });
}
            document.addEventListener("keydown",function(event){
              makeSound(event.key);
              buttonAnimation(event.key)
    });
     
      function makeSound(key){
        switch(key){
          case "w":
            var tom1=new Audio('sound/tom-1.mp3');
            tom1.play();
              break;
          case "a":
            var tom2=new Audio('sound/tom-2.mp3');
            tom2.play();
              break;
           case "s":
            var tom3=new Audio('sound/tom-3.mp3');
            tom3.play();
              break;
           case "d":
              var tom4=new Audio('sound/tom-4.mp3');
              tom4.play();
              break;
          case "j":
              var snare=new Audio('sound/snare.mp3');
              snare.play();
              break;
          case "k":
              var crash=new Audio('sound/crash.mp3');
              crash.play();
              break;
          case "l":
            var audio=new Audio('sound/kick-bass.mp3');
            audio.play();
              break;
          default:
              console.log(buttonInnerHtml);}
      
      }
      function buttonAnimation(currentKey){
        var activeButton=document.querySelector("."+currentKey);
        activeButton.classList.add("pressed");
        setTimeout(function(){
          activeButton.classList.remove("pressed");},100);
        

      }

      

      
      
  
  
      
  