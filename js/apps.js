function getPlayerName(playerId) {
    const playerName = document.getElementById(playerId);
    const playerNameValue = playerName.innerText;
    return playerNameValue;
}


document.getElementById('messi-btn').addEventListener('click', function () {
    let playerMessi = getPlayerName('messi');
    let createLi = document.createElement('li');
    createLi.innerText = playerMessi;
    let selectedOl = document.getElementById('selected-ol');


    let liCheck = document.getElementById("selected-ol").getElementsByTagName('li').length;
    
    if (parseInt(liCheck) < 5) {

        selectedOl.appendChild(createLi);
        document.getElementById('messi-btn').setAttribute("class", "democlass");
        document.getElementById('messi-btn').setAttribute("disabled", "");
    } else {
        alert('You can only select 5 players');
        return;
    }

})

document.getElementById('neymar-btn').addEventListener('click', function () {
    let playerNeymar = getPlayerName('neymer');
    let createLi = document.createElement('li');
    createLi.innerText = playerNeymar;
    let selectedOl = document.getElementById('selected-ol');


    let liCheck = document.getElementById("selected-ol").getElementsByTagName('li').length;
    
    if (parseInt(liCheck) < 5) {

        selectedOl.appendChild(createLi);
        document.getElementById('neymar-btn').setAttribute("class", "democlass");
        document.getElementById('neymar-btn').setAttribute("disabled", "");
    } else {
        alert('You can only select 5 players');
        return;
    }

})


document.getElementById('kylian-btn').addEventListener('click', function () {
    let playerKylian = getPlayerName('kylian');
    let createLi = document.createElement('li');
    createLi.innerText = playerKylian;
    let selectedOl = document.getElementById('selected-ol');


    let liCheck = document.getElementById("selected-ol").getElementsByTagName('li').length;
    
    if (parseInt(liCheck) < 5) {

        selectedOl.appendChild(createLi);
        document.getElementById('kylian-btn').setAttribute("class", "democlass");
        document.getElementById('kylian-btn').setAttribute("disabled", "");
    } else {
        alert('You can only select 5 players');
        return;
    }

})


document.getElementById('vitor-btn').addEventListener('click', function () {
    let playerVitor = getPlayerName('vitor');
    let createLi = document.createElement('li');
    createLi.innerText = playerVitor;
    let selectedOl = document.getElementById('selected-ol');

    let liCheck = document.getElementById("selected-ol").getElementsByTagName('li').length;
    


    if (parseInt(liCheck) < 5) {

        selectedOl.appendChild(createLi);
        document.getElementById('vitor-btn').setAttribute("class", "democlass");
        document.getElementById('vitor-btn').setAttribute("disabled", "");
    } else {
        alert('You can only select 5 players');

        return;
    }

})

document.getElementById('sergio-btn').addEventListener('click', function () {
    let playerSergio = getPlayerName('sergio');
    let createLi = document.createElement('li');
    createLi.innerText = playerSergio;
    let selectedOl = document.getElementById('selected-ol');

    let liCheck = document.getElementById("selected-ol").getElementsByTagName('li').length;
    


    if (parseInt(liCheck) < 5) {

        selectedOl.appendChild(createLi);
        document.getElementById('sergio-btn').setAttribute("class", "democlass");
        document.getElementById('sergio-btn').setAttribute("disabled", "");
    } else {
        alert('You can only select 5 players');

        return;
    }
})

document.getElementById('renato-btn').addEventListener('click', function () {
    let playerRenato = getPlayerName('renato');
    let createLi = document.createElement('li');
    createLi.innerText = playerRenato;
    let selectedOl = document.getElementById('selected-ol');


    let liCheck = document.getElementById("selected-ol").getElementsByTagName('li').length;
    

    if (parseInt(liCheck) < 5) {

        selectedOl.appendChild(createLi);
        document.getElementById('renato-btn').setAttribute("class", "democlass");
        document.getElementById('renato-btn').setAttribute("disabled", "");
    } else {
        alert('You can only select 5 players');

        return;
    }

})

function getInputElement(inputId) {
    const inputElement = document.getElementById(inputId);
    const inputElementValue = inputElement.value;
    const inputNum = parseFloat(inputElementValue);
    return inputNum;
}
function getTextElement(textId){
    let textElementId=document.getElementById(textId);
    let textElementValue=textElementId.innerText;
    let textElementNum=parseFloat(textElementValue);
    return textElementNum;
}
function setElementByText(setId,setValue) {
    const textElement=document.getElementById(setId);
    textElement.innerText=setValue;
}

document.getElementById('calculate').addEventListener('click', function(){
    let liCheck = document.getElementById("selected-ol").getElementsByTagName('li').length;
    let liCheckNum=parseInt( liCheck);
    
    let perPlayerCost=getInputElement('per-player-cost');

    if(liCheckNum==0){
        alert("Please, Choose Your Favourite Player");
    }else{

        if (isNaN(perPlayerCost)) {
            alert("Please Enter Valid Input");
        }else if(perPlayerCost<0){
            alert("You do not entry negetive value");
        }else{
            let totalPlayerCost=liCheckNum*perPlayerCost;
            setElementByText('player-expense',totalPlayerCost)
        }
    }

})

document.getElementById('total-calculate').addEventListener('click', function(){
    let managerCost=getInputElement('manager-cost');
    let coachCost=getInputElement('coach-cost');
    let playerCost=getTextElement('player-expense');


    if(playerCost==0){
        alert("Please First Calculate Perplayer Cost");
    }else{

        if (isNaN(managerCost) || isNaN(coachCost)) {
            alert("Please Enter Valid Input");
        }else if(managerCost<0 || coachCost<0){
            alert("You do not entry negetive value");
        }else{
            let totalCost=managerCost+coachCost+playerCost;
    
            setElementByText('total-cost',totalCost);
        }

    }

     
})