/*
 * @Author: Nw1996
 * @Date: 2025-03-28 16:10:53
 * @LastEditors: Nw1996
 * @LastEditTime: 2025-05-30 13:25:32
 * @Description: 
 * @FilePath: /okx-api-nw/src/util/requestUtils.ts
 */
import { Method } from 'axios';

import { APIMarket, RestClientOptions } from '../types';

export function serializeParams(
  params: object | undefined,
  method: Method,
  strict_validation = false,
): string {
  if (!params) {
    return '';
  }

  if (method !== 'GET') {
    return JSON.stringify(params);
  }

  const queryString = Object.keys(params)
    .map((key) => {
      const value = params[key];
      if (strict_validation === true && typeof value === 'undefined') {
        throw new Error(
          'Failed to sign API request due to undefined parameter',
        );
      }
      return `${key}=${value}`;
    })
    .join('&');

  // Prevent trailing `?` if no params are provided
  return queryString ? '?' + queryString : queryString;
}
export const programKey = 'tag';

export const programId = 'ac22216c5f05BCDE';

export function getRestBaseUrl(
  market: APIMarket,
  restClientOptions: RestClientOptions,
) {
  if (restClientOptions.baseUrl) {
    return restClientOptions.baseUrl;
  }

  switch (market) {
    default:
    case 'demo':
    case 'prod': {
      return 'https://www.okx.com';
    }
    case 'aws': {
      return 'https://aws.okx.com';
    }
  }
}

export function isWsPong(response: any) {
  if (response.pong || response.ping) {
    return true;
  }
  return (
    response.request &&
    response.request.op === 'ping' &&
    response.ret_msg === 'pong' &&
    response.success === true
  );
}
