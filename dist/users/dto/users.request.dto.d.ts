import { Users } from '../users.schema';
declare const UserRequestDto_base: import("@nestjs/common").Type<Pick<Users, "email" | "passwd" | "nickname" | "picture" | "refreshToken" | "grant" | "id">>;
export declare class UserRequestDto extends UserRequestDto_base {
}
export {};
