const exp = require('express')
const cors = require('cors')
const api = exp()


api.use((req,res,next)=>{
    res.setHeader('Acces-Control-Allow-Origin','*');
    res.setHeader('Acces-Control-Allow-Methods','GET');
    res.setHeader('Acces-Contorl-Allow-Methods','Content-Type','Authorization');
    next(); 
})


api.get('/', cors(), (req, res) => {
    res.json({"res":"ok"})

})

const PORT = process.env.PORT || 8877;

api.get('/:key', cors(),(req, res)=> {

    const key = req.params.key
    if(key == 'admin'){
        res.json({"login":true,
    "redirect":"none"})
    }else {
        res.json({
            "login":false
        })
    }
})



api.listen(PORT, ()=> {
    console.log('on')
})
