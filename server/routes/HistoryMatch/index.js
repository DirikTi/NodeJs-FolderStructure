const express = require('express');
const db = require('../../db');
const router = express.Router();
const ExceptionManager = require('../../ExceptionManager');

router.post('/getByGroup/:group', async (req , resp, next) => {
    if(req.body != null){
        db.SQLstate.tableName = "historymatch";
        try{
            
            let results = await db.SQLstate.getMany("group", req.params.group)

            if(results[0] != undefined){
                ExceptionManager.Succeed.data = results;
                resp.json(ExceptionManager.Succeed);
            }else{
                resp.json(ExceptionManager.RecordNotFound);
            }
        }catch(Ex){
            ExceptionManager.RunTimeException.exception = Ex;
            resp.sendStatus(500).json(ExceptionManager.RunTimeException);
        }
    }else{
        resp.json({serious : "WTF man Are you kidding me"});
    }
});

router.post('/add', async(req, resp, next) => {
    if(req.body != null){
        db.SQLstate.tableName = "historymatch";

        try{

            await db.SQLstate.getMany(req.body);
            ExceptionManager.Succeed = req.body;
            resp.json(ExceptionManager.Succeed);
        }catch(Ex){
            ExceptionManager.RunTimeException.exception = Ex;
            resp.sendStatus(500).json(ExceptionManager.RunTimeException);
        }
    }else{
        resp.json({serious : "What the fuck are you doing user Are you kidding me"});
    }
});

router.post('/delete', async(req, resp, next) => {
    if(req.body != null){
        db.SQLstate.tableName = "historymatch";

        try{
            await db.SQLstate.delete('id', req.body.id);
            ExceptionManager.Succeed.data = null;
            resp.json(ExceptionManager.Succeed);
        }
        catch(ex) {
            resp.sendStatus(500).json(ExceptionManager.RunTimeException);
        }
    }else{
        resp.json({serious : "What the fuck are you doing user Are you kidding me"});
    }
});

module.exports = router;