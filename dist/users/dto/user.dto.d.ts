import { Users } from '../users.schema';
declare const ReadOnlyUserDto_base: import("@nestjs/common").Type<Pick<Users, "id" | "email" | "nickname" | "picture" | "refreshToken" | "grant">>;
export declare class ReadOnlyUserDto extends ReadOnlyUserDto_base {
    id: number;
}
export {};
