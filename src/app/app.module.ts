import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as schema from '../db/schema';
import { DrizzleMySqlModule } from '@knaadh/nestjs-drizzle-mysql2';
import { AnotherController } from './another.controller';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DrizzleMySqlModule.registerAsync({
      tag: 'DB_PROD',
      useFactory: (configService: ConfigService) => {
        return {
          config: { mode: 'default', schema: { ...schema } },
          mysql: {
            connection: 'pool',
            config: {
              host: 'localhost',
              user: 'root',
              password: configService.get<string>('MYSQL_PASSWORD'),
              database: 'nesdb',
            },
          },
        };
      },
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController, AnotherController],
  providers: [AppService],
})
export class AppModule {}
