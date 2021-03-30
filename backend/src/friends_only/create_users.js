import User from '../models/user.js'
import { connectDB } from '../config/database.js'

connectDB().then(async () => {
  User.create([ {
    username: 'Derek@Dunglehouse.Dingus'
  }, {
    username: 'Emma@SillyBagels.Yarf'
  }, {
    username: 'Hank the Stank'
  } ])
})
