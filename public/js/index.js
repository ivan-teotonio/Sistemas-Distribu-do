const socket = io.connect("http://localhost:3001");
    
socket.on("disconect", () => {
    console.log("Desconectado");
});

socket.on("showmsg", (data) => {
    const chat = document.getElementById("chat")
    const p = document.createElement("p")
    p.innerHTML = `${data.username}: ${data.msg}`
    chat.appendChild(p)
})

function enviar(){
    const msgField = document.getElementById("msg")
    const usernameField = document.getElementById("username")

    const msg = msgField.value;
    const username = usernameField.value;

    if (msg.trim() !== "") {
        socket.emit("msg", {msg, username});
        msgField.value = ""; // Limpa o campo de mensagem
    }

    //socket.emit("msg", {msg, username})
}

document.getElementById("msg").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        enviar();
    }
});