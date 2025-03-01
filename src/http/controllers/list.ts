import { FastifyRequest, FastifyReply } from 'fastify'
import { prisma } from '@/lib/prisma'

export async function list(request: FastifyRequest, reply: FastifyReply) {
  const users = await prisma.user.findMany()

  return reply.status(200).send(users)
}
