import request from 'supertest'
import { app } from '@/app'
import { it, describe, expect, beforeAll, afterAll } from 'vitest'
import {
  createAndAuthenticateUser,
} from '@/utils/test/create-and-authenticate-user'

describe('Create Gym (e2e)', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to create a gym', async () => {
    const { token } = await createAndAuthenticateUser(app, true)

    const response = await request(app.server)
      .post('/gyms')
      .set('Authorization', `Bearer ${token}`)
      .send({
        title: 'JavaScript Gym',
        description: 'Some description',
        phone: '119999999',
        latitude: -21.1398974,
        longitude: -48.9706811,
      })

    expect(response.statusCode).toEqual(201)
  })
})
