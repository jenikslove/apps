function startProgress(time){
let start = 0;
var time = Math.round(time * 1000 / 100);
let progress = document.getElementById('user-progress');
interval = setInterval(function(){
console.log(progress);
if (start == 100){
    clearInterval(interval);
    displayHidden();
}
progress.value = start;
start++;
},time)
}
startProgress(2);

function displayHidden(){
    var hiddenElem =  document.querySelector('.hidden-block');
    console.log(hiddenElem);
    hiddenElem.style.display = 'block';
}