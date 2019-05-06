console.log('This house always win!')
var userId = document.getElementById('idInput');
var userColor = document.getElementById('colorInput');
function setCard(){
    let card = document.getElementById(userId.value);
    card.style.color = userColor.value;
    
}
function reloadPage(){
    window.location.reload()
}