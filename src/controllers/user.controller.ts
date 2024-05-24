// import { FastifyReply, FastifyRequest } from 'fastify'
// import { STANDARD, ERROR404 } from '../helpers/constants'
// import { handleServerError } from '../helpers/errors'
// import { prisma } from '../helpers/utils'

// export class UserController {
//   public async create(request: FastifyRequest, reply: FastifyReply) {
//     try {
//       const { email, password, firstName, lastName, userName } = request.body
//       const newUser = await prisma.user.create({
//         data: {
//           email,
//           firstName,
//           userName,
//           lastName,
//           password: String(hashPass),
//         },
//       })
//       reply.code(STANDARD.CREATED).send({ message: STANDARD.messageCreated })
//     } catch (error) {
//       handleServerError(reply, error)
//     }
//   }

//   // public async findAll(request: FastifyRequest, reply: FastifyReply) {
//   //     try {
//   //         const { page = 1, perPage = 10 } = request.query;

//   //         // Calculate offset based on page number and perPage value
//   //         const offset = (parseInt(page as string, 10) - 1) * parseInt(perPage as string, 10);

//   //         // Find users with pagination
//   //         const users = await prisma.user.findMany({
//   //             skip: offset,
//   //             take: parseInt(perPage as string, 10),
//   //         });

//   //         return reply.send(users);
//   //     } catch (error) {
//   //         // Handle server error
//   //         handleServerError(reply, error);
//   //     }
//   // }

//   public async findOne(
//     request: FastifyRequest<{ Params: { id: number } }>,
//     reply: FastifyReply,
//   ) {
//     try {
//       const user = await prisma.user.findUnique({
//         where: { id: request.params.id },
//       })
//       if (!user)
//         return reply
//           .code(ERROR404.statusCode)
//           .send({ message: ERROR404.message })
//       return reply.send(user)
//     } catch (error) {
//       handleServerError(reply, error)
//     }
//   }

//   public async edit(
//     request: FastifyRequest<{ Params: { id: number } }>,
//     reply: FastifyReply,
//   ) {
//     try {
//       const userUpdated = await prisma.user.update({
//         where: { id: request.params.id },
//         data: request.body,
//       })
//       if (!userUpdated)
//         return reply
//           .code(ERROR404.statusCode)
//           .send({ message: ERROR404.message })

//       reply.send(userUpdated)
//     } catch (error) {
//       handleServerError(reply, error)
//     }
//   }

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
