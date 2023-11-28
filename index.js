// const express = require('express');
// const app = express();
// const path = require('path'); // Adicione esta linha
// app.use(express.static(path.join(__dirname, 'public')));
// const http = require('http').createServer(app);
// let io = require('socket.io')(http);

// // Abrir evento de conexão
// io.on("connection",(socket) => {

//     socket.on("disconnect",() => {
//         console.log("Usuario desconectado " + socket.id);
//     })
   
//     socket.on("msg", (data) => {
//        io.emit("showmsg", data);
//     })
  

// });

// app.set("view engine", "ejs");

// app.get('/', (req, res) => {
//    res.render('index');
// })

// http.listen(3001, () => {
//     console.log('listening on *:3001');
// });

const express = require('express');
const app = express();
const path = require('path');
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const PORT = process.env.PORT || 3001;
const HOST = process.env.HOST || '192.168.10.10';  // Alterado para '0.0.0.0' para ouvir em todos os endereços

// Abrir evento de conexão
io.on("connection", (socket) => {
    socket.on("disconnect", () => {
        console.log("Usuario desconectado " + socket.id);
    });

    socket.on("msg", (data) => {
        io.emit("showmsg", data);
    });
});

app.set("view engine", "ejs");

app.get('/', (req, res) => {
    res.render('index');
});

http.listen(PORT, HOST, () => {
    console.log(`listening on ${HOST}:${PORT}`);
});
