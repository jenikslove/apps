let comments = [];
loadComments();
document.getElementById('comment-add').onclick = function () {
    event.preventDefault();
    let commentName = document.getElementById('comment-name');
    let commentBody = document.getElementById('comment-body');
    comment = {
        name : commentName.value,
        body : commentBody.value,
        date : Math.floor(Date.now()/1000)
    }
    commentName.value = '';
    commentBody.value = '';
    comments.push(comment);
  //  console.log(comments);
    saveComments();
    showComments();
}
function saveComments(){
    localStorage.setItem('comments', JSON.stringify(comments));
}
function loadComments(){
   if (localStorage.getItem('comments')){
    comments = JSON.parse(localStorage.getItem('comments'));
    showComments();
   } 
}

function timeConverter(UNIX_timestamp){
    console.log(UNIX_timestamp);
        var a = new Date(UNIX_timestamp * 1000);
        var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var hour = a.getHours();
        var min = a.getMinutes();
        var sec = a.getSeconds();
        var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
             

      return time
}

function showComments(){
    
let field = document.getElementById('comment-field');
//console.log(field);
let out = '';
comments.forEach(function(item){
    console.log(item);
    out += `<p class='text-right small'><em>${timeConverter(item.date)}</em></p>`
    //out += `<p class='text-rigth small'><em>${timeConverter()}</em></p>`
    out += `<p class='alert alert-primary'>${item.name}</p>`
    out += `<p class='alert alert-success'>${item.body}</p>`
    
})
console.log(out);
field.innerHTML = out;
}