const users = {
    admin: "admin123",
    player: "player123",
    test: "test123"
};

function doLogin(){
    const u = document.getElementById("username").value.trim();
    const p = document.getElementById("password").value.trim();
    const err = document.getElementById("error");

    if(!u || !p){
        err.innerText = "Enter username and password";
        return;
    }

     if(users[u] && users[u] === p){
    localStorage.setItem("currentUser", u);
    window.location.href = "success.html";
    } else {
        err.innerText = "Invalid credentials";
    }
}
