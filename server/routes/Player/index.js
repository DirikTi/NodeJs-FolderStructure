const express = require('express');
const db = require('../../db');
const router = express.Router();

router.get('/', async (req, res, next) => {
    db.SQLstate.tableName = "player";
    try{
       
        let players = await db.SQLstate.all();
        res.json(players);
       
       
    }catch(ex){
        console.log(ex);
        res.sendStatus(500).send(ex);
    }

    res.end();
});

module.exports = router;