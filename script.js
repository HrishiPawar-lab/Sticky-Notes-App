var createNoteButton=document.querySelector(".container1 button");
var textArea=document.querySelector(".container3 textarea");
var checkIcon=document.querySelector(".container3 #check-icon")
var xIcon=document.querySelector(".container3 #x-icon")
var i=0
document.addEventListener("keydown",function(event){
   if(event.key=='Enter'){
    game()
   }
    
})
createNoteButton.addEventListener("click",function(){
  if(document.querySelector(".container3  ").style.display=='none'){
    document.querySelector(".container3 ").style.display='block'
  }
  else{
    document.querySelector(".container3 ").style.display='none'
  }
})
xIcon.addEventListener("click",function(){
    document.querySelector(".container3 ").style.display='none'
})
function game(){
    if(textArea.value !== ""){
     var h1= document.createElement("h1")
     var div=document.createElement("div");
     var container2=document.querySelector(".container2");
     div.addEventListener("dblclick",function(){
         container2.removeChild(div)
     })
     div.addEventListener("mouseenter",function(){
         div.style.transform="scale(1.05)"
         
     })
     div.addEventListener("mouseleave",function(){
         div.style.transform="scale(1)"
     })
     h1.innerHTML=textArea.value;
     h1.setAttribute('style',"color:white;cursor:pointer;width:250px;height:250px;font-size:26px;padding:25px;margin-top:10px;overflow:hidden;box-shadow:10px 10px 10px grey;z-index:1;font-family:Architects Daughter")
     h1.style.margin=margin();
     h1.style.transform=rotate();
     h1.style.backgroundColor=color()
     textArea.value='';
     div.appendChild(h1)
     container2.insertAdjacentElement("beforeend",div)
    }
    else{
     alert("Notes cannot be empty !")
    }
 }
checkIcon.addEventListener("click",game)
function margin(){
    var randomMargin=["-5px","1px","5px","10px","15px","20px"]
    return randomMargin[Math.floor(Math.random()*randomMargin.length)]
}
function rotate(){
    var randomRotate=["rotate(3deg)","rotate(-3deg)","rotate(1deg)","rotate(-1deg)","rotate(5deg)","rotate(10deg)"]
    return randomRotate[Math.floor(Math.random()*randomRotate.length)]
}
function color(){
    var randomColor=["pink","lightblue","lightgrey","greenyellow","yellow","dodgerblue","orange","tomato"];
    return randomColor[Math.floor(Math.random()*randomColor.length)]
}