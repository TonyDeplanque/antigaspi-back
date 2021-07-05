import { HttpModule, Module } from '@nestjs/common';
import { RestModule } from './rest/rest.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [RestModule, PrismaModule, HttpModule],
  providers: [],
})
export class AppModule {}
