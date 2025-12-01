import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { postagem } from './postagem/entities/postagem.entity';
import { PostagemModule } from './postagem/postagem.module';

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
    entities: [postagem],
    synchronize: true,
    logging: true
  }),
  PostagemModule
],
  controllers: [],
  providers: [],
})
export class AppModule {}
