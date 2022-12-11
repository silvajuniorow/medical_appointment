import winston, { format, level } from 'winston'

const timezoned = () => {
	return new Date().toLocaleString('pt-BR', {
		timeZone: 'America/Santarem'
	})
}

const logger = winston.createLogger({
	format: winston.format.combine(
		winston.format.timestamp({ format: timezoned }),
		winston.format.json()
	),
	transports: [
		new winston.transports.File({
			filename: 'logs/app.log'
		}),
		new winston.transports.File({
			filename: 'logs/error.log',
			level: 'error'
		})
	],
})

export { logger }