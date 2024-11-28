import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import * as cookieParser from 'cookie-parser'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
// import { JwtAuthGuard } from './auth/jwt-auth.guard'
// import { ValidationPipe } from './pipes/validation.pipe'

async function start() {
  const PORT = process.env.PORT || 5000
  const app = await NestFactory.create(AppModule)

  const config = new DocumentBuilder()
    .setTitle('Tracker')
    .setDescription('Документация REST API')
    .setVersion('1.0.0')
    .addTag('Tracker Docs')
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('/api/docs', app, document)

  // app.useGlobalPipes(new ValidationPipe())

  if (process.env.NODE_ENV !== 'production') {
    app.enableCors({
      allowedHeaders: ['Content-Type'],
      origin: 'http://localhost:9000',
      credentials: true,
    });
  } else {
    app.enableCors({
      allowedHeaders: ['Content-Type'],
      origin: [
        'http://narekio.online',
        'http://localhost',
      ],
      credentials: true,
    });
  }

  app.use(cookieParser())
  app.setGlobalPrefix('api')
  await app.listen(PORT, () => console.log(`Server started on port = ${PORT}`))
}

start()
