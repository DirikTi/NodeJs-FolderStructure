//MODELS
var playerModel = require('./Models/PlayerModel/data'); 
var newsModel = require('./Models/NewsModel/data');
var fightMatchModel = require('./Models/FightMatchModel/data');
var groupModel = require('./Models/GroupModel/data');
var historyMatchModel = require('./Models/HistoryMatchModel/data');
var historySeasonModel = require('./Models/HistorySeasonModel/data');
var socialMediaPlayer = require('./Models/SocialMedia_Player/data');
var socialMediaTeam = require('./Models/SocialMedia_Team/data');
var socialMediaModel = require('./Models/SocialMediaModel/data');
var TeamModel = require('./Models/TeamModel/data');


var config = {
    corsOptions: {
        origin: 'http://localhost:8080',
        optionsSuccessStatus: 200,
    },
    memcached: {
        retries:10,
        retry:10000,
        remove:true
    },
    secretKeys :{
        JwtKey : "Your Secret Key in here"
    },
    mysqlInfo: {
        connectTimeout: 10,
        password: '',
        user: 'root',
        database: 'test',
        host: '127.0.0.1',
        port: 3306
    },
    models:[
        
        playerModel,
        newsModel,
        fightMatchModel,
        groupModel,
        historyMatchModel,
        historySeasonModel,
        socialMediaPlayer,
        socialMediaTeam,
        socialMediaModel,
        TeamModel,
    ]
}

module.exports = config;