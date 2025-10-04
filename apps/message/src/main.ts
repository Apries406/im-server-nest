import { NestFactory } from '@nestjs/core';
import { MessageModule } from './message.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    MessageModule,
    {
      transport: Transport.GRPC,
      options: {
        url: '0.0.0.0:50052',
        package: 'message',
      },
    },
  );

  await app.listen();
}
bootstrap();
