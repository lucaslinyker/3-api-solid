/* os factories (factory pattern) serve para quando for importar um caso de uso
* no controller, não precisar importar todas as dependências para instanciar o
* caso de uso, caso um caso de uso aumentar suas dependências ou tiver muitas é
* só alterar a factory, a ideia é eles não terem nenhuma regra de negócio */

import {
  PrismaUsersRepository,
} from '@/repositories/prisma/prisma-users-repository'
import { RegisterUseCase } from '../register'

export function makeRegisterUseCase() {
  const usersRepository = new PrismaUsersRepository()
  const registerUseCase = new RegisterUseCase(usersRepository)

  return registerUseCase
}
