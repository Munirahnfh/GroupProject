$(function()
{
    if (!localStorage.datacount || localStorage.datacount == null)
        localStorage.datacount = 0;

    var link3 = crossroads.addRoute('', function() {
        dataLength = localStorage.datacount;
        htmlText = "";
        if (dataLength > 0) {
            for (var i = 1; i <= dataLength; i++) {
                //i = index of list (start with 1)
                myData = localStorage.getItem("data" + i);
                myData = JSON.parse(myData);
                htmlText = htmlText + "<tr onclick='trClick(this, " +i+ ")'><td>" + myData.nickname + "</td><tr>";
            }
        }
        else {
            htmlText = htmlText + "<tr><td> no data found </td><tr>";
        }

        $('#maintable tbody').html(htmlText);

        //show main menu with table and Add Button
        $("#divmokdebtn").show();
        $("#masterC").show();
        $("#divFrmAddKenalan").hide();
        $("#divFrmViewKenalan").hide();
        $("#divFrmEditKenalan").hide();
        $("#divaddbutton").show();
        $("#divAbout").hide();

    });    

    var link4 = crossroads.addRoute('btnAddKenalan', function() {
        $("#divmokdebtn").hide();
        $("#masterC").hide();
        $("#divFrmAddKenalan").show();
        $("#divFrmViewKenalan").hide();
        $("#divFrmEditKenalan").hide();
        $("#divaddbutton").hide();
        $("#divAbout").hide();

    });

    $("#frmAddKenalan").submit(function(e) {
        e.preventDefault();
        e.stopPropagation();
        var nickName = $("#nickname").val();
        var userName = $("#username").val();
        var passWord = $("#password").val();

        myData = {nickname : "", username : "", password : ""};
        myData.nickname = nickName;
        myData.username = userName;
        myData.password = passWord;

        var i = localStorage.datacount
        i++;
        localStorage.setItem("data" + i, JSON.stringify(myData));
        localStorage.datacount = i;

        alert('New data added!');

        $('#maintable tbody').html(htmlText);

        //show main menu with table and Add Button
        $("#divmokdebtn").show();
        $("#masterC").show();
        $("#divFrmAddKenalan").hide();
        $("#divFrmViewKenalan").hide();
        $("#divFrmEditKenalan").hide();
        $("#divaddbutton").show();
        $("#divAbout").hide();
        
    });

    //go to #about
    var link4 = crossroads.addRoute('btnAbout', function() {
        $("#divmokdebtn").hide();
        $("#masterC").hide();
        $("#divFrmAddKenalan").hide();
        $("#divFrmViewKenalan").hide();
        $("#divFrmEditKenalan").hide();
        $("#divaddbutton").hide();
        $("#divAbout").show();

    });

    function parseHash(newHash, oldHash) {
        crossroads.parse(newHash);
    }

    hasher.initialized.add(parseHash);
    hasher.changed.add(parseHash);
    hasher.init();

    function trClick(x, y) {
        alert("Row index is: " + x.rowIndex);
    }


    // -------- #About ------------
    // Initialize Variables
	var closePopup = document.getElementById("popupclose_About");
	var overlay = document.getElementById("overlay_About");
	var popup = document.getElementById("popup_About");
	var button = document.getElementById("button_About");
	// Close Popup Event
	closePopup.onclick = function() {
	  overlay.style.display = 'none';
	  popup.style.display = 'none';
	};
	// Show Overlay and Popup
	button.onclick = function() {
	  overlay.style.display = 'block';
	  popup.style.display = 'block';
	}
});

