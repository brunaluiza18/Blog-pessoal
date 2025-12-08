import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { postagem } from "./entities/postagem.entity";
import { postagemController } from "./controller/postagem.Controller";
import { PostagemService } from "./services/postagem.service";
import { TemaModule } from "src/tema/tema.module";


@Module({
  imports: [TypeOrmModule.forFeature([postagem]), TemaModule,],
  controllers: [postagemController],
  providers: [PostagemService],
  exports: [],

})

export class PostagemModule {}