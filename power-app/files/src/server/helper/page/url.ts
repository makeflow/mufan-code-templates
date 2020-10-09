import {ActionStorage, UserModel} from '@makeflow/power-app';

import {Config} from '../../config';

import {generateAuthCode} from './auth';

export type Pages = 'preview' | 'configuration';

export type GetPageURL = (
  page: Pages,
  userStorage: ActionStorage<UserModel, any>,
) => Promise<string>;

export function buildPageURLHelper(config: Config): GetPageURL {
  if (config.production) {
    let {host, path = '/'} = config.client;

    return async (page, storage) => {
      let code = await generateAuthCode(storage, {app: config.name, page});

      return `${host}${path}#/${page}?code=${code}`;
    };
  } else {
    let {port} = config.client;

    return async (page, storage) => {
      let code = await generateAuthCode(storage, {app: config.name, page});

      return `http://localhost:${port}#/${page}?code=${code}`;
    };
  }
}
