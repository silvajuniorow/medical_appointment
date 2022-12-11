import express from 'express'
import { userRouter } from './routes/use.routes'

const app = express()

// permite que minha aplicação receba parâmetros via JSON
app.use(express.json())

// Rotas do meu middleware de ususario
app.use(userRouter)

app.get('/', (req, res) => {
	return res.send('Show de bola, A aplicação esta funcionando!')
})

app.listen(8000, () => console.log('Server is ruinnig on port 8000'))