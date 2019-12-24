const {expect}= require('chai')
const {app}=require('../server')
const axios=require('axios')
const BASE_URL ='http://localhost:4343'

describe('server test',()=>{
    //before it
    before(()=>{
        serv=app.listen(4343)
    })

    

    //after it
    after(()=>{
        serv.close()
    })
})