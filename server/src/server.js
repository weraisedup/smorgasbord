import dotenv from 'dotenv'
import express from 'express'

dotenv.config()

const HOST_PORT     = process.env.PORT || 3333
export const router = express.Router()
const app           = express()

/* GET users listing. */
router.get('/', (_a, res, _b) => {
    res.send('respond with a resource')
})

// setup router before adding it as middleware
// to the express application

app.use(router)

app.listen(HOST_PORT, () => {
    console.log(`Server Listening on ${HOST_PORT}`)
})
