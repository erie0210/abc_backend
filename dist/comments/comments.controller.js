"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const comments_service_1 = require("./comments.service");
const comments_create_dto_1 = require("./dto/comments.create.dto");
const jwt_guard_1 = require("../auth/jwt/jwt.guard");
let CommentsController = class CommentsController {
    constructor(commentsService) {
        this.commentsService = commentsService;
    }
    async saveComment(id, body) {
        return this.commentsService.saveComment(id, body);
    }
    async getComment(id) {
        return this.commentsService.findComment(id);
    }
    async deleteComment(id) {
        return this.commentsService.deleteComment(id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: '특정 레시피에 댓글 남기기',
    }),
    (0, common_1.Post)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, comments_create_dto_1.CommentsCreateDto]),
    __metadata("design:returntype", Promise)
], CommentsController.prototype, "saveComment", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: '댓글 하나 가져오기',
    }),
    (0, common_1.Post)('/get/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CommentsController.prototype, "getComment", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: '댓글 삭제하기',
    }),
    (0, common_1.Post)('/delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CommentsController.prototype, "deleteComment", null);
CommentsController = __decorate([
    (0, common_1.Controller)('comments'),
    __metadata("design:paramtypes", [comments_service_1.CommentsService])
], CommentsController);
exports.CommentsController = CommentsController;
//# sourceMappingURL=comments.controller.js.map