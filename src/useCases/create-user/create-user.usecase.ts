import { User } from '../../entities/user.entity'
import { UserRepository } from '../../repositories/user.repository'

type UserRequest = {
    name: string,
    username: string,
    password: string
}

export class CreateUserUsecase {
	async execute(data: UserRequest){
		const useRepository = UserRepository.getInstance()
		const user = User.create(data)
        
		// nao deve ser possivel realizar o cadasto sem usuario e senha
		if (!data.username || !data.password) {
			throw new Error('Username/password is required!')
		}

		//verifica se o usuario existe
		const existUser = await useRepository.findByUsername(data.username)
		// se o usuario existir, retorna error
		if(existUser) {
			throw new Error('Username already exists!')
		}

		const userCreated = await useRepository.save(user)
		return userCreated
	}
}