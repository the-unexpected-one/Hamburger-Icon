const imgs=document.getElementById('imgs');
let idx=0;
const img=document.querySelectorAll('#imgs img')
function run(){
    idx++;
    if(idx>img.length-1){
        idx=0
    }
    imgs.style.transform=`translateX(${-idx * 500}px)`;
// setTimeout(run,2000);
}
setInterval(run,2000);
