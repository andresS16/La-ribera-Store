const express = require('express');
const path = require('node:path');// 1. IMPORTACIÓN ACOMODADA
const rutasMain = require('./routes/main');
const app = express(); // 2. INICIALIZACIÓN

app.use(express.static(path.join(__dirname, '../public')));  

// 3. CONFIGURACION DE VISTAS
app.set('view engine', 'ejs');
app.set('views' , path.join(__dirname,'views'));
// Rutas
app.use('/', rutasMain); 
//  SERVIDOR
const PORT = process.env.PORT || 3000
app.listen( PORT, () => console.log(`Server up on port: http://localhost:${PORT}`) )