function register() {
    let fullName = document.getElementById("fullName").value;
    let age = document.getElementById("age").value;
    let health = document.getElementById("health").value;

    localStorage.setItem("fullName", fullName);
    localStorage.setItem("age", age);
    localStorage.setItem("health", health);

    window.location.href = "login.html";
}
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
