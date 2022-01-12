import type { HttpFunction } from '@google-cloud/functions-framework/build/src/functions'

import { logger } from '@crossroadscx/utils-example'

export const exampleFunction: HttpFunction = (req, res) => {
  logger.info('This is a test')
}
