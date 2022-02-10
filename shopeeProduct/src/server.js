import express from 'express'
import initWebRoutes from './route/web'
import initAPIRoutes from './route/api'
import configViewEngine from './config/viewEngine'
import cors from 'cors'

require('dotenv').config()
const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(cors({origin: true}))

initWebRoutes(app)

configViewEngine(app)

initAPIRoutes(app)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})