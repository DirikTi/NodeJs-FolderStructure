const express = require('express');
const db = require('../../db');
const router = express.Router();
const ExceptionManager = require('../../ExceptionManager');


router.get('/', async (resq, resp, next) => {
    db.SQLstate.tableName = "News";

    try{
        let data = await db.SQLstate.all();
        ExceptionManager.Succeed.data = data;
        resp.json(ExceptionManager.Succeed);
    }catch(ex){
        console.log("ERROR 500 " + ex);
        ExceptionManager.RunTimeException.exception = ex;
        resp.sendStatus(500).send(ExceptionManager.RunTimeException);
    }
});

router.post('/getById/:id', async(req, resp, next) => {
    db.SQLstate.tableName = "News";
    try{
        let results = await db.SQLstate.getById(req.params.id);

        if(results == null){
            resp.sendStatus(200).json(ExceptionManager.RecordNotFound);
        }else{
            ExceptionManager.Succeed.data = results;
            resp.json(ExceptionManager.Succeed);
        }
    }
    catch(ex){
        console.log("ERROR " +  ex);
        resp.sendStatus(500).json();
    }
});

router.post('/add', async (req, resp, next) => {
    console.log(req.body);
    if(req.body != null){
        
        db.SQLstate.tableName = "news";
        let data = await db.SQLstate.getMany("title",req.body.title);
        console.log(data[0]);  
        if(data[0] == undefined){
            console.log("In If");
            try{
                      
                let result = await db.SQLstate.insert(req.body);
                
                if(result != null){
                    console.log("Success");
                    resp.json(ExceptionManager.Succeed);
                }
            }catch(Ex){
                ExceptionManager.RunTimeException.exception = Ex;
                console.log("Error 500 " + Ex);
                resp.sendStatus(500).json(ExceptionManager.RunTimeException);
            }
            
        }else{ 
            console.log("Recorded " + JSON.stringify(ExceptionManager.Recorded));
            resp.json(ExceptionManager.Recorded);
        }
    }
});

router.post('/delete' , async (req, resp, next) => {
    if(req.body != null){
        db.SQLstate.tableName = "news";

        try{
            await db.SQLstate.delete('id', req.body.id);
            ExceptionManager.Succeed.data = null;
            resp.json(ExceptionManager.Succeed);
        }
        catch(ex) {
            resp.sendStatus(500).json(ExceptionManager.RunTimeException);
        }
    }else{
        resp.json({Serious : 'Request Has null WTF!!!'});
    }
});

module.exports = router;