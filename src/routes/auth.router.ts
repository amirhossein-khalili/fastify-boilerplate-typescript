import { FastifyInstance } from 'fastify'
import { loginSchema, signupSchema } from '../schema'
import { AuthController } from '../controllers/auth.controller'

async function authRouter(fastify: FastifyInstance) {
  fastify.decorateRequest('authUser', '')

  fastify.route({
    method: 'POST',
    url: '/login',
    schema: loginSchema,
    handler: AuthController.login,
  })

  fastify.route({
    method: 'POST',
    url: '/signup',
    schema: signupSchema,
    handler: AuthController.signUp,
  })
}

export default authRouter
