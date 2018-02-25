let audio = document.querySelector('#audio'),
    balloon = document.querySelector('.balloon'),
    boy = document.querySelector('.boy');
const rInt = (min,max)=> Math.floor(Math.random()*(max-min+1)+min);

let i =0;
function isEnding(current){

  if(audio.duration-60 <= current){
    i++;
    balloon.src = 'src/balloon.png';
    balloon.style.top = `calc(-${i} * 100vh/180)`;
    if(rInt(0,15) == 13){
      if(rInt(0,1)==1){
        balloon.style.left = '.5em';
        balloon.style.right = '0';
      } else{
        balloon.style.left = '0';
        balloon.style.right = '.5em';
      }
    }
  }


  return;
}
let audioToWorkInMobile = document.querySelector('.click-audio'), once =0;

audioToWorkInMobile.addEventListener('click',e=>{
  audioToWorkInMobile.style.opacity = '0';
  if(once==0){
    audio.play();
    once++;
  }
});

audio.addEventListener('timeupdate',e=>{
  let current = e.path[0].currentTime;
  isEnding(current);
});
