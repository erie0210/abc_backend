import { Users } from '../users.schema';
declare const ReadOnlyUserDto_base: import("@nestjs/common").Type<Pick<Users, "email" | "nickname" | "picture" | "refreshToken" | "grant" | "id">>;
export declare class ReadOnlyUserDto extends ReadOnlyUserDto_base {
    id: number;
}
export {};
