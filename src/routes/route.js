const express = require('express');
const router = express.Router();

router.get('/movies' , function(req ,res){
    const array = ['malamaal weekly' , 'dhoom' , 'swadesh' ,' don']
    res.send(array);
    console.log(array);
});
router.get('/movies/:indexNumber' , function(req ,res){
    const array = ['iron man' , 'godzilla' , 'anaconda' ,' the mummy']
    const reqPara= req.params;
    const index = reqPara.indexNumber ;
    if( index < array.length ){
        return res.send(array[index]);
    }
    else{
        return res.send("Plz Enter Valid Index");
    }
});

router.get("/films" , function (req , res){
    const obj = [{
        "id" : 1,
        "name" : "spiderman home coming"
    },
    {
        "id" : 2 ,
        "name" : "avengers "
    },
    {
        "id" : 3 ,
        "name" : "thor rangnok"
    },
    {
        "id" : 4 ,
        "name" : "iron man"
    },
    {
        "id" : 5 ,
        "name" : "the nun"
    }];

    res.send(obj);
});

router.get("/films/:filmId" , function (req , res){
    const array = [{
        "id" : 1,
        "name" : "spiderman home coming"
    },
    {
        "id" : 2 ,
        "name" : "avengers"
    },
    {
        "id" : 3 ,
        "name" : "thor rangnok"
    },
    {
        "id" : 4 ,
        "name" : "iron man"
    },
    {
        "id" : 5 ,
        "name" : "the nun"
    }];

    const reqParas = req.params;
    const filmId = reqParas.filmId ;
    const result = function (){
        for (let i=0 ; i< array.length ;i++){
            const obj = array[i];
            if(obj['id'] == filmId){
                return res.send(obj)
            }
        }
        return res.send("No Such Film Exist With This Id")
    }
    result();
    //res.send(array);
});
module.exports = router;