document.getElementById('result').onclick = getResult;
window.onload = getResult;
function getResult(){
   const elements = document.getElementsByClassName('menu');
   let cost = 0;
   let kkal = 0;
   for (let i=0; i < elements.length; i++){
   if (elements[i].checked){
    
   cost = cost + parseInt(elements[i].getAttribute('data-cost'));
   kkal = kkal + parseInt(elements[i].getAttribute('data-kkal'));
   }
}
   let elemKkal = document.getElementById('kkal');
   let elemCost  = document.getElementById('cost');
   elemKkal.innerHTML = kkal;
   elemCost.innerHTML = cost;
}