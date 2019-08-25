const express = require('express');
const _config = require('./config');

//Routers
const playerRoutes = require('./routes/Player/index');
const newsRoutes = require('./routes/News/index');
const historyMatch = require('./routes/HistoryMatch/index');

const app = express();

app.set("jwt_key", _config.secretKeys.JwtKey);

app.use(express.json());

app.use('/api/players', playerRoutes);
app.use('/api/news', newsRoutes);
app.use('/api/HistoryMatch/', historyMatch);


app.listen(process.env.PORT || '3000', () => {
    console.log('Server is runnig on port 3000');
});