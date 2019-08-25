const express = require('express');
const db = require('../../db');
const router = express.Router();
const ExceptionManager = require('../../ExceptionManager/index');
const jwt = require('jsonwebtoken');

router.post('/login', async (req, res, next) => {
    db.SQLstate.tableName = "player";
    try{
       
        let users = await db.SQLstate.all();

        let theUser = users.filter(x => x.username == req.body.username 
            && x.password == req.body.password)[0];

        if(theUser != undefined && theUser.length != 0){
            //Login Success
            let payload = {username: theUser.username, role: theUser.roles};
            let token = jwt.sign(payload, req.app.get("jwt_key"));

            ExceptionManager.Succeed.data = token;

            res.json(ExceptionManager.Succeed);
        }else{
            res.json(ExceptionManager.RecordNotFound);
        }

       
    }catch(ex){
        console.log(ex);
        res.send(ex);
    }

    res.end();
});

module.exports = router;