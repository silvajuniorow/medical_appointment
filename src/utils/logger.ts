import winston from 'winston'

const logger = winston.createLogger({
	format: winston.format.json(),
})

export { logger }