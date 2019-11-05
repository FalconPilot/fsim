import * as envalid from 'envalid'

import { Env } from './types/main'

interface ProcessEnv {
  [key: string]: string | undefined
}

export default (env: Readonly<ProcessEnv>): Env => envalid.cleanEnv(env, {
  PORT: envalid.port()
})
