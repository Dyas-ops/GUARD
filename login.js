function login() {
    let inputName = document.getElementById("name").value;
    let inputId = document.getElementById("idcard").value;

    let user = JSON.parse(localStorage.getItem("user"));

    let fullName = document.getElementById("fullName").value;

    localStorage.setItem("fullName", fullName);

    window.location.href = "dashboard.html";
}
    if (!user) {
        alert("No account found! Please register first.");
        return;
    }

    if (inputName === user.name && inputId === user.idcard) {
        alert("Login Success!");
        window.location.href = "dashboard.html";
    } else {
        alert("Wrong name or ID!");
    }
