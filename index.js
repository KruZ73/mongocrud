// zaiomportuj bibliotekę express
const express = require('express');
// przygotuj instalacje serwera
const app = express();

// zdefiniuj ściezke dla głównego folderu aplikacji przy użyciu GET
// uzywamy funkcji asynchronicznej pod przyszle funkcje mongodb
app.get('/', async (req, res) =>{
    res.send("cos!")
})

// funkcja wyświetla wszystkie rekordy z bazy danych
app.get('/listAll', async (req, res) => {
    // res.header("200");
    res.write("<h1>Lista wszystkich rekordów w bazie</h1>");
    res.end();
})

app.listen(8000);