import { Users } from 'src/users/users.schema';
declare const LoginRequestDto_base: import("@nestjs/common").Type<Pick<Users, "email" | "passwd">>;
export declare class LoginRequestDto extends LoginRequestDto_base {
}
export {};
