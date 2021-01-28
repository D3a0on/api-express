const exp = require('express')
const cors = require('cors')
const api = exp()


api.use((req,res,next)=>{
    res.setHeader('Acces-Control-Allow-Origin','*');
    res.setHeader('Acces-Control-Allow-Methods','GET');
    res.setHeader('Acces-Contorl-Allow-Methods','Content-Type','Authorization');
    next(); 
})

api.get('/:key', cors(),(req, res)=> {

    const key = req.params.key
    if(key == 'admin'){
        res.send({"login":true,
    "redirect":"none"})
    }else {
        res.send({
            "login":false
        })
    }
})



api.listen(3000, ()=> {
    console.log('on')
})