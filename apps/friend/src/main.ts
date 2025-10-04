import { NestFactory } from '@nestjs/core';
import { FriendModule } from './friend.module';

async function bootstrap() {
  const app = await NestFactory.create(FriendModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
