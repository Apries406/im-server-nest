import { NestFactory } from '@nestjs/core';
import { FriendModule } from './friend.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    FriendModule,
    {
      transport: Transport.GRPC,
      options: {
        url: '0.0.0.0:50054',
        package: 'friend',
      },
    },
  );

  await app.listen();
}
bootstrap();
