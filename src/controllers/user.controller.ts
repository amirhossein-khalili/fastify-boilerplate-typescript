import { FastifyReply, FastifyRequest } from 'fastify'
import { STANDARD, ERROR404 } from '../helpers/constants'
import { IUserRequest } from '../interfaces'
import { handleServerError, ERRORS } from '../helpers/errors'
import { prisma } from '../helpers/utils'
import { utils } from '../helpers/utils'

export class UserController {
  static async createUser(request: IUserRequest, reply: FastifyReply) {
    try {
      const { email, password, firstName, lastName, userName } = request.body
      const user = await prisma.user.findFirst({
        where: {
          OR: [{ email: email }, { userName: userName }],
        },
      })
      if (user) reply.code(409).send(ERRORS.userExists)

      const hashPass = await utils.genSalt(10, password)
      const newUser = await prisma.user.create({
        data: {
          email,
          firstName,
          userName,
          lastName,
          password: String(hashPass),
        },
      })
      reply.code(STANDARD.CREATED).send({ message: STANDARD.messageCreated })
    } catch (error) {
      console.log(error)
      handleServerError(reply, error)
    }
  }
  static async findOneUser(
    request: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply,
  ) {
    try {
      const userId = parseInt(request.params.id)

      const user = await prisma.user.findUnique({
        where: { id: userId },
      })

      if (!user) {
        return reply
          .code(ERROR404.statusCode)
          .send({ message: ERROR404.message })
      }

      return reply.send(user)
    } catch (error) {
      console.error('Error in findOneUser:', error)
      handleServerError(reply, error)
    }
  }

  static async editUser(
    request: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply,
  ) {
    try {
      const userId = parseInt(request.params.id)

      const userUpdated = await prisma.user.update({
        where: { id: userId },
        data: request.body,
      })
      if (!userUpdated) {
        return reply
          .code(ERROR404.statusCode)
          .send({ message: ERROR404.message })
      }

      reply.send(userUpdated)
    } catch (error) {
      handleServerError(reply, error)
    }
  }
}

// public async findAll(request: FastifyRequest, reply: FastifyReply) {
//     try {
//         const { page = 1, perPage = 10 } = request.query;

//         // Calculate offset based on page number and perPage value
//         const offset = (parseInt(page as string, 10) - 1) * parseInt(perPage as string, 10);

//         // Find users with pagination
//         const users = await prisma.user.findMany({
//             skip: offset,
//             take: parseInt(perPage as string, 10),
//         });

//         return reply.send(users);
//     } catch (error) {
//         // Handle server error
//         handleServerError(reply, error);
//     }
// }

//   public async destroy(
//     request: FastifyRequest<{ Params: { id: number } }>,
//     reply: FastifyReply,
//   ) {
//     try {
//       const userRemoved = await prisma.user.delete({
//         where: { id: request.params.id },
//       })
//       if (!userRemoved)
//         return reply
//           .code(ERROR404.statusCode)
//           .send({ message: ERROR404.message })
//       reply.send(userRemoved)
//     } catch (error) {
//       handleServerError(reply, error)
//     }
//   }
// }
