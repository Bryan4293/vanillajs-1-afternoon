var box = [];
function play(clickId){
    let playerSpan = document.getElementById('player');
    let clickElement = document.getElementById(clickId);
    if (box[clickId] !== undefined){
        return;
    }

    if (playerSpan.innerText === 'X'){
        playerSpan.innerText = 'O';
        clickElement.innerText = 'X';
        box[clickId]= 'X'
    } else {
        playerSpan.innerText = 'X';
        clickElement.innerText ='O';
        box[clickId]= 'O'
    }
    console.log(box)
    var topLeft = box[0];
    var topMiddle = box[1];
    var topRight = box[2];
    var centerLeft = box[3];
    var centerMiddle= box[4];
    var centerRight = box[5];
    var bottomLeft = box[6];
    var bottomMiddle = box[7];
    var bottomRight = box[8];
    
    //All winning possiblities
    if (topLeft !== undefined && topLeft === topMiddle && topLeft === topRight){
     alert(`${topLeft} is the winner`); 
     location.reload()
     return;
    }
    if (centerLeft !== undefined && centerLeft === centerMiddle && centerLeft === centerRight){
     alert(`${centerLeft} is the winner`);
     location.reload()
     return;
    }
    if (bottomLeft !== undefined && bottomLeft === bottomMiddle && bottomLeft === bottomRight){
     alert(`${bottomLeft} is the winner`);
     location.reload()
     return;
    }
    if (topLeft !== undefined && topLeft === centerMiddle && topLeft === bottomRight){
     alert(`${topLeft} is the winner`);
     location.reload()
     return;
    }
    if (topRight !== undefined && topRight === centerMiddle && topRight === bottomLeft){
     alert(`${topRight} is the winner`);
     location.reload()
     return;
    }
    if (topLeft !== undefined && topLeft === centerLeft && topLeft === bottomLeft){
     alert(`${topLeft} is the winner`);
     location.reload()
     return;
    }
    if (topMiddle !== undefined && topMiddle === centerMiddle && topMiddle=== bottomMiddle){
     alert(`${topMiddle} is the winner`);
     location.reload()
     return;
    }
    if (topRight !== undefined && topRight === centerRight && topRight === bottomRight){
     alert(`${topRight} is the winner`);
     location.reload()
     return;
    }
    let boxFull = true;
    for(let i = 0; i <= 8; i++){
    if(box[i]=== undefined){
        boxFull = false
    }
    }
    if(boxFull === true){
        alert('Cat Game! No Winner!')
        location.reload()
        return;
    }
}
