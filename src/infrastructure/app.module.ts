import { Module } from '@nestjs/common';
import { RestModule } from './rest/rest.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [RestModule, PrismaModule],
  providers: [],
})
export class AppModule {}
