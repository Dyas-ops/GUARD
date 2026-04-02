function register() {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let idcard = document.getElementById("idcard").value;
    let health = document.getElementById("health").value;

    if (name === "" || age === "" || idcard === "" || health === "") {
        alert("Please fill all fields!");
        return;
    }

    let user = {
        name: name,
        age: age,
        idcard: idcard,
        health: health,
        exp: 0,
        level: "Beginner",
        saldo: 100000
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Register Success!");
    window.location.href = "login.html";
}