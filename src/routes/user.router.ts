import { FastifyInstance } from 'fastify'
import { createUserSchema } from '../schema'
import { UserController } from '../controllers/user.controller'

async function userRouter(fastify: FastifyInstance) {
  fastify.decorateRequest('authUser', '')

  fastify.route({
    method: 'POST',
    url: '/new',
    schema: createUserSchema,
    handler: UserController.createUser,
  })
}

export default userRouter
