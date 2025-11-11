import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { join } from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import {SpellModule} from './spell/spell.module';

@Module({
  imports: [
      ConfigModule.forRoot({
          isGlobal: true,
      }),
      TypeOrmModule.forRootAsync({
          imports: [ConfigModule],
          inject: [ConfigService],
          useFactory: (config: ConfigService) => ({
              type: 'sqlite',
              database: config.get<string>('DB_NAME') || 'db/db.sqlite',
              synchronize: false,
              // synchronize: config.get<string>('NODE_ENV') !== 'production',
              autoLoadEntities: true,
              migrationsRun: true,
              migrations: [
                  join(__dirname, 'migrations', '*{.ts,.js}'),
              ],
          })
      }),
      SpellModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
