
var audio_volume=0.6;

const api_call= () =>{
   const URL="https://api.unsplash.com/photos/" 
    fetch(URL,{
        headers:{
            'Authorization': 'Client-ID  Q7bjDqROTKJeE8haX58bqA2nRDd0sOnpmkUltLrxv8o'
        }
    }).then(res => res.json())
      .then(res => console.log(res))
      .catch(error => console.log(error))
}
api_call()


const animate = (key) =>{
 const currentkey=document.querySelector(`.${key}`)
 currentkey.classList.add('pressed')
setTimeout(() => {
   currentkey.classList.remove('pressed'); 
},250);
}
const playMusic=(path) =>{
const audio=new Audio(path);
audio.volume=audio_volume
audio.play();
}
document.addEventListener("keypress",(event)=>{
 const triggeredKey=event.key;
 makesound(triggeredKey)
 animate(triggeredKey)   
})
//theme1
const theme_1__background="#091921";
const theme_1__text="#00fff1";


//theme2
const theme_2__background="#f7c340";
const theme_2__text="#2d2d2d";
let root=document.documentElement;
const change_theme=(theme)=>{
    if(theme==="theme_1"){
        root.style.setProperty('--background',theme_1__background)    
        root.style.setProperty('--text',theme_1__text)    
    }
    else{
        root.style.setProperty('--background',theme_2__background)        
        root.style.setProperty('--text',theme_2__text)   
    }
    
}

var current_theme="theme_1"
const theme_changer=document.getElementById("util__button-theme")
theme_changer.addEventListener("click",(e)=>{
 theme_changer.classList.add("change_theme__pressed")
 setTimeout(() => {
  theme_changer.classList.remove("change_theme__pressed") 
 }, 200); 
if(current_theme=="theme_1"){
 change_theme("theme_2")
 current_theme="theme_2"   
}else{
    change_theme("theme_1")
    current_theme="theme_1"    
}
})

var auto_music_id;
var auto_music_on=false;
const start_auto_music=()=>{
    const letters=["w","a","s","d","j","k","i"]
    auto_music_id=setInterval(() => {
        const currentkey= letters[Math.floor(Math.random()*letters.length)]
        makesound(currentkey);
        animate(currentkey);    
    }, 200)
  
}
const auto_music_button=document.getElementById("util__button-auto")
auto_music_button.addEventListener("click",()=>{
 if(auto_music_on){
  clearInterval(auto_music_id)  
  auto_music_on=false;
  auto_music_button.innerText="start auto music";
  auto_music_button.classList.remove(auto_music_on)  
 }
 else{
    start_auto_music();
    auto_music_on=true;
    auto_music_button.innerText="stop auto music";
    auto_music_button.classList.add(auto_music_on) 
 }   
    
})

const slider=document.getElementById("volume_slider")
slider.oninput=(event)=>{
 audio_volume=event.target.value /100       
}
const makesound = (key) =>{
switch(key){
 case "w":
 playMusic("sounds/sound1.mp3") ;
 break;
 case "a":
 playMusic("sounds/sound-2.mp3") ;
 break;
 case "s":
 playMusic("sounds/sound-3.mp3") ;
 break;
 case "d":
 playMusic("sounds/sound-4.mp3") ;
 break;
 case "j":
 playMusic("sounds/sound-5.mp3") ;
 break;
 case "k":
 playMusic("sounds/sound-6.mp3") ;
 break;
 case "i":
 playMusic("sounds/sound-7.mp3") ;
 break; 
 default:
    console.log("hey wrong button");    
}
}

const handledrumClick= (event) => {
   var innerHTML=event.target.innerHTML;

   console.log(event.target);
    animate(innerHTML);  
    makesound(innerHTML);
  }
  

var drums=document.getElementsByClassName("drum")
for(let i=0;i<drums.length;i++){
  drums[i].addEventListener("click",handledrumClick)
}





