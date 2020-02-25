var aboutMe = '';
$(document).ready(function(){
    $(document).on('keydown', startCollection)
})

function startCollection(e){
if (e.key = 'z'){
    $(document).off('keydown', startCollection);
    $(document).on('keydown', collectSymbol);

}
}

function collectSymbol(e){
    if (e.key == ' ' || e.key == 'Escape'){
    stopCollect();
}
    else {
aboutMe += e.key;
if (aboutMe == 'da'){
    $('#exampleModal').modal({
        show : true
    });
}
    }

    }



function stopCollect(){
console.log('Stop');
aboutMe = '';
$(document).on('keydown', startCollection);
$(document).off('keydown', collectSymbol)

}