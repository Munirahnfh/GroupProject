function store(){ //stores item in the local storage
    var nickname = document.getElementById('nickname').value;
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    const dataInput = {
        nickname: nickname,
        username: username,
        password: password,
    }

    window.localStorage.setItem(nickname,JSON.stringify(dataInput));
    //converting object to string
}

function retrieveRecords(){ //retrieves items in the localStorage
    var nickname = document.getElementById(nickname).value;
    console.log("retrieve records");
    var records = window.localStorage.getItem(nickname);
    var paragraph = document.createElement("p");
    var infor = document.createTextNode(records);
    paragraph.appendChild(infor);
    var element = document.getElementById("retrieve");
    element.appendChild(paragraph);
}

window.onload = function(){
    
}