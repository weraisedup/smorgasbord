import { Router } from 'express'
import User from '../models/user.js'
var router = Router()

router.post('/new', (_a, res, _b) => {
  let user = User.create({
    username: req.body.username
  }, (err) => {
    if (err) return handleError(err)
  })

  res.send(JSON.parse(user))
})

/* GET users listing. */
router.get('/', (_a, res, _b) => {
  res.send('respond with a resource')
})

export default router
