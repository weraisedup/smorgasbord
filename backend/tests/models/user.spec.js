import * as User from '../../src/models/user.js'
import { expect } from 'chai'

describe('Get User tests', () => {
  it('Get a user by username', async () => {
    const createdUser = await User.createUser({ username: 'Emma' })

    return await User.getUser(createdUser.id).then(
      response => {
        expect(typeof response).to.equal('object')
        expect(response.username).to.equal('Emma')
      }).catch(error =>
        console.error(error.stack)
      )
  })
})
