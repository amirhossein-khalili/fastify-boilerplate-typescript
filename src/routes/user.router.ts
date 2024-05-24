// import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify'
// import { UserController } from '../controllers/user.controller'

// export class Routes {
//   constructor(
//     private readonly fastify: FastifyInstance,
//     private readonly userController: UserController,
//   ) {}

//   public initializeRoutes(): void {
//     // Create a user
//     this.fastify.post(
//       '/users',
//       {
//         preHandler: this.preHandler.bind(this),
//         schema: this.createUserSchema(),
//       },
//       this.userController.create.bind(this.userController),
//     )

//     // Get all users
//     // this.fastify.get('/users', this.userController.findAll.bind(this.userController));

//     // Get a single user
//     this.fastify.get(
//       '/users/:id',
//       this.userController.findOne.bind(this.userController),
//     )

//     // Update a user
//     this.fastify.patch(
//       '/users/:id',
//       this.userController.edit.bind(this.userController),
//     )

//     // Delete a user
//     this.fastify.delete(
//       '/users/:id',
//       this.userController.destroy.bind(this.userController),
//     )
//   }

//   private async preHandler(
//     request: FastifyRequest,
//     reply: FastifyReply,
//   ): Promise<void> {
//     // Your pre-handler logic here
//   }

//   private createUserSchema(): object {
//     return {
//       body: {
//         type: 'object',
//         properties: {
//           // Define your schema properties here
//         },
//         required: ['propertyName'], // Specify required properties
//       },
//       response: {
//         // Define your response schema here
//       },
//     }
//   }
// }
