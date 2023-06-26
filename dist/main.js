"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const config_1 = require("./config/config");
const config = new config_1.Config;
const PORT = config.PORT;
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe({ whitelist: true, transform: true }));
    const options = new swagger_1.DocumentBuilder().setTitle('code test api')
        .setDescription('code test to build crud api')
        .setVersion('1.0.0')
        .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'Token' }, 'access-token')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(PORT, () => {
        console.log(`App running on port ${PORT}`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map