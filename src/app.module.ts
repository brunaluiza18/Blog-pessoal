import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { postagem } from './postagem/entities/postagem.entity';
import { PostagemModule } from './postagem/postagem.module';
import { Tema } from './tema/entities/tema.entity';
import { TemaModule } from './tema/tema.module';
import { AuthModule } from './auth/auth.module';
import { Usuario } from './usuario/entities/usuario.entity';
import { UsuarioModule } from './usuario/usuario.modules';

//Decorator - Etiqueta de matadados
@Module({
  imports: [ // configurando o typeORM
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'Bruna1948.',
    database: 'db_blogpessoal',
    entities: [postagem, Tema, Usuario],
    synchronize: true,
   
  }),
  PostagemModule,
  TemaModule,
  AuthModule,
  UsuarioModule
],
  controllers: [],
  providers: [],
})
export class AppModule {}
