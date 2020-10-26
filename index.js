const express = require('express');

const routes = require('./routes/page.js');

const serverConfig = require('./serverConfig.json')


const app = express();
app.use(express.json());
app.use(express.static('./static'));

app.set('view engine', 'pug');
app.set('views', './static');

// ============= routes =============
app.use('', routes);
// ==================================




// ============= 404 =============
app.use((req, res, next) => {
    return res.status(404).json({
        "status": 404,
        "message": "page not found"
    });
});
// ===============================

app.listen(
    serverConfig.port,
    () => console.log(`server running at port ${serverConfig.port}`)
);
