$(document).ready(function(){

  //setup crossroads
  crossroads.addRoute('foo');
  crossroads.routed.add(console.log, console); //log all routes

  //setup hasher
  function parseHash(newHash, oldHash){
      crossroads.parse(newHash);
  }
  hasher.initialized.add(parseHash); //parse initial hash
  hasher.changed.add(parseHash); //parse hash changes
  hasher.init(); //start listening for history change
  
  if (!localStorage.datacount || localStorage.datacount == null)
  localStorage.datacount=0;
});

function addLSFile() {
    let nickname,username,password;
    nickname=document.getElementById("nickname").value;
    username=document.getElementById("username").value;   
    password=document.getElementById("password").value;
    var users = {nickname: nickname, username: username, password: password};
    let user_records=new Array();
    user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
    if(user_records.some((v)=>{return v.nickname==nickname})){
        alert("duplicate data");
    }
    else{
        user_records.push({
        "nickname":nickname,
        "username":username,
        "password":password
        })
        localStorage.setItem("users",JSON.stringify(user_records));
    }
    alert("Your data was saved successfully");
    showData();
}

// get reference to button
	    var btn = document.getElementById("myBtn2");
	    // add event listener for the button, for action "click"
	    btn.addEventListener("click", addLSFile);

function showData() {
          document.getElementById("showdata").innerHTML="";
          let user_records=new Array();
        user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
          if(user_records)
          {
            for(let i=0;i<user_records.length;i++)
            {
              let addDiv=document.createElement('div');
          addDiv.className="row";
          addDiv.innerHTML=localStorage.getItem(user_records[i].nickname);
          document.getElementById("tabledata").appendChild(addDiv);
        
            }
         }
         $('#tabledata tbody').html(htmlText);
         $("#showdata").show();

}


