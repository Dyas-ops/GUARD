let mountains = [
    { name: "Mount Rinjani", file: "rinjani.html" },
    { name: "Mount Bromo", file: "bromo.html" },
    { name: "Mount Semeru", file: "semeru.html" },
    { name: "Mount Merapi", file: "merapi.html" },
    { name: "Mount Agung", file: "agung.html" }
];

function showMountains(list) {
    let container = document.getElementById("mountainList");
    container.innerHTML = "";

    list.forEach(mountain => {
        let div = document.createElement("div");
        div.className = "item";
        div.innerText = mountain.name;

        div.onclick = () => {
            // 🔥 SIMPAN DATA
            localStorage.setItem("selectedMountain", mountain.name);

            // 🔥 MASUK KE HALAMAN INFO
            window.location.href = mountain.file;
        };

        container.appendChild(div);
    });
}

showMountains(mountains);

function searchMountain() {
    let input = document.getElementById("search").value.toLowerCase();

    let filtered = mountains.filter(m =>
        m.name.toLowerCase().includes(input)
    );

    showMountains(filtered);
}