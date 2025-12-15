import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { postagem } from "./entities/postagem.entity";
import { PostagemService } from "./services/postagem.service";
import { TemaModule } from "../tema/tema.module";
import { PostagemController } from "./controller/postagem.Controller";


@Module({
  imports: [TypeOrmModule.forFeature([postagem]), TemaModule,],
  controllers: [PostagemController],
  providers: [PostagemService],
  exports: [],

})

export class PostagemModule {}