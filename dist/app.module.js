"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const mongoose = require("mongoose");
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const auth_module_1 = require("./auth/auth.module");
const bakeries_module_1 = require("./bakeries/bakeries.module");
const calculators_module_1 = require("./calculators/calculators.module");
const comments_module_1 = require("./comments/comments.module");
const config_1 = require("@nestjs/config");
const logger_middleware_1 = require("./common/middlewares/logger.middleware");
const mongoose_1 = require("@nestjs/mongoose");
const recipe_modules_1 = require("./recipe/recipe.modules");
const recipe_service_1 = require("./recipe/recipe.service");
const recipe_controller_1 = require("./recipe/recipe.controller");
const users_module_1 = require("./users/users.module");
const bakery_module_1 = require("./bakery/bakery.module");
const likes_module_1 = require("./likes/likes.module");
let AppModule = class AppModule {
    constructor() {
        this.isDev = process.env.MODE === 'dev' ? true : false;
    }
    configure(consumer) {
        consumer.apply(logger_middleware_1.LoggerMiddleware).forRoutes('*');
        mongoose.set('debug', this.isDev);
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            mongoose_1.MongooseModule.forRoot(process.env.MONGO_URL, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true,
                useFindAndModify: false,
            }),
            recipe_modules_1.RecipeModule,
            users_module_1.UserModule,
            calculators_module_1.CalculatorsModule,
            bakeries_module_1.BakeriesModule,
            auth_module_1.AuthModule,
            comments_module_1.CommentsModule,
            bakery_module_1.BakeryModule,
            likes_module_1.LikesModule,
        ],
        controllers: [app_controller_1.AppController, recipe_controller_1.RecipesController],
        providers: [app_service_1.AppService, recipe_service_1.RecipeService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map