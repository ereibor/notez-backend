import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger Configuration
  const swaggerConfig = new DocumentBuilder()
    .setTitle('Notez API')
    .setDescription('API for Notez Application')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api/docs', app, document);

  const port = process.env.PORT ?? 3000;
  await app.listen(port);

  console.log(`🚀 Server started successfully on http://localhost:${port}`);
  console.log(`Swagger docs at http://localhost:${port}/api/docs `);
}
bootstrap();
