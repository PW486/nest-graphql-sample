import { createParamDecorator } from "@nestjs/common";

export const Account = createParamDecorator(
  (data, [root, args, ctx, info]) => ctx.user,
);
