var dlbtn = document.querySelector('.Download');
var urlinp = document.querySelector('.url-input');

dlbtn.addEventListener("click",function() {
    console.log(`URL : ${urlinp.value}`);
    sendURL(urlinp.value);
})

function sendURL(URL) {

window.location.href =  `/download?URL=${URL}`;

}

// window.location.href =  `http://localhost:4000/download?URL=${URL}`;