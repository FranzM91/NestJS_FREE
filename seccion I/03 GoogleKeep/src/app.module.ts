import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UsuarioController } from './usuario/usuario.controller';
import { UsuarioService } from './usuario/usuario.service';
import { Usuario } from './usuario/model/usuario.model';
import ormConfig from './config/orm.config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      // useFactory: () => ({
      //   type: 'postgres',
      //   host: 'localhost',
      //   port: 5454,
      //   username: 'sa',
      //   password: '1844',
      //   database: 'googlekeep-db',
      //   entities: [Usuario],
      //   synchronize: false,
      // })
      useFactory: ormConfig
    }),
    TypeOrmModule.forFeature([Usuario])
  ],
  controllers: [AppController, UsuarioController],
  providers: [
    // AppService
    UsuarioService
  ],
})
export class AppModule {}
