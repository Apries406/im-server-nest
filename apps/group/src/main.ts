import { NestFactory } from '@nestjs/core';
import { GroupModule } from './group.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    GroupModule,
    {
      transport: Transport.GRPC,
      options: {
        url: '0.0.0.0:50053',
        package: 'group',
      },
    },
  );

  await app.listen();
}
bootstrap();
