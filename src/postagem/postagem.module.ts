import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { postagem } from "./entities/postagem.entity";
import { PostagemController } from "./controller/postagem.Controller";
import { PostagemService } from "./services/postagem.service";
import { TemaModule } from "src/tema/tema.module";


@Module({
  imports: [TypeOrmModule.forFeature([postagem]), TemaModule,],
  controllers: [PostagemController],
  providers: [PostagemService],
  exports: [],

})

export class PostagemModule {}