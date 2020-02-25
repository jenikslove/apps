
document.getElementById('btn').onclick = function () {
    let start = document.getElementById('startdate').value;
    let end = document.getElementById('enddate').value;

    start = Date.parse(start);
    end = Date.parse(end);
    let out = document.getElementById('out');
    for (let i = start; i < end; i = i + 24 * 60 * 60*1000) {
        //console.log(out);
        out.innerHTML += new Date(i).toISOString().substr(0,10) + '</br>';
    }
    //  console.log(start);

}


