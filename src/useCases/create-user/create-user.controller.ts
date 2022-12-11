import { Request, Response } from 'express'
import { CreateUserUsecase } from './create-user.usecase'

export class CreateUserController {
	async handle( req: Request, res: Response) {
		try {
			const data = req.body

			console.log({ data })

			const useCase = new CreateUserUsecase()
			const result = await useCase.execute(data)

			return res.json(result)
            
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (err: any) {
			return res.status(400).json(err.message)
		}
	}
}