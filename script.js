const names = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');

function toSubmit(e){
    let realName = names.value;
    let realEmail = email.value;
    let realMessage = message.value;

    localStorage.setItem('name',realName);
    localStorage.setItem('email',realEmail);
    localStorage.setItem('message',realMessage);
    
}
function whenLoaded(){
    let name = localStorage.getItem('name');
    let email = localStorage.getItem('email');
    let message = localStorage.getItem('message');

    if(name == null || email == null || message == null){
        alert('Nothing Yet!');
    }
    else{
        alert(`Most Recent Form Information \n Name : ${name} \n Email : ${email} \n Message : ${message}`);
    }
}
function removeEverything(){
    localStorage.clear();
}
function viewInfo(){
    let name = localStorage.getItem('name');
    let email = localStorage.getItem('email');
    let message = localStorage.getItem('message');
    if(name == null || email == null || message == null){
        alert('Nothing Yet!');
    }
    else{
        alert(`Most Recent Form Information \n Name : ${name} \n Email : ${email} \n Message : ${message}`);
    }
}