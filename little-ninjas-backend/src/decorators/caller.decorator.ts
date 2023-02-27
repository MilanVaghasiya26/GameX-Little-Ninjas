import { createParamDecorator, ExecutionContext } from '@nestjs/common';

// @ts-ignore
export const User = createParamDecorator((data: unknown, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest();
  return request.user;
});
