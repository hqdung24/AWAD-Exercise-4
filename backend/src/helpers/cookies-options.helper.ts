import type { Response } from 'express';

export const RT_COOKIE_NAME = process.env.REFRESH_COOKIE_NAME ?? 'refreshToken';

export function setRefreshCookie(res: Response, token: string) {
  res.cookie(RT_COOKIE_NAME, token, {
    httpOnly: true,
    secure: false,
    sameSite: 'lax',
    path: '/',
    maxAge: Number(process.env.REFRESH_COOKIE_MAX_AGE ?? 2592000) * 1000, // ms
  });
}

export function clearRefreshCookie(res: Response) {
  res.clearCookie(RT_COOKIE_NAME, {
    httpOnly: true,
    secure: false,
    sameSite: 'lax',
    path: '/',
  });
}
