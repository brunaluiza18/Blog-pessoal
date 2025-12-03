import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { postagem } from "./entities/postagem.entity";
import { postagemController } from "./controller/postagem.Controller";
import { PostagemService } from "./services/postagem.service";


@Module({
  imports: [TypeOrmModule.forFeature([postagem])],
  controllers: [postagemController],
  providers: [PostagemService],

})

export class PostagemModule {}