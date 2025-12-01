import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { postagem } from "../entities/postagem.entity";
import { Repository } from "typeorm";


@Injectable() // indica que a classe é de servico e pode ser inserida/injetada em outras classes
export class PostagemService{

    //iniciando ferramentas para a classe de servico
    constructor(
        @InjectRepository(postagem)
        private postagemRepository: Repository<postagem>
    ) { }

   async findA11(): Promise<postagem[]> {

    return await this.postagemRepository.find()

   }

}