"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cookieParser = require("cookie-parser");
const expressBasicAuth = require("express-basic-auth");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const app_module_1 = require("./app.module");
const http_exception_filter_1 = require("./common/exceptions/http-exception.filter");
const core_1 = require("@nestjs/core");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe({ transform: true }));
    app.useGlobalFilters(new http_exception_filter_1.HttpExceptionFilter());
    app.use(['/docs', '/docs-json'], expressBasicAuth({
        challenge: true,
        users: {
            [process.env.SWAGGER_USER]: process.env.SWAGGER_USER_PASSWORD,
        },
    }));
    app.use(cookieParser());
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Recipes example')
        .setDescription('The recipes API description')
        .setVersion('1.0')
        .addTag('recipes')
        .build();
    ``;
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('docs', app, document);
    app.enableCors({
        origin: true,
        credentials: true,
    });
    await app.listen(process.env.PORT);
    common_1.Logger.log(`Application running on port ${process.env.PORT}`);
}
bootstrap();
//# sourceMappingURL=main.js.map