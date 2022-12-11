import { Request, Response } from 'express'
import { logger } from '../../utils/logger'
import { CreateUserUsecase } from './create-user.usecase'

export class CreateUserController {
	async handle( req: Request, res: Response) {
		logger.info('creating user!')
		try {
			const data = req.body
			const useCase = new CreateUserUsecase()
			const result = await useCase.execute(data)
			return res.json(result)
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (err: any) {
			logger.error(err.stack)
			return res.status(400).json(err.message)
		}
	}
}