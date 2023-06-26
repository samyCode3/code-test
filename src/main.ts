/* eslint-disable prettier/prettier */
import {ValidationPipe} from '@nestjs/common'
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger'
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Config } from './config/config';
const config = new Config
const PORT = config.PORT
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({whitelist: true, transform: true}))
  const options = new DocumentBuilder().setTitle('code test api')
  .setDescription('code test to build crud api')
  .setVersion('1.0.0')
  .addBearerAuth({type  : 'http', scheme : 'bearer', bearerFormat: 'Token'}, 'access-token')
  .build();
  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('api', app,  document)
  await app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`) 
  }); 
}
bootstrap();
