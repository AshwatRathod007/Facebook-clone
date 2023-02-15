
var settingsmenu =document.querySelector(".settings-menu")
 
function settingsmenutoggle(){
    settingsmenu.classList.toggle("settings-menu-height")
}

// function friends_list(){
//     alert("luyakar is genius");
//     $('.main-content').hide();
// }

function friendsrow(){
    console.log("Hello buddy");
    $('#myModal').modal('show');
    $('.modal-body').append(10+1);
    
    location.reload();
}

$( document ).ready(function() {
    alert( "document loaded" );
    
});