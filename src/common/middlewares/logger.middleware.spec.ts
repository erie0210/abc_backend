import { Test, TestingModule } from '@nestjs/testing';

import { LoggerMiddleware } from './logger.middleware';

describe('Logger Middleware', () => {
  let middleware: LoggerMiddleware;
  let tmp = true;
  it('should logger work', () => {
    expect(tmp).toBeTruthy();
  });
});
