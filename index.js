const exp = require('express')
const api = exp()

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