import { Users } from '../users.schema';
declare const UserRequestDto_base: import("@nestjs/common").Type<Pick<Users, "id" | "email" | "passwd" | "nickname" | "picture" | "refreshToken" | "grant">>;
export declare class UserRequestDto extends UserRequestDto_base {
}
export {};
