
const jsonserver=require('json-server')

//creating server

const contactServer=jsonserver.create()
const middleware=jsonserver.defaults()

const router=jsonserver.router('db.json')

contactServer.use(middleware)
contactServer.use(router)

const PORT=3000 || process.env.PORT

contactServer.listen(PORT,()=>{
    console.log('server running at PORT:'+PORT)
})