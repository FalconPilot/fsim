import * as http from 'http'
import * as express from 'express'

import validateEnv from './env'
import { Env } from './types/main'

const app: express.Express = express()
const env: Env = validateEnv(process.env)

const server: http.Server = http.createServer(app)

server.listen(env.PORT, () => {
  console.log(`Server listening on port ${env.PORT}`)
})
