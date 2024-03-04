let input=document.getElementById("input");
let data=document.getElementById("text");
// const url="https://api.dictionaryapi.dev/api/v2/entries/en/<word>";
let sound=document.getElementById("sound");


let audio;
async function get(){
    let info= await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input.value}`);
    let kam= await info.json();
    let def=kam[0].meanings[0].definitions[0].definition;
     audio=kam[0].phonetics[0].audio;
    data.innerText=`${def}`;

}


sound.addEventListener("click",function(){
    function playSound(url) {
        const audio = new Audio(url);
        audio.play();
      }

    playSound(`${audio}`);


})



function my(){
    get();
   

}


