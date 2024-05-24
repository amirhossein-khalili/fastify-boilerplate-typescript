import { FastifyInstance } from 'fastify'
import { createUserSchema, editUserSchema } from '../schema'
import { UserController } from '../controllers/user.controller'

async function userRouter(fastify: FastifyInstance) {
  fastify.decorateRequest('authUser', '')

  fastify.route({
    method: 'POST',
    url: '/new',
    schema: createUserSchema,
    handler: UserController.createUser,
  })

  fastify.route({
    method: 'GET',
    url: '/:id',
    handler: UserController.findOneUser,
  })

  fastify.route({
    method: 'PATCH',
    url: '/:id',
    schema: editUserSchema,
    handler: UserController.editUser,
  })
}

export default userRouter
