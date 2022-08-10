const express = require('express');
const router = express.Router();

router.get('/sol1', function(req ,res){
    const array = [1,2,3,5,6,7];
    const n =array.length + 1;
    const sum = array.reduce((result,num) =>{ return result + num});
    const missingNumber = n*(n+1)/2 - sum ;
    console.log(missingNumber);
    return res.send({ data : missingNumber });

});

router.get('/sol2', function(req ,res){
    const array = [33, 34, 35, 37, 38];
    const n =array.length + 1;
    const firstNum = array[0];
    const lastNum = array[array.length -1];
    const sum = array.reduce((result,num) =>{ return result + num});
    const missingNumber = n*(firstNum + lastNum)/2 - sum ;
    console.log(missingNumber);
    return res.send({ data : missingNumber });

});

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