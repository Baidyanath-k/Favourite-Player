function getPlayerName(playerId) {
    const playerName=document.getElementById(playerId);
    const playerNameValue=playerName.innerText;
    return playerNameValue;
}
document.getElementById('messi-btn').addEventListener('click',function(){
    let playerMessi=getPlayerName('messi');
    let createLi=document.createElement('li');
    createLi.innerText=playerMessi;
    let selectedOl=document.getElementById('selected-ol');
    selectedOl.appendChild(createLi);

    document.getElementById('messi-btn').setAttribute("class", "democlass");
    document.getElementById('messi-btn').setAttribute("disabled", "");
    
})

document.getElementById('neymar-btn').addEventListener('click',function(){
    let playerNeymar=getPlayerName('neymer');
    let createLi=document.createElement('li');
    createLi.innerText=playerNeymar;
    let selectedOl=document.getElementById('selected-ol');
    selectedOl.appendChild(createLi);

    document.getElementById('neymar-btn').setAttribute("class", "democlass");
    document.getElementById('neymar-btn').setAttribute("disabled", "");
    
})
