let input = document.getElementById('input');
let btn = document.getElementById('btn');
btn.onclick = () => {
    let message = input.value;
    let elem = document.createElement('div');
    elem.classList.add('elem')
    elem.innerHTML = message;
    input.value = '';

    if (!document.querySelector('#message-body')){
      let elemFields = document.createElement('div');
      elemFields.id = 'message-body';
      document.body.appendChild(elemFields);
    }
    document.querySelector('#message-body').appendChild(elem);
    setTimeout(()=>{
        elem.remove();
        removeElem();
    }, 3000)
  
}

function removeElem(){
    let allElem = document.querySelectorAll('#message-body .elem')
    console.log(allElem);
    if (allElem.length == 0){
        document.querySelector('#message-body').remove();
    }
}